# Ralph Content Run: Song Critique, Annotations, Author Attribution & Generation Planning

## Context

We now have 30 tracks with audio across all 9 albums. The batch 2 albums (Operators, Growth Engine, Startup Life, Career Moves) have audio and covers but still need lyrics written and `isLocked` removed. Only `do-things-that-dont-scale` has Genius-style lyric annotations (4 annotations). The annotation UI component is built and polished — it just needs content for every track.

This Ralph run handles the **content side**: evaluating what we have, writing annotations, designing the author attribution UX, and planning what to generate next.

## Phase 1: Genius-Style Annotations for All Tracks with Lyrics

**Status:** Only `do-things-that-dont-scale` has annotations. The component works great (auto-expands first, hint banner, accent-colored icons). We need annotations on every track that has lyrics.

For each track with lyrics in `lib/albums.ts`:
1. Use Lenny MCP (`mcp__lennysdata__search_content`, `mcp__lennysdata__read_excerpt`) to research the source article/podcast
2. Find 3-5 specific lyric lines that reference real stories, data, or frameworks
3. Write a Genius-style annotation for each: what the lyric is referencing, the real story behind it, and a source link
4. Add the annotations to the track's `annotations` array in `lib/albums.ts`

### Quality bar for annotations:
- Must reference REAL facts, stories, or data from Lenny's archive
- Should feel like a knowledgeable friend explaining the Easter eggs
- Include source links back to the original newsletter/podcast
- Not every line needs an annotation — pick the ones where there's a real story to tell

### Tracks that need annotations (those with lyrics):
- Founders: do-things-that-dont-scale (has 4, add more), product-market-fit, the-maze, taste, eleven-stars
- Product: talk-to-users, ship-it, vibe-coding
- Builders: imposter, burnout
- Frameworks: trace-it-back, the-disease, test-everything, whats-the-job, good-enough
- Career Moves: state-of-the-me

### Output
Updated `lib/albums.ts` with annotations arrays for all tracks with lyrics. Target: 3-5 annotations per track.

## Phase 2: Author Attribution & Lenny Newsletter Aesthetic

**Problem:** Each song comes from a specific Lenny newsletter article or podcast episode, but the site doesn't make that connection clear. We want the site to feel like "Lenny's newsletter, but songs" — similar to how lennysnewsletter.com shows:
- Article cover image
- Title + subtitle
- Date + AUTHOR NAME
- Type indicator (newsletter vs podcast)

### Design the data model
Each track already has `sources` with `{ title, type, url, guest }`. We need to surface this prominently on:

1. **Album track list** — show guest name and source type (newsletter/podcast icon) next to each track
2. **Track page** — show a "Based on" card linking to the original article/podcast with:
   - Source title
   - Guest/author name
   - Type (newsletter article / podcast episode)
   - Link to original
3. **Homepage** — consider showing tracks in a card layout similar to Lenny's newsletter grid:
   - Song cover image (like article cover)
   - Song title (like article title)
   - Guest name + source type
   - Album name as category

### What to research
- Look at the Lenny newsletter homepage layout (3-column card grid with cover images)
- Look at the Lenny newsletter "Top" archive page (list view with thumbnails)
- Both layouts work for different contexts — cards for browsing, list for searching

### Output
Create `plans/author-attribution-design.md` with:
- Mockup descriptions for album page, track page, and homepage changes
- Data model changes needed (if any)
- Component list and which files to modify
- Priority order for implementation

## Phase 3: Critique Existing Songs

For each of the 16 tracks with lyrics, evaluate:

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

## Phase 4: Lyrics & Suno Prompts for Batch 2 Tracks

The batch 2 tracks have audio generated but most still have `lyrics: ""`. For tracks that have audio but no lyrics:

1. Listen context: review the track's concept, storyBehind, keyInsight, and source material
2. Write full lyrics following the quality bar from the best batch 1 tracks
3. If the track needs re-generation (critique score too low), create Suno prompts

### Output
- Updated `lib/albums.ts` with lyrics for batch 2 tracks
- `content/suno-prompts/batch3/` with regeneration prompts if needed

## Phase 5: Website Structure Review

Look at the site holistically and recommend:

1. **Album ordering**: Should Frameworks still be first? What ordering tells the best story?
2. **Homepage redesign**: Should we move toward the Lenny newsletter card layout?
3. **Track page enrichment**: "Based on" attribution card, more annotations, related tracks
4. **Social proof / virality**: What features would make people share this?
5. **Unlocking batch 2**: Which tracks are ready to unlock (have audio + should have lyrics)?

### Output
Create `content/critique/site-structure-recommendations.md`

## Key Constraints
- Deadline: April 15, 2026
- Quality bar: Universal Music, not Schoolhouse Rock
- Use Lenny MCP for any source material research
- Songs must be CATCHY FIRST, educational second
- Think Hamilton — the trick is you don't realize you're learning
- Site should feel like "Lenny's newsletter reimagined as a music experience"

## Files to Read First
- `lib/albums.ts` — all track data, lyrics, metadata, annotations
- `lib/types.ts` — LyricAnnotation type definition
- `components/SyncedLyrics.tsx` — how annotations render
- `content/brainstorm/batch2/songwriting/` — songwriting briefs for batch 2 tracks
- `content/brainstorm/batch2/SYNTHESIS.md` — overall batch 2 synthesis
- `plans/prd.md` — the original PRD
