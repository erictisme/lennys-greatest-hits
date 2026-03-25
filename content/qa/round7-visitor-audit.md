# QA Round 7 — First-Time Visitor Audit

**Date:** 2026-03-25
**Persona:** Product manager from Lenny's Slack, clicked a link someone shared. Never seen the site. On desktop Chrome.

---

## Walkthrough: First 60 Seconds

1. **Land on homepage** — see "Lenny's Greatest Hits" heading, tagline, stats bar, Shuffle Play + Surprise Me buttons.
2. **Onboarding card appears** — "Every song is built from a real Lenny podcast or article. Tap any song to hear the insight."
3. **Popular section** — 5 tracks with cover art, source attribution (podcast/newsletter icon + guest name).
4. **Discography grid** — album covers with "Coming Soon" badges.
5. **Search bar** — placeholder: "What's your favorite Lenny podcast or article?"
6. **Footer** — email signup, credits, links.

---

## 1. Is the tagline clear?

**Tagline:** "The insights you quote on X, turned into music you can feel."

| Severity | Issue | File:Line | What's Wrong | Fix |
|----------|-------|-----------|-------------|-----|
| HIGH | H1: Tagline assumes context | app/page.tsx:134 | A Slack visitor may not "quote on X" — the tagline assumes Twitter/X user behavior. It also doesn't explain WHAT this is (songs from Lenny's content). The heading "Lenny's Greatest Hits" could be mistaken for a "best of" article collection. | Change tagline to something that immediately explains the format: "Lenny's best podcast & newsletter insights — turned into real, playable songs." |
| MEDIUM | M1: No visual cue that this is a music app | app/page.tsx:129-178 | The header area looks like a blog or content site. There's no waveform, music note, headphone icon, or audio-visual cue to signal "this plays music." First impression matters. | Add a small music-related icon or visual element near the title — even a subtle ♪ or headphone icon next to the stats line would help. |

## 2. How fast to first play?

| Severity | Issue | File:Line | What's Wrong | Fix |
|----------|-------|-----------|-------------|-----|
| MEDIUM | M2: "Shuffle Play" is the primary CTA but doesn't explain what happens | app/page.tsx:153-163 | A first-time visitor doesn't know what "Shuffle Play" means in this context. Will it play a random song? All songs? What genre? The button assumes the visitor already knows there's music. | Add micro-copy below the buttons: "Hit play — each song is a 2-3 min banger based on a real Lenny insight." |
| LOW | L1: Onboarding card is too subtle | components/OnboardingTooltips.tsx:31 | The onboarding card has very low contrast (`bg-white/[0.04]`, `border-border/20`, `text-muted-foreground/70`). It's easy to miss — the most important piece of context for a new visitor is nearly invisible. | Increase contrast: `bg-white/[0.08]`, `border-border/40`, use slightly brighter text. |
| LOW | L2: Play button on track rows is hidden until hover | components/TrackRow.tsx:66-73 | On desktop, the play icon only appears on hover. A first-time visitor sees numbers (1, 2, 3...) instead of play buttons. They may not realize tracks are clickable/playable. | Consider showing the play icon by default for the first track, or making the "currently playing" track's play state more obvious on first load. |

**Time to first play:** ~2-3 seconds if they click Shuffle Play. ~5 seconds if they click a track in Popular. This is good.

## 3. What would make them share?

| Severity | Issue | File:Line | What's Wrong | Fix |
|----------|-------|-----------|-------------|-----|
| HIGH | H2: No share button on the homepage | app/page.tsx | There's no way to share the site itself from the homepage. Visitors from Slack would want to share back to Slack — "check this out." The share button only exists in NowPlayingBar (for current track) and on individual track pages. | Add a "Share this" button or copy-link icon near the header, or at minimum after the Popular section. |
| MEDIUM | M3: Track page share text is generic | app/track/[slug]/TrackPageClient.tsx:163-165 | The share text for X says "insights from @lennysan's podcast, turned into a song." This is decent but could be more compelling. It doesn't mention the specific insight or why someone should click. | Make share text more hook-y: include the key quote or concept. E.g., "🎵 'The best founders do things that don't scale' — now it's a song. {title} | Lenny's Greatest Hits" |
| LOW | L3: Vote buttons are hidden on mobile in track rows | components/TrackRow.tsx:127-131 | `hidden sm:flex` — mobile visitors can't vote from the homepage track list. Voting/engagement drives sharing behavior. | Show a simplified vote button (just the fire emoji count) on mobile too. |

