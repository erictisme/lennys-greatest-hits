# Ralph Task: "Click to Wow" Polish Sprint

## Context
LGH (Lenny's Greatest Hits) is a contest entry for Lenny Rachitsky's "build something cool with my data" contest (deadline April 15, 2026). The product turns Lenny's best podcast/newsletter insights into playable songs presented in a Spotify-aesthetic web app.

The product is functionally complete. This sprint is about making the first 60 seconds of a visitor's experience go from "cool idea" to "wow." No new features — just polish on the path from click to delight.

## Stack
- Next.js + Tailwind + shadcn/ui + TypeScript
- pnpm (not npm)
- framer-motion for animations
- Audio playback via custom AudioProvider context (`lib/audio-context.tsx`)

## Changes (in priority order)

### 1. REMOVED — no auto-play, no play hint label. The UI already looks like a music player. People know what play buttons do.

### 2. Search bar placeholder text
**File:** `app/page.tsx`, line ~128

Change placeholder from `"Search songs..."` to `"What's your favorite Lenny podcast or article?"`

Also expand the search filter (line ~34) to also match against:
- `track.sources[].guest` (guest name)
- `track.sources[].title` (source article/episode title)
- `track.concept` (the concept behind the song)
- `track.keyInsight`

These fields already exist on the Track type. Just add them to the filter predicate.

### 3. First-time visitor onboarding overlay
**New component:** `components/OnboardingTooltips.tsx`
**Mount in:** `app/page.tsx` (after header, before search)

A lightweight, dismissible welcome message for first-time visitors. NOT a modal. A subtle inline card that appears above the search bar on first visit.

Design:
- Semi-transparent dark card with border, matching the dark theme
- Brief welcome text + 4 quick tips as icon+text pairs:
  1. 🔺 "Tap the play triangle to preview a song"
  2. 📄 "Tap the song row to see lyrics & learnings"
  3. 👍 "Vote thumbs up/down to give Eric feedback"
  4. 🔗 "Share your favorites — it helps a lot!"
- Small dismiss button (X) in top-right
- After dismiss, set localStorage flag `lgh-onboarding-seen`
- Animate in with framer-motion (fade + slide down)
- At the bottom: "Have fun exploring! 🎵"

Keep it tight — max 200px tall. Don't make it feel like a tutorial. Make it feel like a friendly note.

### 4. Search "no results" state improvement
**File:** `app/page.tsx`, line ~170

When search returns 0 results, instead of just "No songs found.", show:
```
No songs found for "[query]".
We have [N] songs covering topics like product-market fit, growth, leadership, and more.
Try searching for a guest name or topic!
```

## What NOT to do
- Don't add sign-in, quizzes, gamification, or any new features
- Don't change the visual design language / colors / dark theme
- Don't modify the audio playback logic in `lib/audio-context.tsx` (except reading from it)
- Don't touch the track detail page, album pages, or NowPlayingBar
- Don't add new dependencies
- Don't add comments or docstrings to code you didn't write
