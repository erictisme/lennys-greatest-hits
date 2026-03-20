# Lenny Contest — Master Strategy
**Deadline:** April 15, 2026
**Goal:** Win Lenny's "build something cool with my data" contest
**Data source:** lennys-data MCP (638 pieces: 349 newsletters, 289 podcasts)

---

## Submissions Timeline

### v1: Lenny For You + Lenny Skills (SUBMITTED)
- Personalized recommendations from Lenny's archive
- Lenny's reaction: "Love" — polite but not blown away
- **Lesson:** Utility alone isn't enough. Needs to be surprising, delightful, or create a new way to experience the content.

### v2: Which Expert to Ignore (quiz) + Contradiction Simulator
- Quiz as promotional hook, Contradiction Simulator as main product
- HBS case-method style — face real startup dilemmas, pick between experts, learn WHEN each is right
- **Status:** Quiz partially built (17 iterations). Contradiction Simulator researched but not built.
- **Lesson:** Got caught in analysis paralysis. Over-researched, under-shipped.

### v3: Lenny's Greatest Hits (IN PROGRESS)
- 12 tech culture anthems as actual playable songs (Suno-generated)
- Spotify/Apple Music-style web app
- **Status:** Web app complete (21 tasks). Songs need manual generation on suno.com (API dead). 12 prompts ready.
- **What's left:** Generate songs, download MP3s, drop into public/audio/, test playback, deploy to Vercel.

### v4: Benchmarks / Expert Interview Treasure Trove (IDEA)
- Lenny's archive contains growth rates, conversion rates, pricing decisions, hiring numbers — the kind of data mgmt consultants pay 5 figures for in expert interviews
- "How fast did Airbnb grow in year 1?" "What conversion rate should I target for a B2B SaaS onboarding flow?" — all answered with REAL numbers from REAL founders
- Could beat LennyBot/ChatGPT by being deeply structured + citing specific episodes
- **Key question:** How does Delphi work and can we build something better using RAG on Lenny's data?
- **Research needed:** Delphi.ai deep dive, RAG architecture for structured data extraction, benchmark data mining from archive

### v5: Value to the World / Community Layer (IDEA)
- Quantify how much value each podcast/article added to the world
- Fans write about what struck them from their favorite articles
- Feeds into article engagement / reshapes articles in an interactive way
- Community highlights, notable X posts linked to each article, value quantified
- **Key question:** How do you measure "value added" in a way that's not just engagement metrics?
- **Research needed:** What X/LinkedIn posts reference which Lenny episodes? Can we scrape/aggregate this? What does "value to the world" look like as a UI?

---

## What We've Learned

### Bottleneck: Idea Generation, Not Execution
- Ralph can build anything in hours. The constraint is picking the RIGHT thing.
- v2 proved that more research doesn't equal better ideas — Eric's instinct to pivot was more valuable than 18 research docs.
- The best ideas came from Eric pushing back on AI output, not from AI research processes.

### What Lenny Probably Wants
Based on research/02-lenny-reactions.md and competitive analysis:
- **Surprising** — not "yet another chatbot" or "yet another dashboard"
- **Shows love for the content** — demonstrates deep engagement with the archive
- **Shareable** — creates screenshot moments for X/LinkedIn
- **Original format** — something that couldn't exist without Lenny's specific data
- **Polish matters** — Lenny has taste. Sloppy = instant dismiss.

### What's Working
- Songs (v3) are the most SURPRISING entry — nobody else is doing this
- The web app quality is high (premium Spotify aesthetic)
- Eric's creative instinct (pivoting to songs) was better than systematic research

### The Taste Problem (v2 Post-Mortem)
AI research/idea generation has little taste. v2 was technically sound but socially embarrassing:
- Walls of text because AI defaults to "more = better"
- Personality test results nobody would want on their LinkedIn
- 18 research docs but zero "would I send this to a friend?" gut checks
- AI optimized for comprehensiveness when it should have optimized for coolness
- **Key insight:** If the output is embarrassing to share, the product is dead. No amount of pedagogical grounding saves you.

### Anti-Patterns to Avoid
- Over-researching before building (v2 trap)
- Treating AI research as a substitute for human taste/judgment
- Building utilities when Lenny wants delight
- Analysis paralysis disguised as "being systematic"
- Letting AI generate share copy or personality labels without heavy human editing — AI is terrible at knowing what's cool vs cringe

---

## Systematic Approach Going Forward

### For each new idea:
1. **60-second gut check:** Would Lenny screenshot this and post it? Would YOU send this link to a friend?
2. **30-minute spike:** Can Ralph build a working prototype in 30 min? If not, scope down.
3. **Ship first, research second:** Deploy something ugly but functional, THEN refine based on what's actually interesting.

### Auto-Research Ralph (Karpathy-style)
Set up a recurring Ralph that:
- Mines the Lenny archive for specific data types (benchmarks, frameworks, quotes, contradictions)
- Stores structured findings in a knowledge base
- Runs nightly, appends new discoveries
- Eric reviews findings each morning and picks what's interesting

This inverts the process: instead of "idea -> research -> build", it's "research generates ideas organically."

### Ideas Backlog
Add new ideas here as they come. Rate each on:
- **Surprise factor** (1-5): Would Lenny say "whoa"?
- **Feasibility** (1-5): Can Ralph build it in < 24 hours?
- **Shareability** (1-5): Screenshot moment on X?
- **Data depth** (1-5): Does it USE the archive meaningfully?

| Idea | Surprise | Feasible | Shareable | Data Depth | Total | Status |
|------|----------|----------|-----------|------------|-------|--------|
| Greatest Hits (songs) | 5 | 4 | 5 | 3 | 17 | Building |
| Benchmarks/Expert Interviews | 4 | 3 | 4 | 5 | 16 | Idea |
| Value to the World | 3 | 2 | 4 | 5 | 14 | Idea |
| Contradiction Simulator | 4 | 3 | 4 | 4 | 15 | Researched |
| Expert Quiz | 3 | 5 | 4 | 2 | 14 | Partially built |

---

## Open Questions
- Can we submit multiple entries? Or is it one per person?
- Is the Lenny MCP stable now? It was down during some Ralph runs.
- For benchmarks idea: how does Delphi.ai work under the hood? What's their moat vs RAG?
- For community idea: can we access X API to find posts referencing Lenny episodes?
- Should we focus on polishing ONE great entry or shotgun multiple?
