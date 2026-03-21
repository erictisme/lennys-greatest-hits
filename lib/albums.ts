import { Album, Track } from "./types";

const foundersTracks: Track[] = [
  {
    slug: "do-things-that-dont-scale",
    title: "Do Things That Don't Scale",
    albumSlug: "founders",
    trackNumber: 1,
    duration: "3:24",
    audioUrl: "/audio/do-things-that-dont-scale.mp3",
    coverImage: "/covers/do-things-that-dont-scale.jpg",
    genre: "Indie Folk",
    mood: "For founders who remember knocking on doors",
    tags: ["hustle", "early-stage", "grit"],
    lyrics: `[Verse 1]
I packed a camera and a carry-on
Knocked on every door from dusk to dawn
Took the photos, wrote the listing down
Slept on strangers' couches cross the town
They said it wouldn't work, too small to care
But I was already climbing every stair

[Chorus]
Do things that don't scale
Hand-write every letter, learn every name
Do things that don't scale
Before you build the engine, light the flame
Go to them, go to them
Physically go to them

[Verse 2]
Stripe boys at the laptop, wouldn't leave
Installed it right there — "you won't believe
How easy this could be, just let us try"
No landing page, no funnel, eye to eye
A hundred users loved by hand, not code
That's how you find the long and winding road

[Chorus]
Do things that don't scale
Hand-write every letter, learn every name
Do things that don't scale
Before you build the engine, light the flame
Go to them, go to them
Physically go to them

[Bridge]
Every great company started small
With someone who would not accept the wall
Between the builder and the ones they served
Every single user was deserved

[Chorus]
Do things that don't scale
Hand-write every letter, learn every name
Do things that don't scale
Before you build the engine, light the flame
Go to them, go to them
Physically go to them

[Outro]
Go to your users
Physically go to them`,
    concept: "Based on Brian Chesky's founding story, going door to door photographing Airbnb listings. Plus DoorDash's $6 flyers at Stanford and Tinder going sorority to sorority at USC. From Lenny's series on how the biggest companies got their first users.",
    keyInsight: "Before you build the engine, light the flame. Every great company started with someone who refused to scale.",
    sources: [
      { title: "Brian Chesky on Airbnb's early days", type: "podcast", url: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/", guest: "Brian Chesky" },
      { title: "Do Things That Don't Scale (paulgraham.com)", type: "newsletter", url: "https://paulgraham.com/ds.html", guest: "Paul Graham" },
    ],
    keyQuote: "Go to your users. Physically go to them.",
    quoteSpeaker: "Brian Chesky",
    storyBehind: "Brian Chesky told Lenny the story of flying to New York in 2009, personally photographing Airbnb listings with a rented camera because hosts' blurry phone photos weren't converting. The Collison brothers at Stripe would literally grab people's laptops and install Stripe for them on the spot. DoorDash's Tony Xu started by taping $6 flyers to dorm room doors at Stanford. Every one of these billion-dollar companies started with founders doing the most unscalable thing imaginable, and that's exactly what made them work.",
  },
  {
    slug: "product-market-fit",
    title: "Product-Market Fit (You'll Know)",
    albumSlug: "founders",
    trackNumber: 2,
    duration: "3:38",
    audioUrl: "/audio/product-market-fit.mp3",
    coverImage: "/covers/product-market-fit.jpg",
    genre: "Indie Pop",
    mood: "The anxiety of not knowing, then knowing",
    tags: ["strategy", "pivotal moment"],
    lyrics: `[Verse 1]
Dashboards flat and silence on the feed
Refresh again like maybe that's the lead
I read the thread, I ran the survey twice
A hundred answers, none of them precise
Am I close or am I chasing ghosts?
The metric that I need, nobody knows

[Pre-Chorus]
But they say — oh, they say

[Chorus]
You'll know, you'll know
When they're pulling it right from your hands
You'll know, you'll know
When the inbox can't keep up with plans
Forty percent very disappointed
If you lose this thing they built their life around it
If you have to ask — you don't have it yet
But you'll know

[Verse 2]
Superhuman ran the test one night
"How would you feel if this was gone?" — the light
Broke through the ceiling, forty percent said
"I'd be lost without it" — that's the thread
Not a graph or model, not a slide
It's the pull you feel from the other side

[Chorus]
You'll know, you'll know
When they're pulling it right from your hands
You'll know, you'll know
When the inbox can't keep up with plans
Forty percent very disappointed
If you lose this thing they built their life around it
If you have to ask — you don't have it yet
But you'll know

[Outro]
It feels like the product is being pulled
Right out of your hands
You'll know`,
    concept: "Based on Rahul Vohra's Superhuman episode. He ran the Sean Ellis test and scored 22%. Three years later, after segmenting to high-expectation customers, he hit 58%. The 40% threshold that changed how every founder measures PMF.",
    keyInsight: "The 40% very disappointed test: if fewer than 40% of users would be very disappointed without your product, you haven't found PMF.",
    sources: [
      { title: "Rahul Vohra on Superhuman's PMF engine", type: "podcast", url: "https://www.lennysnewsletter.com/p/superhumans-secret-to-success-rahul-vohra", guest: "Rahul Vohra" },
      { title: "Lenny's PMF newsletter series", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket", guest: "Lenny Rachitsky" },
    ],
    keyQuote: "If you have to ask, you don't have it.",
    quoteSpeaker: "Marc Andreessen",
    storyBehind: "Rahul Vohra came on Lenny's podcast and revealed that Superhuman initially scored just 22% on the Sean Ellis PMF test, well below the 40% threshold. Instead of panicking, he segmented responses to find his 'high-expectation customers' and rebuilt the product around them. Three years later, Superhuman hit 58%. That episode gave the startup world a concrete, repeatable way to measure the thing everyone said you'd 'just know' when you had it.",
  },
  {
    slug: "the-maze",
    title: "The Maze",
    albumSlug: "founders",
    trackNumber: 3,
    duration: "3:45",
    audioUrl: "/audio/the-maze.mp3",
    coverImage: "/covers/the-maze.jpg",
    genre: "Dark Folk",
    mood: "For anyone stuck in a tarpit idea",
    tags: ["cautionary tale", "hard truths"],
    lyrics: `[Verse 1]
Had a pitch that everyone believed
Friends at dinner nodding, "you should leave
Your job tomorrow, this idea's gold"
If it's easy to explain, I should've been told
Easy sells at parties, sounds so bright
But tarpits shine the hardest in the light

[Chorus]
You're not lost, you're in the maze
Every wall's just another phase
Most startup ideas are tarpit ideas
Gleaming on the surface, sinking for years
You're not lost, you're in the maze
And the maze is how you find your way

[Verse 2]
Pivoted three times, the board went cold
My cofounder says, "We do what we're told
Or we do what's right — I can't do both"
Six months in the dark, breaking every oath
But every dead end taught me where to turn
The only map worth having, you must earn

[Chorus]
You're not lost, you're in the maze
Every wall's just another phase
Most startup ideas are tarpit ideas
Gleaming on the surface, sinking for years
You're not lost, you're in the maze
And the maze is how you find your way

[Bridge]
If your idea's easy at a dinner party
It's probably a tarpit, gleaming, hearty
The real ones make you sound a little crazy
The real path forward's always hazy

[Chorus]
You're not lost, you're in the maze
Every wall's just another phase
Most startup ideas are tarpit ideas
Gleaming on the surface, sinking for years
You're not lost, you're in the maze
And the maze is how you find your way

[Outro]
The maze is how you find your way`,
    concept: "Based on Dalton Caldwell's episode. 10+ years at YC, 21 batches, 1,000+ startups. Many startups pivot after getting stuck. The median founder spends a full year on a tarpit idea before realizing it.",
    keyInsight: "If your idea is easy to explain at a dinner party, it's probably a tarpit. The maze IS the point.",
    sources: [
      { title: "Dalton Caldwell on tarpit ideas", type: "podcast", url: "https://www.lennysnewsletter.com/p/lessons-from-1000-yc-startups", guest: "Dalton Caldwell" },
      { title: "Michael Seibel on navigating uncertainty (via Dalton Caldwell episode)", type: "podcast", url: "https://www.lennysnewsletter.com/p/lessons-from-1000-yc-startups", guest: "Michael Seibel" },
    ],
    keyQuote: "Most startup ideas are tarpit ideas.",
    quoteSpeaker: "Dalton Caldwell",
    storyBehind: "Dalton Caldwell has watched over 1,000 startups come through YC across 21 batches. On Lenny's podcast, he described how tarpit ideas trap founders: they seem like unsolved problems, you get positive feedback from everyone, but people have been starting that same startup since the '90s. The median founder spends a full year stuck before realizing it. Tarpit ideas are the ones that sound brilliant at dinner parties (everyone nods, everyone agrees) but they trap founders because the obvious-sounding problems are obvious for a reason. The real opportunities feel weird and hard to explain.",
  },
];

const productTracks: Track[] = [
  {
    slug: "taste",
    title: "Taste",
    albumSlug: "product",
    trackNumber: 1,
    duration: "3:18",
    audioUrl: "/audio/taste.mp3",
    coverImage: "/covers/taste.jpg",
    genre: "Jazz Pop",
    mood: "When you know something's off but can't explain why",
    tags: ["craft", "design intuition"],
    lyrics: `[Verse 1]
The numbers say it's fine, the chart looks great
Adoption's up, engagement's pulling weight
But something in the corner of the screen
Is half a pixel off from what I mean
I couldn't tell you why — it just feels wrong
Like hearing someone play the right note on the wrong song

[Chorus]
It's taste — can't put it in a deck
It's taste — the thing you can't connect
To frameworks or to data or OKRs
It's knowing what the user never asks for
Taste is saying no to good ideas
And holding out through all the noise and fears
The data told me no
The user's face told me yes
That's taste

[Verse 2]
She walked me through the prototype last night
Said every interaction felt too tight
I said, "But look, the metrics don't complain"
She said, "The metrics miss the human pain"
Pattern recognition plus the empathy
To see the thing that isn't there but needs to be

[Chorus]
It's taste — can't put it in a deck
It's taste — the thing you can't connect
To frameworks or to data or OKRs
It's knowing what the user never asks for
Taste is saying no to good ideas
And holding out through all the noise and fears
The data told me no
The user's face told me yes
That's taste

[Outro]
You know it when you see it
But you feel it first
That's taste`,
    concept: "Based on Shreyas Doshi's episode on product sense and taste. Scott Belsky's rule: 'In the first 30 seconds, your user is lazy, vain, and selfish.' Taste is pattern recognition plus empathy: seeing what isn't there but needs to be.",
    keyInsight: "Product sense is pattern recognition plus empathy. Taste is the ability to say no to good ideas.",
    sources: [
      { title: "Shreyas Doshi on product sense", type: "podcast", url: "https://www.lennysnewsletter.com/p/episode-3-shreyas-doshi", guest: "Shreyas Doshi" },
      { title: "Brian Chesky on detail obsession", type: "podcast", url: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/", guest: "Brian Chesky" },
    ],
    keyQuote: "Taste is saying no to good ideas.",
    quoteSpeaker: "Shreyas Doshi",
    storyBehind: "Shreyas Doshi's conversation with Lenny about product sense became one of the most-shared episodes in the archive. He argued that taste isn't some mystical gift. It's pattern recognition plus empathy, built through thousands of hours of watching real users struggle. Scott Belsky added another layer: 'In the first 30 seconds, your user is lazy, vain, and selfish.' The best product people aren't the ones with the most data. They're the ones who can feel when something's off before anyone can explain why.",
  },
  {
    slug: "eleven-stars",
    title: "Eleven Stars",
    albumSlug: "product",
    trackNumber: 2,
    duration: "3:12",
    audioUrl: "/audio/eleven-stars.mp3",
    coverImage: "/covers/eleven-stars.jpg",
    genre: "Cinematic Folk",
    mood: "Dream absurd, then design the room",
    tags: ["ambition", "vision", "inspiration"],
    lyrics: `[Verse 1]
A one-star stay is sleeping on the floor
A three-star stay — you get a key and door
A five-star night, the sheets are pressed and clean
But what's a six? What does a seven mean?
An eight, you've got a bottle and a note
A nine, the host already learned your favorite coat

[Chorus]
What would eleven stars look like?
What would eleven stars feel like?
Elon picks you up in a rocket to the moon
The last ten percent is ninety percent of the magic
So dream absurd and then design the room
Eleven stars, eleven stars

[Verse 2]
You start where gravity can't hold you down
Imagining what can't exist in town
Then work it backwards, what's the version here
That keeps the wonder but removes the fear?
Craft is caring 'bout the things they'll never
Consciously notice, but they'll feel forever

[Chorus]
What would eleven stars look like?
What would eleven stars feel like?
Elon picks you up in a rocket to the moon
The last ten percent is ninety percent of the magic
So dream absurd and then design the room
Eleven stars, eleven stars

[Outro]
Don't think ten percent better
Think ten stars further
Then come back down to Earth
With something worth the work
Eleven stars`,
    concept: "Based on Brian Chesky's episode, Lenny's most listened-to episode, which took him a full year to land. Chesky's 11-star framework: at 11 stars, Elon picks you up in a rocket. Dream absurd, then design the room.",
    keyInsight: "The last 10% is 90% of the magic. Start with an impossibly ambitious vision and work backwards to what's buildable.",
    sources: [
      { title: "Brian Chesky on the 11-star framework", type: "podcast", url: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/", guest: "Brian Chesky" },
    ],
    keyQuote: "What would a 10-star experience look like? Now what about 11?",
    quoteSpeaker: "Brian Chesky",
    storyBehind: "It took Lenny a full year to land the Brian Chesky interview, and it became his most-listened-to episode ever. Chesky walked through the 11-star framework live: a 1-star Airbnb stay is sleeping on the floor, 5 stars is a nice clean place, and by 11 stars, Elon Musk picks you up in a rocket to the moon. The genius is that you're not supposed to build the 11-star version. You're supposed to dream absurd so that when you come back down to a 6 or 7, it still feels magical. 'The last 10% is 90% of the magic.'",
  },
  {
    slug: "talk-to-users",
    title: "Talk to Users",
    albumSlug: "product",
    trackNumber: 3,
    duration: "3:05",
    audioUrl: "/audio/talk-to-users.mp3",
    coverImage: "/covers/talk-to-users.jpg",
    genre: "Acoustic Pop",
    mood: "One conversation can save you six months",
    tags: ["customer discovery", "empathy"],
    lyrics: `[Verse 1]
We built a survey, sent it to a list
Analyzed the data, nothing we had missed
Color-coded dashboards, segments, cohort views
But somehow every launch still missed the cues
There's a simpler answer, it's been here all along
You're reading sheet music but you've never heard the song

[Chorus]
Talk to your users
Sit with them, listen, watch them try
Talk to your users
One conversation saves you months of why
You're not your user
You're not your user
Go sit with them

[Verse 2]
She watched him struggle on the second screen
Clicking where the button should have been
Five minutes told her more than months of charts
The gap between the data and their hearts
Continuous discovery, week by week
The answers aren't in Slack, they're down the street

[Chorus]
Talk to your users
Sit with them, listen, watch them try
Talk to your users
One conversation saves you months of why
You're not your user
You're not your user
Go sit with them

[Outro]
One conversation
Can save you six months
Talk to your users
Go sit with them`,
    concept: "Based on Teresa Torres' episode on continuous discovery habits, the #1 most recommended book in Lenny's Slack community. She's trained 11,000+ students. Her rule: one user interview per week, every week.",
    keyInsight: "One conversation can save you six months. You're not your user. Go sit with them.",
    sources: [
      { title: "Teresa Torres on continuous discovery", type: "podcast", url: "https://www.lennyspodcast.com/teresa-torres-on-how-to-interview-customers-automating-continuous-discovery-the-opportunity-solution-tree-framework-making-the-case-for-user-research-common-interviewing-mistakes-and-much-more/", guest: "Teresa Torres" },
      { title: "Gustaf Alstromer on talking to users", type: "podcast", url: "https://www.lennyspodcast.com/lessons-from-working-with-600-yc-startups-gustaf-alstromer-y-combinator-airbnb/", guest: "Gustaf Alstromer" },
    ],
    keyQuote: "One conversation can save you six months.",
    quoteSpeaker: "Teresa Torres",
    storyBehind: "Teresa Torres' book 'Continuous Discovery Habits' became the #1 most recommended book in Lenny's Slack community. On the podcast, she shared that she's trained over 11,000 product people, and the single most impactful habit is dead simple: one user interview per week, every week. Not quarterly research sprints, not annual surveys, just weekly conversations. Gustaf Alstromer from YC reinforced it: most product failures trace back to building in a vacuum. The answers aren't in your Slack channels, they're down the street.",
  },
];

const buildersTracks: Track[] = [
  {
    slug: "ship-it",
    title: "Ship It",
    albumSlug: "builders",
    trackNumber: 1,
    duration: "3:30",
    audioUrl: "/audio/ship-it.mp3",
    coverImage: "/covers/ship-it.jpg",
    genre: "Lo-Fi Hip Hop",
    mood: "Stop planning. Start shipping.",
    tags: ["motivation", "velocity"],
    lyrics: `[Verse 1]
Another standup, another blocker filed
Another sprint review where nothing's compiled
The backlog's deep, the roadmap's three years wide
But nothing's real until it's on the outside
You polish, you refine, you hold it close
Afraid the world might see the version that's the most
Honest thing you've ever made — so let it go
Speed is not reckless, speed is how you show you care

[Chorus]
Ship it, ship it, let it breathe
If you're not embarrassed, you waited too long to leave
Ship it, ship it, hit the key
The best PMs ship — the rest make decks for free
Ship it

[Verse 2]
Rabois said speed's a proxy for the love
You push it out because the users' time's above
Your ego and your fear of looking wrong
A shipped experiment beats a perfect song
That lives inside your laptop, never heard
Velocity is just another word
For giving people what they need today
Not next quarter, not next year — ship it, no delay

[Chorus]
Ship it, ship it, let it breathe
If you're not embarrassed, you waited too long to leave
Ship it, ship it, hit the key
The best PMs ship — the rest make decks for free
Ship it

[Outro]
Stop planning
Stop polishing
Stop asking for one more review
Ship it`,
    concept: "Based on Ramp's episode with Geoff Charles. Ramp hit $100M ARR in 2 years, the fastest-growing SaaS ever, with fewer than 5 PMs and 50 engineers. Their mantra: 'Our culture is velocity.'",
    keyInsight: "Speed is a proxy for how much you care. If you're not embarrassed by v1, you shipped too late.",
    sources: [
      { title: "Keith Rabois on speed as competitive advantage (via Ramp episode)", type: "podcast", url: "https://www.lennysnewsletter.com/p/lessons-from-scaling-ramp-sri-batchu", guest: "Keith Rabois" },
      { title: "Velocity over everything: How Ramp became the fastest-growing SaaS startup", type: "podcast", url: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/", guest: "Geoff Charles" },
    ],
    keyQuote: "If you're not embarrassed by the first version, you shipped too late.",
    quoteSpeaker: "Reid Hoffman",
    storyBehind: "Ramp's story blew up on Lenny's podcast. They hit $100M ARR in just 2 years, making them the fastest-growing SaaS company ever, with fewer than 5 PMs and 50 engineers. Their internal mantra was 'our culture is velocity.' Keith Rabois added the framework that stuck: speed isn't reckless, it's a proxy for how much you care about your users' time. Every week you don't ship is a week your users are stuck with a worse version of the thing you already built.",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding",
    albumSlug: "builders",
    trackNumber: 2,
    duration: "3:15",
    audioUrl: "/audio/vibe-coding.mp3",
    coverImage: "/covers/vibe-coding.jpg",
    genre: "Glitch Hop",
    mood: "Never wrote a line of code, shipped it anyway",
    tags: ["satire", "comedy", "AI"],
    lyrics: `[Verse 1]
Never wrote a line of code before last spring
Now I'm shipping features, building everything
Prompt and pray and iterate and test
Claude and Cursor doing all the rest
The engineers are sweating, "that's not clean"
But the users? They don't care what's behind the screen

[Chorus]
Vibe coding, vibe coding
Don't read the code, just feel the flow
Vibe coding, vibe coding
Ship it before the model gets to know
That you have no idea what you're doing
But it works and that's the point
Vibe coding

[Verse 2]
Best time to learn to code was years ago
Second best time? Never — let the models go
Designers building backends after lunch
PMs shipping prototypes on a hunch
Democratized the making, broke the gate
A million new builders and they didn't have to wait

[Chorus]
Vibe coding, vibe coding
Don't read the code, just feel the flow
Vibe coding, vibe coding
Ship it before the model gets to know
That you have no idea what you're doing
But it works and that's the point
Vibe coding

[Outro]
Welcome to the era
Where everyone can build
Vibe coding`,
    concept: "Based on Lazar Jovanovic's episode. The first official 'vibe coding engineer' at Lovable. Lovable hit $200M ARR in under a year with fewer than 100 people. 500+ builders wrote to Lenny saying they shipped products without writing code.",
    keyInsight: "The best time to learn to code was 10 years ago. The second best time is never. Just vibe code.",
    sources: [
      { title: "The rise of the professional vibe coder", type: "podcast", url: "https://www.lennysnewsletter.com/p/getting-paid-to-vibe-code", guest: "Lazar Jovanovic" },
      { title: "What people are vibe coding (and actually using)", type: "newsletter", url: "https://www.lennysnewsletter.com/p/what-people-are-vibe-coding-and-actually", guest: "Lenny Rachitsky" },
    ],
    keyQuote: "I just mass mass accept everything. I don't even look at the diffs. It's not even coding. I just see things, say things, run things, and copy paste things.",
    quoteSpeaker: "Andrej Karpathy",
    storyBehind: "Lenny covered the vibe coding revolution as it was happening in real time. Lazar Jovanovic became the first official 'vibe coding engineer' at Lovable, a company that hit $200M ARR in under a year with fewer than 100 people. Over 500 builders wrote to Lenny saying they'd shipped real products without writing a single line of code. Andrej Karpathy coined the term 'vibe coding', fully giving in to the vibes, seeing things appear, and not really caring how the code works. It's the most polarizing topic in Lenny's archive.",
  },
];

const humanSideTracks: Track[] = [
  {
    slug: "imposter",
    title: "Imposter",
    albumSlug: "the-human-side",
    trackNumber: 1,
    duration: "3:20",
    audioUrl: "/audio/imposter.mp3",
    coverImage: "/covers/imposter.jpg",
    genre: "Ambient Folk",
    mood: "Everyone at the table feels the same way",
    tags: ["vulnerability", "real talk"],
    lyrics: `[Verse 1]
Walked into the room and took a seat
Looked around the table, felt the heat
Everyone seemed certain, everyone belonged
Everyone but me — I must be wrong
Rehearsed my intro seven times last night
Still convinced they'd see right through the light

[Chorus]
Everyone at the table
Thinks everyone else belongs more
Everyone at the table
Is guarding the same locked door
Imposter, imposter
The feeling never goes away
You just learn to work alongside it
Day by day by day

[Verse 2]
She's a VP now, she runs the floor
But every morning pauses at the door
Wondering when they'll finally figure out
She's been improvising — filled with doubt
He shipped the product everyone admires
But scrolls through LinkedIn questioning what inspires
Anyone to think that he's the one
Who earned the seat — the work is never done

[Chorus]
Everyone at the table
Thinks everyone else belongs more
Everyone at the table
Is guarding the same locked door
Imposter, imposter
The feeling never goes away
You just learn to work alongside it
Day by day by day

[Outro]
Your imposter syndrome is lying to you
But I know that doesn't make it quiet
Day by day by day`,
    concept: "Based on Julie Zhuo's episode, Episode 2 of Lenny's Podcast. She spent 13 years at Facebook, going from IC designer to VP of Design. Wrote 'The Making of a Manager' from the imposter syndrome she felt the entire way up.",
    keyInsight: "Imposter syndrome is universal in tech. The feeling never disappears, you just learn to coexist with it.",
    sources: [
      { title: "Julie Zhuo on accelerating your career and impostor syndrome", type: "podcast", url: "https://www.lennysnewsletter.com/p/episode-2-julie-zhuo", guest: "Julie Zhuo" },
    ],
    keyQuote: "Everyone at the table thinks everyone else belongs more.",
    quoteSpeaker: "Multiple guests",
    storyBehind: "Julie Zhuo was Episode 2 of Lenny's Podcast. She spent 13 years at Facebook going from IC designer to VP of Design, leading teams of hundreds, and she felt like an imposter the entire way up. She wrote 'The Making of a Manager' partly to process that feeling. What made the episode resonate wasn't the advice; it was the raw honesty. Every VP, every founder, every senior IC who listened said the same thing: 'I thought it was just me.' It wasn't. It never is.",
  },
  {
    slug: "burnout",
    title: "Burnout",
    albumSlug: "the-human-side",
    trackNumber: 2,
    duration: "3:35",
    audioUrl: "/audio/burnout.mp3",
    coverImage: "/covers/burnout.jpg",
    genre: "Acoustic Soul",
    mood: "It's not the hours, it's the hollow ache",
    tags: ["mental health", "self-care"],
    lyrics: `[Verse 1]
Five AM alarm, the slack is lit
Fourteen notifications, none of it
Is what I signed up for back in the day
When building things felt more like play
I can't remember when the fire went cold
Just woke up one morning feeling old

[Chorus]
Burnout isn't working too much
It's working on the wrong things
Pouring from a cup that's empty to the touch
Optimizing for a game you don't want to win
And the scoreboard's bright but the lights are wearing thin
Burnout, burnout
When did I stop breathing?

[Verse 2]
She said, "I realized at 2 AM
I'm chasing someone else's dream again"
The title, the comp, the logo on the chest
None of it was worth this hollow rest
It's not the hours, it's the hollow ache
Of building castles for someone else's sake

[Chorus]
Burnout isn't working too much
It's working on the wrong things
Pouring from a cup that's empty to the touch
Optimizing for a game you don't want to win
And the scoreboard's bright but the lights are wearing thin
Burnout, burnout
When did I stop breathing?

[Outro]
You can't pour from an empty cup
But you can set it down
You can set it down`,
    concept: "Based on Andy Johns' episode. He spent 17 years at Facebook, Twitter, Wealthfront, and Quora before confronting burnout publicly on Lenny's show. Nearly 45% of tech workers report significant burnout.",
    keyInsight: "Burnout isn't about hours. It's about meaning. You can't pour from an empty cup, but you can set it down.",
    sources: [
      { title: "When enough is enough", type: "podcast", url: "https://www.lennyspodcast.com/when-enough-is-enough-andy-johns-ex-fb-twitter-quora/", guest: "Andy Johns" },
      { title: "Managing nerves, anxiety, and burnout", type: "podcast", url: "https://www.lennysnewsletter.com/p/managing-nerves-anxiety-and-burnout", guest: "Jonny Miller" },
    ],
    keyQuote: "Burnout isn't working too much. It's working on the wrong things.",
    quoteSpeaker: "Multiple guests",
    storyBehind: "Andy Johns spent 17 years at Facebook, Twitter, Wealthfront, and Quora, some of the highest-pressure companies in tech. On Lenny's show, he was raw about what burnout actually felt like: not dramatic collapse, but a slow hollowing out where the work that once lit you up starts feeling like someone else's dream. Nearly 45% of tech workers report significant burnout. Jonny Miller introduced the 'feather, brick, dump truck' framework on a separate episode. Your body sends warning signs as a feather first, then a brick, and if you ignore those, the dump truck arrives.",
  },
  // IC Track hidden until audio is generated — see content/suno-prompts/the-ic-track.json
];

// --- Batch 2: Coming Soon albums (locked tracks) ---

const operatorsTracks: Track[] = [
  {
    slug: "dont-break-the-streak",
    title: "Don't Break the Streak",
    albumSlug: "the-operators",
    trackNumber: 1,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Synth-Pop",
    mood: "Urgent, anthemic, playful",
    tags: ["gamification", "retention", "compounding growth"],
    lyrics: "",
    isLocked: true,
    concept: "Duolingo's growth turnaround by discovering that retaining current users (not acquiring new ones) was the key, leading to the streak mechanic that drives compounding engagement.",
    keyInsight: "Each day a user comes back, they care a bit more about coming back the next day — retention compounds into commitment.",
    keyQuote: "Each day you come back, you care a little more — that's the math they never taught before.",
    quoteSpeaker: "Jorge Mazal (paraphrased)",
    sources: [
      { title: "How Duolingo reignited user growth", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth", guest: "Jorge Mazal" },
      { title: "Behind the product: Duolingo streaks", type: "podcast", url: "https://www.lennyspodcast.com/behind-the-product-duolingo-streaks-jackson-shuttleworth/", guest: "Jackson Shuttleworth" },
    ],
    storyBehind: "Duolingo was the biggest language app in the world but growth went flat. They tried gamification and referrals — both failed. Then they discovered that focusing on current user retention had 5x the impact. The streak mechanic became their flywheel, turning daily returns into deepening commitment. DAU grew 4.5x.",
  },
  {
    slug: "im-in-the-room",
    title: "I'm in the Room",
    albumSlug: "the-operators",
    trackNumber: 2,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Driving Indie Rock",
    mood: "Urgent, defiant, bittersweet",
    tags: ["founder mode", "leadership", "detail obsession"],
    lyrics: "",
    isLocked: true,
    concept: "Brian Chesky's journey from delegating to professional managers (and losing the soul of Airbnb) to reclaiming 'founder mode' — being deeply involved in every detail.",
    keyInsight: "You can't hand off the thing only you feel — embodied knowledge can't be delegated.",
    keyQuote: "They built a church around the thing I'd start, then prayed to process till it lost its heart.",
    quoteSpeaker: "Brian Chesky (inspired)",
    sources: [
      { title: "Brian Chesky's new playbook", type: "podcast", url: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/", guest: "Brian Chesky" },
    ],
    storyBehind: "Chesky hired professional managers on the board's advice and stepped back. The product lost its soul. When COVID hit and Airbnb lost 80% of revenue, he cut a quarter of the company, dissolved the layers, and went back to being in every room — but the song also acknowledges the cost to the people around him.",
  },
  {
    slug: "build-the-machine",
    title: "Build the Machine",
    albumSlug: "the-operators",
    trackNumber: 3,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Anthemic Indie Rock",
    mood: "Driving, determined, bittersweet pride",
    tags: ["scaling", "operations", "invisible leadership"],
    lyrics: "",
    isLocked: true,
    concept: "Claire Hughes Johnson's invisible, indispensable work scaling Stripe from early stage to 7,000 people — the operator who builds the infrastructure while founders get the headlines.",
    keyInsight: "Behind every celebrated product is someone who poured the foundation in the dark. The decision-maker is always the person who steps up.",
    keyQuote: "Someone poured the foundation in the dark.",
    quoteSpeaker: "Claire Hughes Johnson (inspired)",
    sources: [
      { title: "Lessons from scaling Stripe", type: "podcast", url: "https://www.lennyspodcast.com/lessons-from-scaling-stripe-claire-hughes-johnson/", guest: "Claire Hughes Johnson" },
    ],
    storyBehind: "Claire walked into Stripe, assessed the chaos, and built the machine — systems, processes, decision frameworks — that allowed Stripe to scale from 160 to 7,000 people. John Collison said 'We need Claire in a box.' She laughed, then wrote the book.",
  },
  {
    slug: "doesnt-feel-right-yet",
    title: "Doesn't Feel Right Yet",
    albumSlug: "the-operators",
    trackNumber: 4,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Indie Rock",
    mood: "Defiant, precise, cathartic",
    tags: ["craft", "taste", "product quality"],
    lyrics: "",
    isLocked: true,
    concept: "Linear's philosophy of trusting taste over metrics — building opinionated software with a tiny team that refuses to ship until it feels right.",
    keyInsight: "Trust your taste over your metrics. The best products come from people who care enough to say 'this doesn't feel right yet.'",
    keyQuote: "Not 'cause we were loud — 'cause we were sure.",
    quoteSpeaker: "Karri Saarinen (inspired)",
    sources: [
      { title: "How Linear builds product", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-linear-builds-product", guest: "Karri Saarinen" },
    ],
    storyBehind: "Karri Saarinen was a designer frustrated by bloated project management tools built by people who never used them. He founded Linear with a tiny team (50 people, 2 have ever left), more cash than VCs gave them, and a relentless commitment to craft over speed.",
  },
  {
    slug: "the-ramp-speed",
    title: "The Ramp Speed",
    albumSlug: "the-operators",
    trackNumber: 5,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "High-Energy Synth-Pop",
    mood: "Exhilarating, urgent, triumphant",
    tags: ["velocity", "shipping culture", "small teams"],
    lyrics: "",
    isLocked: true,
    concept: "Ramp's strategy of using raw speed as a competitive advantage — small teams, no roadmaps, shipping in 90-day cycles to become the fastest-growing SaaS startup ever.",
    keyInsight: "When speed is your strategy, small teams beat giants because every mistake costs less and every lesson comes faster.",
    keyQuote: "Doing beats the diagram.",
    quoteSpeaker: "Geoff Charles (inspired)",
    sources: [
      { title: "How Ramp builds product", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-ramp-builds-product", guest: "Geoff Charles" },
      { title: "Velocity over everything: How Ramp became the fastest-growing SaaS startup of all time", type: "podcast", url: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/", guest: "Geoff Charles" },
    ],
    storyBehind: "Eight people with a whiteboard dared to beat financial giants in 90 days. No roadmaps, no burndown charts — just 'did you ship the thing you said you would?' They built a culture where someone fixes a bug that wasn't theirs at midnight. That's the kind of fast that feels right.",
  },
];

const growthEngineTracks: Track[] = [
  {
    slug: "the-racecar",
    title: "The Racecar",
    albumSlug: "growth-engine",
    trackNumber: 1,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Driving Alt-Rock",
    mood: "Energetic, anthemic, revelatory",
    tags: ["growth", "frameworks", "loops"],
    lyrics: "",
    isLocked: true,
    concept: "Lenny's Racecar Growth Framework — growth isn't one thing but a machine with parts (kickstarts, engines/loops, fuel, lubricants) that work together.",
    keyInsight: "Growth isn't one thing — it's a machine with parts that work together, and the secret is knowing which part to build at which stage.",
    keyQuote: "Pouring fuel with no engine built, wondering why the car stood still.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "The Racecar Growth Framework — expanded and illustrated", type: "newsletter", url: "https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "The extended metaphor of a racecar: you start by push-starting (doing things that don't scale), then the engine catches (growth loops), then you pour fuel (paid growth) and grease the gears (reduce churn). The universal founder mistake is pouring fuel before building the engine.",
  },
  {
    slug: "find-your-north-star",
    title: "Find Your North Star",
    albumSlug: "growth-engine",
    trackNumber: 2,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Anthemic Indie Synth-Rock",
    mood: "Driving, urgent, clarifying",
    tags: ["metrics", "focus", "strategy"],
    lyrics: "",
    isLocked: true,
    concept: "Choosing your North Star Metric — the one number that captures the value you deliver — and the warning that what you measure is what you become.",
    keyInsight: "What you measure is what you become. Pick the metric that represents the value you deliver, not just the revenue you extract.",
    keyQuote: "What you measure is what you become.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "Choosing Your North Star Metric", type: "newsletter", url: "https://www.lennysnewsletter.com/p/choosing-your-north-star-metric", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "The song starts with a PM drowning in 14 dashboards, then shows how companies like Airbnb ('nights booked') and Facebook found their North Star. But the bridge is a cautionary tale: Facebook switched to daily active users, brought people back so well they couldn't leave — Congress called.",
  },
  {
    slug: "the-first-thousand",
    title: "The First Thousand",
    albumSlug: "growth-engine",
    trackNumber: 3,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Uptempo Indie Pop",
    mood: "Scrappy, triumphant, energetic",
    tags: ["growth", "early users", "hustle"],
    lyrics: "",
    isLocked: true,
    concept: "How the biggest consumer apps got their first 1,000 users through scrappy, unscalable, unglamorous hustle.",
    keyInsight: "Every app you've ever loved once looked lame. You earn your first users one by one through showing up, not through scale.",
    keyQuote: "Zuck was never doing this.",
    quoteSpeaker: "Brian Chesky (paraphrased)",
    sources: [
      { title: "How the biggest consumer apps got their first 1,000 users", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "A montage of origin stories: Whitney Wolfe pitching Tinder dorm to dorm, Evan Spiegel at the mall with Snapchat flyers, Ben Silbermann changing Apple Store displays to show Pinterest, Tony Xu taping a DoorDash menu to a wall, Brian Chesky hot-gluing cereal boxes for Airbnb.",
  },
  {
    slug: "go-viral",
    title: "Go Viral",
    albumSlug: "growth-engine",
    trackNumber: 4,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Dark Electro-Pop",
    mood: "Electric, manic, cinematic",
    tags: ["virality", "consumer apps", "growth loops"],
    lyrics: "",
    isLocked: true,
    concept: "Nikita Bier's story of building repeatedly viral consumer apps — 14 failures before a hit, reading the room instead of the language, controlled geographic rollouts.",
    keyInsight: "Virality comes from finding latent demand and controlling the burn — geographic rollout, school by school, state by state.",
    keyQuote: "Couldn't read a line, but I read the room.",
    quoteSpeaker: "Nikita Bier (inspired)",
    sources: [
      { title: "How to consistently go viral", type: "podcast", url: "https://www.lennyspodcast.com/how-to-consistently-go-viral-nikita-bier/", guest: "Nikita Bier" },
    ],
    storyBehind: "Nikita tried 14 apps, was about to dissolve his company, then his app hit #1 in the US — written in Arabic, a language he couldn't read. He pivoted, built Gas (anonymous compliments), dropped it in Georgia schools, watched it spread state by state.",
  },
  {
    slug: "you-aint-that",
    title: "You Ain't That",
    albumSlug: "growth-engine",
    trackNumber: 5,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Funky Pop-Soul",
    mood: "Confident, swaggering, liberating",
    tags: ["positioning", "go-to-market", "product identity"],
    lyrics: "",
    isLocked: true,
    concept: "April Dunford's positioning framework — your product isn't broken, it's badly introduced. Same code, different name, and suddenly the phone rings.",
    keyInsight: "You're not broken, you're just badly introduced. The right positioning transforms a product nobody buys into something everyone needs.",
    keyQuote: "You're not broken, you're just badly introduced.",
    quoteSpeaker: "April Dunford (inspired)",
    sources: [
      { title: "April Dunford on product positioning, segmentation, and optimizing your sales process", type: "podcast", url: "https://www.lennyspodcast.com/april-dunford-on-product-positioning-segmentation-and-optimizing-your-sales-process/", guest: "April Dunford" },
    ],
    storyBehind: "April had a product she called an 'Access killer.' She called her customer list and heard 'Sorry, lady, we don't have that.' But 21 customers picked up and said 'Your product made me hero of my team!' Same code, no changes — except the name and positioning. The phone started ringing.",
  },
];

const startupLifeTracks: Track[] = [
  {
    slug: "nobodys-coming",
    title: "Nobody's Coming",
    albumSlug: "the-startup-life",
    trackNumber: 1,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Garage Rock",
    mood: "Scrappy, urgent, triumphant",
    tags: ["marketplaces", "cold start", "flywheel"],
    lyrics: "",
    isLocked: true,
    concept: "The marketplace cold-start problem — every great marketplace started by the founder doing tiny, unscalable things until the flywheel caught on its own.",
    keyInsight: "Nobody's coming till somebody's here. Every marketplace flywheel starts with the founder going first through the door.",
    keyQuote: "Nobody's coming till somebody's here.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "How to Kickstart and Scale a Marketplace Business (8-part series)", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "A founder launches to silence — two empty sides of a marketplace. So they pack a camera, catch a flight, ring doorbells till midnight. Tony Xu dashed food on his own date night. Then one morning, stickers appeared in windows they never placed. The flywheel caught.",
  },
  {
    slug: "not-venture-scale",
    title: "Not Venture-Scale",
    albumSlug: "the-startup-life",
    trackNumber: 2,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Indie Folk-Rock",
    mood: "Defiant, bittersweet, warm",
    tags: ["bootstrapping", "independence", "founder identity"],
    lyrics: "",
    isLocked: true,
    concept: "The case for building a business that's 'not venture-scale' — choosing independence and ownership over the unicorn treadmill.",
    keyInsight: "Not every fire needs to be the sun. You can build a real, profitable business that a VC would pass on — and own every cent of it.",
    keyQuote: "They want a unicorn — I built a home.",
    quoteSpeaker: "Narrative voice",
    sources: [
      { title: "Jason Fried challenges your thinking on fundraising, goals, growth, and more", type: "podcast", url: "https://www.lennyspodcast.com/jason-fried-challenges-your-thinking-on-fundraising-goals-growth-and-more/", guest: "Jason Fried" },
    ],
    storyBehind: "Three characters: the founder rejected by a VC at slide eleven, the buddy who took the money and ended up on a golden treadmill owning 10% of what was once his, and Patrick Campbell who bootstrapped to $200M, sold it all, and still whispered 'left a billion on the table.'",
  },
  {
    slug: "smile-through-the-silence",
    title: "Smile Through the Silence",
    albumSlug: "the-startup-life",
    trackNumber: 3,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Piano-Driven Indie Folk",
    mood: "Intimate, building, bittersweet",
    tags: ["fundraising", "rejection", "founder loneliness"],
    lyrics: "",
    isLocked: true,
    concept: "The brutal asymmetry of fundraising — VCs do this every Tuesday, founders do this once in their life.",
    keyInsight: "The power asymmetry of fundraising is devastating: they do this every Tuesday, you do this once in your life. But someone believing in you can change everything.",
    keyQuote: "They do this every Tuesday. You do this once in your life.",
    quoteSpeaker: "Marc McCabe (inspired)",
    sources: [
      { title: "A playbook for fundraising", type: "newsletter", url: "https://www.lennysnewsletter.com/p/a-playbook-for-fundraising", guest: "Marc McCabe" },
    ],
    storyBehind: "A founder carves slides at 2AM, pitches to the mirror, melts through 8 months of runway. Five pitches a day for two straight weeks, warm handshakes then silence. Then one VC leans in and asks about the dream — not the deck.",
  },
  {
    slug: "push-the-car",
    title: "Push the Car",
    albumSlug: "the-startup-life",
    trackNumber: 4,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Acoustic Indie Folk",
    mood: "Melancholic, raw, resolute",
    tags: ["failure", "traction", "founder delusion"],
    lyrics: "",
    isLocked: true,
    concept: "Two stories of startups that didn't make it — one that couldn't get real traction despite great credentials, and one that tore down its walls going freemium.",
    keyInsight: "If your product only moves when you're pushing it, it was never alive. The hardest thing is figuring out whether the crowd is rooting for you or for the car.",
    keyQuote: "The crowd was rooting for us, not the car.",
    quoteSpeaker: "Jake Fuentes (inspired)",
    sources: [
      { title: "Lessons learned from a startup that didn't make it", type: "newsletter", url: "https://www.lennysnewsletter.com/p/lessons-learned-from-a-startup-that", guest: "Jake Fuentes" },
    ],
    storyBehind: "Five million raised, a team of ten, repeat founders. But no one switched their systems in. On a quiet night, the founder let go and the car stopped beneath a yellow light. The crowd was cheering for the founders, not the product.",
  },
  {
    slug: "its-never-going-well",
    title: "It's Never Going Well",
    albumSlug: "the-startup-life",
    trackNumber: 5,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Indie Folk Anthem",
    mood: "Vulnerable, communal, defiant",
    tags: ["founder struggle", "vulnerability", "resilience"],
    lyrics: "",
    isLocked: true,
    concept: "Gustaf Alstromer's lessons from 600+ YC startups — the universal founder experience of struggle, vulnerability, and building anyway.",
    keyInsight: "The worst part of struggling isn't failing — it's thinking it's only you. Shared vulnerability unlocks resilience.",
    keyQuote: "I'd rather hear a hundred nos than build in silence all my days.",
    quoteSpeaker: "Gustaf Alstromer (inspired)",
    sources: [
      { title: "Lessons from 600+ YC startups", type: "podcast", url: "https://www.lennyspodcast.com/lessons-from-working-with-600-yc-startups-gustaf-alstromer-y-combinator-airbnb/", guest: "Gustaf Alstromer" },
    ],
    storyBehind: "Someone asks how it's going — you freeze, then smile. In a YC group session, Gustaf says forget your pitch, just tell us everything. She goes first, voice shaking: 'No traction and we're out of cash.' Something in your chest breaks open, because yours sounds just like that.",
  },
];

const careerMovesTracks: Track[] = [
  {
    slug: "the-magic-loop",
    title: "The Magic Loop",
    albumSlug: "career-moves",
    trackNumber: 1,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Funky Neo-Soul Pop",
    mood: "Groovy, confident, building",
    tags: ["career growth", "managing up", "compounding"],
    lyrics: "",
    isLocked: true,
    concept: "Ethan Evans's 'Magic Loop' framework for rapid career growth — ask your boss what they need, deliver it, build trust, and compound your way up.",
    keyInsight: "Career growth isn't about working harder — it's about asking 'what do you need?' and creating a compounding loop of trust and opportunity.",
    keyQuote: "Not stuck down here, I'm stuck going up.",
    quoteSpeaker: "Ethan Evans's mentee",
    sources: [
      { title: "The Magic Loop — A framework for rapid career growth", type: "newsletter", url: "https://www.lennysnewsletter.com/p/the-magic-loop", guest: "Ethan Evans" },
    ],
    storyBehind: "A farm kid from Ohio raises his hand on day one: 'Where's the gap nobody wants to own?' Two years later he led the floor he'd grown. Fifteen years later, his mentee calls and says 'I'm stuck — not stuck down here, I'm stuck going up.'",
  },
  {
    slug: "dont-give-em-your-number",
    title: "Don't Give 'Em Your Number",
    albumSlug: "career-moves",
    trackNumber: 2,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Gospel-Soul Anthem",
    mood: "Defiant, empowering, swagger",
    tags: ["salary negotiation", "self-advocacy", "knowing your worth"],
    lyrics: "",
    isLocked: true,
    concept: "The rules of salary negotiation — never give your number first, let silence do the talking, understand the game is designed to keep you quiet.",
    keyInsight: "The salary negotiation game has rules, and once you learn them, you stop leaving money on the table.",
    keyQuote: "They built this game to keep you quiet.",
    quoteSpeaker: "Niya Dragova (inspired)",
    sources: [
      { title: "The 10 commandments of salary negotiation", type: "newsletter", url: "https://www.lennysnewsletter.com/p/negotiating-comp", guest: "Niya Dragova" },
    ],
    storyBehind: "Rehearsed lines in the parking lot, walked in steady, then she leaned across the table and asked 'what's your number?' — mouth went dry. The system is built to keep you quiet, grateful, and small enough to say 'that's great.'",
  },
  {
    slug: "fire-with-grace",
    title: "Fire with Grace",
    albumSlug: "career-moves",
    trackNumber: 3,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Soulful Indie Folk",
    mood: "Intimate, devastating, redemptive",
    tags: ["firing", "leadership", "compassion"],
    lyrics: "",
    isLocked: true,
    concept: "How to fire people with compassion — the most dreaded leadership task reframed as liberation.",
    keyInsight: "Firing someone with grace means being their agent on the way out — holding their weight, not explaining it away.",
    keyQuote: "I've been holding her in place when she should fly.",
    quoteSpeaker: "Matt Mochary (inspired)",
    sources: [
      { title: "How to fire people with grace, work through fear, and nurture innovation", type: "podcast", url: "https://www.lennyspodcast.com/how-to-fire-people-with-grace-matt-mochary/", guest: "Matt Mochary" },
    ],
    storyBehind: "Monday 9AM, door closed, her coffee getting cold. By pretending she's a fit when she's not, he's holding her in place when she should fly. After the conversation, he picked up the phone and called in every name. Two hours on the line to find her light. Now she's building something she adores.",
  },
  {
    slug: "when-enough-is-enough",
    title: "When Enough Is Enough",
    albumSlug: "career-moves",
    trackNumber: 4,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Cinematic Piano Ballad",
    mood: "Raw, breaking, cathartic",
    tags: ["burnout", "mental health", "identity"],
    lyrics: "",
    isLocked: true,
    concept: "Andy Johns's story of burnout, childhood wounds driving achievement, and learning that the mountain doesn't care how much the climbing cost.",
    keyInsight: "Your body's alarm — broken sleep, broken heart, broken teeth — is telling you something your ambition won't let you hear.",
    keyQuote: "You were enough before the gold and the climb.",
    quoteSpeaker: "Andy Johns (inspired)",
    sources: [
      { title: "When enough is enough", type: "podcast", url: "https://www.lennyspodcast.com/when-enough-is-enough-andy-johns-ex-fb-twitter-quora/", guest: "Andy Johns" },
    ],
    storyBehind: "Andy's mother died when he was ten. He learned to win so people would want him. Captain, straight A's, six startups. At 28, shaking on the floor. Ground his teeth to dust, rebuilt them twice. Forty-five days in a quiet room, he found the boy behind the noise.",
  },
  {
    slug: "state-of-the-me",
    title: "State of the Me",
    albumSlug: "career-moves",
    trackNumber: 5,
    duration: "2:44",
    audioUrl: "/audio/state-of-the-me.mp3",
    coverImage: "",
    genre: "Neo-Soul Pop",
    mood: "Confident, empowered, groovy",
    tags: ["managing up", "visibility", "career growth"],
    lyrics: `[Verse 1]
I've been staying late, nobody sees
Twelve things on my plate, they know about three
Boss walks in and asks about the brief
Finished that last Tuesday — no relief
I thought my silence meant I'm strong
Turns out invisible is just gone

[Chorus]
State of the Me, every Monday morning
Here's my world, here's what I need
It ain't sucking up, it's just showing up
Three short lines gonna set me free

[Verse 2]
Two weeks in, she knows what's on my list
Knows the blockers 'fore I have to ask
Used to say yes every single time
Now I set the bar before I climb
They can't reward the work they've never seen
So I wrote it down and let it breathe

[Chorus]
State of the Me, every Monday morning
Here's what I shipped, here's what's in my way
It ain't sucking up, it's just showing up
Two weeks in and something starts to change

[Bridge]
She said, "My boss won't let me breathe"
I said, "Is anyone else on a leash?"
The room went quiet, truth hit like a wall
Maybe the leash is yours to break

[Final Chorus]
State of the Me, every Monday morning
Here's what I built, here's where I'm heading
It ain't sucking up, it's just showing up
Trust goes up, the walls come down — I'm ready

[Outro]
The work won't speak for you
It never did
But you can`,
    concept: "The practice of 'managing up' — sending your boss a simple weekly update so your work becomes visible and trust compounds.",
    keyInsight: "They can't reward the work they've never seen. Visibility isn't sucking up — it's showing up.",
    keyQuote: "They can't reward the work they've never seen.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "Managing up", type: "newsletter", url: "https://www.lennysnewsletter.com/p/managing-up", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "Staying late, nobody sees. Twelve things on the plate, boss knows about three. The 'State of the Me' is a Monday morning ritual: three short lines about what you shipped, what's blocking you, what you need. Two weeks in, something starts to change.",
  },
];

const frameworksTracks: Track[] = [
  {
    slug: "trace-it-back",
    title: "Trace It Back",
    albumSlug: "frameworks",
    trackNumber: 1,
    duration: "2:49",
    audioUrl: "/audio/trace-it-back.mp3",
    coverImage: "",
    genre: "Cinematic Neo-Soul",
    mood: "Cool, purposeful, clarifying",
    tags: ["strategy", "alignment", "purpose"],
    lyrics: `[Verse 1]
I shipped the button, closed the ticket out
They asked me why — I couldn't spell it out
A hundred Mondays sent to who-knows-where
Plugged to a roadmap no one ever shares
The mission's painted pretty on the wall
But no one drew the line between it all

[Chorus]
Trace it back, trace it back
From the task up to the mission
Trace it back, trace it back
Every step is a decision
If you can't connect the dots
You're moving fast but standing still

[Verse 2]
Danny Ocean didn't walk in blind
He started with a reason, then designed
The mission — rob three casinos cold
The vision — Tess and more than he could hold
Strategy through every coded door
Eleven people, each one knew the score

[Chorus]
Trace it back, trace it back
From the vault up to the vision
Trace it back, trace it back
Every heist needs one decision
If you lose the thread somewhere
You're pulling strings that come apart

[Bridge]
"Spread ideas" — two words, and TED was born
One line from Tesla changed the road we're on
The biggest missions fit inside your chest
The smallest task should pass the same damn test

[Final Chorus]
Trace it back, trace it back
From your desk up to the mission
Trace it back, trace it back
It was never just a ticket
Now I see the line that runs
From my hands to why I'm here

[Outro]
Mission, vision, strategy
Goals, roadmap, then the task`,
    concept: "Lenny's Mission-Vision-Strategy-Goals-Roadmap-Task cascade — every task should trace back to the mission.",
    keyInsight: "If you can't trace your daily task back to the company mission, you're moving fast but standing still.",
    keyQuote: "The biggest missions fit inside your chest. The smallest task should pass the same damn test.",
    quoteSpeaker: "Lenny Rachitsky (inspired)",
    sources: [
      { title: "Mission - Vision - Strategy - Goals - Roadmap - Task", type: "newsletter", url: "https://www.lennysnewsletter.com/p/mission-vision-strategy-goals-roadmap", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "A PM ships a button, closes the ticket, gets asked 'why?' and can't spell it out. Then the Ocean's Eleven metaphor: Danny Ocean didn't walk in blind — mission, vision, strategy, eleven people who each knew the score. TED's entire mission is two words: 'Spread ideas.'",
  },
  {
    slug: "the-disease",
    title: "The Disease",
    albumSlug: "frameworks",
    trackNumber: 2,
    duration: "2:54",
    audioUrl: "/audio/the-disease.mp3",
    coverImage: "",
    genre: "Driving Indie Rock",
    mood: "Defiant, urgent, righteous",
    tags: ["product management", "empowered teams", "feature factories"],
    lyrics: `[Verse 1]
Monday morning, roadmap on my screen
Fourteen features I have never seen
"Just build it," says the corner suite
He's never talked to users on the street
Saw something shiny at a talk last week
Now my whole quarter's planned before I speak

[Chorus]
It's the disease
The idea man thinks he's ninety percent
It's the disease
The builders leave — nobody hears the door
Nobody knows what they were building for

[Verse 2]
Jobs called it back in '95
When companies get big, the craft won't thrive
The sales floor gets promoted every round
The ones who shaped the product can't be found
You scale with leaders or you scale with rules
The rules look safe — the leaders look like fools

[Chorus]
It's the disease
Eighty percent won't ever make a dent
It's the disease
Who cares how fast you shipped what no one needs?
Nobody knows what they were building for

[Bridge]
Give me one quarter
One team, one problem, one real shot
I'll sit with the ones who feel the pain
And build what the roadmap forgot

[Final Chorus, belted]
Cure the disease
The ones who feel it — let them find the way
Cure the disease
Give us problems — watch the builders stay
Now they know what they were building for

[Outro]
You solve it or you don't
Who cares about release?
Cure the disease`,
    concept: "Marty Cagan's critique of 'feature factories' — companies where builders are told what to build rather than given problems to solve.",
    keyInsight: "When the 'idea person' thinks they're 90% of the work and builders are just implementers, the builders leave and nobody hears the door.",
    keyQuote: "Who cares how fast you shipped what no one needs?",
    quoteSpeaker: "Marty Cagan (inspired)",
    sources: [
      { title: "The nature of product", type: "podcast", url: "https://www.lennyspodcast.com/the-nature-of-product-marty-cagan/", guest: "Marty Cagan" },
    ],
    storyBehind: "Monday morning, roadmap on screen, fourteen features the PM has never seen. 'Just build it' says the corner suite — someone who's never talked to users. The cure: give builders problems, not solutions, and watch them stay.",
  },
  {
    slug: "test-everything",
    title: "Test Everything",
    albumSlug: "frameworks",
    trackNumber: 3,
    duration: "2:39",
    audioUrl: "/audio/test-everything.mp3",
    coverImage: "",
    genre: "Driving Indie Rock",
    mood: "Energetic, defiant, awestruck",
    tags: ["A/B testing", "experimentation", "humility"],
    lyrics: `[Verse 1]
Every meeting, same old scene
Someone's selling us the dream
"This one's different, watch it fly"
Eighty-five percent will die
A backlog full of brilliant plans
Dying quiet in our hands

[Chorus]
Test everything, test everything
Your best idea might not mean a thing
The throwaway, the afterthought
Could be the biggest win you've got
Test everything

[Verse 2]
A tiny change sat on the list
Move the ad text — easy to miss
It gathered dust for half a year
Till one engineer said "I'm building here"
Two days to ship it, let it run
The alarm went off — what had they done?

[Chorus]
Test everything, test everything
"Too good to be true — go find the bug"
But there was no bug, no mistake
Just the biggest win they'd ever make
Test everything

[Bridge]
A hundred million from a shrug
From the change nobody loved enough
If nine in ten are gonna break
You're free to try the wildest take

[Final Chorus]
Test everything, test everything
The one you'd cut could be the biggest thing
Don't trust the room, don't trust your gut
The data knows what you do not
Test everything

[Outro]
We thought we knew
We never do`,
    concept: "Ronny Kohavi's guide to A/B testing — the story of a tiny, ignored change at Bing that generated $100M in revenue.",
    keyInsight: "Your best idea might not mean a thing. The throwaway afterthought could be the biggest win. 85% of ideas fail.",
    keyQuote: "A hundred million from a shrug.",
    quoteSpeaker: "Ronny Kohavi (inspired)",
    sources: [
      { title: "The ultimate guide to A/B testing", type: "podcast", url: "https://www.lennyspodcast.com/the-ultimate-guide-to-ab-testing-ronny-kohavi/", guest: "Ronny Kohavi" },
    ],
    storyBehind: "A tiny change sat on Bing's backlog for half a year — move the ad text. One engineer said 'I'm building this.' Two days to ship, let it run. The alarm went off — 'Too good to be true, go find the bug.' But there was no bug. Just $100 million in annual revenue.",
  },
  {
    slug: "whats-the-job",
    title: "What's the Job",
    albumSlug: "frameworks",
    trackNumber: 4,
    duration: "3:39",
    audioUrl: "/audio/whats-the-job.mp3",
    coverImage: "",
    genre: "Acoustic Soul",
    mood: "Warm, revelatory, intimate",
    tags: ["JTBD", "customer empathy", "product strategy"],
    lyrics: `[Verse 1]
Two candy bars on the same damn shelf
Same chocolate and caramel inside
One gets grabbed when you've skipped your lunch
The other when you need a place to hide
One competes with a protein shake
The other with a glass of wine
Same aisle, different universe
You'd never know just looking at the sign

[Chorus]
What's the job, what's the job
It was never 'bout the thing
What's the job, what's the job
It's the struggle that they bring
You gave them what they asked for
And they walked away
What's the job?

[Verse 2]
He built the condos for the empty nest
They said, "We're done with dinner plates"
So he cut the room, gave them the rest
And six weeks later, no one stayed
He sat them down and heard the truth
The table held their holidays, their grace
Every candle, every fight, every prayer
They couldn't leave until it had a place

[Chorus]
What's the job, what's the job
It was never what they said
What's the job, what's the job
It's the life inside their head
You gave them what they asked for
But they needed something else
What's the job?

[Bridge]
He couldn't read a single page
So he learned to read the room
Not the feature, not the price tag
But the weight behind the move

[Final Chorus, building]
What's the job, what's the job
It was never 'bout the brand
What's the job, what's the job
There's a life that needs a hand
Build it and they'll come, they said
That was always just a lie
What's the job?

[Outro]
He cut the bedroom for the table
They moved the week they knew it'd fit`,
    concept: "Bob Moesta's Jobs to Be Done framework — people don't buy products, they hire them to make progress.",
    keyInsight: "People don't buy, they hire. What they say isn't what they do. The struggling moment is the clue.",
    keyQuote: "Same aisle, different universe.",
    quoteSpeaker: "Bob Moesta (inspired)",
    sources: [
      { title: "The ultimate guide to JTBD", type: "podcast", url: "https://www.lennyspodcast.com/the-ultimate-guide-to-jtbd-bob-moesta/", guest: "Bob Moesta" },
    ],
    storyBehind: "A condo developer couldn't sell units — retirees said 'we don't need a dining room' but every sale fell through at six weeks. Bob sat across from them and asked not what they wanted but what they'd lost. That dining table held their life in oak. He cut the bedroom and added the table. They moved the week they knew it'd fit.",
  },
  {
    slug: "good-enough",
    title: "Good Enough",
    albumSlug: "frameworks",
    trackNumber: 5,
    duration: "2:43",
    audioUrl: "/audio/good-enough.mp3",
    coverImage: "",
    genre: "Indie Pop",
    mood: "Urgent, liberating, cathartic",
    tags: ["prioritization", "perfectionism", "leverage"],
    lyrics: `[Verse 1]
Three years at Google, couldn't sleep
The list grew longer every week
Came home and told her every night
"I worked all day and nothing's right"
Spent an hour on notes nobody read
Same fire for what moved and what was dead

[Chorus]
Good enough, good enough
Not every task deserves my blood
The list won't love me back
No matter how I bleed for that
L-N-O, now I know
Where to pour and where to let go

[Verse 2]
Found a blog post, never found again
But those words cut the noise inside my head
Some work comes back at ten for one
The rest is overhead — just get it done
The notes that shape a CEO's next call?
Two hours. But the standup? Send, that's all

[Chorus 2]
Good enough, good enough
Not everything deserves my love
The list won't love me back
The overhead can have enough
L-N-O, now I know
Which to hold and which to let go

[Bridge]
"Next month I'll finally have the time"
"Next month I'll work on what is mine"
Next month showed up with fires of its own
Same lie I told in a different tone
I stopped asking "when"
And started asking "which"

[Final Chorus]
Good enough, good enough
I don't owe perfection every time
The list won't love me back
But the leverage work? That's where I shine
L-N-O, now I go
With the fire for what makes me grow

[Outro]
Not every task you own
Deserves the you that can't sleep at night
Good enough... is enough`,
    concept: "Shreyas Doshi's LNO Framework — categorizing tasks as Leverage, Neutral, or Overhead, and giving yourself permission to do overhead tasks at 'good enough.'",
    keyInsight: "Not every task deserves your best. The list won't love you back. Stop asking 'when will I have time?' and start asking 'which tasks deserve my full effort?'",
    keyQuote: "The list won't love me back.",
    quoteSpeaker: "Shreyas Doshi (inspired)",
    sources: [
      { title: "4 questions Shreyas Doshi wishes he'd asked himself sooner", type: "podcast", url: "https://www.lennyspodcast.com/shreyas-doshi-4-questions/", guest: "Shreyas Doshi" },
    ],
    storyBehind: "Three years at Google, Shreyas couldn't sleep. The list grew longer every week. He found a blog post that cut the noise: some work returns 10x, the rest is overhead. The standup notes nobody reads? Send, that's all. The notes that shape a CEO's next call? Two hours. Good enough is enough.",
  },
];

export const albums: Album[] = [
  {
    slug: "frameworks",
    title: "Frameworks",
    subtitle: "The mental models that run tech",
    description: "The intellectual tools and thinking patterns that define modern product work. Mission cascades, empowered teams, A/B testing, JTBD, and the LNO Framework.",
    coverImage: "/covers/frameworks.jpg",
    accentColor: "#4338ca",
    tracks: frameworksTracks,
  },
  {
    slug: "founders",
    title: "Founders",
    subtitle: "For anyone who's knocked on doors and believed",
    description: "Songs about the early days: finding PMF, escaping tarpit ideas, and doing things that don't scale. Based on Brian Chesky, Rahul Vohra, and Dalton Caldwell's episodes.",
    coverImage: "/covers/founders.jpg",
    accentColor: "#d97706",
    tracks: foundersTracks,
  },
  {
    slug: "product",
    title: "Product",
    subtitle: "For the ones who obsess over every pixel",
    description: "Songs about taste, the 11-star framework, and why one user conversation beats a thousand dashboards. Based on Shreyas Doshi, Brian Chesky, and Teresa Torres.",
    coverImage: "/covers/product.jpg",
    accentColor: "#b45309",
    tracks: productTracks,
  },
  {
    slug: "builders",
    title: "Builders",
    subtitle: "For the ones who'd rather ship than plan",
    description: "Songs about shipping velocity and the vibe coding revolution. Based on Ramp's story and the rise of AI-powered building. More tracks coming soon.",
    coverImage: "/covers/builders.jpg",
    accentColor: "#92400e",
    tracks: buildersTracks,
  },
  {
    slug: "the-human-side",
    title: "The Human Side",
    subtitle: "For anyone who's wondered if they belong",
    description: "Songs about imposter syndrome and burnout, the things nobody talks about in standups. Based on Julie Zhuo and Andy Johns' episodes. More tracks coming soon.",
    coverImage: "/covers/the-human-side.jpg",
    accentColor: "#78350f",
    tracks: humanSideTracks,
  },
  {
    slug: "the-operators",
    title: "The Operators",
    subtitle: "Inside stories from the best companies",
    description: "The iconic company stories and legendary guests from Lenny's most popular content. Duolingo's streak, Chesky's founder mode, Stripe's scaling, Linear's craft, and Ramp's speed.",
    coverImage: "",
    accentColor: "#c2410c",
    tracks: operatorsTracks,
    comingSoon: true,
  },
  {
    slug: "growth-engine",
    title: "Growth Engine",
    subtitle: "How products take off",
    description: "Frameworks, strategies, and stories about growing products from zero to massive. The Racecar framework, North Star metrics, first users, virality, and positioning.",
    coverImage: "",
    accentColor: "#a16207",
    tracks: growthEngineTracks,
    comingSoon: true,
  },
  {
    slug: "the-startup-life",
    title: "The Startup Life",
    subtitle: "Building from nothing",
    description: "The emotional journey of starting, scaling, and sometimes failing. Marketplace cold starts, bootstrapping, fundraising, failure, and the universal founder struggle.",
    coverImage: "",
    accentColor: "#7e22ce",
    tracks: startupLifeTracks,
    comingSoon: true,
  },
  {
    slug: "career-moves",
    title: "Career Moves",
    subtitle: "Getting ahead, getting real",
    description: "Career growth, negotiation, leadership, and the human side of work. The Magic Loop, salary negotiation, firing with grace, burnout, and managing up.",
    coverImage: "",
    accentColor: "#0e7490",
    tracks: careerMovesTracks,
    comingSoon: true,
  },
];
