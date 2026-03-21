# Lyric Craft Guide — Lenny's Greatest Hits

## 5 Core Rules

**1. Show, Don't Define**
Bad: "Burnout isn't working too much" → Good: "I can work all night when it's mine to build / But this leaves me standing still"

**2. Specificity Beats Abstraction**
Bad: "Analyzed the data, nothing we had missed" → Good: "We charted every click and built a wall of data — but we never made the call"

**3. Syllable Economy (6–12 per line)**
Bad: "Segmented down to lovers, jumped to thirty-three" (14 syl) → Good: "Cut the list to lovers, thirty-three" (9 syl)

**4. Sing for the Mouth — Open Vowels Win**
Bad: "Continuous discovery" (closed consonant clusters) → Good: "One honest question, every single week" (open vowels stretch)

**5. One Killer Line Per Song**
Surround it with atmosphere. Not every line is a thesis. Aim for one line people quote after one listen.
Example: "You're reading sheet music but you've never heard the song"

**6. End-Stopped Lines — No Run-On Lyrics**
Each line = one complete thought. Lyrics aren't poetry — they need to work with breath, melody, and natural phrasing. A singer needs to breathe. A listener needs to catch each line on first listen.
Bad: "Afraid the world might see the version that's the most / Honest thing you've ever made — so let it go" (thought spills across lines, "the most" dangles)
Good: "The most honest thing you've made / Let the world see it today" (each line stands alone)
Run-on is OK if it's intentional and rare (hip-hop flow, building tension). But default to end-stopped. After drafting, read each line as if singing it — if a listener can't understand the line on its own, rewrite it.

## Genre Tips

**Indie Folk** — Conversational tone, 7–9 syl/line, fingerpicked acoustic, intimate male vocal. Think Guerra: honest > clever, let space carry weight. Slant rhymes over perfect.

**Jazz Pop** — More syllable variation OK, lean into syncopation, sultry female vocal, brushed drums. Room for dry humor (Bridgers style). Jazz/narrative songs can vary chorus lyrics across repetitions, but keep the hook line identical.

**Lo-Fi Hip Hop** — Short lines (5–8 syl), repetitive hooks, relaxed flow, vinyl crackle. Keep it conversational. Call-and-response hooks work well.

**Acoustic Soul** — 8–10 syl/line, melismatic-friendly vowel endings, soulful vocal. Emotional weight through imagery (Iron and Wine style). Cinematic zoom: specific detail → universal theme.

## Suno v5 Tips

- Match syllable counts within each section (±2 syl consistency)
- Chorus shorter/simpler than verse — density in verses, emotion in choruses
- One performance cue per section tag max: `[Verse, whispered]` not `[Verse, whispered, slow, breathy]`
- Punctuation as vocal notation: commas = micro-pauses, dashes = held breath, ellipses = trail off
- Spell sustained notes: "lo-ove", "Ohhhh"
- Rhyme every 2nd or 4th line, not every line — dense rhyme sounds AI-generic
- Use anchor lines (repeat key line at each verse end) to stabilize vocal output
- Specify voice in style prompt: "breathy female vocal, intimate" or "warm male baritone"
- Total lyric text under 400 chars per generation pass
- If Suno mumbles: line is too long, has a homograph, or contains a name/URL — rewrite the phrase

## Batch 1 Mistakes to Avoid

1. **No thesis-statement lyrics** — "X isn't Y, it's Z" is a blog post, not a song
2. **Chorus repetition is power** — the DEFAULT is to repeat the chorus IDENTICALLY each time. That's what makes it singable and memorable. Only change a word or line on the FINAL chorus as an emotional payoff (e.g., "I" becomes "We"). Never vary more than one line. Narrative/story songs (jazz, spoken word) can vary more, but anthems, hymns, and hook-driven songs MUST repeat.
3. **No stat-stuffing** — if a number breaks the 12-syl limit, cut it or split the line
4. **No insider jargon** — "feather, brick, dump truck" and URLs won't land outside the community
5. **No filler rhymes** — "no fears," "that's the key," "go take a look" exist only to complete a rhyme

## Pre-Write Checklist

- [ ] Every line 6–12 syllables
- [ ] Syllable counts consistent within sections
- [ ] Structure tags on every section
- [ ] Chorus shorter than verse
- [ ] One killer quotable line identified
- [ ] No thesis-statement definitions
- [ ] **Sing test: read each line aloud as if performing. Can a listener catch it on first listen? Would it be easy to sing along?**
- [ ] **End-stopped lines: each line is a complete phrase. No dangling thoughts across line breaks.**
- [ ] Style prompt includes vocal character + mood + instruments
- [ ] Chorus repeats identically (only final chorus may vary 1 line for emotional payoff)
- [ ] No insider references that need context to understand
