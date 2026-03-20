# Ralph: Story Behind the Song — Deep Archive Content for Each Track

## Goal
For each of our 10 existing songs, mine the Lenny archive via MCP to build rich "Story Behind the Song" content. This is the highest-leverage work — it turns our data depth from 3/5 to 5/5 without regenerating any audio.

## IMPORTANT NOTES FOR RALPH
- Use Lenny MCP tools: `mcp__lennysdata__search_content`, `mcp__lennysdata__read_content`, `mcp__lennysdata__read_excerpt`, `mcp__lennysdata__list_content`
- Output goes to `content/stories/` — one .md file per song
- DO NOT modify any code files. This is research only.
- Be THOROUGH. Read multiple excerpts per episode. Cross-reference across episodes.
- We want the stuff you'd ONLY know if you actually listened to the episode — not generic startup advice.

## Tasks

- [ ] **Task 1: Do Things That Don't Scale**
  Search: "first users" "doing things that don't scale" "Airbnb" "DoorDash" "Tinder" "consumer apps" "1000 users"
  Find: The SPECIFIC stories. How many doors did Chesky knock on? What was DoorDash's first URL? How did Tinder seed at USC? What was Stripe's "installation" process? Which Lenny newsletter covered this and what were the BEST quotes?
  Output: `content/stories/do-things-that-dont-scale.md`

- [ ] **Task 2: Product-Market Fit (You'll Know)**
  Search: "product market fit" "Rahul Vohra" "Superhuman" "40 percent" "very disappointed" "Sean Ellis"
  Find: Rahul's full journey. What was Superhuman's FIRST PMF score? (22%). How did he segment to find high-expectation customers? What did the score improve to? How long did it take (3 years)? The exact survey question. What did "pulling the product out of your hands" feel like in practice?
  Output: `content/stories/product-market-fit.md`

- [ ] **Task 3: The Maze**
  Search: "tarpit ideas" "Dalton Caldwell" "pivot" "YC startups" "maze" "stuck"
  Find: How many YC startups has Dalton seen? (1000+). What percentage pivot? What are his top examples of tarpit ideas? The "dinner party test" — did he actually say that? What's the median time founders spend before pivoting? Specific stories of founders who escaped the maze.
  Output: `content/stories/the-maze.md`

- [ ] **Task 4: Taste**
  Search: "product sense" "taste" "Scott Belsky" "intuition" "craft" "design" "lazy vain selfish"
  Find: Belsky's "first 30 seconds" framework. The full quote about users being lazy, vain, and selfish. What specific product decisions did he cite? How does he define taste vs. data-driven? Any concrete examples of "taste" saving a product?
  Output: `content/stories/taste.md`

- [ ] **Task 5: Eleven Stars**
  Search: "Brian Chesky" "eleven stars" "11 star" "Airbnb" "experience" "craft"
  Find: The FULL 1-through-11 star breakdown Chesky gave. How long it took Lenny to land the interview (reportedly 1 year). The actual Airbnb metrics he shared. His philosophy on founder mode. Why this became Lenny's most-listened episode. What specific operational changes Chesky made.
  Output: `content/stories/eleven-stars.md`

- [ ] **Task 6: Talk to Users**
  Search: "Teresa Torres" "continuous discovery" "customer interviews" "user research" "talk to users"
  Find: How many students has Teresa trained? (11,000+). Her "one interview a week" rule. The #1 most recommended book in Lenny's Slack. Specific examples of companies that transformed by talking to users. The gap between what teams think they know and what users actually do.
  Output: `content/stories/talk-to-users.md`

- [ ] **Task 7: Ship It**
  Search: "shipping velocity" "speed" "Ramp" "Geoff Charles" "increasing velocity" "ship fast"
  Find: Ramp's actual numbers — $100M ARR in how long? How many PMs? How many engineers? Their sprint cadence. Geoff Charles's specific advice. Other Lenny guests who talked about shipping speed. The "speed is a proxy for caring" idea — who said it?
  Output: `content/stories/ship-it.md`

- [ ] **Task 8: Vibe Coding**
  Search: "vibe coding" "Lovable" "Lazar Jovanovic" "AI coding" "Claude Code" "non-technical founders"
  Find: Lovable's actual metrics ($200M ARR? timeline? team size? valuation?). How many people responded to Lenny's vibe coding thread. Specific stories of non-engineers who shipped products. The shift in who can build software. Andrej Karpathy's role in coining the term.
  Output: `content/stories/vibe-coding.md`

- [ ] **Task 9: Imposter**
  Search: "imposter syndrome" "Julie Zhuo" "impostor" "belong" "doubt" "confidence"
  Find: Julie Zhuo's specific story — 13 years at Facebook, IC designer to VP of Design. This was Episode 2 of Lenny's podcast! What specific moments of imposter syndrome did she share? Her book "The Making of a Manager." What percentage of tech workers experience this? Other guests who've talked about feeling like frauds.
  Output: `content/stories/imposter.md`

- [ ] **Task 10: Burnout**
  Search: "burnout" "Andy Johns" "stress" "anxiety" "mental health" "Jonny Miller" "enough"
  Find: Andy Johns's career arc — Facebook, Twitter, Wealthfront — 17 years. The stress inventory story. Jonny Miller's "feather, brick, dump truck" framework. Specific burnout statistics in tech. What Lenny himself has said about sustainable pace. The "it's not the hours, it's the misalignment" insight.
  Output: `content/stories/burnout.md`

- [ ] **Task 11: Compile master file**
  Read all 10 story files. Create `content/stories/INDEX.md` with:
  - For each song: the single most surprising fact, the best quote, the specific episode title + guest name + episode number if available
  - A ranked list: which songs have the DEEPEST stories (most material to work with)
  - Suggestions for which stories could become batch 2 songs (rich material we found but didn't use)

## Output Format for Each Story File

```markdown
# [Song Title] — The Story Behind the Song

## Source Episode(s)
- **Primary:** [Episode title, guest name, episode number if known]
- **Secondary:** [Other related episodes/newsletters]

## The Real Story
[2-3 paragraphs of the actual narrative — what happened, who was involved, what changed]

## Key Numbers
- [Specific stat 1]
- [Specific stat 2]
- [Specific stat 3]

## Best Quotes (verbatim from archive)
> "Quote 1" — Guest Name
> "Quote 2" — Guest Name

## What You'd Only Know From Listening
[The non-obvious insights — the things that make this Lenny-specific, not generic startup advice]

## Connections to Other Episodes
[How this topic connects to other Lenny guests/episodes — the web of knowledge]
```
