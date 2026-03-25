# QA Round 7 — Performance Audit

**Date:** 2026-03-25

---

## Issue #1 (HIGH): lib/albums.ts is 594KB — nearly 2x the 300KB threshold

- **File:** `lib/albums.ts`
- **What's wrong:** 9,800 lines of inline data including full lyrics, annotations, and metadata for 88+ tracks. This entire file is bundled into every page's JavaScript, even pages that don't display lyrics.
- **Impact:** Increases initial page load by ~594KB of JS. On mobile 3G, this adds 3-5 seconds of parse time.
- **How to fix:** Split into two files:
  1. `lib/albums.ts` — album/track metadata only (title, slug, genre, duration, coverImage, sources, tags, etc.)
  2. `lib/lyrics-data.ts` — full lyrics and annotations, dynamically imported only on track pages
  - Use `dynamic import()` in TrackPageClient to lazy-load lyrics data
  - Estimated reduction: ~60-70% of file size (lyrics are the bulk)

## Issue #2 (MEDIUM): app/page.tsx fetches play counts for ALL tracks on every mount

- **File:** `app/page.tsx:79`
- **What's wrong:** On homepage mount, fetches `/api/play?slugs=...` with all ~88 track slugs concatenated. This creates a very long query string and runs every page visit.
- **Impact:** Unnecessary network request on every homepage load. Long query string may hit URL length limits as track count grows.
- **How to fix:** Either:
  - Cache play counts with a short TTL (e.g., SWR with 60s revalidation)
  - Or fetch only top-10 most-played from a server endpoint instead of all slugs

## Issue #3 (MEDIUM): Several pages are "use client" that could partially be server components

- **Files:** `app/page.tsx`, `app/album/[slug]/AlbumPageClient.tsx`, `app/songs/page.tsx`
- **What's wrong:** All three pages are fully client-rendered despite having significant static content (album lists, track metadata). Only interactive elements (sort, play, share) need client-side JS.
- **Impact:** Larger JS bundle sent to client, slower Time to Interactive.
- **How to fix:** Extract static content into server components and pass interactive parts as children. Example: album grid layout as server component, play button as client component. However, this is a significant refactor — defer unless doing a major overhaul.

## Issue #4 (LOW): Audio availability HEAD request on every track page visit

- **File:** `app/track/[slug]/TrackPageClient.tsx:91`
- **What's wrong:** Every track page load sends a HEAD request to check if the audio file exists. Result is not cached.
- **Impact:** Extra network request per track page visit. Minimal latency impact but unnecessary.
- **How to fix:** Cache the result in sessionStorage or add an `audioAvailable` field to track metadata.

## Issue #5 (LOW): framer-motion imported on album page for parallax

- **File:** `app/album/[slug]/AlbumPageClient.tsx`
- **What's wrong:** `useScroll()` and `useTransform()` from framer-motion are imported for a parallax cover effect. framer-motion is a large library (~30KB gzipped).
- **Impact:** Additional bundle weight for a visual polish feature.
- **How to fix:** If framer-motion is already used elsewhere (it is — on track page), this is acceptable. No action needed unless doing a bundle audit.

## Issue #6 (INFO): Audio preloading is appropriate

- **File:** `lib/audio-context.tsx:105`
- **Status:** Audio element uses `preload="metadata"` — only loads duration/metadata, not the full audio file. This is the correct choice.

---

## Summary

| # | Severity | Issue | Est. Impact |
|---|----------|-------|-------------|
| 1 | HIGH | lib/albums.ts is 594KB (lyrics inline) | ~3-5s mobile parse |
| 2 | MEDIUM | Homepage fetches all track play counts | Extra network req |
| 3 | MEDIUM | Pages are fully client-rendered | Larger JS bundle |
| 4 | LOW | Audio HEAD request not cached | Extra network req |
| 5 | LOW | framer-motion for parallax | ~30KB gzipped |
| 6 | INFO | Audio preload is appropriate | No action needed |

## Top Priority Fix

**Issue #1** — splitting lyrics/annotations out of lib/albums.ts would have the highest single impact on page load performance.
