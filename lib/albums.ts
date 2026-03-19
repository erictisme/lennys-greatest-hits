import { Album, Track } from "./types";

const foundersTracks: Track[] = [
  {
    slug: "do-things-that-dont-scale",
    title: "Do Things That Don't Scale",
    albumSlug: "founders",
    trackNumber: 1,
    duration: "3:24",
    audioUrl: "/audio/do-things-that-dont-scale-demo.mp3",
    genre: "Indie folk",
    mood: "Warm and earnest",
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
    concept: "The greatest companies started with founders doing things no one thought were worth doing — going door to door, hand-writing thank you notes, manually onboarding every user.",
    keyInsight: "Before you build the engine, light the flame. Every great company started with someone who refused to scale.",
    sources: [
      { title: "Brian Chesky on Airbnb's early days", type: "podcast", url: "", guest: "Brian Chesky" },
      { title: "Paul Graham — Do Things That Don't Scale", type: "newsletter", url: "", guest: "Paul Graham" },
    ],
    keyQuote: "Go to your users. Physically go to them.",
    quoteSpeaker: "Brian Chesky",
  },
  {
    slug: "product-market-fit",
    title: "Product-Market Fit (You'll Know)",
    albumSlug: "founders",
    trackNumber: 2,
    duration: "3:38",
    audioUrl: "/audio/product-market-fit-demo.mp3",
    genre: "Synth-pop",
    mood: "Building from tension to euphoria",
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
    concept: "PMF isn't gradual — it hits you. Users are pulling the product from your hands. If you have to ask whether you have it, you don't.",
    keyInsight: "The 40% very disappointed test — if fewer than 40% of users would be very disappointed without your product, you haven't found PMF.",
    sources: [
      { title: "Rahul Vohra on Superhuman's PMF engine", type: "podcast", url: "", guest: "Rahul Vohra" },
      { title: "Lenny's PMF newsletter series", type: "newsletter", url: "", guest: "Lenny Rachitsky" },
    ],
    keyQuote: "If you have to ask, you don't have it.",
    quoteSpeaker: "Marc Andreessen",
  },
  {
    slug: "the-maze",
    title: "The Maze",
    albumSlug: "founders",
    trackNumber: 3,
    duration: "3:45",
    audioUrl: "/audio/the-maze-demo.mp3",
    genre: "Dark indie folk",
    mood: "Eerie and unsettling with hopeful resolution",
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
    concept: "Most startup ideas are tarpit ideas — they look great but trap you for years. The journey isn't a straight line, it's a maze.",
    keyInsight: "If your idea is easy to explain at a dinner party, it's probably a tarpit. The maze IS the point.",
    sources: [
      { title: "Dalton Caldwell on tarpit ideas", type: "podcast", url: "", guest: "Dalton Caldwell" },
      { title: "Michael Seibel on navigating uncertainty", type: "podcast", url: "", guest: "Michael Seibel" },
    ],
    keyQuote: "Most startup ideas are tarpit ideas.",
    quoteSpeaker: "Dalton Caldwell",
  },
];

const productTracks: Track[] = [
  {
    slug: "taste",
    title: "Taste",
    albumSlug: "product",
    trackNumber: 1,
    duration: "3:18",
    audioUrl: "/audio/taste-demo.mp3",
    genre: "Jazzy indie pop",
    mood: "Sophisticated and warm, late-night intimacy",
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
    concept: "The indefinable quality that separates good PMs from great ones isn't process or data — it's taste.",
    keyInsight: "Product sense is pattern recognition plus empathy. Taste is the ability to say no to good ideas.",
    sources: [
      { title: "Shreyas Doshi on product sense", type: "podcast", url: "", guest: "Shreyas Doshi" },
      { title: "Brian Chesky on detail obsession", type: "podcast", url: "", guest: "Brian Chesky" },
    ],
    keyQuote: "Taste is saying no to good ideas.",
    quoteSpeaker: "Shreyas Doshi",
  },
  {
    slug: "eleven-stars",
    title: "Eleven Stars",
    albumSlug: "product",
    trackNumber: 2,
    duration: "3:12",
    audioUrl: "/audio/eleven-stars-demo.mp3",
    genre: "Warm indie folk building to orchestral",
    mood: "Intimate start expanding to grand",
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
    concept: "Don't think about making your product 10% better. Think about what an 11-star experience looks like — so extraordinary it's absurd — then work backwards.",
    keyInsight: "The last 10% is 90% of the magic. Start with an impossibly ambitious vision and work backwards to what's buildable.",
    sources: [
      { title: "Brian Chesky on the 11-star framework", type: "podcast", url: "", guest: "Brian Chesky" },
    ],
    keyQuote: "What would a 10-star experience look like? Now what about 11?",
    quoteSpeaker: "Brian Chesky",
  },
  {
    slug: "talk-to-users",
    title: "Talk to Users",
    albumSlug: "product",
    trackNumber: 3,
    duration: "3:05",
    audioUrl: "/audio/talk-to-users-demo.mp3",
    genre: "Acoustic pop",
    mood: "Conversational and direct",
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
    concept: "The most basic, most ignored advice in all of tech. Did you actually talk to your users?",
    keyInsight: "One conversation can save you six months. You're not your user — go sit with them.",
    sources: [
      { title: "Teresa Torres on continuous discovery", type: "podcast", url: "", guest: "Teresa Torres" },
      { title: "Gustaf Alstromer on talking to users", type: "podcast", url: "", guest: "Gustaf Alstromer" },
    ],
    keyQuote: "One conversation can save you six months.",
    quoteSpeaker: "Teresa Torres",
  },
];

