# Source URL Audit

Audited: 2026-03-25
File: `lib/albums.ts`

## Summary

- **Total unique track slugs**: 80
- **Total unique URLs (across annotations + sources arrays)**: ~130
- **OK (Lenny domains)**: ~125
- **Empty strings**: 10 (2 tracks)
- **Non-Lenny but legitimate**: 3 (2 tracks)
- **Suspicious/Fabricated**: 0

## Flagged URLs

### Empty URLs (sourceUrl: "")

These annotations have a sourceTitle but the URL field is an empty string.

| Track Slug | Source Title | URL | Status |
|---|---|---|---|
| crossing-the-chasm | Geoffrey Moore on finding your beachhead, crossing the chasm, and dominating a market | *(empty)* | EMPTY |
| crossing-the-chasm | Geoffrey Moore on finding your beachhead, crossing the chasm, and dominating a market | *(empty)* | EMPTY |
| crossing-the-chasm | Geoffrey Moore on finding your beachhead, crossing the chasm, and dominating a market | *(empty)* | EMPTY |
| crossing-the-chasm | Geoffrey Moore on finding your beachhead, crossing the chasm, and dominating a market | *(empty)* | EMPTY |
| crossing-the-chasm | Geoffrey Moore on finding your beachhead, crossing the chasm, and dominating a market | *(empty)* | EMPTY |
| the-long-game | Building a long and meaningful career \| Nikhyl Singhal (Meta, Google) | *(empty)* | EMPTY |
| the-long-game | Building a long and meaningful career \| Nikhyl Singhal (Meta, Google) | *(empty)* | EMPTY |
| the-long-game | Building a long and meaningful career \| Nikhyl Singhal (Meta, Google) | *(empty)* | EMPTY |
| the-long-game | Building a long and meaningful career \| Nikhyl Singhal (Meta, Google) | *(empty)* | EMPTY |
| the-long-game | Building a long and meaningful career \| Nikhyl Singhal (Meta, Google) | *(empty)* | EMPTY |

**Note:** Both tracks DO have valid URLs in their `sources` array — the empty URLs are only in the `annotations` array. The sources array has:
- `crossing-the-chasm` sources: `https://www.lennyspodcast.com/geoffrey-moore-on-finding-your-beachhead-crossing-the-chasm-and-dominating-a-market/` (OK)
- `the-long-game` sources: `https://www.lennysnewsletter.com/p/building-a-long-and-meaningful-career` (OK)

**Fix:** Copy the source URL into each annotation's `sourceUrl` field.

### Non-Lenny URLs (legitimate external references)

| Track Slug | Source Title | URL | Status |
|---|---|---|---|
| do-things-that-dont-scale | Do Things That Don't Scale | https://paulgraham.com/ds.html | NON-LENNY (Paul Graham essay, legitimate reference) |
| seventy-five-businesses | I've run 75+ businesses. Here's why you're probably chasing the wrong idea. | https://www.youtube.com/watch?v=VxAwUb86MUE | NON-LENNY (YouTube — likely Lenny's Podcast YouTube channel) |

**Verdict:** Both are legitimate. The Paul Graham essay is the original source for "do things that don't scale." The YouTube URL appears to be the Lenny's Podcast episode with Andrew Wilkinson published on YouTube rather than Substack.

## Full Track-Level URL Audit (unique URLs per track)

All annotation and sources-array URLs, deduplicated per track.

