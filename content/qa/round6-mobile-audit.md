# QA Audit — Mobile User (Round 6)
**Date:** 2026-03-25
**Device Simulated:** iPhone (375px), commute scrolling
**Auditor Persona:** Jamie, mobile-only user

---

## CRITICAL: Horizontal Scroll on Songs Page

### Issue 1: Negative margins on track rows cause horizontal overflow on /songs
- **Severity:** CRITICAL
- **File(s):** `app/songs/page.tsx:138`
- **What's wrong:** Each track row in the songs list uses `-mx-3` (negative margin of 12px on each side) with `px-3` padding. The column header row at line 117 also uses `-mx-3`. These negative margins extend the element 12px beyond the parent container on both sides. On a 375px screen, this creates ~24px of horizontal overflow, causing the left-right scroll the user reported. The parent `div` at line 54 has `px-4` padding, but the children's negative margins poke outside that boundary.
- **How to fix:** Remove `-mx-3` from the track rows (line 138) and the column header (line 117). If the intent is edge-to-edge hover backgrounds, wrap the track list in a container with `overflow-x-hidden` instead, or use `-mx-4` balanced against the parent's `px-4` and add `overflow-x-hidden` to the page wrapper.

### Issue 2: Column header row also uses -mx-3 causing overflow
- **Severity:** CRITICAL (same root cause as Issue 1)
- **File(s):** `app/songs/page.tsx:117`
- **What's wrong:** The column header `div` uses `-mx-3` which extends past the parent padding, contributing to horizontal scroll.
- **How to fix:** Remove `-mx-3` from the column header or add `overflow-x-hidden` to the page-level container at line 54.

---

## HIGH Priority

### Issue 3: TrackRow negative margins cause horizontal overflow on home page
- **Severity:** HIGH
- **File(s):** `components/TrackRow.tsx:34`
- **What's wrong:** TrackRow uses `-mx-4` (negative margin of 16px each side) to create edge-to-edge hover backgrounds. On the home page, the parent container has `px-4`, so these exactly cancel. However, if any TrackRow content pushes wider (e.g., long vote count + share button + duration), the negative margins amplify the overflow because there is no `overflow-hidden` on any ancestor within the scroll area.
- **How to fix:** Add `overflow-x-hidden` to the Popular and Search Results sections in `app/page.tsx`, or to the motion.div wrapper at line 119 of `app/page.tsx`.

### Issue 4: Album page track rows use -mx-4 without overflow guard
- **Severity:** HIGH
- **File(s):** `app/album/[slug]/AlbumPageClient.tsx:269`
- **What's wrong:** Each album track row uses `-mx-4` for hover backgrounds. The parent `main` at line 259 has `overflow-x-hidden` which is good, but the track rows also contain VoteButtons (3 circular 40px buttons + gap + vote count) plus a duration/play-count section. On 375px with px-4 padding (16px each side = 343px content width), the row content can exceed available width: 44px (track number) + 40px (thumbnail) + flex title + ~130px (3 vote buttons at 40px + gaps) + ~80px (duration + play count) = ~294px minimum for non-title elements, leaving only ~49px for the title. This is tight but should truncate. The real risk is the VoteButtons row not shrinking.
- **How to fix:** Add `shrink-0` to the vote buttons container (already present at line 385) and ensure the title div has `min-w-0` (already present at line 335). The `overflow-x-hidden` on the main container at line 259 is the correct safeguard -- good.

### Issue 5: VoteButtons row takes ~170px of horizontal space on mobile
- **Severity:** HIGH
- **File(s):** `components/VoteButtons.tsx:111`
- **What's wrong:** VoteButtons renders 3 buttons at `w-10 h-10` (40px each) plus `gap-2` (8px each), plus an optional vote count span. Total: ~140-170px. When used inside TrackRow on mobile (375px - 32px padding = 343px), combined with the track number (32px), cover art (40px), gap spacing (16px+), this leaves very little room for the track title. On some tracks with long names, the title may get truncated to just a few characters.
- **How to fix:** Consider hiding the downvote and share buttons on mobile (`hidden sm:flex` on the downvote and share buttons), or reducing button sizes to `w-8 h-8` on mobile (`w-8 h-8 sm:w-10 sm:h-10`). Alternatively, move VoteButtons below the title text on mobile using a different layout.