const buildersTracks: Track[] = [
  {
    slug: "ship-it",
    title: "Ship It",
    albumSlug: "builders",
    trackNumber: 1,
    duration: "3:30",
    audioUrl: "/audio/ship-it-demo.mp3",
    genre: "Lo-fi hip-hop",
    mood: "Urgent but not frantic, driving beat",
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
    concept: "Stop planning. Stop polishing. Ship the thing. Speed isn't reckless — it's respect for your users' time.",
    keyInsight: "Speed is a proxy for how much you care. If you're not embarrassed by v1, you shipped too late.",
    sources: [
      { title: "Keith Rabois on speed as competitive advantage", type: "podcast", url: "", guest: "Keith Rabois" },
      { title: "Shishir Mehrotra on velocity", type: "podcast", url: "", guest: "Shishir Mehrotra" },
    ],
    keyQuote: "If you're not embarrassed by the first version, you shipped too late.",
    quoteSpeaker: "Keith Rabois",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding",
    albumSlug: "builders",
    trackNumber: 2,
    duration: "3:15",
    audioUrl: "/audio/vibe-coding-demo.mp3",
    genre: "Lo-fi hip-hop with glitchy electronic elements",
    mood: "Playful and futuristic",
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
    concept: "The rules changed. Non-coders are building real products. AI didn't replace programmers — it created a million new builders.",
    keyInsight: "The best time to learn to code was 10 years ago. The second best time is never — just vibe code.",
    sources: [
      { title: "AI tools for PMs", type: "newsletter", url: "", guest: "Lenny Rachitsky" },
      { title: "Andrej Karpathy on vibe coding", type: "podcast", url: "", guest: "Andrej Karpathy" },
    ],
    keyQuote: "Ship it before the model gets better.",
    quoteSpeaker: "Andrej Karpathy",
  },
  {
    slug: "feature-factory",
    title: "Feature Factory",
    albumSlug: "builders",
    trackNumber: 3,
    duration: "3:42",
    audioUrl: "/audio/feature-factory-demo.mp3",
    genre: "Industrial-tinged lo-fi",
    mood: "Mechanical and repetitive with rebellious breakdown",
    lyrics: `[Verse 1]
Monday morning, Jira's full again
Ticket in, feature out, ticket in
No one asked if this should exist at all
Just build the thing and ship it down the hall
Roadmap set by stakeholders who don't use
The product — but they've got opinions and reviews

[Chorus]
Feature factory, feature factory
Tickets in and features out
Feature factory, feature factory
A product team owns the problem
A feature team owns the doubt
We're not building, we're just filling
Jira tickets to the ceiling
Feature factory never ends

[Verse 2]
Discovery's a word we say in docs
But every sprint is predetermined blocks
No autonomy, no room to think or test
Just velocity metrics dressed up as the best
The users send another bug report
But we're heads-down on a feature no one bought

[Chorus]
Feature factory, feature factory
Tickets in and features out
Feature factory, feature factory
A product team owns the problem
A feature team owns the doubt
We're not building, we're just filling
Jira tickets to the ceiling
Feature factory never ends

[Bridge]
What if we stopped the line?
What if we asked why?
What if we owned the outcome, not the output?
What if we had the time?

[Outro]
Feature factory
Is this what you signed up for?
Feature factory
Break the line`,
    concept: "You're not building a product. You're feeding a machine. Ship it, check the box, ship again. No autonomy, no discovery, no soul.",
    keyInsight: "A product team owns the problem. A feature team owns the Jira ticket.",
    sources: [
      { title: "Marty Cagan on product teams vs feature teams", type: "podcast", url: "", guest: "Marty Cagan" },
    ],
    keyQuote: "A product team owns the problem. A feature team owns the Jira ticket.",
    quoteSpeaker: "Marty Cagan",
  },
];