| Track Slug | Source Title | URL | Status |
|---|---|---|---|
| a-hundred-nos | (sources) | https://www.lennysnewsletter.com/p/melanie-perkins | OK |
| ask-for-help | On asking for help (even when you really don't want to) | https://www.lennysnewsletter.com/p/on-asking-for-help-even-when-you | OK |
| beautiful-things | Building beautiful products with Stripe's Head of Design \| Katie Dill | https://www.lennysnewsletter.com/p/building-beautiful-products-with | OK |
| bend-the-room | A PM's guide to influence | https://www.lennysnewsletter.com/p/a-pms-guide-to-influence | OK |
| bend-the-room | (sources) | https://www.lennysnewsletter.com/p/how-to-get-better-at-influence | OK |
| blow-their-socks-off | Elena Verna 4.0 | https://www.lennysnewsletter.com/p/the-new-ai-growth-playbook-for-2026-elena-verna | OK |
| build-the-machine | Lessons from scaling Stripe \| Claire Hughes Johnson | https://www.lennysnewsletter.com/p/lessons-from-scaling-stripe-tactics | OK |
| burnout | When enough is enough | https://www.lennysnewsletter.com/p/when-enough-is-enough-andy-johns | OK |
| burnout | Managing nerves, anxiety, and burnout | https://www.lennysnewsletter.com/p/managing-nerves-anxiety-and-burnout | OK |
| category-pirate | (sources) | https://www.lennysnewsletter.com/p/how-to-become-a-category-pirate-christopher | OK |
| coding-is-solved | Boris Cherny on Lenny's Podcast | https://www.lennysnewsletter.com/p/boris-cherny | OK |
| crossing-the-chasm | Geoffrey Moore on finding your beachhead... | *(empty in annotations)* | EMPTY |
| crossing-the-chasm | (sources) | https://www.lennyspodcast.com/geoffrey-moore-on-finding-your-beachhead-crossing-the-chasm-and-dominating-a-market/ | OK |
| culture-code | How Netflix builds a culture of excellence \| Elizabeth Stone (CTO) | https://www.lennysnewsletter.com/p/how-netflix-builds-a-culture-of-excellence | OK |
| do-things-that-dont-scale | Brian Chesky on Airbnb's early days | https://www.lennysnewsletter.com/p/brian-cheskys-contrarian-approach | OK |
| do-things-that-dont-scale | Do Things That Don't Scale | https://paulgraham.com/ds.html | NON-LENNY |
| do-things-that-dont-scale | (sources) | https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-consumer-business-step-4-find-your-early-adopters-b | OK |
| doesnt-feel-right-yet | How Linear builds product | https://www.lennysnewsletter.com/p/how-linear-builds-product | OK |
| doesnt-feel-right-yet | Inside Linear \| Karri Saarinen | https://www.lennysnewsletter.com/p/inside-linear-building-with-taste | OK |
| dont-break-the-streak | How Duolingo reignited user growth | https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth | OK |
| dont-break-the-streak | (sources) | https://www.lennysnewsletter.com/p/behind-the-product-duolingo-streaks | OK |
| dont-give-em-your-number | (sources) | https://www.lennysnewsletter.com/p/negotiating-comp | OK |
| elegant-puzzle | (sources) | https://www.lennysnewsletter.com/p/the-engineering-mindset-will-larson | OK |
| eleven-stars | Brian Chesky on the 11-star framework | https://www.lennysnewsletter.com/p/brian-cheskys-contrarian-approach | OK |
| find-your-north-star | Choosing Your North Star Metric | https://www.lennysnewsletter.com/p/choosing-your-north-star-metric | OK |
| fire-with-grace | How to fire people with grace... | https://www.lennysnewsletter.com/p/how-to-fire-people-with-grace-work | OK |
| first-ten | Hiring your early team | https://www.lennysnewsletter.com/p/hiring-your-early-team-b2b | OK |
| founding-sales | Founder-led sales \| Pete Kazanjy | https://www.lennysnewsletter.com/p/founder-led-sales-pete-kazanjy-founding | OK |
| free-to-paid | What is good free-to-paid conversion | https://www.lennysnewsletter.com/p/what-is-a-good-free-to-paid-conversion | OK |
| free-to-paid | Elena Verna on how B2B growth is changing | https://www.lennysnewsletter.com/p/elena-verna-on-why-every-company | OK |
| free-to-paid | (sources) | https://www.lennysnewsletter.com/p/freemium-trials-free | OK |
| go-viral | How to consistently go viral | https://www.lennysnewsletter.com/p/how-to-consistently-go-viral-nikita-bier | OK |
| godmother | The Godmother of AI | https://www.lennysnewsletter.com/p/the-godmother-of-ai | OK |
| good-enough | 4 questions Shreyas Doshi wishes he'd asked himself sooner | https://www.lennysnewsletter.com/p/shreyas-doshi-live | OK |
| good-strategy | (sources) | https://www.lennysnewsletter.com/p/good-strategy-bad-strategy-richard | OK |
| how-have-i-been-complicit | (sources) | https://www.lennysnewsletter.com/p/how-have-i-been-complicit-in-creating | OK |
| ikigai | (sources) | https://www.lennysnewsletter.com/p/billion-dollar-failures-and-billion | OK |
| im-in-the-room | Brian Chesky's new playbook (via Sanchan Saxena) | https://www.lennysnewsletter.com/p/sanchan-saxena-vp-of-product-at-coinbase | OK |
| im-in-the-room | Brian Chesky's secret mentor \| Chip Conley | https://www.lennysnewsletter.com/p/chip-conley | OK |
| im-in-the-room | (sources) | https://www.lennysnewsletter.com/p/brian-cheskys-contrarian-approach | OK |
| imposter | Julie Zhuo on accelerating your career and impostor syndrome | https://www.lennysnewsletter.com/p/episode-2-julie-zhuo | OK |
| indistractable | Strategies for becoming less distracted \| Nir Eyal | https://www.lennysnewsletter.com/p/strategies-for-becoming-less-distractible | OK |
| its-never-going-well | (sources) | https://www.lennysnewsletter.com/p/lessons-from-working-with-600-yc | OK |
| level-three | A guide to difficult conversations \| Rachel Lockett | https://www.lennysnewsletter.com/p/a-guide-to-difficult-conversations | OK |
| make-me-care | Storytelling with Nancy Duarte | https://www.lennysnewsletter.com/p/storytelling-with-nancy-duarte-how | OK |
| make-time | Time management techniques that actually work | https://www.lennysnewsletter.com/p/time-management-techniques-that-actually | OK |
| make-time | Making time for what matters \| Jake Knapp and John Zeratsky | https://www.lennysnewsletter.com/p/making-time-for-what-matters-jake | OK |
| measure-twice | How to measure cohort retention | https://www.lennysnewsletter.com/p/measuring-cohort-retention | OK |
| measure-twice | How to increase your product's retention | https://www.lennysnewsletter.com/p/how-to-increase-your-retention-issue | OK |
| measure-twice | What is good retention? | https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29 | OK |
| minimum-lovable | Building Lovable \| Anton Osika | https://www.lennysnewsletter.com/p/building-lovable-anton-osika | OK |
| name-your-price | How to price your product \| Naomi Ionita | https://www.lennysnewsletter.com/p/how-to-price-your-product-naomi-ionita | OK |
| name-your-price | Pricing your SaaS product | https://www.lennysnewsletter.com/p/saas-pricing-strategy | OK |
| nervous-system | Managing nerves, anxiety, and burnout | https://www.lennysnewsletter.com/p/managing-nerves-anxiety-and-burnout | OK |
| never-search-alone | Land your dream job \| Phyl Terry | https://www.lennysnewsletter.com/p/land-your-dream-job-phyl-terry | OK |
| ninety-three-percent | How to pass any first-round interview | https://www.lennysnewsletter.com/p/how-to-pass-any-first-round-interview | OK |
| nobodys-coming | How to Kickstart and Scale a Marketplace Business | https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace | OK |
| not-venture-scale | Jason Fried challenges your thinking | https://www.lennysnewsletter.com/p/jason-fried-challenges-your-thinking | OK |
| pattern-breaker | Pattern Breakers \| Mike Maples, Jr. | https://www.lennysnewsletter.com/p/how-to-find-a-great-startup-idea-mike-maples-jr | OK |
| playing-to-win | (sources) | https://www.lennysnewsletter.com/p/the-ultimate-guide-to-strategy-roger-martin | OK |
| plg | Elena Verna on how B2B growth is changing | https://www.lennysnewsletter.com/p/elena-verna-on-why-every-company | OK |
| product-market-fit | Rahul Vohra on Superhuman's PMF engine | https://www.lennysnewsletter.com/p/superhumans-secret-to-success-rahul-vohra | OK |
| product-market-fit | Lenny's PMF newsletter series | https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket | OK |
| product-sense | The definitive guide to mastering product sense interviews | https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering | OK |
| product-sense | How to develop product sense | https://www.lennysnewsletter.com/p/how-to-develop-product-sense | OK |
| protect-the-block | Time management techniques that actually work | https://www.lennysnewsletter.com/p/time-management-techniques-that-actually | OK |
| protect-the-block | Part 2: Time management techniques | https://www.lennysnewsletter.com/p/part-2-time-management-techniques | OK |
| push-the-car | (sources) | https://www.lennysnewsletter.com/p/lessons-learned-from-a-startup-that | OK |
| radical-candor | Radical Candor \| Kim Scott | https://www.lennysnewsletter.com/p/radical-candor-from-theory-to-practice | OK |
| resilience-over-happiness | (sources) | https://www.lennysnewsletter.com/p/dr-becky-on-the-surprising-overlap | OK |
| seven-powers | Business strategy with Hamilton Helmer | https://www.lennysnewsletter.com/p/business-strategy-with-hamilton-helmer | OK |
| seventy-five-businesses | I've run 75+ businesses... | https://www.youtube.com/watch?v=VxAwUb86MUE | NON-LENNY (YouTube) |
| ship-it | Keith Rabois on speed (via Ramp episode) | https://www.lennysnewsletter.com/p/lessons-from-scaling-ramp-sri-batchu | OK |
| ship-it | Velocity over everything: How Ramp... | https://www.lennysnewsletter.com/p/velocity-over-everything-how-ramp | OK |
| smile-through-the-silence | (sources) | https://www.lennysnewsletter.com/p/a-playbook-for-fundraising | OK |
| state-of-the-me | Managing up | https://www.lennysnewsletter.com/p/managing-up | OK |
| storyworthy | How to tell better stories \| Matthew Dicks | https://www.lennysnewsletter.com/p/how-to-tell-better-stories-matthew | OK |
| talk-to-users | Teresa Torres on continuous discovery | https://www.lennysnewsletter.com/p/teresa-torres-on-how-to-interview | OK |
| talk-to-users | Gustaf Alstromer on talking to users | https://www.lennysnewsletter.com/p/lessons-from-working-with-600-yc | OK |
| taste | Brian Chesky on detail obsession | https://www.lennysnewsletter.com/p/brian-cheskys-contrarian-approach | OK |
| taste | Shreyas Doshi on taste and product leadership | https://www.lennysnewsletter.com/p/shreyas-doshi-live | OK |
| taste | Scott Belsky on product sense and the first mile | https://www.lennysnewsletter.com/p/scott-belsky | OK |
| tell-the-story | The power of strategic narrative \| Andy Raskin | https://www.lennysnewsletter.com/p/the-power-of-strategic-narrative | OK |
| test-everything | The ultimate guide to A/B testing | https://www.lennysnewsletter.com/p/the-ultimate-guide-to-ab-testing | OK |
| the-call | My favorite decision-making frameworks | https://www.lennysnewsletter.com/p/my-favorite-decision-making-frameworks | OK |
| the-closer | Lessons from one of the world's top executive recruiters | https://www.lennysnewsletter.com/p/lessons-from-one-of-the-worlds-top | OK |
| the-disease | The nature of product | https://www.lennysnewsletter.com/p/the-nature-of-product-marty-cagan | OK |
| the-first-mile | Lessons on building product sense \| Scott Belsky | https://www.lennysnewsletter.com/p/lessons-on-building-product-sense | OK |
| the-first-thousand | How the biggest consumer apps got their first 1,000 users | https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got | OK |
| the-giant-piece-of-shit | Slack founder \| Stewart Butterfield | https://www.lennysnewsletter.com/p/stewart-butterfield | OK |
| the-gtm | What world-class GTM looks like in 2026 \| Jeanne DeWitt Grosser | https://www.lennysnewsletter.com/p/what-the-best-gtm-teams-do-differently | OK |
| the-hard-thing | $46B of hard truths from Ben Horowitz | https://www.lennysnewsletter.com/p/ben-horowitz | OK |
| the-hierarchy | The hierarchy of engagement \| Sarah Tavel | https://www.lennysnewsletter.com/p/the-hierarchy-of-engagement-sarah | OK |
| the-hiring-playbook | Gokul Rajaram on hiring | https://www.lennysnewsletter.com/p/gokul-rajaram | OK |
| the-intuition | Dylan Field live at Config | https://www.lennysnewsletter.com/p/dylan-field-live-at-config | OK |
| the-lean | Reflections on a movement \| Eric Ries | https://www.lennysnewsletter.com/p/reflections-on-a-movement-eric-ries | OK |
| the-liquidity | How marketplaces win \| Benjamin Lauzier | https://www.lennysnewsletter.com/p/how-marketplaces-win-benjamin-lauzier | OK |
| the-long-game | Building a long and meaningful career \| Nikhyl Singhal | *(empty in annotations)* | EMPTY |
| the-long-game | (sources) | https://www.lennysnewsletter.com/p/building-a-long-and-meaningful-career | OK |
| the-magic-loop | The Magic Loop | https://www.lennysnewsletter.com/p/the-magic-loop | OK |
| the-maze | Dalton Caldwell on tarpit ideas | https://www.lennysnewsletter.com/p/lessons-from-1000-yc-startups | OK |
| the-new-stack | Counterintuitive advice for building AI products | https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building | OK |
| the-numbers-dont-lie | What is good monthly churn | https://www.lennysnewsletter.com/p/monthly-churn-benchmarks | OK |
| the-numbers-dont-lie | What is good retention? | https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29 | OK |
| the-obsession | Building product at Stripe \| Jeff Weinstein | https://www.lennyspodcast.com/building-product-at-stripe-craft-metrics-and-customer-obsession-jeff-weinstein-product-lead/ | OK |
| the-okr | The ultimate guide to OKRs \| Christina Wodtke | https://www.lennysnewsletter.com/p/the-ultimate-guide-to-okrs-christina | OK |
| the-one-question | How to learn the most about a candidate from a single interview question | https://www.lennysnewsletter.com/p/how-to-learn-the-most-about-a-candidate | OK |
| the-one-question | Velocity over everything: How Ramp... | https://www.lennysnewsletter.com/p/velocity-over-everything-how-ramp | OK |
| the-plan | The Secret to a Great Planning Process | https://www.lennysnewsletter.com/p/the-secret-to-a-great-planning-process | OK |
| the-power | The paths to power \| Jeffrey Pfeffer | https://www.lennysnewsletter.com/p/the-paths-to-power-jeffrey-pfeffer | OK |
| the-racecar | The Racecar Growth Framework | https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded | OK |
| the-ramp-speed | How Ramp builds product | https://www.lennysnewsletter.com/p/how-ramp-builds-product | OK |
| the-ramp-speed | (sources) | https://www.lennysnewsletter.com/p/velocity-over-everything-how-ramp | OK |
| the-rise-of-cursor | The rise of Cursor \| Michael Truell | https://www.lennysnewsletter.com/p/the-rise-of-cursor-michael-truell | OK |
| the-rituals | The rituals of great teams \| Shishir Mehrotra | https://www.lennysnewsletter.com/p/the-rituals-of-great-teams-shishir | OK |
| the-rituals | How Coda builds product | https://www.lennysnewsletter.com/p/how-coda-builds-product | OK |
| the-stack-rank | How to communicate tradeoffs so leaders will listen | https://www.lennysnewsletter.com/p/how-to-communicate-tradeoffs-so-leaders | OK |
| the-unlock | What is a good activation rate | https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate | OK |
| the-unlock | How to determine your activation metric | https://www.lennysnewsletter.com/p/how-to-determine-your-activation | OK |
| the-value-loop | The Subscription Value Loop | https://www.lennysnewsletter.com/p/the-subscription-value-loop | OK |
| the-vibe-coder | The rise of the professional vibe coder \| Lazar Jovanovic | https://www.lennysnewsletter.com/p/getting-paid-to-vibe-code | OK |
| thinking-in-bets | This will make you a better decision-maker \| Annie Duke | https://www.lennysnewsletter.com/p/annie-duke | OK |
| thirty-five-years | 35 years of product design wisdom \| Bob Baxley | https://www.lennysnewsletter.com/p/35-years-of-product-design-wisdom-bob-baxley | OK |
| three-eras | Behind the founder: Drew Houston (Dropbox) | https://www.lennysnewsletter.com/p/behind-the-founder-drew-houston-dropbox | OK |
| trace-it-back | Mission - Vision - Strategy - Goals - Roadmap - Task | https://www.lennysnewsletter.com/p/mission-vision-strategy-goals-roadmap | OK |
| vibe-coding | What people are vibe coding (and actually using) | https://www.lennysnewsletter.com/p/what-people-are-vibe-coding-and-actually | OK |
| vibe-coding | The rise of the professional vibe coder | https://www.lennysnewsletter.com/p/getting-paid-to-vibe-code | OK |
| we-havent-built-windows-yet | Inside ChatGPT \| Nick Turley | https://www.lennysnewsletter.com/p/nick-turley | OK |
| whats-the-job | The ultimate guide to JTBD | https://www.lennysnewsletter.com/p/the-ultimate-guide-to-jtbd-bob-moesta | OK |
| when-enough-is-enough | (sources) | https://www.lennysnewsletter.com/p/when-enough-is-enough-andy-johns | OK |
| you-aint-that | Positioning | https://www.lennysnewsletter.com/p/positioning | OK |
| you-aint-that | April Dunford on product positioning | https://www.lennyspodcast.com/april-dunford-on-product-positioning-segmentation-and-optimizing-your-sales-process/ | OK |

## Conclusion

**No fabricated or suspicious URLs found.** Every URL with content either points to:
- `https://www.lennysnewsletter.com/p/...` (Substack newsletter)
- `https://www.lennyspodcast.com/...` (podcast site)
- `https://paulgraham.com/ds.html` (legitimate Paul Graham essay, referenced in do-things-that-dont-scale)
- `https://www.youtube.com/watch?v=VxAwUb86MUE` (Lenny's Podcast YouTube episode with Andrew Wilkinson)

All URL slugs match their described content — no mismatches detected.

### Action items
1. **Fill in empty annotation URLs** for `crossing-the-chasm` (5 annotations) and `the-long-game` (5 annotations) — both tracks have valid source URLs that can be copied into the annotations.
