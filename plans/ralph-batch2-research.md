# Ralph: Batch 2 Song Research — Deep MCP Mining for Educational Songs

## Goal
Find the 10 BEST episodes/articles from Lenny's archive that would make incredible, educational, catchy songs. Batch 1 was "startup Twitter greatest hits" — Batch 2 needs to be "things you'd ONLY know from Lenny's podcast."

## IMPORTANT NOTES FOR RALPH
- Use Lenny MCP tools: `mcp__lennysdata__search_content`, `mcp__lennysdata__read_content`, `mcp__lennysdata__read_excerpt`, `mcp__lennysdata__list_content`
- Output goes to `content/brainstorm/batch2/` — create this directory
- DO NOT modify any code files. This is research only.
- The key filter: would this song teach you something you didn't know? Not "PMF matters" (everyone knows) but "Superhuman scored 22% then segmented to 33% then hit 58%" (only Lenny listeners know).
- Songs Eric LIKED from batch 1: cello, varied tempo, varied singers, warmth
- Songs Eric DIDN'T like: rough/industrial (Feature Factory), songs that were vibey but not educational

## Batch 1 Songs (DO NOT REPEAT these topics)
- Do Things That Don't Scale
- Product-Market Fit
- The Maze (tarpit ideas)
- Taste (product sense)
- Eleven Stars (Chesky)
- Talk to Users (Teresa Torres)
- Ship It (velocity)
- Vibe Coding
- Imposter Syndrome
- Burnout

## Tasks

- [ ] **Task 1: Scan the full archive for story-rich episodes**
  Use `mcp__lennysdata__list_content` to scan the FULL archive systematically:
  - content_type="podcast" with offset 0, 50, 100, 150, 200, 250
  - content_type="newsletter" with offset 0, 50, 100, 150, 200, 250, 300

  For each batch, note episodes/articles that sound like they have SPECIFIC STORIES with SPECIFIC NUMBERS — not generic advice. Flag the top 30 candidates.

  Output: `content/brainstorm/batch2/01-archive-scan.md`

- [ ] **Task 2: Deep-read the top 30 candidates**
  For each of the 30 flagged pieces, use `mcp__lennysdata__read_excerpt` to find:
  - A specific turning-point moment (founder story, career pivot, product decision)
  - Concrete numbers (growth rates, revenue, users, time periods)
  - Emotionally resonant quotes
  - Whether it's "Lenny-specific" — would someone know this from general startup Twitter?

  Rate each candidate 1-5 on:
  - **Story power:** Is there a narrative arc? A before/after? A surprise?
  - **Singability:** Can the key insight fit in a chorus? Is the language vivid?
  - **Educational value:** Would you learn something new?
  - **Emotional resonance:** Does it hit you in the gut?
  - **Lenny-specificity:** Would you ONLY know this from Lenny's archive?

  Output: `content/brainstorm/batch2/02-deep-reads.md`

- [ ] **Task 3: Identify thematic gaps**
  Look at batch 1 topics and identify what's MISSING from a JTBD perspective:

  **Founders album** has: scaling, PMF, pivoting. Missing: fundraising? co-founder dynamics? pricing? first hire?
  **Product album** has: taste, craft, user research. Missing: prioritization? saying no? metrics? A/B testing?
  **Builders album** has: shipping, vibe coding. Missing: eng/design tension? technical debt? architecture decisions? team dynamics?
  **Human Side album** has: imposter, burnout. Missing: career transitions? negotiation? leadership? work-life? finding meaning?

  For each gap, search the archive for the strongest episode on that topic.

  Output: `content/brainstorm/batch2/03-thematic-gaps.md`

- [ ] **Task 4: Find the "hidden gems"**
  Search for episodes/articles that are NOT the obvious big names but have incredible stories:
  - Search for "surprising" "counterintuitive" "unexpected" "wrong" "mistake"
  - Search for episodes with less-known guests who had breakthrough moments
  - Search for newsletters where Lenny shared personal stories or vulnerable moments
  - Search for debates between guests — where two experts disagree

  The goal: find 5-10 episodes that most Lenny subscribers haven't listened to but would LOVE as songs.

  Output: `content/brainstorm/batch2/04-hidden-gems.md`

- [ ] **Task 5: Final 10 song candidates — ranked and briefed**
  From all research, pick the 10 BEST candidates for batch 2. For each:

  ```markdown
  ## [Song Title Idea]
  **Source:** [Episode/article title + guest]
  **Album:** [Founders / Product / Builders / The Human Side]
  **The Story:** [2-3 sentences — the specific narrative]
  **The Hook:** [What would the chorus be about?]
  **Key Numbers:** [Specific stats to weave in]
  **Best Quote:** [Verbatim from archive]
  **Why It's a Song:** [Why this works as music, not just an article summary]
  **Vocal Style:** [Male/female, genre suggestion, mood]
  **Score:** Story: X, Singability: X, Educational: X, Emotional: X, Lenny-specific: X = Total
  ```

  Rank by total score. Ensure at least 2 candidates per album.

  Output: `content/brainstorm/batch2/05-final-candidates.md`

- [ ] **Task 6: Source material extraction**
  For the top 10 candidates, do a DEEP read of each source episode/article.
  Use `mcp__lennysdata__read_content` (not just excerpt) to get the full content.

  For each, extract:
  - The full story arc (beginning, middle, end)
  - Every specific number mentioned
  - Every quotable line
  - The emotional turning point
  - Connections to other Lenny episodes

  Output: `content/brainstorm/batch2/06-source-material.md`