const humanSideTracks: Track[] = [
  {
    slug: "imposter",
    title: "Imposter",
    albumSlug: "the-human-side",
    trackNumber: 1,
    duration: "3:20",
    audioUrl: "/audio/imposter-demo.mp3",
    genre: "Ambient folk",
    mood: "Vulnerable and raw",
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
    concept: "Everyone at the table thinks everyone else belongs more. The feeling never goes away — you just learn to work alongside it.",
    keyInsight: "Imposter syndrome is universal in tech. The feeling never disappears, you just learn to coexist with it.",
    sources: [
      { title: "Lenny's newsletter on imposter syndrome", type: "newsletter", url: "", guest: "Lenny Rachitsky" },
    ],
    keyQuote: "Everyone at the table thinks everyone else belongs more.",
    quoteSpeaker: "Multiple guests",
  },
  {
    slug: "burnout",
    title: "Burnout",
    albumSlug: "the-human-side",
    trackNumber: 2,
    duration: "3:35",
    audioUrl: "/audio/burnout-demo.mp3",
    genre: "Slow acoustic soul",
    mood: "Heavy and tired but beautiful",
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
    concept: "Burnout isn't about working too hard — it's about working on the wrong things. The moment you realize you're optimizing for a game you don't want to win.",
    keyInsight: "Burnout isn't about hours — it's about meaning. You can't pour from an empty cup, but you can set it down.",
    sources: [
      { title: "Mental health and work-life balance episodes", type: "podcast", url: "", guest: "Multiple guests" },
    ],
    keyQuote: "Burnout isn't working too much — it's working on the wrong things.",
    quoteSpeaker: "Multiple guests",
  },
  {
    slug: "the-ic-track",
    title: "The IC Track",
    albumSlug: "the-human-side",
    trackNumber: 3,
    duration: "3:28",
    audioUrl: "/audio/the-ic-track-demo.mp3",
    genre: "Neo-soul",
    mood: "Introspective, late-night career reflection",
    lyrics: `[Verse 1]
They offered me the title and the team
Director-level, living someone's dream
But two AM I'm staring at the wall
Missing when I used to build it all
The calendar is full, the code is gone
I traded craft for meetings before dawn

[Chorus]
Management is not a promotion
It's just a different road
The best ICs create more value
Than most VPs will ever know
Choose the path that gives you energy
Not the one that gives you status
At two AM, which version of you
Is still awake because they want to be?

[Verse 2]
She went back to IC after three hard years
Leading teams and swallowing the fears
Her manager said, "That's a step back, no?"
She said, "It's the first step forward that I know"
The title shrank, the joy came rushing in
Building things again — she felt her skin
Come alive with purpose, not with power
And shipped more impact in a single hour

[Chorus]
Management is not a promotion
It's just a different road
The best ICs create more value
Than most VPs will ever know
Choose the path that gives you energy
Not the one that gives you status
At two AM, which version of you
Is still awake because they want to be?

[Outro]
The fork in the road isn't up or down
It's just two different kinds of ground
Choose the one where your feet want to stay
The IC track, the IC track`,
    concept: "Management is not a promotion. The IC path is not 'less than.' Choose the work that gives you energy, not the title that gives you status.",
    keyInsight: "At 2am, which version of you is still awake because they want to be? That's your answer.",
    sources: [
      { title: "Will Larson on career frameworks", type: "podcast", url: "", guest: "Will Larson" },
      { title: "Ravi Mehta on career paths", type: "podcast", url: "", guest: "Ravi Mehta" },
    ],
    keyQuote: "Management is not a promotion.",
    quoteSpeaker: "Will Larson",
  },
];

export const albums: Album[] = [
  {
    slug: "founders",
    title: "Founders",
    subtitle: "For people building companies from scratch",
    description: "The leap, the grind, the loneliness, and the magic of starting something from nothing. Indie folk and acoustic pop for the ones crazy enough to try.",
    coverImage: "/covers/founders.jpg",
    accentColor: "#f59e0b",
    tracks: foundersTracks,
  },
  {
    slug: "product",
    title: "Product",
    subtitle: "For product managers and product thinkers",
    description: "Taste, craft, and the relentless pursuit of what users actually need. Jazzy indie pop and warm folk for the ones who obsess over every pixel.",
    coverImage: "/covers/product.jpg",
    accentColor: "#3b82f6",
    tracks: productTracks,
  },
  {
    slug: "builders",
    title: "Builders",
    subtitle: "For engineers, designers, and makers",
    description: "Ship it, break it, build it again. Lo-fi beats and electronic textures for the ones who make things real.",
    coverImage: "/covers/builders.jpg",
    accentColor: "#10b981",
    tracks: buildersTracks,
  },
  {
    slug: "the-human-side",
    title: "The Human Side",
    subtitle: "For anyone in tech feeling the weight",
    description: "Burnout, imposter syndrome, and the career crossroads we all face. Ambient folk and neo-soul for the moments when you need to feel seen.",
    coverImage: "/covers/the-human-side.jpg",
    accentColor: "#8b5cf6",
    tracks: humanSideTracks,
  },
];
