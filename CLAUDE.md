# Lenny's Greatest Hits

## What This Is
A contest entry for Lenny Rachitsky's "build something cool with my data" contest (deadline April 15, 2026). We're turning Lenny's best podcast/newsletter insights into actual, catchy, playable songs — tech culture anthems — presented in a web app and distributed on Spotify.

## The PRD
All tasks are in `plans/prd.md`. Work through them in order. Each task has clear exit criteria.

## Key Tools
- **Lenny MCP**: Use `mcp__lennysdata__search_content`, `mcp__lennysdata__read_content`, `mcp__lennysdata__read_excerpt` to search Lenny's archive (638 pieces: 349 newsletters, 289 podcasts)
- **Suno API**: Cookie in `.env.local`. Use to generate songs programmatically. Generate 3 versions per song.

## Quality Bar
- Songs must be CATCHY FIRST, educational second
- Think Hamilton, not Schoolhouse Rock
- Universal Music quality — would you send this Spotify link to a friend?
- Web design: Spotify/Apple Music aesthetic, dark theme, premium feel
- NO AI slop — tasteful, minimal, human-feeling

## Stack
- Next.js + Tailwind + shadcn/ui + TypeScript
- pnpm (not npm, not yarn)
- framer-motion for animations
- wavesurfer.js for audio visualization
- PostHog for analytics
- Deploy to Vercel
