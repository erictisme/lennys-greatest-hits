# QA Round 7 — Mobile User Audit

**Date:** 2026-03-25
**Viewport tested:** 320px–375px (iPhone SE / iPhone 13 Mini)
**Files reviewed:** 12

---

## CRITICAL Issues

### C1. NowPlayingBar missing safe-area-inset-bottom
- **Severity:** CRITICAL
- **File:** `components/NowPlayingBar.tsx:78`
- **What's wrong:** Fixed bottom bar has no `pb-[env(safe-area-inset-bottom)]`. On iPhones with home indicator, the player controls overlap with the system gesture area.
- **How to fix:** Add `pb-[env(safe-area-inset-bottom)]` to the outermost fixed container, and ensure `<meta name="viewport">` includes `viewport-fit=cover` in layout.tsx.

---

## HIGH Issues

### H1. Track page prev/next links unreadable on 320px
- **Severity:** HIGH
- **File:** `app/track/[slug]/TrackPageClient.tsx:613-639`
- **What's wrong:** Navigation links use `max-w-[45%] truncate`. On 320px, "Previous" label + truncated title shows almost nothing useful (e.g. "The Lo..."). Users can't tell what track is next.
- **How to fix:** On mobile, hide the "Previous"/"Next" labels and show only the track title, or use `max-w-[60%]` with `text-ellipsis`.

### H2. Keyboard shortcuts help button too small (32px)
- **Severity:** HIGH
- **File:** `components/KeyboardShortcuts.tsx:25`
- **What's wrong:** Floating help button is `w-8 h-8` (32px), below the 44px minimum touch target. Easy to miss and hard to tap.
- **How to fix:** Increase to `w-11 h-11` (44px) or hide entirely on mobile since keyboard shortcuts don't apply to touch devices.

### H3. Track page header cramped on 320px
- **Severity:** HIGH
- **File:** `app/track/[slug]/TrackPageClient.tsx:212-280`
- **What's wrong:** Cover art is `w-36 h-36` (144px) which takes 45% of 320px width. Combined with padding, text area is squeezed to ~140px leaving very little room for track title and metadata.
- **How to fix:** Reduce image to `w-28 h-28` on mobile, or stack image above text with `flex-col` on smallest breakpoint.

### H4. Player controls cramped on 320px
- **Severity:** HIGH
- **File:** `app/track/[slug]/TrackPageClient.tsx:339-370`
- **What's wrong:** Player control buttons have `gap-6` (24px) between them. On 320px, five buttons (prev, back 10s, play, fwd 10s, next) + gaps consume most of the width, causing a cramped feel.
- **How to fix:** Use `gap-3 sm:gap-6` to reduce spacing on mobile.

---

## MEDIUM Issues

### M1. Home page sort buttons may wrap awkwardly
- **Severity:** MEDIUM
- **File:** `app/page.tsx:152-177`
- **What's wrong:** "Shuffle Play" and "Surprise Me" buttons use `px-6 py-2.5` without explicit min-height of 44px. On narrow screens, buttons are close together increasing mis-tap risk.
- **How to fix:** Add `min-h-[44px]` to both buttons.

### M2. Album grid thumbnails small on 320px
- **Severity:** MEDIUM
- **File:** `app/page.tsx:286`
- **What's wrong:** 2-column grid with `gap-4` on 320px means each album card is ~144px wide. Album title text with `truncate` may be unreadable for longer titles.
- **How to fix:** Use `gap-3` instead of `gap-4` on mobile, or consider `grid-cols-1` for screens under 360px.

### M3. Album page play/share buttons lack min touch targets
- **Severity:** MEDIUM
- **File:** `app/album/[slug]/AlbumPageClient.tsx:170-188`
- **What's wrong:** "Play All" (`px-5 py-2.5`) and "Share" (`px-4 py-2.5`) buttons don't enforce 44px minimum height. Close proximity increases accidental tap risk.
- **How to fix:** Add `min-h-[44px]` to both buttons.

### M4. Album page play button click area unclear
- **Severity:** MEDIUM
- **File:** `app/album/[slug]/AlbumPageClient.tsx:261-415`
- **What's wrong:** Play icon container is `w-11 h-11` (44px, good) but has `-ml-2.5` negative margin that shifts the visual position away from the actual click zone.
- **How to fix:** Remove negative margin or adjust padding to align visual and click areas.

### M5. SyncedLyrics annotation banner text wrapping
- **Severity:** MEDIUM
- **File:** `components/SyncedLyrics.tsx:144`
- **What's wrong:** Banner text "X insight(s) hidden in these lyrics — tap the icons to explore" with icon + text in `text-xs` may wrap across 3+ lines on 320px, distorting layout.
- **How to fix:** Shorten mobile text to "Tap highlighted lines for insights" or add `sm:` prefix for full text.

### M6. SyncedLyrics share button faint on mobile
- **Severity:** MEDIUM
- **File:** `components/SyncedLyrics.tsx:195`
- **What's wrong:** Share line button has `opacity-40` on mobile (always visible but faint). Users may not realize it's interactive since there's no hover feedback on touch.
- **How to fix:** Increase to `opacity-60` on mobile, or add a subtle background to indicate interactivity.

### M7. ThemeToggle button slightly under 44px
- **Severity:** MEDIUM
- **File:** `components/ThemeToggle.tsx`
- **What's wrong:** Button has `p-3` padding with `w-4 h-4` icon, giving a ~40px touch target. Slightly under the 44px recommended minimum.
- **How to fix:** Increase padding to `p-3.5` or add `min-w-[44px] min-h-[44px]`.

---

## LOW Issues

### L1. Songs page sort pills may wrap on 320px
- **Severity:** LOW
- **File:** `app/songs/page.tsx:75-94`
- **What's wrong:** Four sort buttons ("Newest", "Most Played", "A-Z", "By Album") use `flex-wrap gap-2`. "Most Played" is long and wraps to the next line, causing visual imbalance.
- **How to fix:** Shorten to "Plays" on mobile or use horizontal scroll instead of wrap.

### L2. TrackRow vote buttons hidden on mobile
- **Severity:** LOW
- **File:** `components/TrackRow.tsx:127`
- **What's wrong:** Vote buttons use `hidden sm:flex`, so mobile users can only vote from the full track page. This is an intentional design choice but limits engagement.
- **How to fix:** Consider adding a small upvote-only button visible on mobile, or accept as-is.

### L3. VoteButtons count text may overflow
- **Severity:** LOW
- **File:** `components/VoteButtons.tsx:130`
- **What's wrong:** Vote count spans next to 40px buttons have no width constraint. If counts reach 4+ digits, text may overflow the parent container.
- **How to fix:** Add `min-w-[2ch]` or truncate large numbers (e.g., "1.2k").

### L4. GlobalNav text crowding on 320px
- **Severity:** LOW
- **File:** `components/GlobalNav.tsx:24`
- **What's wrong:** Logo text is `hidden sm:inline` (good), but remaining nav links + theme toggle + icon may still feel tight on 320px.
- **How to fix:** Verify spacing at 320px; likely acceptable as-is.

### L5. Songs page header/row alignment drift
- **Severity:** LOW
- **File:** `app/songs/page.tsx:117-125`
- **What's wrong:** Column headers show `#`, `Title`, and Duration on mobile (Plays and Date hidden). Alignment between header columns and TrackRow columns may drift slightly due to different padding.
- **How to fix:** Verify alignment manually; adjust padding if misaligned.

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 1 |
| HIGH | 4 |
| MEDIUM | 7 |
| LOW | 5 |
| **Total** | **17** |
