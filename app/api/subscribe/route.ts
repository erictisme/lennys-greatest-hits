import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Insert into Supabase first — this is the most important step
    const { error: dbError } = await supabase
      .from("email_subscribers")
      .insert({ email: normalizedEmail });

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json({ status: "duplicate" });
      }
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    // Send welcome email via Resend — best effort, don't fail the request if this breaks
    try {
      await resend.emails.send({
        from: "Eric from Lenny's Greatest Hits <onboarding@resend.dev>",
        to: normalizedEmail,
        subject: "You're in! More songs are coming",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
            <p style="font-size: 16px; line-height: 1.6;">Hey!</p>
            <p style="font-size: 16px; line-height: 1.6;">
              Thanks for signing up. I'm Eric. I'm turning Lenny Rachitsky's best newsletter and podcast insights into actual catchy songs. Think tech culture anthems, not Schoolhouse Rock.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Right now there are 20 songs across 4 albums you can listen to, with 25 more on the way. I'll email you when new albums drop.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              In the meantime, go play some tracks:<br/>
              <a href="https://lennys-greatest-hits.vercel.app" style="color: #d97706; text-decoration: underline;">lennys-greatest-hits.vercel.app</a>
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Cheers,<br/>
              Eric
            </p>
          </div>
        `,
      });
    } catch {
      // Resend failed — that's okay, we already saved the email
    }

    return NextResponse.json({ status: "success" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
