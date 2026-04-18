# Lenny's Greatest Hits

**102 AI-generated songs from Lenny Rachitsky's 638 podcasts and newsletters.** Won Lenny's "build something cool with my data" hackathon — 1 of 10 winners out of 80+ entries.

[**→ lennys-greatest-hits.vercel.app**](https://lennys-greatest-hits.vercel.app)

---

## What it is

Every great Lenny podcast episode has a thesis — a lesson that sticks with you. This project turns those lessons into actual songs. Not background music. Not jingles. Real songs: neo-soul, indie folk, alt-pop — the kind you'd send a friend.

102 songs. 11 albums. Topics like hiring for taste, shipping before you're ready, not breaking your streak, and what it actually means to find product-market fit. Each track is rooted in a specific Lenny episode or newsletter, with the guest, source, and key insight surfaced in the UI.

---

## How it works

1. **Claude reads Lenny's archive** — using a custom MCP server with 638 pieces (349 newsletters, 289 podcasts), Claude researches each episode: the story, the quotes, the emotional core.
2. **Claude writes the lyrics** — guided by a lyric craft guide, songwriting principles, and Suno-specific tips. Each lyric goes through a critique-and-rewrite loop before being finalized.
3. **Suno v5 generates the music** — lyrics + a style prompt (genre, mood, instruments, vocal style) go into Suno. 3 versions are generated per song; the best makes it into the app.

---

## Stack

| Layer | Tool |
|---|---|
| Lyric generation | Claude (Anthropic) via Claude Code |
| Music generation | Suno v5 |
| Frontend | Next.js + Tailwind + shadcn/ui + TypeScript |
| Audio visualization | wavesurfer.js |
| Animations | framer-motion |
| Analytics | PostHog |
| Deploy | Vercel |
| Package manager | pnpm |

---

## Run locally

```bash
git clone https://github.com/erictisme/lenny-greatest-hits.git
cd lenny-greatest-hits
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Audio files live in `public/audio/` and are committed directly to git — Vercel serves them as static assets.

---

## The backstory

I have a violin diploma and sing in a church band. I spent years wanting to write original songs but never could — I'd stare at a blank page and nothing would come.

Then Lenny announced his hackathon. I thought: what if I could turn his best insights into songs I'd actually listen to?

I'm not a developer. I built this entirely by directing AI tools — Claude Code for the code and lyrics, Suno for the music. No code written by hand. I started around my 28th birthday, worked nights for about 3 weeks, and won the contest.

---

## The content pipeline

The full song generation pipeline is open-sourced here:

- `content/songs/` — lyrics, research briefs, Suno prompts for all 102 songs across 8 batches
- `plans/` — the PRD, AI agent run instructions, batch feedback loops
- `content/lyric-craft-guide.md` — 6 rules for writing lyrics that don't sound like AI slop
- `content/brainstorm/lyric-principles.md` — 10 songwriting principles from studying reference artists
- `content/brainstorm/suno-lyric-tips.md` — 13-point Suno v5 technical checklist

---

## Credits

- **Lenny Rachitsky** — for 638 pieces of genuine insight and for running a contest worth building for
- **Claude (Anthropic)** — for reading those 638 episodes and writing lyrics worth listening to
- **Suno** — for turning those lyrics into music that doesn't sound like a demo

---

## License

MIT

Built by [Eric Tan](https://github.com/erictisme) · Singapore
