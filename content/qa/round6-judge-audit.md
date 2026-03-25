# Round 6 Judge Audit — Contest Readiness

**Date:** 2026-03-25
**Evaluator perspective:** Lenny Rachitsky contest judge
**Deadline:** April 15, 2026 (21 days remaining)

---

## What Would Make Me Pick This as a Winner

- **The concept is genuinely original.** Nobody else is turning podcast insights into playable music. It immediately stands out in a sea of dashboards and chatbots.
- **88 songs across 11 albums is serious depth.** This is not a weekend hack — it shows craft and commitment.
- **The data model is rich.** Each track has sources, key quotes, annotations, story-behind sections, and links back to Lenny's actual episodes. This demonstrates real engagement with the archive, not surface-level scraping.
- **The "Based on" section with source links** is the killer differentiator. Every song is a gateway back into Lenny's content. That is the thing that would make Lenny himself want to share it.
- **Synced lyrics with annotations** is a clever "Genius.com for podcasts" mechanic.

---

## What Looks Unfinished or Amateurish

### 1. Album page mobile layout is still broken (HIGH PRIORITY)

The album track list (`AlbumPageClient.tsx` lines 267-407) stacks these elements horizontally in a single flex row on ALL screen sizes:
- Track number/play icon (w-11)
- Cover thumbnail (40px)
- Track info (flex-1, min-w-0)
- Tags (flex-wrap inside info)
- VoteButtons (3 circle buttons @ 40px each + share = ~160px)
- Duration + play count (~100px)

On a 375px phone, the vote buttons and duration info will squeeze the track title to almost nothing, or overflow. The tags inside the track info div (`flex-wrap gap-1 mt-1`) add vertical height that misaligns the row. There is no `hidden sm:flex` or any responsive hiding on these elements for mobile.

**Fix:** Hide vote buttons on mobile in the album list (they already appear on the track detail page). Hide duration/play count column on mobile. Show tags only on hover or on the track page.

### 2. VoteButtons appear THREE times per song journey

- In TrackRow on the home page popular section
- In the album page track list
- On the track detail page (twice — header and bottom)

On the album page, having thumbs-up/thumbs-down/share on every single row makes the list look cluttered and noisy. Spotify does not put vote buttons on every track row. This makes the UI feel like a survey form, not a music player.

**Fix:** Remove VoteButtons from album track rows entirely. Keep them only on the track detail page. If you must show engagement on the album page, show a small heart count number, not full interactive buttons.

### 3. OG image is generic and forgettable

The `opengraph-image.tsx` generates four colored dots and text. When someone shares this on LinkedIn or X, the preview will look like a placeholder — no album art, no visual hook, no reason to click. For a music project, this is a missed opportunity.

**Fix:** Create a proper OG image with album cover collage or a visually striking hero image. The OG image is the single most important asset for shareability.

### 4. No audio preview / waveform on the home page

The home page has a "Popular" section with TrackRow components, but there is no visual indication that these are playable songs. The play button only appears on hover (desktop) and is invisible on mobile until tapped. A first-time visitor might not realize this is a music player at all.

**Fix:** Add a visible play button or waveform snippet to make the musical nature immediately obvious.

### 5. Hardcoded accent color in TrackRow

`TrackRow.tsx` hardcodes `accentColor="#b45309"` for VoteButtons and the current-track highlight color. This means on the home page, tracks from albums with different accent colors (purple for Electric Dreams, blue for By the Numbers) all show the same amber highlight. This breaks the album color identity system.

**Fix:** Pass the album's accent color through to TrackRow.

### 6. The `albums.ts` file is a 580KB monolith

All 88 tracks with full lyrics, annotations, stories, and sources are hardcoded in a single TypeScript file. This is:
- ~10,000 lines of code in one file
- Loaded entirely into memory on every page visit (client-side)
- Impossible to maintain or update individual songs
- Will grow worse if more songs are added

This does not affect the contest judge visually, but it means initial page load ships hundreds of KB of track data the user does not need yet. A judge testing on mobile (slow connection) will notice.

**Fix:** Move track data to JSON files or a CMS. At minimum, split into per-album files. For the contest deadline, this is low priority unless load times are noticeably slow.

### 7. No "About" or "How This Was Made" page

A contest judge wants to understand the project. Right now there is no page explaining:
- How songs were generated from Lenny's content
- The research-to-lyrics pipeline
- Why certain episodes were chosen
- How many hours of content were analyzed

