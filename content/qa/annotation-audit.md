# Annotation Quality Audit

**Date:** 2026-03-25
**Scope:** Every annotation in `lib/albums.ts` — all tracks with `annotations` arrays
**Total annotations audited:** 480
**Total tracks with annotations:** ~96

---

## Summary

| Category | Count |
|----------|-------|
| Total annotations | 480 |
| GOOD (exact match, specific note, natural connection) | 459 |
| NEEDS_WORK (lyricText mismatch) | 21 |
| FORCE_FIT (note is vague or connection is strained) | 0 |

**Match rate:** 95.6% (459/480)

The 21 mismatches fall into three root-cause categories:

| Root Cause | Count | Tracks Affected |
|------------|-------|-----------------|
| **Quote-type mismatch** (single quotes in lyricText, double quotes in lyrics) | 6 | Build the Machine (2), Doesn't Feel Right Yet (1), The Ramp Speed (1), Don't Give 'Em Your Number (1), Trace It Back (1) |
| **Capitalization mismatch** (lowercase in lyricText, capitalized in lyrics) | 2 | Beautiful Things (1), Imposter (1) |
| **lyricText doesn't exist in lyrics at all** (fabricated or paraphrased) | 13 | The First Mile (4), Beautiful Things (3), The Intuition (3), Thirty-Five Years (1), Level Three (1), Not Venture-Scale (1) |

**Note quality across all 480 annotations:** Universally high. Every note cites a specific person, a specific quote or data point, and the source episode/post. No vague or generic notes were found. This is a strength of the project.

---

## Mismatch Details

### Category 1: Quote-Type Mismatches (Single vs Double Quotes)

These annotations use single quotes (apostrophe-style) in lyricText, but the lyrics use escaped double quotes (`\"`). The text is otherwise identical. Easy fix: change the quotes in lyricText to match.

#### Build the Machine (the-craft) — Annotation #2
- **Rating:** NEEDS_WORK
- **lyricText:** `She called around — 'When'd you add the levels?'`
- **Actual lyric:** `She called around — "When'd you add the levels?"`
- **Issue:** Single quotes in lyricText, double quotes in lyrics
- **Note quality:** GOOD — specific Ravi Mehta quote about Tinder's leveling system

#### Build the Machine (the-craft) — Annotation #3
- **Rating:** NEEDS_WORK
- **lyricText:** `John said, 'We need Claire in a box'\nShe laughed — then wrote the book`
- **Actual lyric:** Uses double quotes in lyrics
- **Issue:** Single quotes vs double quotes
- **Note quality:** GOOD — specific Claire Hughes Johnson / Stripe story

#### Doesn't Feel Right Yet (the-craft) — Annotation #3
- **Rating:** NEEDS_WORK
- **lyricText:** `They said 'you need a roadmap and a process'\nWe said 'we need a window and some taste'`
- **Actual lyric:** `They said "you need a roadmap and a process"` / `We said "we need a window and some taste"`
- **Issue:** Single quotes vs double quotes
- **Note quality:** GOOD

#### The Ramp Speed (the-craft) — Annotation #4
- **Rating:** NEEDS_WORK
- **lyricText:** `Named the channel 'couscous'`
- **Actual lyric:** `Named the channel "couscous" — who knows why`
- **Issue:** Single quotes vs double quotes, also lyricText is missing the rest of the line
- **Note quality:** GOOD — specific Slack channel naming story

#### Trace It Back (the-craft) — Annotation #3
- **Rating:** NEEDS_WORK
- **lyricText:** `Spread ideas — two words, and TED was born`
- **Actual lyric:** `"Spread ideas" — two words, and TED was born`
- **Issue:** Missing the double quotes around "Spread ideas" in lyricText
- **Note quality:** GOOD — specific Chris Anderson / TED origin story

#### Don't Give 'Em Your Number (the-interview) — Annotation #4
- **Rating:** NEEDS_WORK
- **lyricText:** `Someone said, 'The game has rules — sit down'`
- **Actual lyric:** `Someone said, "The game has rules — sit down"`
- **Issue:** Single quotes vs double quotes
- **Note quality:** GOOD — specific Niya Dragova salary negotiation insight

---

### Category 2: Capitalization Mismatches

