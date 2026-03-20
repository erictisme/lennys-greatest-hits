# Lenny's Greatest Hits — Ralph PRD

## Project Overview

Build "Lenny's Greatest Hits" — tech culture anthems (actual songs) from Lenny Rachitsky's podcast/newsletter archive. 12 songs across 4 themed albums, presented in a web app and distributed on Spotify.

**Stack**: Next.js + Tailwind + shadcn/ui + TypeScript, pnpm, deploy to Vercel
**Audio**: Suno API (unofficial wrapper) for song generation
**Data**: Lenny MCP for searching 638 pieces (349 newsletters, 289 podcasts)

## IMPORTANT NOTES FOR RALPH

- The Lenny MCP tools are: `mcp__lennysdata__search_content`, `mcp__lennysdata__read_content`, `mcp__lennysdata__read_excerpt`, `mcp__lennysdata__list_content`
- The Suno cookie is in `.env.local` as `SUNO_COOKIE`. Use the suno-api wrapper (gcui-art/suno-api on GitHub) or direct HTTP calls to generate songs.
- For EACH song idea, generate a SHORT version first (1 verse + chorus + instrumental hook only ~60-90 seconds) so Eric can vet quickly in the morning. Generate as MANY ideas as possible — quantity over polish tonight. Save as `public/audio/{song-slug}-demo.mp3`
- Songs should be CATCHY FIRST, educational second. Think Hamilton, not Schoolhouse Rock.
- Quality bar: Universal Music level. These need to sound like real songs, not AI demos.

## Suno API Usage

Use the unofficial Suno API. Set up a simple Node.js script at `scripts/generate-songs.ts` that:
1. Reads lyrics + style prompts from `content/suno-prompts/`
2. Calls Suno's API with the cookie from .env.local
3. Downloads MP3 results to `public/audio/`
4. Generates 3 versions per song

**Suno Custom Mode style prompt format** (4-7 descriptors):
```
[Genre + Era], [Mood], [Key Instruments], [Vocal Style], [Production Quality]
```

**Key Suno tips built into prompts**:
- Put "vocal-forward, spacious" at START of style prompt (Suno prioritizes left-to-right)
- Use structure tags: [Intro], [Verse 1], [Chorus], [Bridge], [Outro]
- Keep lyrics lines to consistent syllable counts
- Specify BPM and key for each song
- Name reference artists for style

---

## Tasks

- [x] **Task 1: Install Suno API wrapper + create generation script**
  Create `scripts/generate-songs.ts` that:
  - Reads SUNO_COOKIE from .env.local
  - Accepts a song config (lyrics + style prompt) as input
  - Calls Suno API to generate a song in Custom Mode
  - Downloads the resulting MP3
  - Supports generating multiple versions (pass count=3)

  Use the approach from https://github.com/gcui-art/suno-api — either install it as dependency or replicate the API calls directly. The key endpoints are:
  - POST to get auth token using cookie
  - POST to generate with custom lyrics + style
  - GET to poll for completion
  - GET to download MP3

  Test with a simple "Hello World" song to verify the pipeline works before proceeding.

  Also install any needed deps: `pnpm add -D tsx dotenv node-fetch` (or use built-in fetch).

  **Exit**: Running `pnpm tsx scripts/generate-songs.ts --test` generates a test MP3 in `public/audio/test.mp3`

