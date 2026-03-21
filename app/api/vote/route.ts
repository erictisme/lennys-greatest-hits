import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET /api/vote?slug=track-slug — returns vote counts
// GET /api/vote?slug=track-slug&session_id=xxx — returns counts + user's vote
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!slug) {
    return NextResponse.json({ error: "slug required" }, { status: 400 });
  }

  // Get counts
  const { data: votes, error } = await supabase
    .from("votes")
    .select("vote_type")
    .eq("track_slug", slug);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const upvotes = votes?.filter((v) => v.vote_type === "up").length ?? 0;
  const downvotes = votes?.filter((v) => v.vote_type === "down").length ?? 0;

  // Get user's vote if session_id provided
  let userVote: string | null = null;
  if (sessionId) {
    const { data: userVoteData } = await supabase
      .from("votes")
      .select("vote_type")
      .eq("track_slug", slug)
      .eq("session_id", sessionId)
      .single();
    userVote = userVoteData?.vote_type ?? null;
  }

  return NextResponse.json({ upvotes, downvotes, userVote });
}

// POST /api/vote — upsert a vote
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug, vote_type, session_id } = body;

  if (!slug || !vote_type || !session_id) {
    return NextResponse.json(
      { error: "slug, vote_type, and session_id required" },
      { status: 400 }
    );
  }

  if (!["up", "down"].includes(vote_type)) {
    return NextResponse.json(
      { error: "vote_type must be 'up' or 'down'" },
      { status: 400 }
    );
  }

  // Check if user already voted
  const { data: existing } = await supabase
    .from("votes")
    .select("id, vote_type")
    .eq("track_slug", slug)
    .eq("session_id", session_id)
    .single();

  if (existing) {
    if (existing.vote_type === vote_type) {
      // Same vote — remove it (toggle off)
      await supabase.from("votes").delete().eq("id", existing.id);
      return NextResponse.json({ action: "removed" });
    } else {
      // Different vote — update
      await supabase
        .from("votes")
        .update({ vote_type })
        .eq("id", existing.id);
      return NextResponse.json({ action: "updated", vote_type });
    }
  } else {
    // New vote
    const { error } = await supabase.from("votes").insert({
      track_slug: slug,
      vote_type,
      session_id,
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ action: "created", vote_type });
  }
}