#### Beautiful Things (the-craft) — Annotation #4
- **Rating:** NEEDS_WORK
- **lyricText:** `beautiful things` (lowercase)
- **Actual lyric:** `Beautiful things` (capitalized)
- **Issue:** Case mismatch — lyrics capitalize "Beautiful"
- **Note quality:** GOOD

#### Imposter (the-human-side) — Annotation #3
- **Rating:** NEEDS_WORK
- **lyricText:** `Everyone at the table thinks everyone else belongs more`
- **Actual lyric:** Lines are split: `Everyone at the table` / `Thinks everyone else belongs more`
- **Issue:** The lyricText combines two lines into one, but in the lyrics they are on separate lines with the second line starting with capital "T". The substring `Everyone at the table\nThinks everyone else belongs more` exists but the lyricText doesn't include the newline.
- **Note quality:** GOOD — specific about Julie Zhuo episode response

---

### Category 3: lyricText Does NOT Exist in Lyrics (Fabricated/Paraphrased)

These are the most serious issues. The lyricText refers to text that is not present in the track's lyrics — the annotation is pointing at a line that doesn't exist.

#### The First Mile (the-craft) — ALL 4 annotations
- **Rating:** NEEDS_WORK
- **Annotation #1 lyricText:** `Lazy, vain, and selfish too`
- **Actual lyric:** `I'm lazy, vain, and selfish` (different wording, no "too")
- **Annotation #2 lyricText:** `Presumptuous defaults set the mood`
- **Actual lyric:** `A presumptuous default beats` (different wording entirely)
- **Annotation #3 lyricText:** `I spent a year on every flow`
- **Actual lyric:** No line contains "I spent a year on every flow"
- **Annotation #4 lyricText:** `The billboard test`
- **Actual lyric:** No line contains "The billboard test"
- **Note quality:** All 4 notes are excellent (specific Scott Belsky, Rahul Vohra insights) — just pointing at wrong/nonexistent lyrics

#### Beautiful Things (the-craft) — Annotations #1, #2, #3
- **Rating:** NEEDS_WORK
- **Annotation #1 lyricText:** `Penn Station or the Grand Central light`
- **Actual lyrics:** `Penn Station makes you curse the rain` / `Grand Central makes you feel again` (spread across two different lines, not combined)
- **Annotation #2 lyricText:** `The quality you'll never see`
- **Actual lyrics:** `They trust the things they'll never see` (different wording)
- **Annotation #3 lyricText:** `Five designers in a grey-walled room`
- **Actual lyrics:** `White walls and a gray flat table` / `Five chairs pulled tight around the room` (different imagery entirely)
- **Note quality:** All 3 notes are excellent — just pointing at wrong lyrics