### Issue 6: Track page prev/next navigation text can overflow on mobile
- **Severity:** HIGH
- **File(s):** `app/track/[slug]/TrackPageClient.tsx:611-636`
- **What's wrong:** The prev/next track navigation at the bottom uses `flex justify-between` with no `min-w-0` or `truncate` on the Link elements. Long track titles (e.g., "Do Things That Don't Scale") can overflow or wrap awkwardly, potentially causing horizontal scroll since the links have no width constraints.
- **How to fix:** Add `min-w-0 truncate` to both the prev and next Link elements, or add `max-w-[45%]` to each so they don't overlap in the center.

---

## MEDIUM Priority

### Issue 7: ShareLyricModal action buttons overflow on narrow screens
- **Severity:** MEDIUM
- **File(s):** `components/ShareLyricModal.tsx:119`
- **What's wrong:** The share actions row uses `flex items-center justify-center gap-3` with three buttons ("Download", "Share on X", "LinkedIn"), each with `px-5 py-2.5`. On a 375px screen minus 32px padding (p-4), the available width is 343px. Three buttons with padding and text can easily exceed this, causing them to overflow off-screen. The `gap-3` (12px x 2 = 24px) plus three buttons at roughly 110px + 100px + 80px = ~314px total is borderline.
- **How to fix:** Change the button container to `flex flex-wrap items-center justify-center gap-3` so buttons wrap to a second line on narrow screens. Or reduce `px-5` to `px-3` on mobile.

### Issue 8: ShareLyricModal close button positioned `absolute top-2 right-2` relative to wrong parent
- **Severity:** MEDIUM
- **File(s):** `components/ShareLyricModal.tsx:147`
- **What's wrong:** The close button is `absolute top-2 right-2` inside a parent that is `relative` (the `w-full max-w-md` div). But on mobile with `p-4` on the outer backdrop, the close button sits in the top-right corner of the card area, which may overlap with the share card image or be partially hidden. The parent div doesn't have `relative` explicitly -- the button is positioned relative to the nearest positioned ancestor.
- **How to fix:** Add `relative` to the `w-full max-w-md` parent div so the close button anchors correctly, and consider moving it outside/above the card or giving it a higher `z-index`.

### Issue 9: NowPlayingBar "Up Next" banner text doesn't truncate
- **Severity:** MEDIUM
- **File(s):** `components/NowPlayingBar.tsx:82-83`
- **What's wrong:** The "Up next: {track title}" text has no truncation. On a 375px screen, a long track title like "Do Things That Don't Scale" plus the "playing in 5..." suffix could overflow the banner, pushing the "Cancel" button off-screen or causing text wrapping.
- **How to fix:** Add `truncate` or `min-w-0` to the text span, and wrap the flex row text span in a `min-w-0 flex-1` container so truncation works.

### Issue 10: GlobalNav height is only 44px (h-11) but contains multiple touch targets
- **Severity:** MEDIUM
- **File(s):** `components/GlobalNav.tsx:17`
- **What's wrong:** The nav is `h-11` (44px), which is fine. But the Home link (line 19-25) and "All Songs" link (line 28-36) rely on text-sized touch targets. The Home link on mobile only shows the icon (the text is `hidden sm:inline`), making the touch target just the 16px icon plus whatever padding the link has. The link itself has no explicit min-height or padding for touch.
- **How to fix:** Add `min-h-[44px] flex items-center` to both nav links, or add `p-2` padding to ensure 44px touch target on the Home icon link.

### Issue 11: ThemeToggle and Search icon in GlobalNav have small touch targets
- **Severity:** MEDIUM
- **File(s):** `components/GlobalNav.tsx:39-47`, `components/ThemeToggle.tsx:26-29`
- **What's wrong:** The Search link has `p-2` (8px padding) around a 16px icon = 32px touch target. ThemeToggle also has `p-2` = 32px total. Both are under the 44px minimum recommended for mobile touch targets.
- **How to fix:** Increase padding to `p-3` (44px total with 16px icon + 12px padding each side) or use `min-w-[44px] min-h-[44px]` with flex centering.