The footer says "Built from 349 newsletters and 289 podcasts" but that is one sentence. The story of HOW this was built is part of the entry.

**Fix:** Add a simple `/about` page that tells the story. Keep it short (3-4 paragraphs). Include a few before/after examples: "This Shreyas Doshi quote became this chorus."

---

## The Single Biggest Thing Holding It Back

**The project does not immediately communicate what it is.**

When a judge lands on the home page, they see "Lenny's Greatest Hits" and a list of albums. There is no subtitle, no tagline, no 10-second explanation of what this is or why it exists. The header area has:
- Title
- Stats line (88 songs, 11 albums, 4 hr 32 min)
- Shuffle Play / Surprise Me buttons

What is missing: a single sentence like "Lenny Rachitsky's best podcast insights, turned into actual songs you can play." Without it, a first-time visitor spends 5-10 seconds figuring out if these are real songs, cover versions, or a playlist curation tool.

For a contest entry that will be evaluated in 30-60 seconds of first impression, this is the gap.

---

## Is It Shareable? Would I Tweet About It?

**Almost, but not yet.**

What works for sharing:
- Share buttons exist on tracks, albums, and the now-playing bar
- Each track has its own URL (`/track/taste`)
- The share text is decent ("Check out Taste | Lenny's Greatest Hits")

What blocks sharing:
- **The OG image is weak.** The social preview will look generic. This alone cuts share-through rate in half.
- **No audio snippet in the share.** When someone shares a song, the recipient sees a text link. There is no embedded player, no 15-second clip, no way to hear the song without clicking through. Compare with how Spotify links show a play button inline.
- **No "share card" for individual tracks.** Each track page should generate its own OG image with the track cover, title, and a quote. Currently all pages share the same generic OG image.
- **The share text does not sell.** "Check out Taste | Lenny's Greatest Hits" does not explain what this is. Better: "Someone turned Shreyas Doshi's podcast with Lenny into an actual song. It's surprisingly good."

---

## Mobile Layout Audit (Album Page Specifically)

The album page track row layout (`AlbumPageClient.tsx`) uses `flex items-center gap-4` with no responsive breakpoints for the row content. On a 375px screen:

- Track number: 44px
- Thumbnail: 40px
- Gap: 16px x 4 = 64px
- Vote buttons: ~160px (3 x 40px buttons + gaps)
- Duration + plays: ~100px

That is 408px of fixed-width content before the track title gets ANY space. The title column (`flex-1 min-w-0`) will be crushed to near-zero width.

**This is still broken.** The `truncate` class on the title will help prevent overflow, but the title will be unreadable on phones. The tags row underneath makes it worse.

---

## Top 8 Fixes, Ranked by Impact (3 weeks remaining)

| Priority | Fix | Effort | Impact |
|----------|-----|--------|--------|
| 1 | Add a one-line tagline/subtitle to the home page header | 5 min | Immediate comprehension for judges |
| 2 | Create per-track OG images (or at minimum a better global one) | 2-4 hrs | Doubles shareability |
| 3 | Hide VoteButtons on album track rows for mobile; simplify row layout | 1-2 hrs | Fixes the broken mobile layout |
| 4 | Add an `/about` page explaining how songs were made | 1-2 hrs | Gives the judge the "story" they need to award points |
| 5 | Pass album accent color to TrackRow instead of hardcoding amber | 30 min | Visual polish across albums |
| 6 | Make the play button visible by default (not just on hover) on track rows | 30 min | First-time visitors understand this plays music |
| 7 | Improve share text to include context ("Lenny's podcast insights turned into songs") | 30 min | Higher share conversion |
| 8 | Add a visible audio indicator on the home page (waveform, speaker icon, "Now Playing" badge) | 1-2 hrs | Reinforces this is a music experience |

---

## Summary Verdict

This is a top-tier concept with solid execution on the data/content side. The album structure, source linking, annotations, and lyrics quality show real craft. The audio player works. The keyboard shortcuts are a nice touch.

But it is being held back by first-impression problems: the home page does not explain itself, the OG image is forgettable, and the mobile layout on album pages is broken. These are all fixable in a few days.

If I were judging 50 entries and gave this one 60 seconds: I would see album art, click a song, hear it play, think "oh wow, this is actual music" — and that moment of surprise is worth a lot. But I might not get there if the first screen does not tell me what I am looking at.

**Current grade: B+. Fixable to A- in one focused weekend.**