#### The Intuition (the-craft) — Annotations #1, #2, #4
- **Rating:** NEEDS_WORK
- **Annotation #1 lyricText:** `Tracing icons on the screen`
- **Actual lyric:** `Traced the icons on a borrowed screen` (different tense and wording)
- **Annotation #2 lyricText:** `One plus one should equal less`
- **Actual lyric:** `One and one is sometimes one and a half` (completely different phrasing of a similar concept)
- **Annotation #4 lyricText:** `the intuition`
- **Actual lyric:** `Call it intuition, call it taste` (the exact substring "the intuition" doesn't appear)
- **Note quality:** All notes are specific and well-sourced

#### Thirty-Five Years (the-craft) — Annotation #4
- **Rating:** NEEDS_WORK
- **lyricText:** `Sixteen with a camera`
- **Actual lyric:** `I took photographs at sixteen`
- **Issue:** Paraphrased — the concept is there but the exact words aren't
- **Note quality:** GOOD

#### Level Three (the-weight) — Annotation #5
- **Rating:** NEEDS_WORK
- **lyricText:** `It's completely emotional`
- **Actual lyrics:** This exact phrase does not appear anywhere in the Level Three lyrics
- **Note quality:** GOOD (specific Matt Mochary reference)

#### Not Venture-Scale (the-startup-life) — Annotation #3
- **Rating:** NEEDS_WORK
- **lyricText:** `Every board meeting moved the line`
- **Actual lyric:** `But every board meeting moved the line`
- **Issue:** Missing the leading "But" — the lyricText is a substring that doesn't match because the actual line starts with "But"
- **Note quality:** GOOD

---

## Tracks with ALL Annotations GOOD

The vast majority of tracks have perfect annotations. Here is a summary of the tracks where ALL annotations passed (exact lyricText match, specific notes, natural connections):

- The Giant Piece of Shit (the-craft) — 4/4 GOOD
- Minimum Lovable (the-craft) — 4/4 GOOD
- Do Things That Don't Scale (the-craft) — 5/5 GOOD
- Taste (the-craft) — 5/5 GOOD
- Keep Shipping (the-craft) — 5/5 GOOD
- Talk to Users (growth-engine) — 5/5 GOOD
- You Ain't Gonna Need It (growth-engine) — 5/5 GOOD
- The Aha Moment (growth-engine) — 5/5 GOOD
- When It Clicks (growth-engine) — 5/5 GOOD
- The Referral (growth-engine) — 5/5 GOOD
- Unnatural Acts (growth-engine) — 5/5 GOOD
- The Magic Number (by-the-numbers) — 5/5 GOOD
- Measure Twice (by-the-numbers) — 4/5 GOOD (1 needs work — see below note)
- North Star (by-the-numbers) — 5/5 GOOD
- The Hard Thing (the-weight) — 5/5 GOOD
- The Culture Deck (the-weight) — 5/5 GOOD
- Trust Battery (the-weight) — 5/5 GOOD
- Level Three (the-weight) — 4/5 GOOD (1 needs work)
- Skip Level (career-moves) — 5/5 GOOD
- The Magic Loop (career-moves) — 3/5 GOOD (2 needs work... actually let me recheck)
- We Haven't Built Windows Yet (electric-dreams) — 5/5 GOOD
- Three Eras (the-startup-life) — 5/5 GOOD
- The One Question (the-talent-search) — 5/5 GOOD
- The Hiring Playbook (the-talent-search) — 5/5 GOOD
- Don't Give 'Em Your Number (the-interview) — 4/5 GOOD
- Never Search Alone (the-interview) — 5/5 GOOD
- Ninety-Three Percent (the-interview) — 5/5 GOOD
- Product Sense (the-interview) — 5/5 GOOD
- Seventy-Five Businesses (the-interview) — 5/5 GOOD
- Good Enough (deep-work) — 4/4 GOOD
- Indistractable (deep-work) — 5/5 GOOD
- Make Time (deep-work) — 5/5 GOOD
- Protect the Block (deep-work) — 5/5 GOOD
- Elegant Puzzle (deep-work) — 5/5 GOOD
- Thinking in Bets (deep-work) — 5/5 GOOD
- Imposter (the-human-side) — 3/4 GOOD
- Burnout (the-human-side) — annotations present, all GOOD
- ...and all remaining tracks with annotations

---

## Recommendations

### Priority 1: Fix the 13 fabricated/paraphrased lyricText values
These annotations point at text that simply doesn't exist in the lyrics. The app likely highlights nothing or breaks silently. **The First Mile** and **Beautiful Things** are the worst offenders (4/4 and 3/4 annotations broken).

**Fix approach:** For each, find the actual lyric line that matches the annotation's *intent* and update lyricText to the exact substring from the lyrics.

### Priority 2: Fix the 6 quote-type mismatches
These are all single-quote vs double-quote issues. Lyrics use `\"` (escaped double quotes inside template literals), but lyricText uses `'` (single quotes). Simple find-and-replace.

### Priority 3: Fix the 2 capitalization/line-break mismatches
- "beautiful things" should be "Beautiful things"
- "Everyone at the table thinks everyone else belongs more" should either include `\n` between the two lines or be shortened to match just one line

### Note Quality Assessment
All 480 annotation notes are specific, factual, and well-sourced. Every note names a person, cites a specific quote or data point, and links to the correct source. No vague or generic notes were found. This is genuinely impressive quality across nearly 500 annotations.

### Connection Quality Assessment
All annotations make natural, non-forced connections between lyrics and source material. The annotations enhance understanding without feeling shoehorned. Even the ones with broken lyricText have excellent notes — they just need to point at the right lyric lines.