### Issue 12: Home page gradient blur extends beyond viewport
- **Severity:** MEDIUM
- **File(s):** `app/page.tsx:123`
- **What's wrong:** The decorative gradient uses `absolute -inset-x-20 -inset-y-10` which extends 80px past the container on each side horizontally. While the body has `overflow-x-hidden`, this still creates a wider-than-viewport element that could cause performance issues on mobile (large blur area) or interact with the body overflow in unexpected ways on iOS Safari.
- **How to fix:** Reduce `-inset-x-20` to `-inset-x-4` or add `overflow-hidden` to the header element.

### Issue 13: Track page skip prev/next buttons lack minimum touch target size
- **Severity:** MEDIUM
- **File(s):** `app/track/[slug]/TrackPageClient.tsx:338-343, 362-367`
- **What's wrong:** The SkipBack and SkipForward buttons on the track page player have no explicit sizing -- they just contain a 20px icon with no padding. This makes them roughly 20x20px touch targets, well below the 44px minimum.
- **How to fix:** Add `min-w-[44px] min-h-[44px] flex items-center justify-center` to both skip buttons.

---

## LOW Priority

### Issue 14: Sort pills on /songs have small touch targets on mobile
- **Severity:** LOW
- **File(s):** `app/songs/page.tsx:85`
- **What's wrong:** Sort pill buttons use `px-3 py-1` on mobile (before the sm: breakpoint). This gives a height of roughly 32px (16px text + 4px top + 4px bottom padding). Under the 44px recommendation.
- **How to fix:** Change to `px-3 py-2 sm:px-4 sm:py-1.5` to increase mobile touch target height to ~36-40px, or keep current sizing since pills are spaced with `gap-2` and `flex-wrap` so they're usable.

### Issue 15: KeyboardShortcuts button is correctly hidden on mobile
- **Severity:** LOW (no issue -- confirming it's handled)
- **File(s):** `components/KeyboardShortcuts.tsx:25`
- **What's wrong:** Nothing wrong. The `?` shortcut button uses `hidden sm:flex`, so it's correctly hidden on mobile since keyboard shortcuts aren't relevant on touch devices. No issue here.
- **How to fix:** N/A

### Issue 16: Lyrics share button visible at low opacity on mobile
- **Severity:** LOW
- **File(s):** `components/SyncedLyrics.tsx:207`
- **What's wrong:** The per-line share button uses `opacity-40 sm:opacity-0 sm:group-hover:opacity-60`. On mobile, every lyric line shows a share icon at 40% opacity permanently. With 30+ lyric lines, this creates a lot of visual noise. The annotation BookOpen button (line 195) is also always visible.
- **How to fix:** This appears intentional for mobile (since there's no hover on touch), but consider reducing to `opacity-20` or showing share buttons only on tap/long-press to reduce visual clutter.

### Issue 17: "You Might Also Like" play buttons are under 44px
- **Severity:** LOW
- **File(s):** `app/track/[slug]/TrackPageClient.tsx:547-554`
- **What's wrong:** The play button on related tracks is `w-8 h-8` (32px), below the 44px touch target recommendation.
- **How to fix:** Increase to `w-10 h-10` or add padding around the button.

### Issue 18: Album page description text has no line-clamp on mobile
- **Severity:** LOW
- **File(s):** `app/album/[slug]/AlbumPageClient.tsx:163`
- **What's wrong:** The album description (`max-w-xl`) can be quite long and takes up significant vertical space on mobile, pushing the track list below the fold. Not a bug, but affects the mobile experience.
- **How to fix:** Consider adding `line-clamp-3 sm:line-clamp-none` with an expand button on mobile to keep the track list higher on the page.

---

## Summary

| Severity | Count | Key Theme |
|----------|-------|-----------|
| CRITICAL | 2 | Horizontal overflow on /songs from `-mx-3` negative margins |
| HIGH | 4 | VoteButtons width, overflow risks, missing truncation |
| MEDIUM | 7 | Touch targets under 44px, text overflow, blur performance |
| LOW | 5 | Visual polish, minor touch target improvements |

**Root cause of reported horizontal scroll:** The `-mx-3` negative margins on track rows and column headers in `app/songs/page.tsx` (lines 117 and 138) extend elements beyond the `px-4` parent padding, creating ~12px of horizontal overflow on each side. The quickest fix is adding `overflow-x-hidden` to the page wrapper at line 54, but the cleaner fix is removing the negative margins entirely.
