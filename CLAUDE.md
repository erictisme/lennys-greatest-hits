# Lenny's Greatest Hits

## What This Is
A contest entry for Lenny Rachitsky's "build something cool with my data" contest (deadline April 15, 2026). We're turning Lenny's best podcast/newsletter insights into actual, catchy, playable songs — tech culture anthems — presented in a web app and distributed on Spotify.

Read `content/songs/intention.md` for the full project intent and principles.

## Song Pipeline

Songs are generated in batches. Each batch improves on the last via feedback loops.

### Key Content Files
- `content/songs/master-tracker.md` — Status of ALL songs across all batches
- `content/songs/prompt-template.md` — Reusable two-phase Ralph prompt (research → songwriting)
- `content/songs/artist-palette.md` — Eric's music preferences for Suno style choices
- `content/songs/intention.md` — Project intent and core principles
- `content/songs/batch{N}/feedback.md` — What went wrong in each batch, rules for next batch
- `content/lyric-craft-guide.md` — 6 core lyric quality rules
- `content/brainstorm/lyric-principles.md` — 10 songwriting principles from reference artist study
- `content/brainstorm/suno-lyric-tips.md` — 13-point Suno v5 technical checklist
- `content/brainstorm/batch1-audit.md` — Detailed audit of Batch 1 lyrics

### Batch Structure
```
content/songs/
├── master-tracker.md
├── prompt-template.md
├── artist-palette.md
├── intention.md
├── batch1/
│   ├── feedback.md
│   ├── suno-prompts/
│   ├── lyrics/
│   └── research/
├── batch2/
│   ├── feedback.md
│   ├── research/          ← Research briefs from Phase 1
│   ├── briefs/            ← Songwriting briefs
│   ├── lyrics/            ← Final lyrics
│   └── suno-prompts/      ← Suno-ready prompts
└── batch3/                ← Future batches follow same pattern
```

### Ralph Song Generation Runs
The prompt template (`content/songs/prompt-template.md`) defines a two-phase pipeline:
1. **Phase 1 (Research):** Read Lenny source material via MCP → extract story, quotes, emotional core
2. **Phase 2 (Songwriting):** Read research brief + quality guides → write lyrics → critique → rewrite → create Suno prompt

Each batch has a `tasks.json` listing all songs to generate. Ralph iterates through incomplete tasks.

## Key Tools
- **Lenny MCP**: Use `mcp__lennysdata__search_content`, `mcp__lennysdata__read_content`, `mcp__lennysdata__read_excerpt` to search Lenny's archive (638 pieces: 349 newsletters, 289 podcasts)
- **Suno**: Generate 3 versions per song. Use style guidance from `artist-palette.md`.

## Quality Bar
- Songs must be CATCHY FIRST, educational second
- Think Hamilton, not Schoolhouse Rock
- Universal Music quality — would you send this Spotify link to a friend?
- Web design: Spotify/Apple Music aesthetic, dark theme, premium feel
- NO AI slop — tasteful, minimal, human-feeling
- Genre matches Eric's actual taste (see artist-palette.md) — acoustic indie/neo-soul/folk, not aggressive rock

## Stack
- Next.js + Tailwind + shadcn/ui + TypeScript
- pnpm (not npm, not yarn)
- framer-motion for animations
- wavesurfer.js for audio visualization
- PostHog for analytics
- Deploy to Vercel

## The PRD
Original tasks are in `plans/prd.md`. Work through them in order. Each task has clear exit criteria.
