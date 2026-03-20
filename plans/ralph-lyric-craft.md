# Ralph: Lyric Craft Guide — Songwriting Principles for Suno

## Goal
Create a practical, 1-page lyric-writing cheat sheet based on studying Eric's reference artists + professional songwriting principles. NOT a research project — a tool for writing better batch 2 lyrics.

## IMPORTANT NOTES FOR RALPH
- Output goes to `content/lyric-craft-guide.md`
- DO NOT modify any code files. This is research only.
- Keep the final guide to 1 page (under 100 lines). Practical, not academic.
- Eric's reference artists: Jon Guerra, Jonathan Ogden, Bon Iver (Justin Vernon), Chet Baker, Jacob Collier, Holo Coves, Iron and Wine, Phoebe Bridgers
- Eric's music background: LTCL violin, sings, guitar, pop/jazz/indie folk/Christian indie
- Eric LIKED from batch 1: cello, varied tempo, varied singers, warmth
- Eric DIDN'T like: rough/industrial, songs that were vibey but not educational
- This guide is for writing lyrics that will be sung by Suno AI, not a human — so mouth-feel and singability for AI voices matters

## Tasks

- [ ] **Task 1: Study reference artists' actual lyrics**
  Search the web for lyrics from Eric's reference artists. For each artist, find 2-3 of their best songs and analyze:

  **Jon Guerra** — known for: warmth, honesty, conversational intimacy
  - Find lyrics to 2-3 songs. What makes them work? Word choice, line length, imagery?

  **Jonathan Ogden** — known for: vulnerability, simplicity, close-mic intimacy
  - Find lyrics to 2-3 songs. How does he keep things simple without being shallow?

  **Bon Iver (Justin Vernon)** — known for: abstract imagery, emotional weight, falsetto
  - Find lyrics to 2-3 songs. How does he create feeling without being literal?

  **Phoebe Bridgers** — known for: dry wit, specificity, melancholy
  - Find lyrics to 2-3 songs. How does she make personal feel universal?

  **Iron and Wine** — known for: pastoral imagery, gentle storytelling
  - Find lyrics to 2-3 songs. How does he use imagery instead of statements?

  Output: `content/brainstorm/lyric-study-raw.md`

- [ ] **Task 2: Extract songwriting principles**
  From the lyric study + general songwriting craft knowledge, extract principles that matter for our project:

  - **Syllable economy:** How many syllables per line work best? (Compare our batch 1 to the reference artists)
  - **Show vs tell:** Our batch 1 says "Burnout isn't working too much" (telling). What would Bon Iver do? (showing)
  - **Vowel sounds:** Which vowels sing well on high notes? Which consonants land on beats?
  - **Specificity:** "Five AM alarm, the slack is lit" (specific) vs "Working hard every day" (generic) — our batch 1 already does this sometimes
  - **The hook test:** Can you hum the chorus after one listen?
  - **Emotional arc:** How do the best songs build tension and release?
  - **Rhyme quality:** Perfect rhymes vs. slant rhymes vs. no rhymes — what works for each genre?

  Output: `content/brainstorm/lyric-principles.md`

- [ ] **Task 3: Suno-specific tips**
  Search the web for Suno v5 lyric tips, what works and what doesn't:
  - What syllable patterns does Suno handle well?
  - What vocal styles does it nail vs. struggle with?
  - How do structure tags affect output?
  - What makes Suno "mumble" or lose words?
  - Tips from r/SunoAI or other communities
  - Male vs female voice quality differences

  Output: `content/brainstorm/suno-lyric-tips.md`

- [ ] **Task 4: Audit batch 1 lyrics**
  Read all lyrics from `content/suno-prompts/*.json` (skip feature-factory.json).
  For each song, note:
  - Lines that are too wordy (could be tighter)
  - Lines where rhymes feel forced
  - Lines that TELL instead of SHOW
  - Lines that are generic startup advice vs. specific Lenny content
  - The BEST lines (keep these — learn from what works)
  - Suggested rewrites for the worst 2-3 lines per song

  Output: `content/brainstorm/batch1-audit.md`

- [ ] **Task 5: Write the 1-page cheat sheet**
  Compile everything into a practical guide. Format:

  ```markdown
  # Lyric Craft Guide — Lenny's Greatest Hits

  ## The 5 Rules
  1. [Rule with example]
  2. [Rule with example]
  ...

  ## Per-Genre Tips
  ### Indie Folk (Founders album)
  [What works, what to avoid, reference: Jon Guerra/Bon Iver]

  ### Jazz Pop (Product album)
  [What works, what to avoid, reference: Chet Baker/Jacob Collier]

  ### Lo-Fi Hip Hop (Builders album)
  [What works, what to avoid]

  ### Acoustic Soul (Human Side album)
  [What works, what to avoid, reference: Jonathan Ogden/Iron and Wine]

  ## Suno-Specific
  - [Tip 1]
  - [Tip 2]
  ...

  ## Before You Write Checklist
  - [ ] Can I hum the chorus?
  - [ ] Is every line under 12 syllables?
  - [ ] ...
  ```

  Output: `content/lyric-craft-guide.md`