- [x] **Task 2: Brainstorm song concepts — iconic ideas (Lenny MCP)**
  Use the Lenny MCP to search for the most culturally iconic ideas in the archive. Search for these terms and read excerpts from the top results:

  DO NOT just search narrow keywords. Cast a WIDE net across the entire archive:

  1. First: `mcp__lennysdata__list_content` with content_type="podcast" limit=50 to see the most recent/popular episodes
  2. Then: `mcp__lennysdata__list_content` with offset=50, offset=100, etc. to scan the FULL archive
  3. Search broadly by THEME, not just keywords:
     - Founding/starting: "first users", "early days", "quit my job", "side project"
     - Product craft: "product sense", "intuition", "taste", "design", "craft"
     - Growth: "viral", "growth", "retention", "activation", "onboarding"
     - People: "hiring", "firing", "culture", "team", "management"
     - Money: "pricing", "revenue", "fundraising", "bootstrap", "VC"
     - Emotion: "burnout", "imposter", "anxiety", "lonely", "hard", "struggle"
     - AI era: "AI", "LLM", "vibe coding", "agents", "future of work"
     - Big names: Brian Chesky, Paul Graham, Marc Andreessen, Shreyas Doshi, Dalton Caldwell, Gustaf Alstromer, Jason Fried, Reid Hoffman
  4. For EVERY interesting result, use `mcp__lennysdata__read_excerpt` to find the most QUOTABLE, ICONIC, MEME-WORTHY lines
  5. Think: what ideas from Lenny's archive are STILL LIVING on X, LinkedIn, and in tech culture? What do people reference daily?

  The goal is to find ideas that are already culturally iconic — not to create new ones.

  Output: `content/brainstorm/iconic-concepts.md` with 30+ raw song ideas. Each idea should have:
  - Song title idea
  - The iconic concept it's built around
  - Which guest/episode it's from (specific names)
  - 2-3 quotable lines from the source
  - Why it's meme-worthy / shareable
  - Suggested genre
  - Suggested album (Day One / The Search / Escape Velocity / The Long Game)

  **Exit**: 30+ song ideas in the brainstorm file, all grounded in real Lenny content

- [x] **Task 3: Brainstorm song concepts — top guests + viral moments**
  Use Lenny MCP to identify the most-referenced guests and most emotionally charged topics.

  Search for the biggest-name guests and read their episode excerpts:
  - Brian Chesky, Reid Hoffman, Keith Rabois
  - Shreyas Doshi, Ravi Mehta, Marty Cagan
  - Elena Verna, Nikita Bier, Casey Winters
  - Dalton Caldwell, Gustaf Alstromer, Michael Seibel
  - Jason Fried, DHH (David Heinemeier Hansson)
  - Shishir Mehrotra, April Dunford, Rahul Vohra

  For each guest, find their most provocative/quotable moment. Also search for:
  - Debates between guests (where two experts disagree)
  - Emotional moments (founder struggles, failures, breakthroughs)
  - Counterintuitive advice ("don't raise VC", "don't hire", "don't scale")

  Output: `content/brainstorm/top-guests.md`

  **Exit**: Guest-specific song ideas with direct quotes from the MCP

- [x] **Task 4: Curate final 12 songs (3 per album)**
  Review all brainstorm output from Tasks 2-3. Select the 12 BEST song concepts — the most iconic, catchy, meme-worthy ideas that tech people already know and care about.

  Assign 3 songs to each album:

  Albums are organized by JOB-TO-BE-DONE (who the listener is), not by journey stage:

  **Album 1: "Founders"** — For people building companies from scratch
  - Genres: indie folk, acoustic pop
  - Topics: founding, PMF, fundraising, first users, pivoting, loneliness, the leap

  **Album 2: "Product"** — For product managers and product thinkers
  - Genres: indie pop, synth-pop
  - Topics: product sense, prioritization, user research, shipping, taste, craft

  **Album 3: "Builders"** — For engineers, designers, and makers
  - Genres: lo-fi hip-hop, rap, electronic
  - Topics: eng/design/product tension, craft, speed vs quality, building with AI, shipping

  **Album 4: "The Human Side"** — For anyone in tech feeling the weight
  - Genres: acoustic soul, ambient folk, neo-soul
  - Topics: burnout, imposter syndrome, career, leadership, meaning, mental health in AI age

  **Eric's reference artists** (use these for ALL style prompts):
  - Holo Coves, Jacob Collier, Jonathan Ogden, Jon Guerra, Chet Baker, Bon Iver
  - These lean acoustic, intimate, warm, sophisticated. NOT generic pop. The vibe is coffeehouse-meets-studio.

  For each selected song, write a detailed concept brief:
  - Title
  - Album assignment
  - Core message (1 sentence)
  - The iconic idea it's built around
  - Source guest/episode
  - Key quotes to weave into lyrics
  - Genre + mood + reference artists
  - Why someone would share this song title on X

  Output: `content/song-concepts/final-12.md`

  **Exit**: 12 song concepts, 3 per album, all with detailed briefs

