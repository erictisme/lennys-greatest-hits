# Ralph Research: Album Recategorization into 11 JTBD Albums

You are Ralph, a research agent for "Lenny's Greatest Hits."

## Task

Lenny Rachitsky organizes his 2024 best-of post into 11 "I want to..." JTBD categories. We want to adopt these as our album structure. Your job:

1. **Validate the 11 categories** against the full Lenny archive (638 pieces)
2. **Name each album** with a catchy title (not corporate — something you'd see on Spotify)
3. **Recategorize all existing songs** (36 total) into the new album structure
4. **Identify gaps** — which categories have few/no songs yet? These become batch 3+ priorities.

## The 11 JTBD Categories (from Lenny's 2024 best-of)

1. **"I want to learn to build better products"** — how companies operate, strategy, product sense, frameworks
2. **"I want to grow my product"** — Racecar, first users, virality, positioning, GTM, SEO
3. **"I want benchmarks"** — retention, activation, churn, growth rate, payback period
4. **"I want to become a better leader and manager"** — reviews, planning, decision-making, firing
5. **"I want to get ahead in my career"** — Magic Loop, managing up, influence, prioritization
6. **"I want to get smarter about AI"** — ChatGPT, prompt eng, AI products, vibe coding
7. **"I want to start a company"** — B2B/B2C/marketplace, fundraising, PMF, failure, pivots
8. **"I want to hire the best people"** — interview questions, hiring, early team
9. **"I want to get a job"** — salary negotiation, interview prep, job search
10. **"I want to be more productive"** — LNO framework, templates, time management
11. **"I want to feel less stressed"** — burnout, enough, overwhelm, asking for help, emotions

## Step 1: Validate Categories

Use `mcp__lennysdata__search_content` to sample content across the archive. Questions to answer:
- Do all 638 pieces fit cleanly into these 11 categories?
- Are there pieces that don't fit any category?
- Should any categories be split or merged?
- Are there obvious missing categories?

## Step 2: Name the Albums

Eric's direction: names should "go down to the heart." Not corporate. Think album titles you'd see on Spotify. Eric's initial thoughts:
1. Product Building → ?
2. Growing Products → "Growth Engine" (existing)
3. Benchmarks → ? (about numbers, helping people remember them)
4. Leadership & Management → ?
5. The Career Path → ?
6. AI (AI-Native, AI-Pilled, AI Smarts?) → ?
7. Starting a Company → "The Startup Life" (existing)
8. Hiring → ?
9. Getting a Job → ?
10. Productivity → ?
11. Stress/Overwhelm → NOT "stress management" (too superficial). Currently "The Human Side" — could keep or evolve.

For each, propose 3 name options. Consider: would this look good as an album cover? Does it evoke feeling, not just topic?

## Step 3: Recategorize Existing Songs

Map all 36 songs (11 batch 1 + 25 batch 2) into the 11 albums. Some songs may move. Output as a table:

| Song | Current Album | New Album | Why |

## Step 4: Identify Gaps & Batch 3 Priorities

For each of the 11 albums, list:
- How many songs we have
- How many songs we need (aim for 3-5 per album minimum)
- Top 3 Lenny articles/podcasts that should become songs for this album
- Use `mcp__lennysdata__search_content` to find the best candidates

## Step 5: Check Completeness

Specifically search for content that might NOT fit the 11 categories:
- Search for "pricing" content — does it fit "grow" or need its own album?
- Search for "sales" content — same question
- Search for "marketplace" content — fits "start a company" or its own?
- Search for "design" content — fits "build products" or its own?

## Output

Save to `content/songs/album-recategorization.md` with:
1. Validated category list (with any adjustments)
2. Named albums (3 options each, with recommendation)
3. Full song recategorization table
4. Gap analysis with batch 3 priorities
5. Completeness check results
