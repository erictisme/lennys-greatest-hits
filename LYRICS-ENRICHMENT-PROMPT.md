# Lyrics Enrichment Task

## What You're Doing
We have 12 songs for a Lenny Rachitsky contest entry. The lyrics are good but too generic — they need SPECIFIC numbers, stats, and benchmarks from Lenny's actual archive to make the advice sink in. Numbers turn platitudes into earworms.

## How To Do It
Use the Lenny MCP tools (`mcp__lennysdata__search_content`, `mcp__lennysdata__read_content`, `mcp__lennysdata__read_excerpt`) to find specific stats and quotes.

For EACH song below:
1. Search the Lenny archive for the specific episode/newsletter listed
2. Read excerpts to find CONCRETE NUMBERS — growth rates, percentages, dollar amounts, user counts, time durations, specific years
3. Update the lyrics in `content/suno-prompts/{slug}.json` — weave 2-3 specific numbers into the verses
4. Add a new field `"source"` to each JSON with the newsletter/podcast title and guest name

## The 12 Songs + What To Search For

### 1. do-things-that-dont-scale.json
**Search:** "first users" "doing things that don't scale" "consumer business" "1000 users"
**Source:** Lenny's newsletter series on finding first users / consumer scaling
**Looking for:** How many doors did Airbnb founders knock on? How many users did Stripe onboard manually? What was DoorDash's first day order count? Specific numbers about early traction.

### 2. product-market-fit.json
**Search:** "product market fit" "Rahul Vohra" "Superhuman" "40 percent" "very disappointed"
**Source:** Rahul Vohra podcast episode + PMF newsletter
**Looking for:** The 40% threshold is already in the lyrics (good). What was Superhuman's actual score when they first ran the test? How many users did they survey? What did the score improve to?

### 3. the-maze.json
**Search:** "tarpit ideas" "Dalton Caldwell" "pivot" "YC startups"
**Source:** Dalton Caldwell podcast (Lessons from 1,000+ YC startups)
**Looking for:** How many YC startups has Dalton seen? What percentage pivot? How many are tarpit ideas? Average time founders spend on tarpit ideas before realizing?

### 4. taste.json
**Search:** "product sense" "Scott Belsky" "taste" "intuition" "Julie Zhuo"
**Source:** Scott Belsky podcast + product sense newsletter
**Looking for:** Any specific examples with numbers — how many features did they say no to? What percentage of product decisions are intuition vs data?

### 5. eleven-stars.json
**Search:** "Brian Chesky" "eleven stars" "11 star" "Airbnb"
**Source:** Brian Chesky podcast episode
**Looking for:** The actual 1-through-11 star descriptions Chesky gave. How long it took Lenny to book the interview (1 year). Airbnb's growth numbers. Specific revenue or user stats.

### 6. talk-to-users.json
**Search:** "Teresa Torres" "continuous discovery" "customer interviews" "user research"
**Source:** Teresa Torres podcast episode(s)
**Looking for:** How often should you talk to users? (weekly) How many interviews per week? How many companies actually do continuous discovery? Time saved by early user research.

### 7. ship-it.json
**Search:** "shipping velocity" "speed" "Ramp" "increasing velocity"
**Source:** "Increasing team velocity" newsletter + "How Ramp builds product"
**Looking for:** How fast does Ramp ship? Features per week? Sprint length? Any specific velocity metrics. Note: remove Keith Rabois reference (he's not a Lenny guest) and replace with Ramp or another Lenny-specific source.

### 8. vibe-coding.json
**Search:** "vibe coding" "Claude Code" "Lazar Jovanovic" "Lovable" "AI coding"
**Source:** Lazar Jovanovic podcast + vibe coding newsletter + Claude Code newsletter
**Looking for:** How many replies did Lenny get when he asked what people vibe coded? (1000+) Percentage of code written by AI. How many non-engineers are now building. Revenue of vibe-coded products.

### 9. feature-factory.json
**Search:** "John Cutler" "feature factory" "feature teams" "product teams" "outcomes"
**Source:** John Cutler podcast episode
**Looking for:** The 12 signs you're in a feature factory. What percentage of features are actually used? Average feature utilization rate. How many features shipped vs adopted.

### 10. imposter.json
**Search:** "imposter syndrome" "Julie Zhuo" "impostor"
**Source:** Julie Zhuo podcast (Episode 2 of Lenny's Podcast!) + community wisdom post
**Looking for:** What percentage of tech workers experience imposter syndrome? Julie Zhuo's specific story — what level was she at Facebook when she felt it most? How many years? Community survey numbers.

### 11. burnout.json
**Search:** "burnout" "Andy Johns" "enough" "anxiety" "Jonny Miller"
**Source:** Andy Johns podcast + guest post + Jonny Miller episode
**Looking for:** Andy Johns checked 17 of 29 boxes on a stress inventory. What year? What companies was he at? Hospital story details. Any survey data on PM burnout rates.

### 12. the-ic-track.json
**Search:** "IC track" "individual contributor" "Tal Raviv" "career ladder" "management"
**Source:** Tal Raviv podcast + career ladders newsletter
**Looking for:** 90th percentile IC PM comp ($350K base / $1M total). What percentage of companies have dual IC/manager tracks (two-thirds)? How many years did Tal stay IC? Specific career progression numbers.

## Rules
- Keep lyrics CATCHY FIRST. Numbers should flow naturally in the rhythm, not feel forced.
- Don't add numbers that break the syllable count or flow
- If you can't find a specific stat, don't make one up — leave that verse as is
- Update the JSON files in place
- Add the `"source"` field with format: `"source": {"title": "...", "guest": "...", "type": "newsletter|podcast"}`