- [x] **Task 5: Write lyrics for all 12 songs**
  Write full lyrics for each of the 12 songs. This is the most important creative task.

  **Rules**:
  - CATCHY FIRST, educational second. These are songs people want to LISTEN to, not lectures set to music
  - Tell a STORY, don't list tips. Each song should have a narrative arc
  - Weave in 1-2 REAL guest quotes as hooks or chorus lines (attributed in a comment, not in the sung lyric)
  - Clear, memorable chorus that captures the iconic idea
  - Use Suno structure tags: [Verse 1], [Chorus], etc. Don't always include a bridge — switch it up based on what the song needs. Some songs are verse-chorus-verse-chorus-outro. Some have a bridge. Let the content dictate the structure.
  - Keep syllable counts CONSISTENT within each section (prevents Suno meter problems)
  - Genre-appropriate language: rap can be dense, folk should be sparse, pop should be singable
  - NO cringe. If a lyric sounds like a corporate training video, rewrite it
  - The chorus should be something someone could hum after one listen

  **Lyric format per song** (one .md file each in `content/lyrics/`):
  ```
  # Song Title
  Album: [album name]
  Genre: [genre]
  Mood: [mood]
  BPM: [number]
  Key: [key]
  Reference: [artists]
  Source: [Lenny episode/guest]

  ## Lyrics

  [Verse 1]
  Line one here
  Line two here
  ...

  [Chorus]
  The catchy chorus
  ...
  ```

  Output: `content/lyrics/` — 12 .md files, one per song

  **Exit**: 12 complete sets of lyrics, all with proper Suno structure tags

