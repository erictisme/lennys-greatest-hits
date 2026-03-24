# QA Round 4 — Mobile User Audit

**Persona:** Jamie, commuting on a phone (320–375px), thumb-scrolling, no hover.

---

## Hidden on Mobile

| Element | File | Class | Impact |
|---------|------|-------|--------|
| VoteButtons (TrackRow) | `components/TrackRow.tsx:125` | `hidden sm:flex` | Can't vote from home/album/songs list |
| VoteButtons (Album track list) | `AlbumPageClient.tsx:383` | `hidden sm:flex` | Same — must navigate to track page to vote |
| Track duration (TrackRow) | `components/TrackRow.tsx:132` | `hidden sm:inline` | Lose song length context |
| Play count column (Songs page) | `app/songs/page.tsx:120` | `hidden sm:inline` | No popularity signal |
| Date added column (Songs page) | `app/songs/page.tsx:121` | `hidden sm:inline` | No recency signal |
| Time display (NowPlayingBar) | `components/NowPlayingBar.tsx:189` | `hidden sm:flex` | Can't see progress time |
| Site name in nav | `components/GlobalNav.tsx:24` | `hidden sm:inline` | Minor — logo still visible |
| Keyboard shortcut hint | `TrackPageClient.tsx:397` | `hidden sm:inline` | Fine — no keyboard on mobile |

**Critical:** Vote buttons — the primary engagement mechanism — are completely invisible on mobile.

---

## Touch Target Issues (under 44px minimum)

| Element | File | Approx Size | Severity |
|---------|------|-------------|----------|
| Search clear (X) | `app/page.tsx:159` | ~16px | High |
| Search clear (X) Songs page | `app/songs/page.tsx:107` | ~16px | High |
| Onboarding dismiss (X) | `OnboardingTooltips.tsx:34` | ~14px | Medium |
| Annotation toggle (BookOpen) | `SyncedLyrics.tsx:190` | ~26px | Medium |
| Lyric share button | `SyncedLyrics.tsx:205` | ~26px (also invisible) | High |
| Keyboard "?" trigger | `KeyboardShortcuts.tsx:23` | 32px | Low |
| ThemeToggle | `ThemeToggle.tsx:26` | ~32px | Medium |
| SkipBack/SkipForward | `NowPlayingBar.tsx:157-185` | ~16px | High |
| Play/pause | `NowPlayingBar.tsx:165` | 36px | Medium |
| Share (NowPlayingBar) | `NowPlayingBar.tsx:197` | ~22px | High |
| Track number/play toggle | `TrackRow.tsx:41` | 32px wide | Medium |
| Tags (track page) | `TrackPageClient.tsx:261` | ~24px tall | Low |
| Tags (album track list) | `AlbumPageClient.tsx:366` | ~16px tall | Low |
| Cancel countdown button | `NowPlayingBar.tsx:86` | ~28px tall | Medium |

---

## Truncation / Overflow

| Element | File | Issue |
|---------|------|-------|
| Sort pills (Songs page) | `app/songs/page.tsx:75` | 4 buttons in `flex gap-2`, no `flex-wrap` or `overflow-x-auto` — overflows at 320px |
| Album header title | `AlbumPageClient.tsx:155` | `text-4xl` squeezed into ~120px beside 160px cover — wraps to 2-3 chars/line |
| Track page title | `TrackPageClient.tsx:235` | `text-3xl` squeezed into ~130px beside 144px cover |
| NowPlayingBar track title | `NowPlayingBar.tsx:148` | Only ~120px for title at 320px, will be "..." |
| Up Next banner text | `NowPlayingBar.tsx:82` | Long titles + countdown text, no truncation |
| ShareLyricModal buttons | `ShareLyricModal.tsx:119` | 3 buttons in flex row, cramped on narrow screens |

---

## Layout Concerns

| Issue | File | Detail |
|-------|------|--------|
| Album header doesn't stack | `AlbumPageClient.tsx:132` | 160px cover + text side-by-side in `flex` — text gets ~120px on mobile |
| Track header doesn't stack | `TrackPageClient.tsx:208` | Same issue — 144px cover crushes text area |
| Lyrics share invisible on touch | `SyncedLyrics.tsx:207` | `opacity-0 group-hover:opacity-60` — hover doesn't exist on mobile |
| Progress bar too thin for tap | `TrackPageClient.tsx:369` | 6px tall, mouse-only hover tooltip |
| NowPlayingBar progress bar | `NowPlayingBar.tsx:96` | Same — 6px, mouse-only seek |
| Bottom padding mismatch | `layout.tsx:91` | `pb-[72px]` but "Up Next" banner adds ~40px, can hide last list item |
| "?" button wastes space on mobile | `KeyboardShortcuts.tsx:25` | No keyboard on mobile, button is confusing |

---

## Top 5 Mobile Issues (ranked by user impact)

### #1. Vote buttons completely hidden on mobile
- **Files:** `TrackRow.tsx:125`, `AlbumPageClient.tsx:383`
- Both use `hidden sm:flex`. Mobile users cannot vote from home, album, or songs pages — they must navigate into each individual track page. This is the primary engagement feature, invisible to most visitors.
- **Fix:** Show compact vote buttons on mobile (e.g., inline thumbs).

### #2. Album and track page headers don't stack on mobile
- **Files:** `AlbumPageClient.tsx:132`, `TrackPageClient.tsx:208`
- Cover (160px/144px) + text in a non-wrapping `flex` row. On 320px with padding, only ~120px remains for title text. Headers are unreadable.
- **Fix:** Add `flex-col sm:flex-row` to stack cover above text on mobile.

### #3. Lyric share buttons invisible on touch devices
- **File:** `SyncedLyrics.tsx:207`
- Uses `opacity-0 group-hover:opacity-60` — permanently invisible on mobile since there's no hover. Users can never share individual lyrics.
- **Fix:** Always-visible at reduced opacity, or add tap interaction.

### #4. Sort pills overflow on Songs page
- **File:** `app/songs/page.tsx:75`
- Four sort buttons in `flex gap-2` without wrapping. Overflows at 320px.
- **Fix:** Add `flex-wrap` or `overflow-x-auto`.

### #5. NowPlayingBar controls too small for touch
- **File:** `NowPlayingBar.tsx:157-208`
- Skip buttons (~16px), share (~22px), play/pause (36px) — all under 44px minimum. These are constantly-used controls on every page.
- **Fix:** Add minimum 44px tap targets on all interactive elements.
