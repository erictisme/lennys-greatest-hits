# Build List — 2026-03-25

## Filtering

| Idea | Score | Verdict |
|------|-------|---------|
| Shareable lyric card | 100 | **REJECT** — needs html2canvas or canvas API, complex, risky |
| Related songs on track page | 60 | **BUILD** — tag overlap, one component, additive |
| "X listened today" counter | 60 | **BUILD** — already have Supabase play counts, just display them |
| Topic pages with counts | 48 | **BUILD** — enhance existing /topics page |
| Sticky mini-player on scroll | 48 | **REJECT** — NowPlayingBar already serves this purpose |
| Album liner notes | 30 | **REJECT** — needs Eric's editorial input |
| Equalizer favicon | 15 | **BUILD** — tiny, pure delight |
| Surprise Me button | 15 | **BUILD** — one button, one function |
| New This Week badge | 15 | **BUILD** — uses existing releaseDate field |
| Album cover parallax | 16 | **BUILD** — framer-motion already installed, subtle |
| Quote accent glow | 10 | **BUILD** — one CSS change |
| Track row hover | 10 | **DEFER** — already has hover state |
| Staggered scale | 10 | **DEFER** — already has stagger |

## Final Build List (8 items)

### 1. Related Songs section on track page (Score: 60)
Add a "You Might Also Like" section below "Based on" on track pages. Show 3 tracks from different albums that share 2+ tags with the current track. If not enough tag matches, fall back to same-album tracks.
- **Files:** app/track/[slug]/TrackPageClient.tsx, lib/tracks.ts (add helper function)
- **DO NOT TOUCH:** lib/audio-context.tsx, album data

### 2. "Listened today" counter on homepage (Score: 60)
Below the "88 songs · 11 albums · 4 hr" stat line, show "X plays today" fetched from Supabase. Simple aggregate of today's play counts.
- **Files:** app/page.tsx, app/api/play/route.ts (add today count endpoint)
- **DO NOT TOUCH:** lib/audio-context.tsx

### 3. Enhanced topic landing pages (Score: 48)
On /topics page, show track count per topic. On /topics/[tag] pages, show the total count and sort by most relevant.
- **Files:** app/topics/page.tsx, app/topics/[tag]/TopicPageClient.tsx
- **DO NOT TOUCH:** track data, album structure

### 4. Animated equalizer favicon (Score: 15)
When music is playing, swap favicon to a data URI of an animated equalizer. When paused, revert to default.
- **Files:** lib/audio-context.tsx (NO — too risky). Instead: components/FaviconUpdater.tsx (new), app/layout.tsx
- **DO NOT TOUCH:** lib/audio-context.tsx (read only via useAudio)

### 5. "Surprise Me" button (Score: 15)
Next to Shuffle Play on homepage, add a "Surprise Me" button that navigates to a random track page and starts playing it.
- **Files:** app/page.tsx
- **DO NOT TOUCH:** lib/audio-context.tsx, other pages

### 6. "New This Week" badge (Score: 15)
Tracks with releaseDate within last 7 days get a small "NEW" pill badge next to their title in track rows and album pages.
- **Files:** components/TrackRow.tsx, app/album/[slug]/AlbumPageClient.tsx
- **DO NOT TOUCH:** lib/albums.ts data

### 7. Album cover parallax on scroll (Score: 16)
On album detail pages, the cover image has a subtle parallax effect — moves 20% slower than surrounding content on scroll.
- **Files:** app/album/[slug]/AlbumPageClient.tsx
- **DO NOT TOUCH:** track list rendering

### 8. Key quote accent glow (Score: 10)
On track pages, add a subtle colored glow behind the key quote blockquote using the album accent color.
- **Files:** app/track/[slug]/TrackPageClient.tsx
- **DO NOT TOUCH:** quote content, audio controls
