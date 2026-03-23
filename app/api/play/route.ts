import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// POST /api/play — record a play
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug } = body;

  if (!slug) {
    return NextResponse.json({ error: "slug required" }, { status: 400 });
  }

  const { error } = await supabase.from("plays").insert({
    track_slug: slug,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

// GET /api/play?slugs=slug1,slug2 — returns play counts
export async function GET(req: NextRequest) {
  const slugsParam = req.nextUrl.searchParams.get("slugs");

  if (!slugsParam) {
    return NextResponse.json({ error: "slugs required" }, { status: 400 });
  }

  const slugs = slugsParam.split(",").filter(Boolean);

  const { data, error } = await supabase
    .from("plays")
    .select("track_slug")
    .in("track_slug", slugs);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const counts: Record<string, number> = {};
  for (const slug of slugs) {
    counts[slug] = data?.filter((r) => r.track_slug === slug).length ?? 0;
  }

  return NextResponse.json({ counts });
}
