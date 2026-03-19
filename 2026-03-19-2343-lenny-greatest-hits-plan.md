# Session: Lenny's Greatest Hits — Plan & Ralph Setup
**Date:** 2026-03-19 23:43 GMT+8
**Project:** lenny-greatest-hits at ~/Desktop/Coding/lenny-contest/lenny-greatest-hits/

## Summary
Eric rejected previous Lenny contest ideas (quiz, contradiction simulator, tarot, hot takes) as derivative and boring. Through deep first-principles thinking, landed on making ACTUAL SONGS from Lenny's archive — tech culture anthems distributed on Spotify + a web app. Set up the full project, wrote a 21-task Ralph PRD, configured Suno API + Lenny MCP, and launched Ralph overnight to brainstorm via MCP, write lyrics, and generate demo songs while Eric sleeps.

## Key Decisions
- **Music over all other formats** — Zero audio entries in 31+ contest submissions. Complete format gap. Eric has LTCL violin + sings + guitar background. Genuine founder-market fit.
- **Suno over Udio** — Udio can't export/share outside their platform in 2026. Suno Pro ($10/month) has commercial rights + export.
- **Albums by job-to-be-done** (not career journey) — Founders, Product, Builders (eng/design), The Human Side (burnout/career). Eric's direction.
- **Short demos first** — Generate 1 verse + chorus + hook (~60-90sec) for 20-30+ ideas overnight. Eric vets in morning, then doubles down on winners. Quantity over polish.
- **Spotify distribution** — Via Loudly. The Spotify link IS the share mechanic. Web app is the contest entry URL.
- **Eric's reference artists** — Holo Coves, Jacob Collier, Jonathan Ogden, Jon Guerra, Chet Baker, Bon Iver. Coffeehouse-meets-studio vibe.
- **Lenny theme for design** — Follow lenny-for-you brand, not generic dark theme.

## Built/Changed
- `/Users/erictansongyi/Desktop/Coding/lenny-contest/lenny-greatest-hits/` — New project directory
- `plans/prd.md` — 21-task Ralph PRD (brainstorm, lyrics, Suno generation, web app)
- `.claude.json` — Lenny MCP config baked in
- `.env.local` — Suno cookie placeholder (Eric filled in)
- `CLAUDE.md` — Project context for Ralph
- `.gitignore` — Excludes .env, node_modules, MP3s
- Directory structure: `content/{brainstorm,song-concepts,lyrics,suno-prompts}`, `public/audio/`, `scripts/`, `logs/`
- Plan file: `~/.claude/plans/piped-discovering-planet.md` — Full strategic plan with Suno best practices guide

## Gold Prompts
Eric's first-principles thinking prompt that cracked the idea open:
> "the key question to answer is how to make something lenny and guests love from his articles and podcasts... nobody in history has been able to download all of lenny's podcast / articles and share with friends on a whim... but now sharability is FREE. he wants his knowledge to be shared for FREE. but REPACKAGED to get the most ENGAGEMENT and FUN and ENCOURAGEMENT."

## Eric's Prompts (verbatim, in order)
1. "none are interesting. u read this right? [PDF path] think from first principles. what does lenny's articles unlock? does this make lennybot redundant?... if mindshare is what he wants, then it's about making him leader by generating value for his viewers right, not lenny himself... what is sticky and will make users return every single day... which begs the question, what public repos are there that are rated as beautiful... should we make albums and songs for every single article?... The main thing we need to do is immortalize and condense all of Lenny's information... Creating three or four main albums with 10 songs each, basically educational content and educational songs for adults in tech..."

2. "If we do land on the idea of music, we also need to identify best practices for music generation... I'm completely new to music generation, even though I do have a background in violin, singing, guitar in pop, a bit of jazz, a bit of indie folk, and Christian indie as well."

3. "It needs to generate things that could be like: 'Do things that don't scale,' like Paul Graham / 'Move fast and break things,' by Mark Zuckerberg / 'Founder Mode' by Brian Chesky... combining lovable and rap lit, and doing a plot versus ChatGPT kind of song... mental health for AI-pilled people... the Mark Andreeson podcast was on a shootout between product engineering design... These songs need to be as catchy as they are educational... we should create cover art, get streaming platforms to stream it... just send a Spotify link to it."

4. "why suno not udio, any api key we can use so u don't need me for tonight while i sleep? why are we building web app shell - shouldnt we use rss / spotify etc?... hope it gets played in cafes / restaurants in the valley, remixed by djs, memories created while in these crazy times. educational raving or something i guess... to create a better world."

5. "Open the file for me to put the Suno cookie, and then give me the command for Ralph. I'm going to sleep."

6. "If the Lenny MCP is not working, should I refresh my token right now?... For task 2: The search queries you are thinking of running are too narrow... Task 3: albums should be way more job-to-be-done... Founders, Product, Design, Engineering... My favorite music artists are: Holo Coves, Jacob Collier, Jonathan Ogden, Jon Guerra, Chet Baker, Bon Iver... Task 5: don't always need bridge... Task 7: just generate heck load of songs... maybe just do 1 verse/chorus/hook so i can vet it tomorrow... Task 9: follow lenny theme like lenny-for-you"

## Insights
- **FORMAT > CONTENT is the strongest research finding** — We ignored it twice (quiz, contradiction simulator). Music is the ultimate format play.
- **Eric thinks in culture, not features** — "educational raving", "played in cafes in the valley", "remixed by DJs". He's not building a tool, he's creating a cultural artifact.
- **Short demos first is brilliant** — Generate 20-30 rough demos overnight, pick winners in morning. Avoids over-investing in wrong songs.
- **Job-to-be-done albums > journey albums** — Eric's instinct: people identify by ROLE (founder, PM, designer), not by stage. The album IS identity signaling.
- **Suno API exists (unofficial)** — gcui-art/suno-api on GitHub. Cookie-based auth. ~30 sec per generation. Ralph can generate songs overnight autonomously.
- **Suno best practices**: Always Custom Mode, "vocal-forward spacious" at start of style prompt, name reference artists, keep syllable counts consistent, generate 2 takes pick best chorus.

## Next Session
- [ ] Listen to overnight demo songs in `public/audio/`
- [ ] Pick best 12 songs across 4 albums
- [ ] Regenerate full-length versions of winners
- [ ] Review brainstorm output in `content/brainstorm/`
- [ ] Review lyrics in `content/lyrics/`
- [ ] Design album covers in Canva Business
- [ ] Check if web app scaffold completed (Tasks 8-15)
- [ ] Test web app with real audio files
- [ ] Sign up for Loudly for Spotify distribution
- [ ] Post test song in Lenny's comments for community validation

## Mood
Breakthrough energy after hours of frustration. Eric went from "none are interesting" to "educational raving to create a better world." The music idea is genuinely his — it came from first-principles thinking about what Lenny's data ACTUALLY unlocks, not from my suggestions. He's excited but time-pressured (11% context left). Ralph is running overnight. Tomorrow morning is the real test: do the songs slap?
