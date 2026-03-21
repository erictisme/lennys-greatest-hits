# Project Intention — Lenny's Greatest Hits

## What We're Building

We're turning Lenny Rachitsky's best podcast and newsletter insights into actual, catchy, playable songs — tech culture anthems — presented as a premium web experience and distributed on Spotify.

This is a contest entry for Lenny's "build something cool with my data" contest (deadline April 15, 2026).

## Why This Matters

Lenny has 638 pieces of content (349 newsletters, 289 podcasts) full of hard-won wisdom from the best operators in tech. But most people have read maybe 10-20 of them. Songs stick in your head. If you can hum the lesson, you remember it.

The trick is Hamilton: you don't realize you're learning. The songs must be catchy FIRST, educational second. If someone who's never heard of Lenny's Newsletter still loves the song, we've won.

## The Quality Bar

- **Universal Music quality** — would you send this Spotify link to a friend?
- **Catchy first, educational second** — think Hamilton, not Schoolhouse Rock
- **No AI slop** — tasteful, minimal, human-feeling
- **Web design** — Spotify/Apple Music aesthetic, dark theme, premium feel
- **Each song teaches ONE thing** — not a summary, a feeling

## How We Work

Eric directs AI tools to build this. He doesn't code. The pipeline is:

1. **Research** — Read Lenny's source material via MCP, extract the story and emotional core
2. **Songwriting** — Write lyrics that show, don't tell. Concrete imagery over abstract concepts.
3. **Style** — Choose a genre that matches the content's energy from Eric's actual music taste (see artist-palette.md)
4. **Generation** — Feed prompts to Suno, generate 3 versions, pick the best
5. **Integration** — Upload MP3s to the site, unlock tracks, verify playback

This runs in batches. Each batch improves on the last through explicit feedback loops.

## The Bigger Vision

We want to scale this to 500+ songs covering most of Lenny's 638 pieces. That means:
- Clean, reusable prompt templates (see prompt-template.md)
- Batch-by-batch feedback that feeds forward
- A master tracker that shows status at a glance
- Ralph runs that Eric can kick off and walk away from for hours

## What Makes This Different

Most "AI music" projects sound like novelty tracks. We're aiming for songs people genuinely add to their playlists. The secret ingredients:
- Real stories with real protagonists (Brian Chesky, Nikita Bier, Andy Johns)
- Specific details that make songs feel lived-in (not "growth is important" but "the graph bends up at three AM")
- Musical taste that matches Eric's actual listening habits (acoustic indie/neo-soul/folk, not aggressive rock)
- A critiquing and rewriting step that catches AI-generic lyrics before they ship

## Core Principles

1. **Catchy first.** If it's not a song you'd want to hear again, it doesn't matter what it teaches.
2. **Show, don't tell.** Images and scenes, not definitions and frameworks.
3. **One killer line per song.** Something people screenshot and share.
4. **Evolving choruses.** Never repeat a chorus word-for-word.
5. **Match genre to content energy.** Don't default to rock.
6. **Specificity wins.** Real names, real numbers, real moments.
7. **The universal test.** Would someone outside tech still feel something?
