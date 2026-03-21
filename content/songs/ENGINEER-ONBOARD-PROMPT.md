# Engineer Onboarding Prompt: 28 New Songs

Use the `lgh-track-onboard` skill. Extract cover art from each MP3 with ffmpeg. Wire into `lib/albums.ts`. Write Genius-style annotations using Lenny MCP research.

## Album Structure

We're moving from the old album names to 11 JTBD albums. Here are the albums and their slugs:

| Album Name | Slug | JTBD |
|-----------|------|------|
| The Craft | `the-craft` | Build better products |
| Growth Engine | `growth-engine` | Grow my product |
| By the Numbers | `by-the-numbers` | Benchmarks & metrics |
| The Weight | `the-weight` | Leadership & management |
| Career Moves | `career-moves` | Career growth |
| Electric Dreams | `electric-dreams` | AI (rename candidate — Eric thinks name isn't obvious enough for AI. Consider: "The New Stack", "Silicon Minds", "Built Different", or keep "Electric Dreams" but add subtitle "Songs about AI") |
| The Startup Life | `the-startup-life` | Start a company |
| The Talent Search | `the-talent-search` | Hire the best people |
| The Interview | `the-interview` | Get a job |
| Deep Work | `deep-work` | Productivity |
| The Human Side | `the-human-side` | Feel less stressed |

---

## BATCH 2 — REPLACEMENT TRACKS (8 songs)

These REPLACE existing tracks in the site. MP3s are in `content/songs/batch2/new-mp3s/`.

| File | Title | Album | Slug | Tags | Source |
|------|-------|-------|------|------|--------|
| `dont-break-the-streak.mp3` | Don't Break the Streak | Growth Engine | `dont-break-the-streak` | retention, streaks, gamification, Duolingo | How Duolingo reignited user growth (Jorge Mazal) |
| `im-in-the-room.mp3` | I'm in the Room | The Craft | `im-in-the-room` | founder-mode, product-craft, leadership, Airbnb | Brian Chesky's new playbook |
| `build-the-machine.mp3` | Build the Machine | The Craft | `build-the-machine` | operations, scaling, systems, Stripe | Lessons from scaling Stripe (Claire Hughes Johnson) |
| `doesnt-feel-right-yet.mp3` | Doesn't Feel Right Yet | The Craft | `doesnt-feel-right-yet` | craft, quality, taste, Linear | How Linear builds product (Karri Saarinen) |
| `the-ramp-speed.mp3` | The Ramp Speed | The Craft | `the-ramp-speed` | velocity, shipping, speed, Ramp | How Ramp builds product (Geoff Charles) |
| `the-racecar.mp3` | The Racecar | Growth Engine | `the-racecar` | growth-loops, framework, engines | The Racecar Growth Framework (Dan Hockenmaier) |
| `find-your-north-star.mp3` | Find Your North Star | Growth Engine | `find-your-north-star` | metrics, north-star, measurement | Choosing Your North Star Metric (Lenny + Sean Ellis) |
| `nobodys-coming.mp3` | Nobody's Coming | The Startup Life | `nobodys-coming` | marketplace, cold-start, chicken-and-egg | How to Kickstart and Scale a Marketplace (Lenny) |

---

## BATCH 3 — NEW TRACKS (20 songs)

Brand new songs. MP3s are in `content/songs/batch3/new-mp3s/`.

| File | Title | Album | Slug | Tags | Source |
|------|-------|-------|------|------|--------|
| `ask-for-help.mp3` | Ask for Help | The Human Side | `ask-for-help` | vulnerability, help, courage | On asking for help (Natalie Rothfels) |
| `bend-the-room.mp3` | Bend the Room | Career Moves | `bend-the-room` | influence, persuasion, stakeholders | A PM's guide to influence (Jules Walter + Lenny) |
| `first-ten.mp3` | First Ten | The Talent Search | `first-ten` | hiring, early-team, culture, founding | Hiring your first 10 employees |
| `godmother.mp3` | Godmother | Electric Dreams | `godmother` | AI, vision, ImageNet, perseverance | The Godmother of AI (Dr. Fei-Fei Li) |
| `indistractable.mp3` | Indistractable | Deep Work | `indistractable` | focus, distraction, habits | Strategies for becoming less distracted (Nir Eyal) |
| `make-time.mp3` | Make Time | Deep Work | `make-time` | time, priorities, highlights | Making time for what matters (Jake Knapp + John Zeratsky) |
| `measure-twice.mp3` | Measure Twice | By the Numbers | `measure-twice` | retention, cohorts, churn, benchmarks | How to measure cohort retention / How to increase retention (Lenny) |
| `nervous-system.mp3` | Nervous System | The Human Side | `nervous-system` | burnout, anxiety, stress, breathwork | Managing nerves, anxiety, and burnout (Jonny Miller) |
| `never-search-alone.mp3` | Never Search Alone | The Interview | `never-search-alone` | job-search, community, support | Land your dream job (Phyl Terry) |
| `ninety-three-percent.mp3` | Ninety-Three Percent | The Interview | `ninety-three-percent` | interview-prep, first-round, confidence | How to pass any first-round interview (Coach Erika) |
| `product-sense.mp3` | Product Sense | The Interview | `product-sense` | interviews, product-sense, empathy | Mastering product sense interviews (Lenny) |
| `protect-the-block.mp3` | Protect the Block | Deep Work | `protect-the-block` | time-management, focus, deep-work | Time management techniques that actually work (Lenny) |
| `the-call.mp3` | The Call | The Weight | `the-call` | decision-making, leadership, accountability | My favorite decision-making frameworks (Lenny) |
| `the-closer.mp3` | The Closer | The Talent Search | `the-closer` | recruiting, executive-search, talent | Lessons from a top executive recruiter (Lauren Ipsen) |
| `the-new-stack.mp3` | The New Stack | Electric Dreams | `the-new-stack` | AI-products, building, counterintuitive | Counterintuitive advice for building AI products (Lenny + Kyle Poyar) |
| `the-numbers-dont-lie.mp3` | The Numbers Don't Lie | By the Numbers | `the-numbers-dont-lie` | retention, churn, data, benchmarks | What is good retention / What is good monthly churn (Lenny) |
| `the-one-question.mp3` | The One Question | The Talent Search | `the-one-question` | hiring, interviews, signal | How to learn the most from a single interview question (Lenny) |
| `the-plan.mp3` | The Plan | The Weight | `the-plan` | planning, alignment, strategy | The secret to a great planning process (Lenny) |
| `the-stack-rank.mp3` | The Stack Rank | Career Moves | `the-stack-rank` | tradeoffs, communication, prioritization | How to communicate tradeoffs so leaders will listen (Tara Seshan) |
| `the-unlock.mp3` | The Unlock | By the Numbers | `the-unlock` | activation, metrics, onboarding | What is a good activation rate / How to determine your activation metric (Lenny) |

---

## EXISTING TRACK RECATEGORIZATION

These existing tracks need their album assignments updated (no new MP3s, just move them):

| Track | Old Album | New Album |
|-------|-----------|-----------|
| Do Things That Don't Scale | Founders | The Startup Life |
| Product-Market Fit (You'll Know) | Founders | The Startup Life |
| The Maze | Founders | The Startup Life |
| Taste | Product | The Craft |
| Eleven Stars | Product | The Craft |
| Talk to Users | Product | The Craft |
| Ship It | Builders | The Craft |
| Vibe Coding | Builders | Electric Dreams |
| Don't Give 'Em Your Number | Career Moves | The Interview |
| Fire with Grace | Career Moves | The Weight |
| When Enough Is Enough | Career Moves | The Human Side |
| Trace It Back | Frameworks | The Craft |
| The Disease | Frameworks | The Craft |
| Test Everything | Frameworks | Growth Engine |
| What's the Job | Frameworks | The Craft |
| Good Enough | Frameworks | Deep Work |

---

## INSTRUCTIONS

1. Extract cover art from every MP3 with `ffmpeg -i file.mp3 -an -vcodec copy cover.jpg`
2. Copy MP3s to `public/audio/` with the slug as filename
3. Copy covers to `public/covers/` with the slug as filename
4. Add all 28 new tracks to `lib/albums.ts` with proper album assignments
5. Recategorize the 16 existing tracks listed above
6. Create/update album definitions for all 11 JTBD albums
7. Write Genius-style annotations for each new track using Lenny MCP to research the source material
8. Run `pnpm build` to verify everything compiles
