# Artist Palette — Eric's Music Preferences for Suno

This file guides genre and style choices across all song generation. Consult it when writing the STYLE line of every Suno prompt.

---

## Core Artists (Default To These)

These are Eric's most-listened artists from Spotify Wrapped 2024 + 2025. When in doubt, reference these.

| Artist | What to Reference | Best For |
|--------|------------------|----------|
| **Jon Guerra** | Honest, contemplative intensity. Space carries weight. Conversational lyrics over clever ones. | Reflective songs, framework songs, quiet conviction |
| **Hollow Coves** | Warm acoustic builds, open vowels, cinematic folk. Gentle crescendos. | Inspirational songs, journey songs, triumph without bombast |
| **CityAlight** | Hymn-like simplicity, congregational singability. Every line lands. | Songs about meaning, purpose, conviction |
| **Doris Club** | Dream-pop warmth, lo-fi textures, gentle grooves. | Lighter songs, playful concepts, chill energy |
| **Jacob Collier** | Harmonic sophistication, neo-soul, unexpected chord movement. Joy in complexity. | Complex framework songs, songs that need musical surprise |
| **Stephen Day** | Indie folk-pop, warm production, earnest delivery. | Love letters to craft, optimistic songs |

## Also Great (Use When the Content Calls for It)

| Artist | What to Reference | Best For |
|--------|------------------|----------|
| **Jonathan Ogden** | Intimate worship-folk, close-mic warmth. "I didn't hear your voice drifting through" energy. | Deeply personal songs (burnout, enough, imposter) |
| **Tom Misch** | Jazz-pop guitar, groovy, sophisticated but accessible. | Songs about skill, craft, experimentation |
| **Bon Iver** | Raw vulnerability, falsetto, atmospheric folk. | Emotional peak songs, bridge moments |
| **Chet Baker** | Cool jazz intimacy, trumpet + vocal, late-night mood. | Quiet songs, songs about patience or loss |
| **Liturgical Folk** | Community singing, acoustic instruments, hymn structures. | Songs about teams, culture, shared mission |

## Gentle Rock (Use Sparingly, When Energy Demands It)

| Artist | What to Reference | Best For |
|--------|------------------|----------|
| **The 1975** | Soft synth-pop energy, not the heavy stuff. "Somebody Else" not "People." | Songs that need forward motion without aggression |
| **JVKE** | Pop-ballad builds, emotional piano moments. | Songs about pivotal moments, big reveals |

## Rock That's Less Aligned

These artists are great but don't match Eric's listening patterns. Use only if the content truly demands aggressive energy (e.g., a song about a startup fighting for survival might genuinely need edge):

- Arctic Monkeys, The Killers, Phoenix, Black Keys, The Strokes
- If you reach for these, ask: "Could a Hollow Coves or Jon Guerra version be just as good?" Usually yes.

## Production Guidelines

| Element | Preference |
|---------|-----------|
| **BPM range** | 72-130 BPM. Spread across batches — don't cluster at 95-105. Use varied time feels: straight 4/4, 6/8 waltz, 3/4, 12/8 shuffle. Not everything should be 4/4. |
| **Mic style** | Close-mic, intimate, warm |
| **Tone** | Warm analog over crisp digital |
| **Guitars** | Acoustic fingerpicking, nylon string, clean electric with reverb |
| **Keys** | Rhodes, Wurlitzer, warm piano. Not bright synths. |
| **Drums** | Vary across songs: brushed, shaker, full kit, programmed lo-fi, hand claps, cajón, NO drums at all. Don't default to "brushed drums" for everything. |
| **Bass** | Warm, round, felt not heard. Upright bass for jazz/folk. |
| **Vocals** | Warm male baritone or tenor. Intimate delivery. Breathy is good. Grit only for emotional peaks. Occasional female vocal or duet for variety. |
| **Strings** | Cello and/or violin should appear in ~25% of songs. Use as: featured solo instrument, emotional swells, pizzicato texture, or sustained bed. Cello is devastating for reckoning/loss songs. Violin lifts inspirational/journey songs. |
| **Production** | Lo-fi warmth, vinyl texture, room ambience. Not overproduced. |

## Batch Variety Rules (MANDATORY)

Before generating a batch, audit the STYLE lines against these rules. If any rule fails, rewrite prompts until they pass.

1. **No more than 3 songs** in a batch should share the same primary sonic template (e.g., "fingerpicked acoustic folk with brushed drums")
2. **Strings (cello/violin)** must appear in at least 25% of songs — sometimes featured, sometimes textural
3. **BPM spread**: at least 3 tempo bands represented — slow (72-88), mid (90-104), uptempo (106-130)
4. **Rhythmic variety**: at least 2 songs with NO acoustic drums (use programmed beats, hand percussion, or no percussion)
5. **At least 1 song** with female vocal or duet vocal
6. **At least 1 song** that is piano-driven (no guitar)
7. **At least 1 song** with prominent brass (trumpet, sax) — Chet Baker energy
8. **Don't repeat the same reference artist pair** across more than 2 songs in a batch
9. **Key variety**: Use unexpected keys — F#, Bb, Ab, Eb, G#m, Dbm. NOT just C, G, D, Am, Em every time. Weird keys have character. At least 30% of songs should be in flat/sharp keys.
10. **Chord progressions**: Avoid I-V-vi-IV (the "four chord" pop progression) in more than 2 songs per batch. Use: modal interchange, secondary dominants, jazz voicings (add9, maj7, m11), borrowed chords, chromatic bass lines. Specify chord flavor in the STYLE line when it matters.
11. **Time signature variety**: At least 2 songs per batch should NOT be straight 4/4. Use 6/8, 3/4, 12/8 shuffle, or half-time feel.

## Genre Decision Tree

Use this when choosing a genre for a new song:

1. **What's the emotional energy?**
   - Reflective/quiet → Acoustic folk (Jon Guerra, Jonathan Ogden)
   - Warm/inspirational → Indie folk (Hollow Coves, Stephen Day)
   - Playful/light → Dream-pop or lo-fi (Doris Club, Tom Misch)
   - Complex/sophisticated → Neo-soul or jazz-pop (Jacob Collier, Tom Misch)
   - Urgent/high-stakes → Gentle indie rock (The 1975 soft side) or folk-rock with build
   - Deeply personal/vulnerable → Atmospheric folk (Bon Iver, Jonathan Ogden)
   - Community/shared purpose → Liturgical folk or hymn-style (CityAlight)

2. **Match content to genre, not genre to habit.**
   - A song about Duolingo streaks (playful, gamified) → Dream-pop or lo-fi, not rock
   - A song about Andy Johns leaving tech (deeply personal) → Atmospheric folk, not synth-pop
   - A song about the Racecar framework (mechanical, energetic) → Folk-rock with build, not garage rock