- [x] **Task 6: Create Suno prompt sheets for all 12 songs**
  For each song, create a complete Suno Custom Mode input file.

  **Style prompt formula** (this goes in Suno's "Style of Music" box):
  ```
  vocal-forward, spacious, [Genre + Era], [Mood], [Key Instruments], [Vocal Style], [Production], [BPM], [Key], reference [Artist 1] [quality], reference [Artist 2] [quality]
  ```

  Example:
  ```
  vocal-forward, spacious, indie folk, warm and hopeful, acoustic guitar fingerpicking plus subtle strings and soft piano, male vocal close-mic dry with gentle harmonies, studio quality polished mix, 108 BPM, key of G, reference Bon Iver intimacy, reference Iron and Wine warmth
  ```

  **Lyrics** go in Suno's "Lyrics" box — copy directly from Task 5 output including all [Verse], [Chorus] tags.

  Output: `content/suno-prompts/` — 12 .json files, each with:
  ```json
  {
    "title": "Song Title",
    "style": "the full style prompt string",
    "lyrics": "the full lyrics with structure tags",
    "versions": 3
  }
  ```

  **Exit**: 12 JSON prompt files ready for the generation script

- [x] **Task 7: Generate all songs via Suno API (3 versions each)** *(SKIPPED — no .env.local / Suno cookie available; fallback prompts from Task 6 ready for manual use)*
  Generate SHORT DEMOS for as many song ideas as possible. Quantity over polish tonight.

  For each song:
  1. Read the prompt from `content/suno-prompts/{song-slug}.json`
  2. Modify lyrics to be SHORT: just 1 verse + chorus + instrumental hook (~60-90 seconds)
  3. Call Suno API ONCE per song (save versions for later after Eric vets)
  4. Save as `public/audio/{song-slug}-demo.mp3`
  5. Log generation status to `logs/suno-generation.log`
  6. Wait 30-60 seconds between API calls to avoid rate limiting

  If a generation fails, retry once. If it fails twice, log the error and move on.

  Goal: Generate as MANY demo ideas as possible (20-30+) so Eric has a big menu to pick from in the morning. Better to have 25 rough demos than 12 polished songs.

  **Exit**: 20+ demo MP3 files in `public/audio/`, generation log showing status

- [x] **Task 8: Scaffold Next.js project**
  Initialize the web app. Run in the project root:
  ```
  pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
  ```
  If the directory already has files, adapt accordingly (may need --force or manual setup).

  Install dependencies:
  ```
  pnpm add framer-motion lucide-react posthog-js wavesurfer.js
  pnpm add -D @types/node
  ```

  Initialize shadcn:
  ```
  pnpm dlx shadcn@latest init
  ```
  Choose: dark theme, zinc base color, CSS variables yes.

  **Exit**: `pnpm dev` runs, default Next.js page shows at localhost:3000

- [x] **Task 9: Design system — dark music-app theme**
  Create a premium dark theme inspired by Spotify/Apple Music. NOT generic shadcn defaults.

  In `app/globals.css`:
  - Follow Lenny's brand colors/theme (reference lenny-for-you at `../which-expert-to-ignore/` for the existing Lenny-themed design system)
  - Dark background (#0a0a0a or similar near-black)
  - Album accent colors as CSS custom properties:
    - Day One: warm amber (#f59e0b)
    - The Search: electric blue (#3b82f6)
    - Escape Velocity: emerald (#10b981)
    - The Long Game: violet (#8b5cf6)
  - Premium typography: clean sans-serif (Inter or system font), generous letter-spacing for headings
  - Subtle gradients using album colors
  - Card styles with glass-morphism or subtle borders

  In `app/layout.tsx`:
  - Set dark theme on html element
  - Configure metadata: title "Lenny's Greatest Hits", description
  - Add Inter font from next/font/google

  **Exit**: Dark theme looks premium, not generic. Album accent colors defined and usable.

- [x] **Task 10: TypeScript types + data layer**
  Create `lib/types.ts`:
  ```typescript
  type Album = { slug, title, subtitle, description, coverImage, accentColor, tracks }
  type Track = { slug, title, albumSlug, trackNumber, duration, audioUrl, genre, mood, lyrics, concept, keyInsight, sources, keyQuote, quoteSpeaker }
  type LyricLine = { time, text, isChorus, isQuote, speaker }
  type Source = { title, type, url, guest }
  ```

  Create `lib/albums.ts` with all 4 albums and their 3 tracks each, populated from the song concepts (Task 4) and lyrics (Task 5). Point audioUrl to the generated MP3 files (use v1 as default, Eric picks best later).

  Create `lib/tracks.ts` with getter functions: getTrackBySlug, getAlbumBySlug, getAllAlbums, getTracksByAlbum.

  **Exit**: Types compile, data renders when logged

- [x] **Task 11: Landing page**
  Create `app/page.tsx` — the album landing page.

  Design:
  - Hero: "Lenny's Greatest Hits" in large bold type, subtitle "Tech culture anthems from 638 episodes"
  - 4 album cards in a 2x2 grid (or 1-column on mobile)
  - Each card: album accent color gradient background, album title, subtitle, track count
  - Cards link to `/album/[slug]`
  - Bottom: brief "About" section — "Built from Lenny Rachitsky's archive of 349 newsletters and 289 podcasts"
  - Footer: credits, link to Eric's LinkedIn, "Built with Suno AI + Claude Code"

  Use Framer Motion for staggered card entrance animation.

  **Exit**: Landing page renders with 4 album cards, looks like a real music platform

- [x] **Task 12: Album view page**
  Create `app/album/[slug]/page.tsx`.

  Design:
  - Album header: large album title, subtitle, description, accent color gradient
  - Numbered track list with: track number, title, duration, play button
  - "Play All" button at top
  - Back link to home

  **Exit**: Album page renders with 3 tracks, numbered and playable (or showing "play" buttons that work with placeholder audio)

- [x] **Task 13: Track view page**
  Create `app/track/[slug]/page.tsx`.

  Design:
  - Album accent color gradient header
  - Track title large, album name smaller
  - Audio player area (simple HTML5 audio for now, wavesurfer comes later)
  - Lyrics display (static text from data layer)
  - Source attribution: "Inspired by: [episode title]" with link
  - Prev/Next track navigation
  - Share button

  **Exit**: Track page renders with audio player, lyrics, and source attribution

- [x] **Task 14: Persistent bottom player (NowPlayingBar)**
  Create `components/NowPlayingBar.tsx` — fixed bottom bar.

  - Album art thumbnail (or colored square matching album)
  - Track title + album name
  - Play/pause button
  - Progress bar (clickable to seek)
  - Skip forward/back buttons
  - Current time / total time

  Create `lib/audio-context.tsx` — React context for global audio state:
  - currentTrack, isPlaying, progress, volume, queue
  - play(track), pause(), seek(time), next(), prev(), playAlbum(album)
  - Uses a single HTML5 Audio element that persists across navigation

  Wire into `app/layout.tsx` so it wraps all pages.

  **Exit**: Bottom player shows when a track is playing, persists across page navigation, controls work

- [x] **Task 15: Responsive layout pass**
  Ensure all pages look great on mobile (375px), tablet (768px), and desktop (1024px+).

  - Landing: 1-column album grid on mobile, 2x2 on desktop
  - Album: full-width track list on all sizes
  - Track: stacked layout on mobile (player, lyrics, sources)
  - NowPlayingBar: compact on mobile (smaller text, no skip buttons)

  **Exit**: All pages responsive, no horizontal scroll on mobile

- [x] **Task 16: Synced lyrics display**
  Upgrade the track page lyrics from static text to a synced display.

  - Current lyric line highlighted (brighter text, slightly larger)
  - Auto-scrolls to keep current line centered
  - Surrounding lines dimmed
  - Lines marked as quotes styled differently (italic, with speaker attribution)
  - Click any line to seek to that timestamp
  - Timing: initially evenly space lines across song duration (Eric fine-tunes later)

  **Exit**: Lyrics highlight and scroll as the song plays

- [x] **Task 17: "Share a Lyric" feature**
  The key viral mechanic. When user taps/clicks any lyric line:

  1. Show a preview of a shareable card: the lyric text in large bold font, album art as blurred background, album name + track title at bottom, "lennys-greatest-hits.vercel.app" watermark
  2. "Download" button saves as PNG
  3. "Share" buttons for X and LinkedIn with pre-populated text

  Use `@vercel/og` or canvas-based rendering for the card generation.

  Install: `pnpm add @vercel/og` (or use html2canvas for client-side)

  **Exit**: Tapping a lyric shows a shareable card, download works

- [x] **Task 18: OG images for sharing**
  Create dynamic OG images via `app/api/og/route.tsx`:

  - `/api/og?type=track&slug=xxx` — track card: blurred album color background, track title, one key lyric, album name
  - `/api/og?type=album&slug=xxx` — album card: accent color, title, track count
  - Default OG for landing page: all 4 album colors in a grid

  Set up metadata in each page's `generateMetadata` function.

  **Exit**: Sharing any URL on X/LinkedIn shows a beautiful preview card

- [x] **Task 19: Polish — animations + loading states**
  - Framer Motion page transitions (subtle fade)
  - Album card hover effects (slight scale + glow)
  - Staggered track list entrance on album pages
  - Skeleton loaders for all pages
  - 404 page with "Track not found" message
  - localStorage: save last-played track + volume for return visits

  **Exit**: App feels polished and intentional, no jarring transitions

- [x] **Task 20: PostHog analytics**
  Copy PostHogProvider from `../which-expert-to-ignore/components/PostHogProvider.tsx`.

  Track events:
  - `album_opened` (which album)
  - `track_played` (which track, from which page)
  - `track_completed_25/50/75/100` (listening depth)
  - `lyrics_viewed` (track slug)
  - `lyric_shared` (which lyric line, which track)
  - `source_clicked` (which Lenny episode)
  - `share_clicked` (platform: x/linkedin/copy)

  **Exit**: Events fire correctly (verify in browser console)

- [x] **Task 21: Build + deploy prep**
  - Run `pnpm build` and fix any errors
  - Ensure all audio files are in `public/audio/`
  - Test OG images render correctly
  - Test audio playback on the built version
  - Verify mobile layout in built version
  - Add `vercel.json` if needed for audio file serving headers

  **Exit**: `pnpm build` succeeds with zero errors, `pnpm start` serves the full app correctly

---

## Song Generation Notes

- Each song generation takes ~30-60 seconds
- Generate 3 versions per song = 36 total generations
- With 60-second waits between calls = ~36-72 minutes total
- If the Suno API wrapper doesn't work, fall back to creating copy-paste-ready prompts in `content/suno-prompts/` that Eric can manually paste into https://suno.com in the morning
- ALWAYS have the fallback prompts ready regardless of whether API generation succeeds

---

## Phase 2 Tasks (Social Sharing + Polish)

### Task 22: Share buttons on track page and NowPlayingBar
- [x] Update TrackPageClient.tsx — replace single Share button with 3 buttons: Share to X, Share to LinkedIn, Copy Link
- [x] X button opens `twitter.com/intent/tweet` with text param: `🎵 [Song Title] — Lenny's Greatest Hits` and url param
- [x] LinkedIn button opens `linkedin.com/sharing/share-offsite` with url param
- [x] Copy Link copies URL to clipboard and shows brief "Copied!" toast/feedback (use useState, auto-dismiss after 2s)
- [x] Add small share icon to NowPlayingBar.tsx next to play controls — clicking it opens a dropdown with same 3 share options
- [x] DO NOT touch audio playback logic, lyrics component, or album data structure
- [x] `pnpm build` passes

### Task 23: Auto-play next album when current album finishes
- [x] In lib/audio-context.tsx, find the onended handler for the audio element
- [x] When the queue is exhausted (last track of album ends), look up the current album in the albums array, find the NEXT album, and set the queue to that album's tracks starting at index 0
- [x] Import albums from lib/albums.ts and use the order: Founders → Product → Builders → The Human Side
- [x] If on the last album (The Human Side), stop playback — do not loop
- [x] DO NOT change the track data structure, album ordering, or UI components
- [x] `pnpm build` passes

### Task 24: Fix home page track count and album descriptions
- [x] Update app/page.tsx subtitle from "12 songs" to "10 songs"
- [x] Ensure album subtitles/descriptions in lib/albums.ts are human-readable JTBD (not production jargon)
- [x] Builders album description should acknowledge it has 2 tracks (batch 2 coming)
- [x] DO NOT change audio, lyrics, or track data
- [x] `pnpm build` passes

### Task 25: Add play count display using localStorage (no backend)
- [x] Create a simple play counter using localStorage — increment count per track slug when track starts playing (debounce: only count if played >5 seconds)
- [x] Display play count next to each track on album pages (e.g. "3 plays") — only show if count > 0
- [x] This is a local-only counter (per browser) — no backend needed for now
- [x] DO NOT modify audio files, lyrics, or album data structure
- [x] `pnpm build` passes

### Task 25b: Add storyBehind writeup to every track and display on track page
- [x] The Track type in lib/types.ts now has an optional `storyBehind?: string` field — already added
- [x] Add a `storyBehind` string to EVERY track in lib/albums.ts — 2-3 sentences explaining the specific Lenny episode/article this song is based on, what happened in it, why it matters. Write it like a music liner note, not a Wikipedia entry.
- [x] For Imposter: Julie Zhuo was Episode 2 of Lenny's Podcast. She spent 13 years at Facebook going from IC designer to VP of Design. She wrote The Making of a Manager from the imposter syndrome she felt the entire way up.
- [x] For Burnout: Andy Johns spent 17 years at Facebook, Twitter, Wealthfront, and Quora. He was raw about burnout on Lenny's show. Nearly 45% of tech workers report significant burnout. Jonny Miller coined the "feather, brick, dump truck" framework for warning signs.
- [x] For all other tracks, write similar episode-specific liner notes using the `concept` field as starting point but more narrative/story-driven
- [x] Display `storyBehind` on the track page (TrackPageClient.tsx) in a new section between the key quote and lyrics, with heading "The Story Behind This Song"
- [x] DO NOT modify audio files or lyrics
- [x] `pnpm build` passes

### Task 26: Deploy to Vercel production *(SKIPPED — handled in Task 36)*
- [x] Run `vercel --prod` and confirm deployment succeeds
- [x] Verify all track pages load with lyrics, share buttons, and story sections
- [x] `pnpm build` passes

### Task 27: Fact-check all quotes, sources, and attributions
- [x] Review every track in lib/albums.ts — check keyQuote, quoteSpeaker, sources, and concept fields
- [x] Use MCP tools (mcp__lennysdata__search_content, mcp__lennysdata__read_excerpt) to verify each quote is real and correctly attributed
- [x] Fix any incorrect attributions — if a quote can't be verified, remove it or replace with a verified one
- [x] Ensure every source title matches a real Lenny episode or newsletter
- [x] DO NOT modify audio files, lyrics structure, or UI components
- [x] `pnpm build` passes

### Task 28: Fix spacebar play/pause on track page
- [x] Add a global keydown listener in TrackPageClient.tsx — when spacebar is pressed, toggle play/pause
- [x] Prevent default scroll behavior when spacebar is pressed (e.preventDefault())
- [x] Only activate when not focused on an input/textarea element
- [x] DO NOT modify audio-context internals, just call audio.togglePlay()
- [x] `pnpm build` passes

### Task 29: Fix share button — make it copy link by default with toast
- [x] On track page, the primary Share button should COPY THE LINK to clipboard immediately (not open native share dialog)
- [x] Show "Copied!" toast feedback for 2 seconds after clicking
- [x] Keep the X and LinkedIn share buttons as secondary options below or beside it
- [x] In NowPlayingBar, same behavior — primary click copies link, shows "Copied!"
- [x] DO NOT touch audio playback or lyrics
- [x] `pnpm build` passes

### Task 30: Fix "Inspired by" source links
- [x] All source URLs in lib/albums.ts are empty strings (""). This makes them dead links.
- [x] Remove the <a> tag wrapping when url is empty — render as plain text instead of a broken link
- [x] Remove the ExternalLink icon when there's no URL
- [x] Format as: "Based on Lenny's episode with Brian Chesky" not "Brian Chesky on Airbnb's early days — Brian Chesky" (redundant guest name)
- [x] DO NOT modify audio or lyrics
- [x] `pnpm build` passes

### Task 31: Research and add real source URLs for all "Inspired by" links
- [x] Research ALL 18 sources in lib/albums.ts using Lenny MCP tools, fix display format in TrackPageClient.tsx, build passes

There are 18 sources across all 10 tracks in lib/albums.ts, all with `url: ""`. For EACH source: (1) call `mcp__lennysdata__search_content` with the guest name, (2) find the matching Lenny Substack article (lennysnewsletter.com or lennyrachitsky.com), (3) call `mcp__lennysdata__read_content` to confirm and get URL, (4) update the `url` field. If no Lenny article exists, link to the original source but update the title to indicate it (e.g., "Do Things That Don't Scale (paulgraham.com)"). DO NOT invent URLs. If unfindable, leave url as "".

Also fix TrackPageClient.tsx display: when url is non-empty, wrap in `<a>` tag with ExternalLink icon. Display the source `title` as link text, NOT "Based on Lenny's episode with {guest}". When url is empty, show as plain text using `title`.

Sources: "Brian Chesky on Airbnb's early days" (do-things-that-dont-scale), "Paul Graham — Do Things That Don't Scale" (do-things-that-dont-scale), "Rahul Vohra on Superhuman's PMF engine" (product-market-fit), "Lenny's PMF newsletter series" (product-market-fit), "Dalton Caldwell on tarpit ideas" (the-maze), "Michael Seibel on navigating uncertainty" (the-maze), "Shreyas Doshi on product sense" (taste), "Brian Chesky on detail obsession" (taste), "Brian Chesky on the 11-star framework" (eleven-stars), "Teresa Torres on continuous discovery" (talk-to-users), "Gustaf Alstromer on talking to users" (talk-to-users), "Keith Rabois on speed as competitive advantage" (ship-it), "Velocity over everything: How Ramp became the fastest-growing SaaS startup" (ship-it), "The rise of the professional vibe coder" (vibe-coding), "Andrej Karpathy coined 'vibe coding'" (vibe-coding), "Julie Zhuo on accelerating your career and impostor syndrome" (imposter), "When enough is enough" (burnout), "Managing nerves, anxiety, and burnout" (burnout). DO NOT modify audio or lyrics. `pnpm build` passes.

### Task 32a: Add coverImage to data layer
- [x] Add coverImage field to Track type and populate for all tracks, build passes

Add `coverImage: string` to Track type in lib/types.ts. For each track in lib/albums.ts, add `coverImage: "/covers/{slug}.jpg"`. DO NOT modify components, audio, or lyrics. `pnpm build` passes.

### Task 32b: Home page album cover art grid
- [ ] Replace album cards with cover art grid on home page, build passes

Keep existing warm Lenny light theme. DO NOT switch to dark. Replace the current 2-column card grid in app/page.tsx with a responsive album cover art grid. Each card: square cover image on top (~160-180px, rounded-lg) using album.coverImage, album title below in bold, track count + subtitle in muted text. Responsive: 2 cols mobile, 3-4 cols tablet, 4-6 cols desktop. Use Next.js Image component. Keep light background and Lenny warm colors. DO NOT modify audio or lyrics. `pnpm build` passes.

### Task 32c: Album page cover art in header and track rows
- [ ] Add album art to header and track thumbnails to tracklist rows, build passes

Keep existing warm Lenny light theme, gradients, accent colors. DO NOT switch to dark. In album header (AlbumPageClient.tsx): add album cover art on left (~140-160px, rounded-lg) with title/subtitle/track count to the right, horizontally aligned. In each track row: add small cover art thumbnail (~40x40, rounded) between track number and title using track's coverImage. Use Next.js Image component. Keep existing gradient backgrounds, accent colors, play/pause, share menu. DO NOT modify audio or lyrics. `pnpm build` passes.

### Task 32d: Track page cover art
- [ ] Add track cover image to track page header, build passes

Keep existing warm Lenny light theme. DO NOT switch to dark. In TrackPageClient.tsx, add track cover image (~160-200px, rounded-lg with subtle shadow) in header area near track title. Use Next.js Image component. Keep all existing sections and styling. DO NOT modify audio or lyrics. `pnpm build` passes.

### Task 33: Remove em dashes from all user-facing text
- [ ] Replace all em dashes in non-lyric user-facing text, build passes

Replace ALL em dashes with regular dashes, commas, periods, or natural rewrites. Check: lib/albums.ts (moods, descriptions, concepts, keyInsights, storyBehind, keyQuotes), app/page.tsx, app/layout.tsx, app/album/[slug]/page.tsx, app/track/[slug]/page.tsx, TrackPageClient.tsx, NowPlayingBar.tsx, ShareLyricModal.tsx. DO NOT touch em dashes in song lyrics. DO NOT touch code comments. DO NOT touch the regex in SyncedLyrics.tsx. For titles/share text use " | " or " - ". For moods/descriptions rewrite naturally. DO NOT modify audio. `pnpm build` passes.

### Task 34: Remove "Tech Culture Anthems" label
- [ ] Remove "Tech Culture Anthems" from home page and OG image, build passes

Remove the "Tech Culture Anthems" subtitle from home page hero (app/page.tsx ~line 30), remove entire div with Headphones icon and text. Remove from OG image alt text in app/layout.tsx (change to just "Lenny's Greatest Hits"). DO NOT modify audio or lyrics. `pnpm build` passes.

### Task 35: Add creator credit with LinkedIn link
- [ ] Add "Built by Eric Tan" footer linking to LinkedIn, build passes

Add footer/credit on home page (app/page.tsx): "Built by Eric Tan" linking to https://www.linkedin.com/in/erictisme/. Subtle, tasteful, small muted text. Also add to site footer in layout.tsx if one exists. target="_blank", rel="noopener noreferrer". DO NOT modify audio or lyrics. `pnpm build` passes.

### Task 36: Deploy to Vercel
- [ ] Run vercel --prod, confirm deployment succeeds, build passes

Run `vercel --prod` and confirm deployment succeeds. Verify build output shows no errors. `pnpm build` passes.