## 4. What's confusing?

| Severity | Issue | File:Line | What's Wrong | Fix |
|----------|-------|-----------|-------------|-----|
| HIGH | H3: "Coming Soon" albums are clickable but dead-end | app/page.tsx:286-330 | Albums with `comingSoon` badge are rendered as clickable links. Clicking leads to an album page with locked tracks and no audio. A new visitor clicking one of these first would think the site is broken or unfinished. | Either (a) make Coming Soon albums non-clickable with a tooltip, or (b) ensure the album page clearly explains "these songs are being produced" with a prominent visual treatment. |
| MEDIUM | M4: Search placeholder creates false expectations | app/page.tsx:189 | "What's your favorite Lenny podcast or article?" implies you can search by episode name or article title. But search actually matches track titles, tags, guest names, and concepts — not Lenny's original content titles. Searching "how to hire" might return nothing even though there's a hiring-related song. | Change placeholder to: "Search songs, guests, or topics..." — set accurate expectations. |
| MEDIUM | M5: No explanation of what albums represent | app/page.tsx:276-331 | The Discography section shows album covers with titles like "Founders," "The Operators," "Growth Engine" but doesn't explain these are thematic groupings. A visitor might think they're actual music albums from different artists. | Add a one-line subtitle under "Discography": "Songs grouped by theme" or similar. |
| LOW | L4: Keyboard shortcut hint on track page is cryptic | app/track/[slug]/TrackPageClient.tsx:412 | The ⌨ icon next to duration is tiny and only shows shortcuts on hover. Most visitors won't discover it. Not a problem, but the feature is essentially invisible. | No fix needed — low priority. Just noting for completeness. |

## 5. What's missing?

| Severity | Issue | File:Line | What's Wrong | Fix |
|----------|-------|-----------|-------------|-----|
| CRITICAL | C1: No "What is this?" hero explanation | app/page.tsx:129-178 | The biggest gap: there's no 1-2 sentence explanation for a brand-new visitor who doesn't know the context. The tagline is poetic but not explanatory. A visitor from Slack needs to understand in 3 seconds: (1) these are real songs, (2) made from Lenny's content, (3) you can play them right now. The onboarding card tries but is too subtle and dismissible. | Add a brief hero line or subtitle below the tagline: "Real songs built from 349 newsletters and 289 podcast episodes. Hit play." — bold, clear, unmissable. |
| MEDIUM | M6: No social proof or context | app/page.tsx | No play counts on homepage (only "X plays today" which may be 0 for low-traffic periods), no "featured in" badges, no endorsements. For a contest entry, showing traction or credibility matters. | Show total play count in the stats line if > 100. Or add a small "Built for Lenny's Data Challenge 2026" badge. |
| LOW | L5: About page is hard to find | app/page.tsx:355-360 | The About link is in the footer in very low contrast text (`text-muted-foreground/30`). A curious visitor who wants to understand the project has to scroll all the way down and squint. | Either add About to the stats line area or make the footer links slightly more visible. |

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 1 |
| HIGH | 3 |
| MEDIUM | 6 |
| LOW | 5 |

**Top 3 priorities for a first-time visitor:**
1. **C1:** Add a clear "what is this" explanation that's impossible to miss
2. **H1:** Fix the tagline to explain the format, not just be clever
3. **H2:** Add a homepage share mechanism — these visitors came from Slack and want to share back
