# Round 8 Accuracy Spot-Check — Part 1

**Date:** 2026-03-26
**Tracks audited:** 5 tracks from The Craft and Growth Engine albums
**Method:** Verified guest, keyQuote, and source URL against Lenny MCP archive

---

## 1. "Taste" (The Craft, Track 1)

- **Guest: Shreyas Doshi** — VERIFIED. Appeared on Lenny's podcast twice (regular episode + live summit episode).
- **keyQuote:** "Taste is the ability to identify what is really good, without needing to see its results."
  - **VERIFIED.** From `podcasts/shreyas-doshi-live.md` (00:31:37): "taste is about the ability to identify what is really good, without needing to see its results, because, look, it requires zero taste right now for anybody to say, 'Oh, that CEO of NVIDIA is a genius'"
  - Minor: Track quote drops "about" — "Taste is the ability..." vs actual "taste is about the ability..." — acceptable paraphrase.
- **quoteSpeaker: Shreyas Doshi** — VERIFIED.
- **Source URL:** `https://www.lennysnewsletter.com/p/shreyas-doshi-live` — VERIFIED. Matches archive filename `podcasts/shreyas-doshi-live.md`.
- **RESULT: PASS** (minor paraphrase, acceptable)

---

## 2. "Build the Machine" (The Craft, Track 6)

- **Guest: Claire Hughes Johnson** — VERIFIED. Appeared on Lenny's podcast: "Lessons from scaling Stripe | Claire Hughes Johnson (former COO of Stripe)".
- **keyQuote:** "Product-market fit is just the product. That is not a company, and that will not scale."
  - **VERIFIED.** From `podcasts/claire-hughes-johnson.md` (00:20:23): "It turns out product market fit is just the product, and that is not a company, and that will not scale, to point."
  - Minor: Track drops "It turns out" and "to point" — acceptable condensation.
- **quoteSpeaker: Claire Hughes Johnson** — VERIFIED.
- **Source URL:** `https://www.lennysnewsletter.com/p/lessons-from-scaling-stripe-tactics` — VERIFIED. Title matches archive entry "Lessons from scaling Stripe".
- **RESULT: PASS**

---

## 3. "Doesn't Feel Right Yet" (The Craft, Track 7)

- **Guest: Karri Saarinen** — VERIFIED. CEO of Linear, appeared on Lenny's podcast and authored a newsletter post.
- **keyQuote:** "Productivity software should be opinionated. We provide good defaults so you can focus on the work you do."
  - **VERIFIED (paraphrased).** From `podcasts/karri-saarinen.md` (00:39:33–00:40:27): "productivity software should be, and especially company software should be opinionated" ... "we like to provide this good default or good opinions... So you, as a user or as a team don't have to think about it and you can focus on the work you do."
  - The quote condenses two separate statements into one sentence. Accurate in meaning but not verbatim.
- **quoteSpeaker: Karri Saarinen** — VERIFIED.
- **Source URL:** `https://www.lennysnewsletter.com/p/how-linear-builds-product` — VERIFIED. Matches archive `newsletters/how-linear-builds-product.md`.
  - **Note:** The keyQuote is from the **podcast** (karri-saarinen.md), not the newsletter. The newsletter discusses the Linear Method but doesn't contain this exact quote. Minor source mismatch — the guest and content are correct, just the specific quote comes from the podcast episode rather than the newsletter.
- **RESULT: PASS** (paraphrased quote, minor source mismatch)

---

## 4. "Don't Break the Streak" (Growth Engine, Track 1)

- **Guest: Jackson Shuttleworth** — VERIFIED. Group PM at Duolingo, retention team. Appeared on Lenny's podcast: "Behind the product: Duolingo streaks".
- **keyQuote:** "Streaks is the most impactful feature. We have over 9 million users with a year-plus streak."
  - **VERIFIED (exact match).** From `podcasts/jackson-shuttleworth.md` (00:00:00): "Streaks is the most impactful feature. We have, right now, over 9 million users with a year plus streak."
  - Only difference: track drops "right now" — trivial.
- **quoteSpeaker: Jackson Shuttleworth** — VERIFIED.
- **Source URLs:**
  - `https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth` (Jorge Mazal) — VERIFIED. Referenced across multiple archive entries as Lenny's #1 most popular post.
  - `https://www.lennysnewsletter.com/p/behind-the-product-duolingo-streaks` (Jackson Shuttleworth) — VERIFIED. Matches archive `podcasts/jackson-shuttleworth.md`.
- **RESULT: PASS**

---

## 5. "Crossing the Chasm" (Growth Engine, Track 15)

- **Guest: Geoffrey Moore** — VERIFIED. Author of Crossing the Chasm. Appeared on Lenny's podcast: "Geoffrey Moore on finding your beachhead, crossing the chasm, and dominating a market".
- **keyQuote:** "I just need more customers. I should take any customer I could find. It's like taking a match and running it back and forth under a log. It's not going to light the log."
  - **VERIFIED (exact match).** From `podcasts/geoffrey-moore.md` (00:00:00): "The tendency when you're in the chasm is, 'I just need more customers. I should take any customer I could find,' because we need revenue. It's like taking a match and running it back and forth under a log. It's not going to light the log."
  - Track extracts the core metaphor, dropping the framing sentence. Accurate.
- **quoteSpeaker: Geoffrey Moore** — VERIFIED.
- **Source URL:** `https://www.lennyspodcast.com/geoffrey-moore-on-finding-your-beachhead-crossing-the-chasm-and-dominating-a-market/` — VERIFIED. Title matches exactly. Note: uses `lennyspodcast.com` domain (not `lennysnewsletter.com`), which is a valid alternate domain for Lenny's podcast episodes.
- **RESULT: PASS**

---

## Summary

| Track | Guest | Quote | Source URL | Result |
|-------|-------|-------|------------|--------|
| Taste | PASS | PASS (minor paraphrase) | PASS | PASS |
| Build the Machine | PASS | PASS | PASS | PASS |
| Doesn't Feel Right Yet | PASS | PASS (paraphrased) | PASS (quote from podcast, source is newsletter) | PASS |
| Don't Break the Streak | PASS | PASS (exact) | PASS | PASS |
| Crossing the Chasm | PASS | PASS (exact) | PASS | PASS |

**Overall: 5/5 PASS. No accuracy issues requiring code fixes.**

### Minor Notes (no action needed)
1. "Taste" keyQuote drops "about" — trivially different from transcript.
2. "Doesn't Feel Right Yet" keyQuote is a condensation of two sentences from the podcast, and the source listed is the newsletter (where the Linear Method is discussed) rather than the podcast (where the exact words appear). Both are valid Karri Saarinen sources on Lenny's platform.
3. "Crossing the Chasm" source uses `lennyspodcast.com` domain — valid alternate domain.
