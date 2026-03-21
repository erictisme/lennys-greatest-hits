# Ralph Content Run: Song Critique, Upload & Generation Planning

## Context

We have 16 playable tracks across 4 albums (Founders, Product, Builders, Frameworks) plus 1 track in Career Moves (State of the Me). The remaining 4 albums (The Operators, Growth Engine, The Startup Life, Career Moves) have locked placeholder tracks with no audio, no lyrics, and no cover art.

This Ralph run handles the **content side**: evaluating what we have, planning what to generate next, and structuring everything for the best possible contest entry.

## Phase 1: Critique Existing Songs

For each of the 16 playable tracks, evaluate:

1. **Catchiness** (1-10): Would someone hum this after one listen?
2. **Lyric quality** (1-10): Are the lyrics clever, specific, and emotionally resonant? Or generic AI slop?
3. **Lenny fidelity** (1-10): Does the song actually teach the source material? Could someone learn the framework from the song?
4. **Production quality** (1-10): Does it sound like a real song or a novelty track?
5. **Weakest line**: The single worst lyric line and why
6. **Strongest moment**: The best 2-4 bars and why they work

### Tracks to critique:
- Founders: do-things-that-dont-scale, product-market-fit, the-maze, taste, eleven-stars
- Product: talk-to-users, ship-it, vibe-coding
- Builders: imposter, burnout
- Frameworks: trace-it-back, the-disease, test-everything, whats-the-job, good-enough
- Career Moves: state-of-the-me

### Output
Create `content/critique/song-ratings.md` with a table of all ratings plus detailed notes per track.

## Phase 2: Decide Which Songs to Generate Next

We have 20 locked tracks across 4 albums. We can't generate all of them before the April 15 deadline. Prioritize based on:

1. **Which albums would be strongest with audio?** (The Operators has the splashiest stories — Duolingo, Chesky, Stripe, Linear, Ramp)
2. **Which individual songs have the best source material for a banger?** (e.g., "Don't Break the Streak" has a natural hook)
3. **Which songs would round out the site experience?** (having at least 1-2 tracks per album unlocked)
4. **Contest impact**: What would make a judge say "wow"?

### Output
Create `content/critique/generation-priority.md` with:
- Ranked list of next 5-8 songs to generate
- For each: why it's prioritized, the hook/angle, suggested genre, reference track

## Phase 3: Song Structure & Suno Prompt Planning

For each prioritized song from Phase 2:

1. Review the existing lyrics in `lib/albums.ts` (if empty, the songwriting briefs are in `content/brainstorm/batch2/songwriting/`)
2. Write or refine full lyrics following the quality bar from existing best tracks
3. Create a Suno generation prompt including: genre, mood, vocal style, tempo, reference
4. Plan 3 variations per song (different genres/moods)

### Output
Create `content/suno-prompts/batch3/` with one JSON file per song, following the pattern of existing suno prompt files.

## Phase 4: Website Structure Review

Look at the site holistically and recommend:

1. **Album ordering**: Should Frameworks still be first? What ordering tells the best story?
2. **Homepage**: Does the current layout serve the contest well? What's missing?
3. **Track page enrichment**: What would make individual track pages more compelling? (Annotations are started but only on 1 track)
4. **Social proof / virality**: What features would make people share this?

### Output
Create `content/critique/site-structure-recommendations.md`

## Key Constraints
- Deadline: April 15, 2026
- Quality bar: Universal Music, not Schoolhouse Rock
- Use Lenny MCP for any source material research
- Songs must be CATCHY FIRST, educational second
- Think Hamilton — the trick is you don't realize you're learning

## Files to Read First
- `lib/albums.ts` — all track data, lyrics, metadata
- `content/brainstorm/batch2/songwriting/` — songwriting briefs for batch 2 tracks
- `content/brainstorm/batch2/SYNTHESIS.md` — overall batch 2 synthesis
- `plans/prd.md` — the original PRD
