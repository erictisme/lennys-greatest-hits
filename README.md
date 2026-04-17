# Lenny's Greatest Hits

> Turning Lenny Rachitsky's best podcast and newsletter insights into actual, catchy, playable songs.

Built as a contest entry for Lenny's "build something cool with my data" contest. Think Hamilton, not Schoolhouse Rock — songs you'd genuinely add to your playlist that happen to teach you something about building great products.

**[lennysgreatesthits.com](https://lennysgreatesthits.com)**

---

## What It Is

Lenny has 638 pieces of content — 349 newsletters and 289 podcasts — full of hard-won wisdom from the best operators in tech. Most people have read maybe 10–20 of them.

Songs stick in your head. If you can hum the lesson, you remember it.

This project takes the best stories from Lenny's archive — Brian Chesky doing laundry with Airbnb hosts, Nikita Bier's guerrilla app marketing, Andy Johns on the early days of Facebook growth — and turns them into acoustic indie/neo-soul/folk anthems with specific imagery, evolving choruses, and one killer line per song.

---

## The Stack

- **Next.js** — App router, TypeScript
- **Tailwind + shadcn/ui** — Spotify/Apple Music dark aesthetic
- **Framer Motion** — Animations
- **WaveSurfer.js** — Audio waveform visualization
- **PostHog** — Analytics
- **Suno** — AI music generation (v3.5/v4)
- **Vercel** — Deployment

---

## How Songs Are Made

Songs are generated in batches through a two-phase pipeline:

**Phase 1 — Research**
Read Lenny's source material, extract the story, key quotes, and emotional core. Every song has a real protagonist, a concrete moment, a specific detail that makes it feel lived-in.

**Phase 2 — Songwriting**
Write lyrics → critique against quality rules → rewrite → generate Suno prompt. Three versions generated per song; the best one ships.

Quality rules applied to every lyric:
1. Catchy first, educational second
2. Show, don't tell — scenes over definitions
3. One killer line per song (something people screenshot)
4. Evolving choruses — never repeat word-for-word
5. Genre matched to content energy
6. The universal test — would someone outside tech still feel something?

See `content/songs/` for all lyrics, research briefs, and Suno prompts.

---

## Project Structure

```
app/                  # Next.js app router pages
components/           # UI components
content/
  songs/
    master-tracker.md        # Status of all songs
    prompt-template.md       # Reusable AI prompting pipeline
    artist-palette.md        # Genre/style guidance
    intention.md             # Project principles
    batch1/ batch2/ ...      # Lyrics, research, Suno prompts per batch
  lyric-craft-guide.md       # 6 core lyric quality rules
  brainstorm/                # Songwriting principles, Suno tips
public/audio/         # MP3 files (committed to git, served by Vercel)
plans/prd.md          # Original product requirements
```

---

## Running Locally

```bash
pnpm install
pnpm dev
```

Audio files live in `public/audio/` and are committed directly to git — Vercel serves them as static assets.

---

## What Makes This Different from Generic AI Music

Most AI music projects sound like novelty tracks. The goal here was songs people genuinely add to their playlists:

- **Real protagonists** — Brian Chesky, Nikita Bier, Andy Johns
- **Specific details** — not "growth is important" but "the graph bends up at three AM"
- **Musical taste** — acoustic indie/neo-soul/folk (see `content/songs/artist-palette.md`)
- **Critique loop** — a rewriting step catches AI-generic lyrics before they ship

---

## Built With

This was built by Eric Tan using Claude Code (Anthropic) as the primary coding tool. No code was written by hand — the entire app was directed through natural language with AI doing the implementation.

---

## License

MIT
