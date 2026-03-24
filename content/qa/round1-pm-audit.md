# QA Round 1 — PM Persona Audit

**Persona:** Sarah, Senior PM, regular Lenny podcast listener
**Date:** 2026-03-25
**Time spent:** 5-minute exploration of the codebase

---

## First Impressions

- The homepage layout is clean and Spotify-like — immediately recognizable as a music app. Good.
- "Lenny's Greatest Hits" title is strong. Stats line (X songs, Y albums, Z hr) builds credibility fast.
- Shuffle Play button is well-placed. Amber accent is warm and distinctive.
- Onboarding card ("Every song is built from a real Lenny podcast or article") is a nice touch for first-time visitors.
- Album grid with cover art looks professional. Coming Soon badges create anticipation.

## Navigation Flow

- **Home → Album → Track** is the primary flow and it works well. Breadcrumbs on track page (Home · Album Title) are clear.
- **Home → All Songs** via "Show all" link is available. Sort pills (Newest, Most Played, A-Z, By Album) are good.
- **Search** exists on both home and All Songs pages — but they're independent implementations with slightly different behavior (home search replaces content, songs page search filters inline).
- **Prev/Next navigation** on track pages uses global track order, not album order — this is disorienting. If I'm listening to an album and click "Next," I might jump to a completely different album.
- **Tags on track pages are clickable** (link to `/topics/{tag}`) but there's no evidence a topics page exists — likely 404s.
- **No way to get to /albums page** except via "Show all" link. No global nav.

## Content Quality

- Source attribution is excellent — every track shows podcast/newsletter icon, guest name, and episode title.
- Key quotes with speaker attribution add legitimacy.
- "Story Behind This Song" sections are compelling — connects lyrics to real Lenny content.
- Annotations (Genius-style insights) are a standout feature. The "X insights hidden in these lyrics" banner is clever.
- Tags on album pages give quick topic scanning.

## Search Experience

- Search on home page is well-designed — searches across title, tags, guest names, concepts, key insights. Good coverage.
- Debounced (300ms) — responsive feel.
- Empty state is helpful: "We have X songs covering topics like..."
- **Missing:** No way to search from within an album or track page. Must go back to home.
- **Missing:** No search results highlighting or indication of why a result matched.

## Top 5 Issues (Ranked by Impact)

### 1. Prev/Next track navigation ignores album context

**Impact:** MEDIUM-HIGH — If I'm on a track within an album and click "Next," it navigates to the globally next track (by `getAllTracks()` order), not the next track in the album. This breaks the album listening experience.

**Where:** `app/track/[slug]/TrackPageClient.tsx` lines 105-109 — uses `getAllTracks()` for prev/next instead of album tracks.

**Fix:** Use album tracks for prev/next when user arrived from an album. Fallback to global order otherwise.

### 2. Vote counts are hidden — no social proof

**Impact:** MEDIUM — VoteButtons show thumbs up/down but never display the count to users. The vote counts are tracked (`upCount`, `downCount`) but never rendered. Users have no idea if anyone else liked a song.

**Where:** `components/VoteButtons.tsx` — state has `upCount` and `downCount` but they're never shown in the JSX.

**Fix:** Show vote count next to the thumbs up button (e.g., "42" next to the icon). Even just showing upvotes creates social proof.

### 3. No global navigation — users get lost

**Impact:** MEDIUM — There's no persistent nav bar. The only way to navigate is through the back arrows on each page. If someone lands directly on a track page (shared link), their only option is "Home" or the album link. No way to discover other albums, browse all songs, or search without going to home first.

**Where:** No nav component exists. Each page has its own back links.

**Fix:** Add a minimal sticky header with Home + Search, or at least ensure the NowPlayingBar links back to home.

### 4. Mobile: Vote buttons hidden on small screens

**Impact:** MEDIUM — Vote buttons have `hidden sm:flex` on both TrackRow and AlbumPageClient, meaning mobile users (likely a large portion of Lenny's audience) can't vote from track lists. They can only vote from the track detail page.

**Where:** `components/TrackRow.tsx` line 125 (`hidden sm:flex`), `app/album/[slug]/AlbumPageClient.tsx` line 383 (`hidden sm:flex`).

**Fix:** Show vote buttons on mobile too, or at least show a condensed version (just thumbs-up).

### 5. Lyrics are not synced — timing is evenly distributed filler

**Impact:** MEDIUM — `SyncedLyrics.tsx` parseLyrics() just divides song duration evenly across all lines (`interval = duration / lines.length`). This means lyrics don't actually sync with the music. The "synced" label is misleading. Lines highlight based on fake timestamps, not real timing.

**Where:** `components/SyncedLyrics.tsx` lines 82-88 — evenly spaces lines across duration.

**Fix:** Either get real timestamps from Suno/manual alignment, or rebrand the feature as "Lyrics" (not synced) and remove the time-based highlighting. Currently the lyrics don't scroll or highlight based on time anyway (no auto-scroll logic), so the fake timing is unused — but the infrastructure is there waiting to mislead.
