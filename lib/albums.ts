import { Album, Track } from "./types";

const theCraftTracks: Track[] = [
  {
    slug: "taste",
    title: "Taste",
    albumSlug: "the-craft",
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
    annotations: [
      {
        lyricText: "Is half a pixel off from what I mean",
        note: "Brian Chesky told Lenny he obsesses over details down to individual pixels. He reviews every screen personally and has been known to send designers back to fix sub-pixel alignment issues that most people would never notice.",
        sourceTitle: "Brian Chesky on detail obsession",
        sourceUrl: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/",
      },
      {
        lyricText: "Pattern recognition plus the empathy",
        note: "Shreyas Doshi defined product sense on Lenny's podcast as 'pattern recognition plus empathy.' It's not intuition — it's thousands of hours of watching real users struggle, compressed into a feeling that fires before conscious analysis.",
        sourceTitle: "Shreyas Doshi on product sense",
        sourceUrl: "https://www.lennysnewsletter.com/p/episode-3-shreyas-doshi",
      },
      {
        lyricText: "Taste is saying no to good ideas",
        note: "Shreyas argued that the hardest part of taste is rejection. Most ideas that cross your desk are good. Taste is knowing which good ideas to say no to, so you can say yes to the great ones.",
        sourceTitle: "Shreyas Doshi on product sense",
        sourceUrl: "https://www.lennysnewsletter.com/p/episode-3-shreyas-doshi",
      },
      {
        lyricText: "The metrics miss the human pain",
        note: "A core theme across Lenny's archive: metrics capture behavior but miss emotion. Shreyas Doshi warns that over-indexing on data leads to products that are technically successful but emotionally empty.",
        sourceTitle: "Shreyas Doshi on product sense",
        sourceUrl: "https://www.lennysnewsletter.com/p/episode-3-shreyas-doshi",
      },
    ],
  },
  {
    slug: "eleven-stars",
    title: "Eleven Stars",
    albumSlug: "the-craft",
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
    annotations: [
      {
        lyricText: "Elon picks you up in a rocket to the moon",
        note: "Chesky's actual example on Lenny's podcast: at 11 stars, Elon Musk personally picks you up in a rocket and takes you to the moon. The point is to dream so absurdly big that when you scale back to a 6 or 7, it still feels magical.",
        sourceTitle: "Brian Chesky on the 11-star framework",
        sourceUrl: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/",
      },
      {
        lyricText: "The last ten percent is ninety percent of the magic",
        note: "One of Chesky's most quoted lines from the episode. Most teams ship at 90% done. Chesky argues the final 10% — the polish, the details, the delight — is where 90% of the magic lives.",
        sourceTitle: "Brian Chesky on the 11-star framework",
        sourceUrl: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/",
      },
      {
        lyricText: "A one-star stay is sleeping on the floor",
        note: "Chesky walked Lenny through the framework step by step: 1 star is sleeping on the floor, 3 stars is a key and a door, 5 stars is a great hotel experience. Then he kept going — what's 6? 7? 8? Each level forced more creative thinking.",
        sourceTitle: "Brian Chesky on the 11-star framework",
        sourceUrl: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/",
      },
      {
        lyricText: "Craft is caring 'bout the things they'll never",
        note: "Chesky believes great products are built by people who care about details users will never consciously notice — but will feel. This philosophy drove Airbnb's design-led culture and its obsessive attention to host and guest experience.",
        sourceTitle: "Brian Chesky on the 11-star framework",
        sourceUrl: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/",
      },
    ],
  },
  {
    slug: "talk-to-users",
    title: "Talk to Users",
    albumSlug: "the-craft",
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
    annotations: [
      {
        lyricText: "Color-coded dashboards, segments, cohort views",
        note: "Teresa Torres argues that teams over-rely on quantitative data while skipping the qualitative discovery that reveals why users behave the way they do. Dashboards show what's happening, but only conversations reveal the 'why.'",
        sourceTitle: "Teresa Torres on continuous discovery",
        sourceUrl: "https://www.lennyspodcast.com/teresa-torres-on-how-to-interview-customers-automating-continuous-discovery-the-opportunity-solution-tree-framework-making-the-case-for-user-research-common-interviewing-mistakes-and-much-more/",
      },
      {
        lyricText: "Five minutes told her more than months of charts",
        note: "Torres' core teaching: watching a single user try to complete a task for five minutes reveals usability gaps that no amount of analytics can surface. She calls this the 'experience gap' between what teams think users do and what actually happens.",
        sourceTitle: "Teresa Torres on continuous discovery",
        sourceUrl: "https://www.lennyspodcast.com/teresa-torres-on-how-to-interview-customers-automating-continuous-discovery-the-opportunity-solution-tree-framework-making-the-case-for-user-research-common-interviewing-mistakes-and-much-more/",
      },
      {
        lyricText: "Continuous discovery, week by week",
        note: "Torres' signature framework: one user interview per week, every week, no exceptions. Not quarterly research sprints or annual surveys. She's trained over 11,000 product people on this habit, making it the #1 recommended practice in Lenny's Slack community.",
        sourceTitle: "Teresa Torres on continuous discovery",
        sourceUrl: "https://www.lennyspodcast.com/teresa-torres-on-how-to-interview-customers-automating-continuous-discovery-the-opportunity-solution-tree-framework-making-the-case-for-user-research-common-interviewing-mistakes-and-much-more/",
      },
      {
        lyricText: "The answers aren't in Slack, they're down the street",
        note: "Gustaf Alstromer from YC told Lenny that most product failures at YC startups trace back to building in a vacuum. Teams debate features in Slack channels instead of walking down the street to talk to actual users.",
        sourceTitle: "Gustaf Alstromer on talking to users",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-working-with-600-yc-startups-gustaf-alstromer-y-combinator-airbnb/",
      },
    ],
  },
  {
    slug: "ship-it",
    title: "Ship It",
    albumSlug: "the-craft",
    trackNumber: 4,
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
    annotations: [
      {
        lyricText: "Rabois said speed's a proxy for the love",
        note: "Keith Rabois shared on Lenny's podcast that shipping speed is the clearest signal of how much a team cares about its users. Every day you delay is a day users are stuck with an inferior experience. He used this principle to push teams at Square, Opendoor, and Ramp.",
        sourceTitle: "Keith Rabois on speed as competitive advantage (via Ramp episode)",
        sourceUrl: "https://www.lennysnewsletter.com/p/lessons-from-scaling-ramp-sri-batchu",
      },
      {
        lyricText: "If you're not embarrassed, you waited too long to leave",
        note: "Reid Hoffman's famous advice, frequently cited on Lenny's podcast: 'If you're not embarrassed by the first version of your product, you've launched too late.' The Ramp team embodied this — shipping fast, learning from users, and iterating in weeks instead of quarters.",
        sourceTitle: "Velocity over everything: How Ramp became the fastest-growing SaaS startup",
        sourceUrl: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/",
      },
      {
        lyricText: "The best PMs ship — the rest make decks for free",
        note: "Geoff Charles described Ramp's PM culture: fewer than 5 PMs for a $100M ARR company. Instead of roadmap presentations and stakeholder alignment decks, PMs were expected to ship working features. Their hiring filter: 'Can this person ship, or do they just present?'",
        sourceTitle: "Velocity over everything: How Ramp became the fastest-growing SaaS startup",
        sourceUrl: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/",
      },
      {
        lyricText: "A shipped experiment beats a perfect song",
        note: "Ramp hit $100M ARR in just 2 years with 50 engineers — the fastest-growing SaaS company ever. Their secret wasn't perfection; it was volume of shipped experiments. Geoff Charles told Lenny their culture was 'velocity over everything.'",
        sourceTitle: "Velocity over everything: How Ramp became the fastest-growing SaaS startup",
        sourceUrl: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/",
      },
    ],
  },
  {
    slug: "im-in-the-room",
    title: "I'm in the Room",
    albumSlug: "the-craft",
    trackNumber: 5,
    duration: "3:19",
    audioUrl: "/audio/im-in-the-room.mp3",
    coverImage: "/covers/im-in-the-room.jpg",
    genre: "Driving Indie Rock / Anthemic Alt-Rock",
    mood: "Urgent, defiant, bittersweet",
    tags: ["founder mode", "leadership", "detail obsession"],
    lyrics: `[Verse 1]
I hired every name the board approved
Gave them keys and gave them room to move
The roadmap grew, the product lost its soul
My name was on it but I'd lost control
"Step back," they said, "that's what good leaders do"
I trusted — and I watched the vision blur

[Chorus]
I'm in the room, I'm in the room
Touch every pixel, read every page
Call it control — I call it care
If my name's on the building, I'll be there
I'm in the room

[Verse 2]
Then March hit like a hammer on the glass
The bottom fell — we're bleeding, bleeding fast
I cut a quarter of the names I'd hired
Burned the five-year plan, dissolved the tiers
And in the wreckage, something old came through
The voice I'd buried said I know what to do

[Chorus]
I'm in the room, I'm in the room
Know every detail, own every stage
Call it obsession — I don't care
If my name's on the building, I'll be there
I'm in the room

[Bridge]
Ten PM, the product review runs late
My team can't sleep — they're prepping for my weight
It's great to be in founder mode, they say
Not as great for those who walk beside me
But you can't hand off the thing only you feel
So I'll carry the cost to keep it real

[Final Chorus, belted]
I'm in the room, I'm in the room
Not stepping back, not leaving soon
Tore their playbook down and wrote my own
If my name's on the building, I'm not gone
I'm in the room

[Outro]
They built a church around the thing I'd start
Then prayed to process till it lost its heart`,
    concept: "Brian Chesky's journey from delegating to professional managers (and losing the soul of Airbnb) to reclaiming 'founder mode': being deeply involved in every detail.",
    keyInsight: "You can't hand off the thing only you feel. Embodied knowledge can't be delegated.",
    keyQuote: "We religiously focused on making sure customers loved us.",
    quoteSpeaker: "Brian Chesky",
    sources: [
      { title: "Brian Chesky's new playbook", type: "podcast", url: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/", guest: "Brian Chesky" },
    ],
    storyBehind: "Chesky hired professional managers on the board's advice and stepped back. The product lost its soul. When COVID hit and Airbnb lost 80% of revenue, he cut a quarter of the company, dissolved the layers, and went back to being in every room, but the song also acknowledges the cost to the people around him.",
    annotations: [
      {
        lyricText: "I hired every name the board approved",
        note: "Chesky followed the conventional Silicon Valley playbook: hire experienced executives, delegate authority, build management layers, and step back. Ben Horowitz later told Lenny: 'He had screwed every one of those things up — hired LT and all this stuff — and these are very senior people and he wanted to defer to them, but you can't defer as the CEO because you know what Airbnb should be doing.'",
        sourceTitle: "Brian Chesky's new playbook (via Ben Horowitz, Sanchan Saxena)",
        sourceUrl: "https://www.lennyspodcast.com/sanchan-saxena/",
      },
      {
        lyricText: "Then March hit like a hammer on the glass",
        note: "In March 2020, global travel stopped overnight. Sanchan Saxena (then VP of Product at Airbnb) describes the moment on Lenny's Podcast: 'We start predicting that our revenue will be 7, 10, some ridiculous very small percent of last year's. There's panic.' Every day a new country would close its borders.",
        sourceTitle: "Sanchan Saxena on the inside story of how Airbnb made it through Covid",
        sourceUrl: "https://www.lennyspodcast.com/sanchan-saxena/",
      },
      {
        lyricText: "I cut a quarter of the names I'd hired\nBurned the five-year plan, dissolved the tiers",
        note: "Airbnb laid off roughly 25% of its workforce during COVID. All sub-teams were dissolved, long-term roadmaps were scrapped, and the company moved to two-week planning cycles. Greg Greeley described the pivot: 'Can't plan for a year, can't plan for a quarter. We're going to plan every two weeks.' Chesky studied the Apple/Steve Jobs playbook and restructured around founder-led, design-driven product reviews.",
        sourceTitle: "Sanchan Saxena on Airbnb through COVID",
        sourceUrl: "https://www.lennyspodcast.com/sanchan-saxena/",
      },
      {
        lyricText: "Ten PM, the product review runs late",
        note: "Chip Conley — Chesky's mentor who joined Airbnb at age 52 — described what it was like: 'Brian assumed everybody else was going to work at the same pace and duration. His point of view is like, \"Hey, we're having a meeting in the office tonight at 10 o'clock, be there.\"' He adds that people 'wouldn't sleep in anticipation' of product reviews with Brian.",
        sourceTitle: "Brian Chesky's secret mentor | Chip Conley",
        sourceUrl: "https://www.lennyspodcast.com/chip-conley/",
      },
      {
        lyricText: "They built a church around the thing I'd start\nThen prayed to process till it lost its heart",
        note: "This couplet crystallizes Chesky's core diagnosis: as Airbnb scaled, process replaced passion. Lenny Rachitsky, who worked at Airbnb for seven years, observed this firsthand. He later summarized the tension: 'It's great to be in founder mode. It's not as great to be working for someone in founder mode.' Chesky's talk at a YC retreat about reclaiming control coined the term 'founder mode.'",
        sourceTitle: "Brian Chesky's new playbook",
        sourceUrl: "https://www.lennyspodcast.com/chip-conley/",
      },
    ],
  },
  {
    slug: "build-the-machine",
    title: "Build the Machine",
    albumSlug: "the-craft",
    trackNumber: 6,
    duration: "3:07",
    audioUrl: "/audio/build-the-machine.mp3",
    coverImage: "/covers/build-the-machine.jpg",
    genre: "Anthemic Indie Rock / Power-Pop",
    mood: "Driving, determined, bittersweet pride",
    tags: ["scaling", "operations", "invisible leadership"],
    lyrics: `[Verse 1]
She ran the numbers, morning two
Tickets piled like dishes in the sink
"We need twice the people on this floor"
The room went quiet — no one liked the score

She'd ridden rockets once before
Knew the sound before the engine roars

[Chorus]
Build the machine that builds the dream
Hold the line that no one ever sees
Write it down, and don't get stuck
If you don't know who decides — it's you

[Verse 2]
She called around — "When'd you add the levels?"
One said "bloodbath." One said "way too late"
Spun a wheel, a random team stood up
No rehearsal — show us what you've made
Progress, impact, momentum on the wall
A hundred small decisions before nightfall

[Chorus]
Build the machine that builds the dream
She built the engine while they built the name
Write it down, and don't get stuck
Progress, impact, momentum — us

[Bridge]
They celebrate the product and the name
The headline and the billion-dollar fame
But someone poured the foundation in the dark
Someone wired the walls before the spark
John said, "We need Claire in a box"
She laughed — then wrote the book

[Final Chorus]
Build the machine that builds the dream
Seven thousand strong and still it's clean
Write it down, and don't get stuck
The decision-maker's always us

[Outro]
Someone's gotta build the house
While the rest just talk about the view`,
    concept: "Claire Hughes Johnson's invisible, indispensable work scaling Stripe from early stage to 7,000 people: the operator who builds the infrastructure while founders get the headlines.",
    keyInsight: "Behind every celebrated product is someone who poured the foundation in the dark. The decision-maker is always the person who steps up.",
    keyQuote: "Product-market fit is just the product. That is not a company, and that will not scale.",
    quoteSpeaker: "Claire Hughes Johnson",
    sources: [
      { title: "Lessons from scaling Stripe", type: "podcast", url: "https://www.lennyspodcast.com/lessons-from-scaling-stripe-claire-hughes-johnson/", guest: "Claire Hughes Johnson" },
    ],
    storyBehind: "Claire walked into Stripe, assessed the chaos, and built the machine - systems, processes, decision frameworks - that allowed Stripe to scale from 160 to 7,000 people. John Collison said 'We need Claire in a box.' She laughed, then wrote the book.",
    annotations: [
      {
        lyricText: "She'd ridden rockets once before",
        note: "Claire spent nearly 11 years at Google, joining when it was ~1,800 people pre-IPO and leaving at 60,000. She held eight different jobs there — VP of self-driving cars, VP of global online sales, director of ops for Gmail, YouTube, and AdWords. As she tells Lenny: 'I had eight different jobs while I was there.' She joined Stripe at about 160 people.",
        sourceTitle: "Lessons from scaling Stripe | Claire Hughes Johnson",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-scaling-stripe-claire-hughes-johnson-ex-coo-of-stripe/",
      },
      {
        lyricText: "She called around — 'When'd you add the levels?'",
        note: "When Stripe needed job levels and career ladders, Claire called other companies. One person said it was a 'bloodbath,' another said 'I'm so impressed that you're doing that so early. We waited too long.' One company waited until 800 people and regretted it. Claire tells Lenny: 'Putting in levels and ladders felt like ripping the band-aid off, honestly, but I was glad.'",
        sourceTitle: "Lessons from scaling Stripe | Claire Hughes Johnson",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-scaling-stripe-claire-hughes-johnson-ex-coo-of-stripe/",
      },
      {
        lyricText: "John said, 'We need Claire in a box'\nShe laughed — then wrote the book",
        note: "This is a real quote. John Collison would travel to meet customers and founders who constantly asked how Stripe scaled. He'd joke to Claire: 'We need Claire in a box.' Her book Scaling People is literally that box. Patrick Collison separately pushed her toward it after a chapter she wrote for Elad Gil's High Growth Handbook gained unexpected traction. Lenny calls it 'incredible' and says it 'should be and likely will be on every founder's bookshelf.'",
        sourceTitle: "Lessons from scaling Stripe | Claire Hughes Johnson",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-scaling-stripe-claire-hughes-johnson-ex-coo-of-stripe/",
      },
      {
        lyricText: "Seven thousand strong and still it's clean",
        note: "Claire joined Stripe at ~160 people and helped scale it past 7,000. She tells Lenny: 'What's crystallized is how much work it is to build a company.' Her opening line on the podcast captures her philosophy: 'If you're not sure who the decision maker is, it's probably you. I'd rather you act that way than not, because you're going to slow the whole company down.'",
        sourceTitle: "Lessons from scaling Stripe | Claire Hughes Johnson",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-scaling-stripe-claire-hughes-johnson-ex-coo-of-stripe/",
      },
    ],
  },
  {
    slug: "doesnt-feel-right-yet",
    title: "Doesn't Feel Right Yet",
    albumSlug: "the-craft",
    trackNumber: 7,
    duration: "3:14",
    audioUrl: "/audio/doesnt-feel-right-yet.mp3",
    coverImage: "/covers/doesnt-feel-right-yet.jpg",
    genre: "Indie Rock / Alternative",
    mood: "Defiant, precise, cathartic",
    tags: ["craft", "taste", "product quality"],
    lyrics: `[Verse 1]
Every tool I touched was made by strangers
Built by people who would never use the thing
Fourteen menus deep to move a ticket
Dashboards glowing, nobody was listening
A designer staring at a broken system
Said "I'm done pretending this is fine"

[Chorus]
Doesn't feel right yet — hold the launch
Doesn't feel right yet — take it back
No one's gonna tell me when it's done
I'll know it when the last detail feels won
Doesn't feel right yet
And that's fine

[Verse 2]
Fifty people, two have ever left us
More cash in the bank than the VCs gave
No one translates the vision into tickets
The builders and the dreamers are the same
They said "you need a roadmap and a process"
We said "we need a window and some taste"

[Chorus]
Doesn't feel right yet — hold the launch
Doesn't feel right yet — bring it back
The fastest teams in tech all found our door
Not 'cause we were loud — 'cause we were sure
Doesn't feel right yet
Now it does

[Bridge]
They use the data like a safety net
Afraid to make the call, afraid to bet
On what their hands can feel, on what they know
So they hide behind the chart and let it go
Craft is pushing out and coming back
Shipping fast and fixing every crack

[Final Chorus]
Doesn't feel right yet — hold the launch
Doesn't feel right yet — one more pass
Fewer people, sharper eye, no compromise
Build it till the last pixel satisfies
This one feels right now
Let it fly

[Outro]
The more it matters
The more the design matters`,
    concept: "Linear's philosophy of trusting taste over metrics, building opinionated software with a tiny team that refuses to ship until it feels right.",
    keyInsight: "Trust your taste over your metrics. The best products come from people who care enough to say 'this doesn't feel right yet.'",
    keyQuote: "Productivity software should be opinionated. We provide good defaults so you can focus on the work you do.",
    quoteSpeaker: "Karri Saarinen",
    sources: [
      { title: "How Linear builds product", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-linear-builds-product", guest: "Karri Saarinen" },
    ],
    storyBehind: "Karri Saarinen was a designer frustrated by bloated project management tools built by people who never used them. He founded Linear with a tiny team (50 people, 2 have ever left), more cash than VCs gave them, and a relentless commitment to craft over speed.",
    annotations: [
      {
        lyricText: "Fifty people, two have ever left us\nMore cash in the bank than the VCs gave",
        note: "These are real numbers from Lenny's newsletter. At the time, Linear had ~50 employees, had only ever lost two team members, had more cash in the bank than they'd raised in total VC funding, and had been profitable for 2+ years. They'd spent a grand total of $35,000 on paid marketing in the entire history of the company.",
        sourceTitle: "How Linear builds product",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-linear-builds-product",
      },
      {
        lyricText: "No one translates the vision into tickets\nThe builders and the dreamers are the same",
        note: "Linear has no product managers — just a single head of product. PM duties are distributed across engineering and design. There are no durable cross-functional teams either; teams assemble around a project and disperse when it's done. Lenny's newsletter summary: 'No product managers, just a head of product. PM duties are distributed across engineering and design.'",
        sourceTitle: "How Linear builds product",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-linear-builds-product",
      },
      {
        lyricText: "They said 'you need a roadmap and a process'\nWe said 'we need a window and some taste'",
        note: "Linear operates with no metrics-based goals, no A/B tests, and decisions based explicitly on taste. Lenny directly contrasts this with Ramp's approach on the podcast: 'Ramp is all about velocity, shipping all the time, metrics, measuring everything. And your approach is almost the opposite.' Both are among the fastest-growing tools in their space — proof there's more than one way to win.",
        sourceTitle: "Inside Linear: Building with taste, craft, and focus | Karri Saarinen",
        sourceUrl: "https://www.lennyspodcast.com/inside-linear-building-with-taste-craft-and-focus-karri-saarinen/",
      },
      {
        lyricText: "The fastest teams in tech all found our door",
        note: "Karri names Linear's customer list on the podcast: Block, Vercel, Ramp, Retool, Mercury — plus thousands more from fresh YC graduates to public companies. The irony: Ramp, the fastest-shipping SaaS company of all time (another track on this album), uses Linear to manage their work. Linear became the tool of choice for teams that embody speed and craft, without any traditional sales motion.",
        sourceTitle: "Inside Linear: Building with taste, craft, and focus | Karri Saarinen",
        sourceUrl: "https://www.lennyspodcast.com/inside-linear-building-with-taste-craft-and-focus-karri-saarinen/",
      },
    ],
  },
  {
    slug: "the-ramp-speed",
    title: "The Ramp Speed",
    albumSlug: "the-craft",
    trackNumber: 8,
    duration: "2:42",
    audioUrl: "/audio/the-ramp-speed.mp3",
    coverImage: "/covers/the-ramp-speed.jpg",
    genre: "High-Energy Indie Rock / Synth-Pop",
    mood: "Exhilarating, urgent, triumphant",
    tags: ["velocity", "shipping culture", "small teams"],
    lyrics: `[Verse 1]
Eight of us, a whiteboard and a dare
Beat the giants — give us ninety days
No one writes a roadmap, no one waits
Every bug gets killed before it stays
Six months later, dropped another one
Fifty people, and we'd just begun

[Chorus]
Move — don't stop to draw the map
Ship — and if it breaks, come back
Three months, not a three-year plan
Doing beats the diagram
This is how the small ones win it back

[Verse 2]
Five people and a ninety-day clock
Build the thing that giants couldn't block
Billions flowing through it — watch it run
No burndown charts, no points — just "is it done?"
Did you ship the thing you said you would?
That's the only score that's understood

[Chorus]
Move — don't stop to draw the map
Ship — the wreckage teaches fast
Hundred million, two years flat
Doing beats the diagram
Giants never saw us coming back

[Bridge]
Found our best engineer in Fortnite
Gratitude's the loudest room we've got
Named the channel "couscous" — who knows why
Speed looks different from the inside —
Someone fixed a bug that wasn't theirs last night
That's the kind of fast that feels right

[Final Chorus]
Move — don't stop to draw the map
Ship — and if it breaks, come back
Speed's the cheapest way to learn
Doing beats the diagram
This is how the small ones take their turn

[Outro]
Doing beats the diagram
Always did
Move`,
    concept: "Ramp's strategy of using raw speed as a competitive advantage: small teams, no roadmaps, shipping in 90-day cycles to become the fastest-growing SaaS startup ever.",
    keyInsight: "When speed is your strategy, small teams beat giants because every mistake costs less and every lesson comes faster.",
    keyQuote: "Velocity is everything at Ramp. It's how we design our product development process, how we incentivize teams, and how we make decisions.",
    quoteSpeaker: "Geoff Charles",
    sources: [
      { title: "How Ramp builds product", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-ramp-builds-product", guest: "Geoff Charles" },
      { title: "Velocity over everything: How Ramp became the fastest-growing SaaS startup of all time", type: "podcast", url: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/", guest: "Geoff Charles" },
    ],
    storyBehind: "Eight people with a whiteboard dared to beat financial giants in 90 days. No roadmaps, no burndown charts - just 'did you ship the thing you said you would?' They built a culture where someone fixes a bug that wasn't theirs at midnight. That's the kind of fast that feels right.",
    annotations: [
      {
        lyricText: "Eight of us, a whiteboard and a dare\nBeat the giants — give us ninety days",
        note: "Ramp started with roughly 8 engineers and CTO Karim Atiyeh. In their first three months, they built a competitor to American Express's corporate card. Six months later, they took on Expensify. Both were publicly traded, billion-dollar companies. Lenny writes: 'I believe they are also the fastest-growing SaaS company of all time, hitting a $100 million run rate in two years.'",
        sourceTitle: "How Ramp builds product",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-ramp-builds-product",
      },
      {
        lyricText: "No burndown charts, no points",
        note: "Geoff Charles tells Lenny: 'We don't track tasks — we track whether you shipped what you said you were going to ship. No burndown, velocity, story points.' Before switching to bi-annual planning, Ramp calculated they were spending 33% of their time on planning alone. Their philosophy: 'Any second you spend planning is a second you don't spend doing.'",
        sourceTitle: "How Ramp builds product",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-ramp-builds-product",
      },
      {
        lyricText: "Found our best engineer in Fortnite",
        note: "This is a real detail from the newsletter. CTO Karim Atiyeh spent his entire first year focused on hiring the best engineers — finding young talent who showed early signs of being founders: winning programming competitions in high school, building businesses in college, dropping out to work at startups. Geoff Charles writes: 'He even found engineers from playing Fortnite.' Big tech couldn't copy this approach.",
        sourceTitle: "How Ramp builds product",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-ramp-builds-product",
      },
      {
        lyricText: "Named the channel 'couscous'",
        note: "Ramp's most popular Slack channel is their #gratitude channel, nicknamed 'couscous' — named by their early Moroccan team members. Geoff writes: 'Taking risks demands humor, kindness, and gratitude. If you're taking asymmetric bets, you're making decisions under high uncertainty and high risk... PMs can't take themselves too seriously. Life's too short.'",
        sourceTitle: "How Ramp builds product",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-ramp-builds-product",
      },
      {
        lyricText: "Hundred million, two years flat",
        note: "Ramp hit $100 million in annual recurring revenue in just two years — the fastest any SaaS company has ever achieved that milestone. They did it with fewer than 5 PMs and roughly 50 engineers. Keith Rabois said: 'Ramp's product velocity is absolutely unprecedented in my 21 years working with technology businesses.'",
        sourceTitle: "How Ramp builds product",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-ramp-builds-product",
      },
    ],
  },
  {
    slug: "trace-it-back",
    title: "Trace It Back",
    albumSlug: "the-craft",
    trackNumber: 9,
    duration: "2:49",
    audioUrl: "/audio/trace-it-back.mp3",
    coverImage: "/covers/trace-it-back.jpg",
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
    concept: "Lenny's Mission-Vision-Strategy-Goals-Roadmap-Task cascade: every task should trace back to the mission.",
    keyInsight: "If you can't trace your daily task back to the company mission, you're moving fast but standing still.",
    keyQuote: "You start with your mission — why does your team even exist? Mission, vision, strategy, goals, roadmap, task.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "Mission - Vision - Strategy - Goals - Roadmap - Task", type: "newsletter", url: "https://www.lennysnewsletter.com/p/mission-vision-strategy-goals-roadmap", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "A PM ships a button, closes the ticket, gets asked 'why?' and can't spell it out. Then the Ocean's Eleven metaphor: Danny Ocean didn't walk in blind. Mission, vision, strategy, eleven people who each knew the score. TED's entire mission is two words: 'Spread ideas.'",
    annotations: [
      {
        lyricText: "I shipped the button, closed the ticket out",
        note: "Lenny argues that most PMs operate at the task level without understanding how their work connects to the company mission. The cascade — Mission → Vision → Strategy → Goals → Roadmap → Task — is his framework for making every ticket meaningful.",
        sourceTitle: "Mission - Vision - Strategy - Goals - Roadmap - Task",
        sourceUrl: "https://www.lennysnewsletter.com/p/mission-vision-strategy-goals-roadmap",
      },
      {
        lyricText: "Danny Ocean didn't walk in blind",
        note: "The Ocean's Eleven metaphor illustrates Lenny's cascade: Danny had a mission (rob three casinos), a vision (get Tess back), a strategy (through every coded door), and eleven people who each knew their role. Every great heist — and every great company — starts with the why.",
        sourceTitle: "Mission - Vision - Strategy - Goals - Roadmap - Task",
        sourceUrl: "https://www.lennysnewsletter.com/p/mission-vision-strategy-goals-roadmap",
      },
      {
        lyricText: "Spread ideas — two words, and TED was born",
        note: "Lenny uses TED as the gold standard of mission brevity: their entire reason for existing fits in two words. He contrasts this with companies whose mission statements are paragraphs long and forgotten by the team.",
        sourceTitle: "Mission - Vision - Strategy - Goals - Roadmap - Task",
        sourceUrl: "https://www.lennysnewsletter.com/p/mission-vision-strategy-goals-roadmap",
      },
      {
        lyricText: "Mission, vision, strategy",
        note: "The six-level cascade that Lenny considers the most important alignment framework in product: Mission (why you exist) → Vision (what the world looks like if you succeed) → Strategy (how you'll get there) → Goals (how you measure) → Roadmap (what you'll build) → Task (what you do today).",
        sourceTitle: "Mission - Vision - Strategy - Goals - Roadmap - Task",
        sourceUrl: "https://www.lennysnewsletter.com/p/mission-vision-strategy-goals-roadmap",
      },
    ],
  },
  {
    slug: "the-disease",
    title: "The Disease",
    albumSlug: "the-craft",
    trackNumber: 10,
    duration: "2:54",
    audioUrl: "/audio/the-disease.mp3",
    coverImage: "/covers/the-disease.jpg",
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
    concept: "Marty Cagan's critique of 'feature factories': companies where builders are told what to build rather than given problems to solve.",
    keyInsight: "When the 'idea person' thinks they're 90% of the work and builders are just implementers, the builders leave and nobody hears the door.",
    keyQuote: "The 'idea person' thinks an idea is 90% of the work. We know only about 20% of those things will generate any positive return.",
    quoteSpeaker: "Marty Cagan",
    sources: [
      { title: "The nature of product", type: "podcast", url: "https://www.lennyspodcast.com/the-nature-of-product-marty-cagan/", guest: "Marty Cagan" },
    ],
    storyBehind: "Monday morning, roadmap on screen, fourteen features the PM has never seen. 'Just build it' says the corner suite, someone who's never talked to users. The cure: give builders problems, not solutions, and watch them stay.",
    annotations: [
      {
        lyricText: "The idea man thinks he's ninety percent",
        note: "Marty Cagan told Lenny that in feature factories, stakeholders believe having the idea is 90% of the work and engineers are just 'coders.' In reality, only about 20% of ideas generate positive return — the magic is in how empowered teams discover and solve problems.",
        sourceTitle: "The nature of product",
        sourceUrl: "https://www.lennyspodcast.com/the-nature-of-product-marty-cagan/",
      },
      {
        lyricText: "Jobs called it back in '95",
        note: "Cagan references Steve Jobs's 1995 interview where Jobs warned that as companies grow, the sales and marketing people take over and the product people — the ones who built the thing — get pushed out. Jobs called this the reason great companies decline.",
        sourceTitle: "The nature of product",
        sourceUrl: "https://www.lennyspodcast.com/the-nature-of-product-marty-cagan/",
      },
      {
        lyricText: "Eighty percent won't ever make a dent",
        note: "Cagan cites data showing roughly 80% of features shipped by feature factories have no measurable impact on the metrics they were supposed to move. This is the core argument for empowered teams: let builders discover what actually works.",
        sourceTitle: "The nature of product",
        sourceUrl: "https://www.lennyspodcast.com/the-nature-of-product-marty-cagan/",
      },
      {
        lyricText: "Give me one quarter",
        note: "Cagan's prescription for curing the disease: give a team one problem to solve, let them sit with the users who feel the pain, and measure outcomes instead of output. The bridge captures the emotional plea of every builder stuck in a feature factory.",
        sourceTitle: "The nature of product",
        sourceUrl: "https://www.lennyspodcast.com/the-nature-of-product-marty-cagan/",
      },
    ],
  },
  {
    slug: "whats-the-job",
    title: "What's the Job",
    albumSlug: "the-craft",
    trackNumber: 11,
    duration: "3:39",
    audioUrl: "/audio/whats-the-job.mp3",
    coverImage: "/covers/whats-the-job.jpg",
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
    concept: "Bob Moesta's Jobs to Be Done framework: people don't buy products, they hire them to make progress.",
    keyInsight: "People don't buy, they hire. What they say isn't what they do. The struggling moment is the clue.",
    keyQuote: "A struggling moment causes demand. Most people think they create a product and that creates demand.",
    quoteSpeaker: "Bob Moesta",
    sources: [
      { title: "The ultimate guide to JTBD", type: "podcast", url: "https://www.lennyspodcast.com/the-ultimate-guide-to-jtbd-bob-moesta/", guest: "Bob Moesta" },
    ],
    storyBehind: "A condo developer couldn't sell units. Retirees said 'we don't need a dining room' but every sale fell through at six weeks. Bob sat across from them and asked not what they wanted but what they'd lost. That dining table held their life in oak. He cut the bedroom and added the table. They moved the week they knew it'd fit.",
    annotations: [
      {
        lyricText: "Two candy bars on the same damn shelf",
        note: "Bob Moesta's famous Snickers vs. Milky Way example from his Lenny interview: two nearly identical chocolate bars compete with completely different things. Snickers competes with a meal replacement; Milky Way competes with a moment of relaxation. Same shelf, different jobs.",
        sourceTitle: "The ultimate guide to JTBD",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-jtbd-bob-moesta/",
      },
      {
        lyricText: "He built the condos for the empty nest",
        note: "The condo story is Moesta's signature case study. A Detroit developer couldn't sell units to retirees. They all said 'we don't need a dining room' — but every sale stalled at six weeks. The real blocker wasn't the condo; it was leaving the dining table that held 30 years of holidays.",
        sourceTitle: "The ultimate guide to JTBD",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-jtbd-bob-moesta/",
      },
      {
        lyricText: "He couldn't read a single page",
        note: "Moesta told Lenny he's dyslexic and couldn't read until he was 25. This forced him to learn by watching people — observing what they actually do rather than what they say. He credits this as the origin of his 'struggling moment' interview technique.",
        sourceTitle: "The ultimate guide to JTBD",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-jtbd-bob-moesta/",
      },
      {
        lyricText: "He cut the bedroom for the table",
        note: "The resolution of the condo story: once Moesta understood the real job (preserving family tradition, not downsizing), the developer cut a bedroom and added space for the dining table. Units started selling immediately. The product didn't change — the understanding did.",
        sourceTitle: "The ultimate guide to JTBD",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-jtbd-bob-moesta/",
      },
    ],
  },
];

const growthEngineTracks: Track[] = [
  {
    slug: "dont-break-the-streak",
    title: "Don't Break the Streak",
    albumSlug: "growth-engine",
    trackNumber: 1,
    duration: "2:57",
    audioUrl: "/audio/dont-break-the-streak.mp3",
    coverImage: "/covers/dont-break-the-streak.jpg",
    genre: "Synth-Pop / Indie Electropop",
    mood: "Urgent, anthemic, playful",
    tags: ["gamification", "retention", "compounding growth"],
    lyrics: `[Verse 1]
Biggest app in the world, but the line went flat
Stole a trick from a game — nothing came from that
Tried referrals next, the Uber play
Three percent and the doubters had their day
Two big swings and nothing left to show
The boardroom's faith was running low
But somewhere in the numbers, buried deep
Was a secret only data keeps

[Chorus]
Don't break the streak, don't let it slip
One more day and you're in the grip
Yesterday's you is keeping score
Come back tomorrow, just once more
Don't break the streak

[Verse 2]
They found the number everyone had missed
Current users — top of every list
Five times the pull, the model made it clear
Keep who comes back, year to year to year
A leaderboard, a buzz at ten PM
A nudge that says, "This isn't working" — then
You smile, you swipe, one lesson and that's that
And tomorrow night it pulls you right back

[Chorus]
Don't break the streak, don't let it slip
Day after day, a tighter grip
The chain gets stronger every time
Come back tomorrow, you'll be fine
Don't break the streak

[Bridge]
It started as a number on a screen
Now it's four years, no days in between
Each day you come back, you care a little more
That's the math they never taught before

[Final Chorus, belted]
Don't break the streak, don't let it go
Day fourteen hundred, still in the flow
Tomorrow's you is counting on today
Don't walk away, don't walk away
Don't break the streak

[Outro]
One more day
That's all it takes
One more day`,
    concept: "Duolingo's growth turnaround by discovering that retaining current users (not acquiring new ones) was the key, leading to the streak mechanic that drives compounding engagement.",
    keyInsight: "Each day a user comes back, they care a bit more about coming back the next day. Retention compounds into commitment.",
    keyQuote: "Streaks is the most impactful feature. We have over 9 million users with a year-plus streak.",
    quoteSpeaker: "Jackson Shuttleworth",
    sources: [
      { title: "How Duolingo reignited user growth", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth", guest: "Jorge Mazal" },
      { title: "Behind the product: Duolingo streaks", type: "podcast", url: "https://www.lennyspodcast.com/behind-the-product-duolingo-streaks-jackson-shuttleworth/", guest: "Jackson Shuttleworth" },
    ],
    storyBehind: "Duolingo was the biggest language app in the world but growth went flat. They tried gamification and referrals, but both failed. Then they discovered that focusing on current user retention had 5x the impact. The streak mechanic became their flywheel, turning daily returns into deepening commitment. DAU grew 4.5x.",
    annotations: [
      {
        lyricText: "Biggest app in the world, but the line went flat",
        note: "By mid-2018, Duolingo's daily active users were growing at only a single-digit rate year-over-year — alarming for a company with investors anxious to see fast monetization growth. Jorge Mazal describes this as the moment when leadership realized the explosive growth of Duolingo's early years had stalled despite being the world's most popular education app.",
        sourceTitle: "How Duolingo reignited user growth",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
      },
      {
        lyricText: "Tried referrals next, the Uber play\nThree percent",
        note: "After their first gamification attempt failed (copying a moves counter from the mobile game Gardenscapes), the Duolingo team pivoted to a referral program modeled on Uber's, offering a free month of Super Duolingo. The result: new users increased by only 3%. Jorge calls this period 'back-to-back failures in only a few months' that forced a fundamental rethinking of their growth strategy.",
        sourceTitle: "How Duolingo reignited user growth",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
      },
      {
        lyricText: "They found the number everyone had missed\nCurrent users — top of every list\nFive times the pull",
        note: "The team built a growth model tracking user movement between engagement buckets and ran a sensitivity analysis. CURR — the current user retention rate — had a staggering 5x greater impact on DAU than the second-best metric. Jorge writes: 'We immediately saw that CURR had a gigantic impact on DAU.' This was a huge mindset shift — the company had spent years focused on new-user acquisition.",
        sourceTitle: "How Duolingo reignited user growth",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
      },
      {
        lyricText: "A leaderboard, a buzz at ten PM",
        note: "Two of the Retention Team's biggest wins: competitive leaderboards and the streak-saver notification — a late-night push notification alerting users with active streaks that they're about to lose them. Jorge specifically calls it a 'late-night notification' that 'proved that indeed there was considerable upside to doubling down on streak optimizations.'",
        sourceTitle: "How Duolingo reignited user growth",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
      },
      {
        lyricText: "Now it's four years, no days in between",
        note: "Jorge Mazal writes about meeting a user who told him: 'I have a 1,435-day streak! With no streak freezes!' — almost four years of daily language practice without missing a single day. Jackson Shuttleworth from Duolingo's Retention Team later revealed that over 9 million users now hold a streak of one year or longer. The team has run over 600 experiments on the streak feature alone.",
        sourceTitle: "How Duolingo reignited user growth",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
      },
    ],
  },
  {
    slug: "the-racecar",
    title: "The Racecar",
    albumSlug: "growth-engine",
    trackNumber: 2,
    duration: "3:07",
    audioUrl: "/audio/the-racecar.mp3",
    coverImage: "/covers/the-racecar.jpg",
    genre: "Driving Alternative Rock / Electronic",
    mood: "Energetic, anthemic, revelatory",
    tags: ["growth", "frameworks", "loops"],
    lyrics: `[Verse 1]
We built the thing and no one came
Every dashboard flat, each chart the same
So I knocked on doors and slept on floors
Showed the app in bars and campus stores
Loaded up my car and drove at night
The whole city was my demo site
Hands on the hood, just push and pray
Kickstart fades by end of day

[Chorus]
Build the engine, pour the fuel
Feel it catch and start to move
Output feeding input back —
Find the loop and cut it loose

[Verse 2]
The engine caught — now watch it spin
Money goes out, comes right back in
Friend tells friend, the searches grow
Every exit feeds the flow
A headline hits, the traffic spikes
Gone by morning — that's the ride
Half the riders left the track
Grease the gears to bring them back

[Chorus]
Build the engine, pour the fuel
Every mile compounds the proof
Output feeding input back —
Find the loop and cut it loose

[Bridge]
Pouring fuel with no engine built
Wondering why the car stood still
Not the speed and not the size —
It's the loop that multiplies

[Final Chorus]
Build the engine, pour the fuel
Now the car knows what to do
Output feeding input back —
Find the loop and cut it loose

[Outro]
Build the next one
Before this one stops`,
    concept: "Lenny's Racecar Growth Framework: growth isn't one thing but a machine with parts (kickstarts, engines/loops, fuel, lubricants) that work together.",
    keyInsight: "Growth isn't one thing. It's a machine with parts that work together, and the secret is knowing which part to build at which stage.",
    keyQuote: "Pouring fuel with no engine built, wondering why the car stood still.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "The Racecar Growth Framework - expanded and illustrated", type: "newsletter", url: "https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "The extended metaphor of a racecar: you start by push-starting (doing things that don't scale), then the engine catches (growth loops), then you pour fuel (paid growth) and grease the gears (reduce churn). The universal founder mistake is pouring fuel before building the engine.",
    annotations: [
      {
        lyricText: "Hands on the hood, just push and pray\nKickstart fades by end of day",
        note: "The Racecar Framework identifies 9 specific 'kickstart' tactics for getting your first 1,000 users — things like DoorDash going door-to-door to restaurants, Tinder throwing parties at college campuses, and Snapchat pitching kids at malls. These are unscalable by design: they get the car rolling but can't keep it moving. The framework warns to use kickstarts only 'until your growth engine begins to drive the majority of your growth.'",
        sourceTitle: "The Racecar Growth Framework — expanded and illustrated",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded",
      },
      {
        lyricText: "Friend tells friend, the searches grow\nEvery exit feeds the flow",
        note: "The framework names exactly four growth engines: SEO, Paid Ads, Sales, and Virality. 'Friend tells friend' is Virality — where a user enjoys the product, shares it, and that friend signs up and shares it again. 'The searches grow' is SEO — where users create content others discover through Google. According to Lenny's survey of today's biggest consumer apps, virality and SEO are the two most common primary growth engines.",
        sourceTitle: "The Racecar Growth Framework — expanded and illustrated",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded",
      },
      {
        lyricText: "A headline hits, the traffic spikes\nGone by morning — that's the ride",
        note: "This captures what the framework calls a 'Turbo Boost' — a one-off event that temporarily accelerates growth but doesn't last. The article lists 10 common turbo boosts including PR, viral content, and influencer mentions. The key distinction from an engine: turbo boosts create a spike, not a loop. There's no self-sustaining mechanism to keep growth going after the headline fades.",
        sourceTitle: "The Racecar Growth Framework — expanded and illustrated",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded",
      },
      {
        lyricText: "Pouring fuel with no engine built\nWondering why the car stood still",
        note: "'Fuel' is the raw input your engine runs on: content drives SEO, users drive virality, capital drives paid ads and sales. But fuel without an engine is wasted. This is the classic mistake Lenny warns about — founders pouring capital into ads before they have a working growth loop. The framework prescribes a specific order: build kickstarts first, then get your engine running, then add fuel.",
        sourceTitle: "The Racecar Growth Framework — expanded and illustrated",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded",
      },
      {
        lyricText: "Output feeding input back —\nFind the loop and cut it loose",
        note: "The entire premise of a growth 'engine' vs. a tactic is the loop: output feeds input. Paid ads generate revenue that funds more ads. Users invite friends who invite friends. Content ranks on Google, driving signups who create more content. Lenny's research shows companies like Pinterest and Yelp grew primarily through a single engine run well, not through doing everything at once.",
        sourceTitle: "The Racecar Growth Framework — expanded and illustrated",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-racecar-growth-frameworkexpanded",
      },
    ],
  },
  {
    slug: "find-your-north-star",
    title: "Find Your North Star",
    albumSlug: "growth-engine",
    trackNumber: 3,
    duration: "3:41",
    audioUrl: "/audio/find-your-north-star.mp3",
    coverImage: "/covers/find-your-north-star.jpg",
    genre: "Anthemic Indie Synth-Rock",
    mood: "Driving, urgent, clarifying",
    tags: ["metrics", "focus", "strategy"],
    lyrics: `[Verse 1]
Fourteen dashboards, Monday morning haze
Every number pulling different ways
Revenue is up, the users leave
The boardroom cheers — I still can't breathe
A sky of scattered light above my desk
A thousand stars — I can't tell which one's best

[Chorus]
Find your north star
One number in the dark
What you measure is what you become
What you chase is what you are
Not the revenue — the value
Find your north star

[Verse 2]
Nights booked, rides taken, messages sent
Every company found what winning meant
Facebook counted monthly — doing fine
Switched to daily, everything realigned
"Bring them back" became the battle cry
The product bent to match a single "why"

[Chorus]
Find your north star
One signal through the noise
What you measure is what you become
Every metric was a choice
Not the revenue — the value
Find your north star

[Bridge]
But careful what you choose, it cuts both ways
Facebook brought them back — they couldn't leave
Congress called, the papers filled for days
The metric worked — that's the thing you grieve
What gets measured gets managed, that's the deal
Be sure you want the world your number builds

[Final Chorus]
Find your north star
One number in the dark
What you measure is what you become
What you build is what you are
Not the revenue — the value you deliver
Find your north star

[Outro]
You only need one light to find your way
Pick the one that matters
Start today`,
    concept: "Choosing your North Star Metric, the one number that captures the value you deliver, and the warning that what you measure is what you become.",
    keyInsight: "What you measure is what you become. Pick the metric that represents the value you deliver, not just the revenue you extract.",
    keyQuote: "What you measure is what you become.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "Choosing Your North Star Metric", type: "newsletter", url: "https://www.lennysnewsletter.com/p/choosing-your-north-star-metric", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "The song starts with a PM drowning in 14 dashboards, then shows how companies like Airbnb ('nights booked') and Facebook found their North Star. But the bridge is a cautionary tale: Facebook switched to daily active users, brought people back so well they couldn't leave. Congress called.",
    annotations: [
      {
        lyricText: "Nights booked, rides taken, messages sent\nEvery company found what winning meant",
        note: "These are actual North Star metrics from Lenny's survey of over 40 successful growth-stage companies. Airbnb tracked 'nights booked,' Uber and Lyft tracked 'rides taken,' Twilio tracked 'messages sent.' None chose revenue as their North Star. They picked consumption metrics that reflect value delivered, because as Lenny explains, revenue is 'spiky, and thus hard to make operational.'",
        sourceTitle: "Choosing Your North Star Metric",
        sourceUrl: "https://www.lennysnewsletter.com/p/choosing-your-north-star-metric",
      },
      {
        lyricText: "Facebook counted monthly — doing fine\nSwitched to daily, everything realigned",
        note: "Facebook and Snap both chose DAU over MAU as their North Star because social media is a daily habit. Pinterest, by contrast, chose WAU because it 'doesn't expect its users to need the product daily.' The frequency of the metric signals what behavior you're optimizing for — Facebook's shift to DAU meant every team suddenly focused on bringing people back every single day.",
        sourceTitle: "Choosing Your North Star Metric",
        sourceUrl: "https://www.lennysnewsletter.com/p/choosing-your-north-star-metric",
      },
      {
        lyricText: "Not the revenue — the value",
        note: "Lenny argues explicitly against using revenue as a North Star. Three reasons: revenue is spiky and hard to make operational, optimizing pricing too early leads to suboptimal decisions, and 'people often join companies to accomplish a specific mission; rarely is that mission simply growth in generating revenue.' Airbnb chose 'nights booked' over booking revenue. Robinhood chose NPS over trading volume.",
        sourceTitle: "Choosing Your North Star Metric",
        sourceUrl: "https://www.lennysnewsletter.com/p/choosing-your-north-star-metric",
      },
      {
        lyricText: "But careful what you choose, it cuts both ways\nFacebook brought them back — they couldn't leave\nCongress called, the papers filled for days",
        note: "Lenny's guide warns: 'By maintaining a laser focus on a single metric for too long, teams risk short-term thinking, missing new opportunities, and sacrificing the user experience.' He uses a motorcycle analogy: 'Where your eyes go, your bike goes. Look to your right and you'll drift right.' Facebook's relentless optimization of daily engagement — the very metric that drove its explosive growth — eventually drew Congressional scrutiny over addiction and harm.",
        sourceTitle: "Choosing Your North Star Metric",
        sourceUrl: "https://www.lennysnewsletter.com/p/choosing-your-north-star-metric",
      },
    ],
  },
  {
    slug: "test-everything",
    title: "Test Everything",
    albumSlug: "growth-engine",
    trackNumber: 4,
    duration: "2:39",
    audioUrl: "/audio/test-everything.mp3",
    coverImage: "/covers/test-everything.jpg",
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
    concept: "Ronny Kohavi's guide to A/B testing: the story of a tiny, ignored change at Bing that generated $100M in revenue.",
    keyInsight: "Your best idea might not mean a thing. The throwaway afterthought could be the biggest win. 85% of ideas fail.",
    keyQuote: "I'm a big fan of test everything. Even small bug fixes can sometimes have surprising, unexpected impact.",
    quoteSpeaker: "Ronny Kohavi",
    sources: [
      { title: "The ultimate guide to A/B testing", type: "podcast", url: "https://www.lennyspodcast.com/the-ultimate-guide-to-ab-testing-ronny-kohavi/", guest: "Ronny Kohavi" },
    ],
    storyBehind: "A tiny change sat on Bing's backlog for half a year: move the ad text. One engineer said 'I'm building this.' Two days to ship, let it run. The alarm went off: 'Too good to be true, go find the bug.' But there was no bug. Just $100 million in annual revenue.",
    annotations: [
      {
        lyricText: "Eighty-five percent will die",
        note: "Ronny Kohavi told Lenny that across Microsoft, Google, and other tech giants, roughly 85% of ideas that teams are excited about fail to move the metrics they target. This is why experimentation culture matters — intuition is wrong most of the time.",
        sourceTitle: "The ultimate guide to A/B testing",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-ab-testing-ronny-kohavi/",
      },
      {
        lyricText: "A tiny change sat on the list",
        note: "The legendary Bing ad headline experiment: a small change to ad text placement sat on the backlog for six months because nobody thought it mattered. When an engineer finally shipped it in two days, it generated over $100 million in annual revenue.",
        sourceTitle: "The ultimate guide to A/B testing",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-ab-testing-ronny-kohavi/",
      },
      {
        lyricText: "Too good to be true — go find the bug",
        note: "When the Bing experiment results came in, the team's first reaction was that the numbers must be wrong. Kohavi told Lenny this is a common pattern: the biggest wins often look like measurement errors at first because nobody expected the change to matter.",
        sourceTitle: "The ultimate guide to A/B testing",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-ab-testing-ronny-kohavi/",
      },
      {
        lyricText: "A hundred million from a shrug",
        note: "Kohavi's $100M Bing story became the defining parable of experimentation culture. The lesson: the changes you'd cut from the roadmap might be worth more than the features you're most excited about. Humility about ideas is the foundation of testing culture.",
        sourceTitle: "The ultimate guide to A/B testing",
        sourceUrl: "https://www.lennyspodcast.com/the-ultimate-guide-to-ab-testing-ronny-kohavi/",
      },
    ],
  },
  {
    slug: "the-first-thousand",
    title: "The First Thousand",
    albumSlug: "growth-engine",
    trackNumber: 5,
    duration: "2:52",
    audioUrl: "/audio/the-first-thousand.mp3",
    coverImage: "/covers/the-first-thousand.jpg",
    genre: "Uptempo Indie Pop",
    mood: "Scrappy, triumphant, energetic",
    tags: ["growth", "early users", "hustle"],
    lyrics: "",
    concept: "How the biggest consumer apps got their first 1,000 users through scrappy, unscalable, unglamorous hustle.",
    keyInsight: "Every app you've ever loved once looked lame. You earn your first users one by one through showing up, not through scale.",
    keyQuote: "Don't pay attention to what Facebook does today — pay attention to Facebook when they were getting their first thousand users.",
    quoteSpeaker: "Dalton Caldwell",
    sources: [
      { title: "How the biggest consumer apps got their first 1,000 users", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "A montage of origin stories: Whitney Wolfe pitching Tinder dorm to dorm, Evan Spiegel at the mall with Snapchat flyers, Ben Silbermann changing Apple Store displays to show Pinterest, Tony Xu taping a DoorDash menu to a wall, Brian Chesky hot-gluing cereal boxes for Airbnb.",
  },
  {
    slug: "go-viral",
    title: "Go Viral",
    albumSlug: "growth-engine",
    trackNumber: 6,
    duration: "3:04",
    audioUrl: "/audio/go-viral.mp3",
    coverImage: "/covers/go-viral.jpg",
    genre: "Dark Electro-Pop",
    mood: "Electric, manic, cinematic",
    tags: ["virality", "consumer apps", "growth loops"],
    lyrics: "",
    concept: "Nikita Bier's story of building repeatedly viral consumer apps: 14 failures before a hit, reading the room instead of the language, controlled geographic rollouts.",
    keyInsight: "Virality comes from finding latent demand and controlling the burn: geographic rollout, school by school, state by state.",
    keyQuote: "With certainty, if you're good at your job, you can make an app grow and go viral.",
    quoteSpeaker: "Nikita Bier",
    sources: [
      { title: "How to consistently go viral", type: "podcast", url: "https://www.lennyspodcast.com/how-to-consistently-go-viral-nikita-bier/", guest: "Nikita Bier" },
    ],
    storyBehind: "Nikita tried 14 apps, was about to dissolve his company, then his app hit #1 in the US - written in Arabic, a language he couldn't read. He pivoted, built Gas (anonymous compliments), dropped it in Georgia schools, watched it spread state by state.",
  },
  {
    slug: "you-aint-that",
    title: "You Ain't That",
    albumSlug: "growth-engine",
    trackNumber: 7,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Funky Pop-Soul",
    mood: "Confident, swaggering, liberating",
    tags: ["positioning", "go-to-market", "product identity"],
    lyrics: "",
    isLocked: true,
    concept: "April Dunford's positioning framework: your product isn't broken, it's badly introduced. Same code, different name, and suddenly the phone rings.",
    keyInsight: "You're not broken, you're just badly introduced. The right positioning transforms a product nobody buys into something everyone needs.",
    keyQuote: "When we get positioning wrong, everything sucks. When we get it right, we all make all kinds of money.",
    quoteSpeaker: "April Dunford",
    sources: [
      { title: "April Dunford on product positioning, segmentation, and optimizing your sales process", type: "podcast", url: "https://www.lennyspodcast.com/april-dunford-on-product-positioning-segmentation-and-optimizing-your-sales-process/", guest: "April Dunford" },
    ],
    storyBehind: "April had a product she called an 'Access killer.' She called her customer list and heard 'Sorry, lady, we don't have that.' But 21 customers picked up and said 'Your product made me hero of my team!' Same code, no changes - except the name and positioning. The phone started ringing.",
  },
];

const byTheNumbersTracks: Track[] = [
];

const theWeightTracks: Track[] = [
  {
    slug: "fire-with-grace",
    title: "Fire with Grace",
    albumSlug: "the-weight",
    trackNumber: 1,
    duration: "4:28",
    audioUrl: "/audio/fire-with-grace.mp3",
    coverImage: "/covers/fire-with-grace.jpg",
    genre: "Soulful Indie Folk",
    mood: "Intimate, devastating, redemptive",
    tags: ["firing", "leadership", "compassion"],
    lyrics: "",
    concept: "How to fire people with compassion. The most dreaded leadership task reframed as liberation.",
    keyInsight: "Firing someone with grace means being their agent on the way out, holding their weight, not explaining it away.",
    keyQuote: "The biggest marker between a botched layoff and a successful one: did they hear it from their manager, one-on-one?",
    quoteSpeaker: "Matt Mochary",
    sources: [
      { title: "How to fire people with grace, work through fear, and nurture innovation", type: "podcast", url: "https://www.lennyspodcast.com/how-to-fire-people-with-grace-matt-mochary/", guest: "Matt Mochary" },
    ],
    storyBehind: "Monday 9AM, door closed, her coffee getting cold. By pretending she's a fit when she's not, he's holding her in place when she should fly. After the conversation, he picked up the phone and called in every name. Two hours on the line to find her light. Now she's building something she adores.",
  },
];

const careerMovesTracks: Track[] = [
  {
    slug: "the-magic-loop",
    title: "The Magic Loop",
    albumSlug: "career-moves",
    trackNumber: 1,
    duration: "3:06",
    audioUrl: "/audio/the-magic-loop.mp3",
    coverImage: "/covers/the-magic-loop.jpg",
    genre: "Funky Neo-Soul Pop",
    mood: "Groovy, confident, building",
    tags: ["career growth", "managing up", "compounding"],
    lyrics: "",
    concept: "Ethan Evans's 'Magic Loop' framework for rapid career growth: ask your boss what they need, deliver it, build trust, and compound your way up.",
    keyInsight: "Career growth isn't about working harder. It's about asking 'what do you need?' and creating a compounding loop of trust and opportunity.",
    keyQuote: "Not stuck down here, I'm stuck going up.",
    quoteSpeaker: "Ethan Evans's mentee",
    sources: [
      { title: "The Magic Loop - A framework for rapid career growth", type: "newsletter", url: "https://www.lennysnewsletter.com/p/the-magic-loop", guest: "Ethan Evans" },
    ],
    storyBehind: "A farm kid from Ohio raises his hand on day one: 'Where's the gap nobody wants to own?' Two years later he led the floor he'd grown. Fifteen years later, his mentee calls and says 'I'm stuck - not stuck down here, I'm stuck going up.'",
  },
  {
    slug: "state-of-the-me",
    title: "State of the Me",
    albumSlug: "career-moves",
    trackNumber: 2,
    duration: "2:44",
    audioUrl: "/audio/state-of-the-me.mp3",
    coverImage: "/covers/state-of-the-me.jpg",
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
    concept: "The practice of 'managing up': sending your boss a simple weekly update so your work becomes visible and trust compounds.",
    keyInsight: "They can't reward the work they've never seen. Visibility isn't sucking up, it's showing up.",
    keyQuote: "They can't reward the work they've never seen.",
    quoteSpeaker: "Lenny Rachitsky",
    sources: [
      { title: "Managing up", type: "newsletter", url: "https://www.lennysnewsletter.com/p/managing-up", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "Staying late, nobody sees. Twelve things on the plate, boss knows about three. The 'State of the Me' is a Monday morning ritual: three short lines about what you shipped, what's blocking you, what you need. Two weeks in, something starts to change.",
    annotations: [
      {
        lyricText: "They can't reward the work they've never seen",
        note: "Lenny's core argument for managing up: most people assume good work speaks for itself. It doesn't. Your manager has 6-10 other reports, their own deadlines, and limited attention. A short weekly update makes your work visible without requiring them to dig.",
        sourceTitle: "Managing up",
        sourceUrl: "https://www.lennysnewsletter.com/p/managing-up",
      },
      {
        lyricText: "State of the Me, every Monday morning",
        note: "Lenny's recommended format: a brief Monday email to your manager with three sections — what you shipped last week, what you're working on this week, and where you're blocked. He calls it the highest-ROI career habit most people skip because it 'feels like sucking up.'",
        sourceTitle: "Managing up",
        sourceUrl: "https://www.lennysnewsletter.com/p/managing-up",
      },
      {
        lyricText: "It ain't sucking up, it's just showing up",
        note: "Lenny directly addresses the #1 objection people have to managing up. The reframe: visibility isn't political maneuvering, it's professional responsibility. Your manager needs context to advocate for you in rooms you're not in.",
        sourceTitle: "Managing up",
        sourceUrl: "https://www.lennysnewsletter.com/p/managing-up",
      },
      {
        lyricText: "The work won't speak for you",
        note: "The song's closing line captures Lenny's blunt conclusion: the myth that 'great work speaks for itself' has held back more careers than any lack of skill. The people who get promoted aren't always the best — they're the ones whose managers actually know what they've done.",
        sourceTitle: "Managing up",
        sourceUrl: "https://www.lennysnewsletter.com/p/managing-up",
      },
    ],
  },
  {
    slug: "bend-the-room",
    title: "Bend the Room",
    albumSlug: "career-moves",
    trackNumber: 3,
    duration: "3:28",
    audioUrl: "/audio/bend-the-room.mp3",
    coverImage: "/covers/bend-the-room.jpg",
    genre: "Jazz-Pop Groove",
    mood: "Smooth, knowing, conversational swagger",
    tags: ["influence", "stakeholder management", "persuasion"],
    lyrics: `[Intro, clean electric guitar with chorus effect]

[Verse 1, warm and conversational]
I kept my notebook open wide
Wrote down every question that you asked
Studied what you cared about
Before I ever made my ask
Coffee in the lobby, nothing formal
Just a conversation, nothing more
By the time I walked into your office
I already knew what you were looking for

[Pre-Chorus]
Slow is fast when it's people
Fast is slow every time

[Chorus 1]
Bend the room, not the table
Read the eyes before the slide
I learned to speak in your language first
'Til my ask felt like your side
Bend the room, gently, gently
Not a single voice was raised
Walked in scattered, walked out singing
Funny how alignment plays

[Verse 2, slightly more confident]
She framed it all for the user
Not a word about the revenue line
CEO leaned in and listened
Said, "Go try it — take your time"
Twenty percent more teams were paying
But the trick was what she didn't say
She let him feel like he was choosing
Something he already wanted anyway

[Pre-Chorus]
Slow is fast when it's people
Fast is slow every time

[Chorus 2]
Bend the room, not the table
Hear the fear behind the "no"
I learned to speak in your language first
'Til the walls began to fold
Bend the room, softly, softly
Not a single arm was crossed
Fourteen meetings before the summit
Wins are made before they're tossed

[Bridge, Rhodes, intimate]
You think the loudest voice will carry
But the room remembers who listened
Talk to someone about themselves
They'll stay for hours — that's the mission

[Chorus 3, full band warmth]
Bend the room, bend the room now
Play it back before you lead
I learned to speak in your language first
Now your yes is all I need
Bend the room, slowly, slowly
Every detractor's just a friend
Who hasn't heard the version yet
That helps them see around the bend

[Outro, guitar fading]
Bend the room...`,
    concept: "Jules Walter's five tactics for PM influence — seek intel, reframe proposals from the stakeholder's POV, prime detractors in pre-meetings, secure progressive alignment, and manage the clock.",
    keyInsight: "The best influencers don't argue louder — they learn what stakeholders care about and reframe proposals so the ask feels like the other person's idea.",
    keyQuote: "I got better at influence — so much so that a respected Google leader once told me that I 'bend people to alignment.'",
    quoteSpeaker: "Jules Walter",
    sources: [
      { title: "A PM's guide to influence", type: "newsletter", url: "https://www.lennysnewsletter.com/p/a-pms-guide-to-influence", guest: "Jules Walter" },
      { title: "How to get better at influence", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-to-get-better-at-influence", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "At Slack, Jules Walter needed to pitch a controversial monetization experiment to CEO Stewart Butterfield — who explicitly didn't want the company 'extracting value from users.' Jules reframed the entire proposal around user benefits instead of revenue. The CEO leaned in. Two iterations later, teams paying for Slack jumped 20%.",
    annotations: [
      {
        lyricText: "Bend the room, not the table",
        note: "The title comes from a compliment Jules Walter received from a senior Google leader who told him he 'bends people to alignment.' At Slack, YouTube, and Google Gemini, Jules developed five specific influence tactics over 10+ years — none of which involve raising your voice or pounding the table.",
        sourceTitle: "A PM's guide to influence",
        sourceUrl: "https://www.lennysnewsletter.com/p/a-pms-guide-to-influence",
      },
      {
        lyricText: "She framed it all for the user",
        note: "When Jules pitched Slack's new monetization experiment to CEO Stewart Butterfield, he knew Butterfield was intensely user-driven and didn't want the company 'extracting value.' So Jules anchored the entire proposal on user-centric insights: '10% of Slack purchases happen on day one' and 'paid users retain better — yet we make it hard to discover paid features.' The CEO greenlit the experiment without Jules ever mentioning revenue.",
        sourceTitle: "A PM's guide to influence",
        sourceUrl: "https://www.lennysnewsletter.com/p/a-pms-guide-to-influence",
      },
      {
        lyricText: "Twenty percent more teams were paying",
        note: "After two iterations of the monetization experiment Jules pitched at Slack, the result was a 20% increase in teams paying for Slack. The success shifted Slack's entire monetization strategy into a new direction — all because Jules framed it around users, not revenue.",
        sourceTitle: "A PM's guide to influence",
        sourceUrl: "https://www.lennysnewsletter.com/p/a-pms-guide-to-influence",
      },
      {
        lyricText: "Fourteen meetings before the summit",
        note: "Jules calls this 'the meeting before the meeting' — priming both detractors and champions before any big decision. He meets with detractors to steelman their arguments and prepare rebuttals, and with champions to arm them with talking points. His goal: walk into the room with a coalition already built, so the meeting is confirmation, not persuasion.",
        sourceTitle: "A PM's guide to influence",
        sourceUrl: "https://www.lennysnewsletter.com/p/a-pms-guide-to-influence",
      },
      {
        lyricText: "Talk to someone about themselves",
        note: "Jules's first influence tactic is 'seek intel on how each stakeholder makes decisions' — understanding what they value, who they consult, and what they're afraid of. He starts with informal one-on-ones, conveying he's seeking information, not trying to convince. He says: 'For people to share intel, they need to feel safe. They need to know I'm here to listen, not argue.'",
        sourceTitle: "A PM's guide to influence",
        sourceUrl: "https://www.lennysnewsletter.com/p/a-pms-guide-to-influence",
      },
    ],
  },
  {
    slug: "the-stack-rank",
    title: "The Stack Rank",
    albumSlug: "career-moves",
    trackNumber: 4,
    duration: "3:45",
    audioUrl: "/audio/the-stack-rank.mp3",
    coverImage: "/covers/the-stack-rank.jpg",
    genre: "Indie Rock",
    mood: "Building from intimate to cathartic release",
    tags: ["prioritization", "tradeoffs", "saying no"],
    lyrics: `[Intro, soft synth pad with warm piano]

[Verse 1, gentle and building]
She stood up in the weekly sync
With fifteen items on the board
Said, "We can build the dashboard new
Or ship the thing that matters more"
They smiled and said, "Just do them both"
Like midnight oil was free to burn
She walked back to her tired team
And wondered when they'd ever learn

[Pre-Chorus]
Something's gotta give tonight
Draw the line or lose the fight

[Chorus 1]
Put it on the stack rank
Name the one you'd let go
Every yes you gave away
Was someone's quiet no
Put it on the stack rank
Hold it up against the light
If you can't say what you're cutting
Then you haven't chosen right

[Verse 2, warmer, more confident]
He got the email — just a "?"
About a screw you couldn't find
He could have laughed it off and moved
But something pulled him to the blind
He dug through every search result
And found the pattern underneath
It wasn't screws — it was everything
Without a name to hold its teeth

[Pre-Chorus]
Something's gotta give tonight
Name the cost or lose the fight

[Chorus 2]
Put it on the stack rank
What's above and what's below
Every yes you gave away
Was someone else's slow
Put it on the stack rank
Say it plain, don't dress it up
"We can do this thing or that thing—
Tell me which one fills your cup"

[Bridge, intimate, stripped back]
She wrote the features out as songs
Mapped them to the Billboard charts
"Metered billing-oh-na-na"
Cringe — but no one forgot their parts
Repetition doesn't spoil the prayer
Say it 'til the hallways know
The best PMs aren't the ones who build it all
They're the ones who learn to let things go

[Chorus 3, full arrangement, release]
Put it on the stack rank
Line by line, what matters most
Every yes you gave away
Was a future you let go
Put it on the stack rank
One more time before we close
We only had to do the one thing—
God, the freedom that it chose

[Outro, piano and voice]
Stack rank... stack rank...
Name the one you'd let go`,
    concept: "Tara Seshan's framework for communicating tradeoffs to leaders: stop inviting them to say 'do both' and start framing choices so they have to pick one.",
    keyInsight: "The answer was always 'do both' because PMs were framing tradeoffs wrong. When you present choices correctly — 'we can do X or Y, which one?' — leaders are forced to actually decide.",
    keyQuote: "We only had to do the one most important thing! This led to many fewer late nights at the computer for me and my team.",
    quoteSpeaker: "Tara Seshan",
    sources: [
      { title: "How to communicate tradeoffs so leaders will listen", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-to-communicate-tradeoffs-so-leaders", guest: "Tara Seshan" },
    ],
    storyBehind: "Tara Seshan spent years watching her tradeoff presentations end with leaders saying 'just do both.' When she became a manager, she finally understood why: she'd been framing choices in ways that invited avoidance. She developed a framework for forcing real decisions — and the first time it worked, the relief of only doing the one thing was exhilarating.",
    annotations: [
      {
        lyricText: "They smiled and said, \"Just do them both\"",
        note: "Tara Seshan describes how she used to present tradeoffs with statements like 'We are thin on resources' or 'I have many things higher in my stack rank.' These statements are counterproductive — they actually invite leadership to avoid the choice. She writes: 'It's clear to me now why the answer to my tradeoff presentations was always to do both.'",
        sourceTitle: "How to communicate tradeoffs so leaders will listen",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-communicate-tradeoffs-so-leaders",
      },
      {
        lyricText: "Metered billing-oh-na-na",
        note: "Tara mapped her team's top 10 features to the Billboard Top 10, turning each into song lyrics — 'Metered billing-oh-na-na' to the tune of Camila Cabello's 'Havana.' She admits it was 'unbelievably cringe' but says no one on the team ever forgot their priorities. The technique is part of her 'repetition doesn't spoil the prayer' principle, borrowed from former Google CEO Eric Schmidt.",
        sourceTitle: "How to communicate tradeoffs so leaders will listen",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-communicate-tradeoffs-so-leaders",
      },
      {
        lyricText: "Repetition doesn't spoil the prayer",
        note: "This is a direct quote from former Google CEO Eric Schmidt. Tara Seshan uses it as the foundation of her first tradeoff technique: if leadership hasn't heard of your existing priorities, they'll happily pile on new ones. Her solution is an 'ongoing stack rank' (OSR) — a public document where every project is sequenced by priority, shared at every opportunity until 'the hallways know.'",
        sourceTitle: "How to communicate tradeoffs so leaders will listen",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-communicate-tradeoffs-so-leaders",
      },
      {
        lyricText: "We only had to do the one thing",
        note: "Tara describes the moment her new framing technique first worked: 'The first time I pushed a tradeoff using the techniques below, it was exhilarating! We only had to do the one most important thing! This led to many fewer late nights at the computer for me and my team, which made me a much more popular PM.'",
        sourceTitle: "How to communicate tradeoffs so leaders will listen",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-communicate-tradeoffs-so-leaders",
      },
      {
        lyricText: "The best PMs aren't the ones who build it all",
        note: "Tara's core thesis inverts the PM instinct to ship everything. The best PMs protect their teams by forcing leadership to choose. Her 'ongoing stack rank' technique puts the PM in the position of asking 'Do you agree that X is more important than Y?' instead of 'Why can't we do this one extra thing?' — shifting the burden of the decision to the people with the authority to make it.",
        sourceTitle: "How to communicate tradeoffs so leaders will listen",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-communicate-tradeoffs-so-leaders",
      },
    ],
  },
];

const electricDreamsTracks: Track[] = [
  {
    slug: "vibe-coding",
    title: "Vibe Coding",
    albumSlug: "electric-dreams",
    trackNumber: 1,
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
    annotations: [
      {
        lyricText: "Claude and Cursor doing all the rest",
        note: "Lenny's survey of 500+ vibe coders found Claude and Cursor were the two most-used tools for building without writing code. Builders described a workflow of prompting, previewing, and iterating — never reading the underlying code.",
        sourceTitle: "What people are vibe coding (and actually using)",
        sourceUrl: "https://www.lennysnewsletter.com/p/what-people-are-vibe-coding-and-actually",
      },
      {
        lyricText: "Don't read the code, just feel the flow",
        note: "Andrej Karpathy coined 'vibe coding' in a viral post: 'I just see things, say things, run things, and copy paste things. I don't even look at the diffs.' This became the defining ethos of the movement — trusting the output over understanding the implementation.",
        sourceTitle: "The rise of the professional vibe coder",
        sourceUrl: "https://www.lennysnewsletter.com/p/getting-paid-to-vibe-code",
      },
      {
        lyricText: "Best time to learn to code was years ago",
        note: "Lazar Jovanovic, the first official 'vibe coding engineer' at Lovable, told Lenny: 'The best time to learn to code was 10 years ago. The second best time is never.' Lovable hit $200M ARR in under a year with fewer than 100 people, many of them non-engineers.",
        sourceTitle: "The rise of the professional vibe coder",
        sourceUrl: "https://www.lennysnewsletter.com/p/getting-paid-to-vibe-code",
      },
      {
        lyricText: "A million new builders and they didn't have to wait",
        note: "Over 500 builders wrote to Lenny saying they'd shipped real products without writing code. Designers building backends, PMs shipping prototypes, founders launching MVPs — the gatekeeping of software creation collapsed almost overnight.",
        sourceTitle: "What people are vibe coding (and actually using)",
        sourceUrl: "https://www.lennysnewsletter.com/p/what-people-are-vibe-coding-and-actually",
      },
    ],
  },
  {
    slug: "godmother",
    title: "Godmother",
    albumSlug: "electric-dreams",
    trackNumber: 2,
    duration: "4:12",
    audioUrl: "/audio/godmother.mp3",
    coverImage: "/covers/godmother.jpg",
    genre: "Atmospheric Folk / Cinematic Indie",
    mood: "Intimate to sweeping, quiet conviction building to cinematic triumph",
    tags: ["AI", "biography", "inspiration"],
    lyrics: `[Intro — solo piano, sparse, reverb-heavy]

[Verse 1 — whispered, close-mic]
Dry cleaner steam on a teenage hand
Caltech winter, empty lab
Everyone said the field was dead
She walked in and unpacked

[Pre-Chorus]
The models weren't broken, they were blind
Starving in the dark for what a child already finds

[Chorus — opens to F major, breath enters]
She showed the machine the world
Fifteen million open doors
Every cat and chair and sky
Until it learned to see like yours

[Verse 2 — band begins to fill in]
Two grad students and a wild idea
Label every photograph
They called it delusional, she called it north
And kept the camera on the path

[Pre-Chorus]
Two gaming GPUs in Toronto's hands
Her patient harvest met the moment and the winter cracked

[Chorus — Variation 2, fuller]
She showed the machine the world
Every object, every name
The revolution didn't start with code
It started with a frame

[Bridge — strings enter, full cinematic swell]
They said AI was a dirty word
She stood in front of Congress and she said
Nothing artificial here
Just people all the way down to the end

[Chorus — Variation 3, full orchestra feel, triumphant]
She showed the machine the world
Twenty watts beneath her skin
The more she built the thinking thing
The more she loved what's human

[Outro — piano returns alone, gentle]
Dimmer than a light bulb
But she lit the whole room`,
    concept: "The story of Dr. Fei-Fei Li — from dry cleaner teenager to the Godmother of AI. How ImageNet's 15 million labeled images broke the AI winter and sparked the deep learning revolution.",
    keyInsight: "The AI revolution didn't start with code — it started with data. Fei-Fei Li's insight was that machines needed to see millions of examples, the way a child learns by seeing the world.",
    sources: [
      {
        title: "The Godmother of AI on jobs, robots & why world models are next",
        type: "podcast" as const,
        url: "https://www.lennyspodcast.com/the-godmother-of-ai-on-jobs-robots-why-world-models-are-next-dr-fei-fei-li/",
        guest: "Dr. Fei-Fei Li",
      },
    ],
    keyQuote: "There's nothing artificial about AI. It's inspired by people. It's created by people, and most importantly, it impacts people.",
    quoteSpeaker: "Dr. Fei-Fei Li",
    storyBehind: "Fei-Fei Li arrived in the US as a teenager and worked in her family's dry cleaner while studying physics. She entered AI research when the field was considered a dead end — as late as 2015-2016, tech companies avoided using the word 'AI' because they weren't sure if it was a dirty word. Her breakthrough was realizing that machines needed massive, cleanly-labeled datasets to learn visual intelligence, leading her to create ImageNet with its 15 million labeled images.",
    annotations: [
      {
        lyricText: "Dry cleaner steam on a teenage hand",
        note: "Fei-Fei Li told Lenny she 'started a dry cleaner when I was 19' — running her family's business as a teenage immigrant while pursuing her studies. She went from that dry cleaner to founding Google Cloud AI and Stanford's Human-Centered AI Institute, a journey spanning about 30 years.",
        sourceTitle: "The Godmother of AI on jobs, robots & why world models are next",
        sourceUrl: "https://www.lennyspodcast.com/the-godmother-of-ai-on-jobs-robots-why-world-models-are-next-dr-fei-fei-li/",
      },
      {
        lyricText: "Everyone said the field was dead",
        note: "Fei-Fei Li told Lenny that as late as 'the middle of 2015, middle of 2016, some tech companies avoid using the word AI because they were not sure if AI was a dirty word.' She entered the field during a period people call the 'AI winter' when most researchers had given up, and her work on ImageNet was the spark that ended it.",
        sourceTitle: "The Godmother of AI on jobs, robots & why world models are next",
        sourceUrl: "https://www.lennyspodcast.com/the-godmother-of-ai-on-jobs-robots-why-world-models-are-next-dr-fei-fei-li/",
      },
      {
        lyricText: "Fifteen million open doors",
        note: "ImageNet contained roughly 15 million labeled images spanning tens of thousands of object categories. Fei-Fei's breakthrough insight was that 'in order to train computers with tens and thousands of object concepts, you really need to show it millions of examples' — the same way a child learns by seeing the world. Lenny called it 'the spark that brought us out of AI winter.'",
        sourceTitle: "The Godmother of AI on jobs, robots & why world models are next",
        sourceUrl: "https://www.lennyspodcast.com/the-godmother-of-ai-on-jobs-robots-why-world-models-are-next-dr-fei-fei-li/",
      },
      {
        lyricText: "Two gaming GPUs in Toronto's hands",
        note: "The 2012 AlexNet breakthrough that proved ImageNet's value ran on just two gaming GPUs — the kind people used for playing video games. Lenny reacted: 'I love that it was two GPUs was the first... And now it's hundreds of thousands.' Fei-Fei noted the three ingredients of modern AI — internet-scale data, neural network architecture, and GPUs — are still the same core ingredients today, just massively scaled up.",
        sourceTitle: "The Godmother of AI on jobs, robots & why world models are next",
        sourceUrl: "https://www.lennyspodcast.com/the-godmother-of-ai-on-jobs-robots-why-world-models-are-next-dr-fei-fei-li/",
      },
      {
        lyricText: "She stood in front of Congress and she said",
        note: "Fei-Fei Li testified before Congress with the now-famous line: 'There's nothing artificial about AI. It's inspired by people. It's created by people, and most importantly, it impacts people.' She believes technology is 'a net positive for humanity, but every technology is a double-edged sword. If we're not doing the right thing as a society, we can screw this up.'",
        sourceTitle: "The Godmother of AI on jobs, robots & why world models are next",
        sourceUrl: "https://www.lennyspodcast.com/the-godmother-of-ai-on-jobs-robots-why-world-models-are-next-dr-fei-fei-li/",
      },
    ],
  },
  {
    slug: "the-new-stack",
    title: "The New Stack",
    albumSlug: "electric-dreams",
    trackNumber: 3,
    duration: "3:28",
    audioUrl: "/audio/the-new-stack.mp3",
    coverImage: "/covers/the-new-stack.jpg",
    genre: "Lo-fi Electronic Synth-Folk",
    mood: "Contemplative but forward-moving, warm analog meets digital",
    tags: ["AI", "product", "building"],
    lyrics: `[Verse 1, gentle pulse]
Plugged the model in at dawn
Watched it write what I'd been working on
Glowing screen, a hundred lines
Demo day — the whole room shined

[Pre-Chorus]
But the tourists came and left by June
Gorgeous trick, an empty room

[Chorus]
Same old work in a brand new stack
The future's here but it's looking back
Ship the chore, not the show
That's the only way I know

[Verse 2]
Built a chatbot, called it smart
Customers won't use the hardest part
Smallest thing — pre-fill a name
No one clapped, but no one left the page

[Chorus]
Same old work in a brand new stack
The future's warm when you strip it back
Find the chore, learn it slow
That's the only way to grow

[Bridge, building]
Speed wins where the friction lives
Prompt by prompt is all it is
Every tool I've ever known
Still comes down to hands on stone

[Chorus, full]
Same old work in a brand new stack
The future's mine, I'm not looking back
Ship the chore, let it show
That's the only way I know

[Outro, fading]
Hands on stone... hands on stone`,
    concept: "The counterintuitive truth about building AI products: the winners don't chase 'wow' demos — they automate boring chores. Based on interviews with 20+ AI product builders.",
    keyInsight: "Most early AI apps have a 'tourist' problem — they get traction quickly but have shockingly low retention. The fix is targeting boring, repetitive workflows, not impressive demos.",
    sources: [
      {
        title: "Counterintuitive advice for building AI products",
        type: "newsletter" as const,
        url: "https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building-ai-products",
        guest: "Kyle Poyar",
      },
    ],
    keyQuote: "The smallest (and almost invisible) features are usually the fan favorites. Things like pre-filling names, tiny bits of UI magic, simple data transformations often have a bigger impact than the Big AI Features.",
    quoteSpeaker: "Claire Vo",
    storyBehind: "Lenny and Kyle Poyar interviewed more than 20 successful AI builders and founders and found a surprising pattern: 60% of companies had already integrated generative AI into their products, but two in five gen AI products still hadn't made a single dollar despite companies spending millions to build them. The insight was that AI products with staying power target boring chores, not flashy demos.",
    annotations: [
      {
        lyricText: "But the tourists came and left by June",
        note: "Lenny and Kyle Poyar found that most early AI apps have a 'tourist' problem: they get a lot of traction quickly but have 'shockingly low retention and engagement.' According to an Emergence Capital survey, two in five gen AI products still hadn't made a single dollar despite companies spending millions or even billions to build them.",
        sourceTitle: "Counterintuitive advice for building AI products",
        sourceUrl: "https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building-ai-products",
      },
      {
        lyricText: "Ship the chore, not the show",
        note: "Paige Costello, head of AI at Asana, told Lenny: 'Start with a core workflow that feels like a chore where the promise-to-payoff is high if you get it right. You want to select a place where the upfront user effort yields a big reward and invites repeat use.' The winning AI products automate tedious tasks, not impressive-looking ones.",
        sourceTitle: "Counterintuitive advice for building AI products",
        sourceUrl: "https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building-ai-products",
      },
      {
        lyricText: "Smallest thing — pre-fill a name",
        note: "Claire Vo, CPO at LaunchDarkly, told Lenny: 'The smallest (and almost invisible) features are usually the fan favorites. Things like pre-filling names, tiny bits of UI magic, simple data transformations often have a bigger impact and more customer adoption than the Big AI Features like chatbots or complex agents.' You don't need a big idea to ship useful AI.",
        sourceTitle: "Counterintuitive advice for building AI products",
        sourceUrl: "https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building-ai-products",
      },
      {
        lyricText: "The future's here but it's looking back",
        note: "Elad Gil observed that 'AI mandates at larger companies create a window for startups to gain customers faster than they could pre-AI' — but the first-pass product is often a bolt-on. He warned that 'the high-value experience is a deeper rethink once you have played with the technology.' The future isn't about adding AI to old products — it's rethinking the product entirely.",
        sourceTitle: "Counterintuitive advice for building AI products",
        sourceUrl: "https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building-ai-products",
      },
      {
        lyricText: "Still comes down to hands on stone",
        note: "Across all 20+ interviews, the consistent theme was that AI doesn't replace product fundamentals — it amplifies them. James Evans, co-founder of CommandBar, found that when companies brand their chatbot as AI-powered, 'more users use it, and they also use it better.' The technology changes, but the craft of understanding users and solving real problems remains the same.",
        sourceTitle: "Counterintuitive advice for building AI products",
        sourceUrl: "https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building-ai-products",
      },
    ],
  },
];

const startupLifeTracks: Track[] = [
  {
    slug: "do-things-that-dont-scale",
    title: "Do Things That Don't Scale",
    albumSlug: "the-startup-life",
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
    annotations: [
      {
        lyricText: "Knocked on every door from dusk to dawn",
        note: "Brian Chesky told Lenny he flew to New York and personally knocked on hosts' doors to photograph their apartments. This hands-on approach tripled conversion rates on listings with professional photos.",
        sourceTitle: "Brian Chesky on Airbnb's early days",
        sourceUrl: "https://www.lennyspodcast.com/brian-cheskys-new-playbook/",
      },
      {
        lyricText: "Stripe boys at the laptop, wouldn't leave",
        note: "The Collison brothers famously wouldn't take \"I'll sign up later\" for an answer. They'd ask \"can I see your laptop?\" and install Stripe right there. Lenny calls this the gold standard of unscalable acquisition.",
        sourceTitle: "How the biggest companies got their first users",
      },
      {
        lyricText: "A hundred users loved by hand, not code",
        note: "Paul Graham's famous essay argues you need to \"recruit users one at a time\" and make each one love you before thinking about growth. Lenny featured this as the #1 lesson across 20+ first-user stories.",
        sourceTitle: "Do Things That Don't Scale",
        sourceUrl: "https://paulgraham.com/ds.html",
      },
      {
        lyricText: "Every great company started small",
        note: "Lenny's research across Airbnb, DoorDash, Tinder, Stripe, and Uber found the same pattern: the founders who won were the ones willing to do the work that wouldn't scale, personally serving early users until they figured out what people really wanted.",
        sourceTitle: "How the biggest companies got their first users",
      },
    ],
  },
  {
    slug: "product-market-fit",
    title: "Product-Market Fit (You'll Know)",
    albumSlug: "the-startup-life",
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
    annotations: [
      {
        lyricText: "Forty percent very disappointed",
        note: "The Sean Ellis PMF test asks users 'How would you feel if you could no longer use this product?' If 40%+ say 'very disappointed,' you have product-market fit. Rahul Vohra used this exact threshold to guide Superhuman's development.",
        sourceTitle: "Rahul Vohra on Superhuman's PMF engine",
        sourceUrl: "https://www.lennysnewsletter.com/p/superhumans-secret-to-success-rahul-vohra",
      },
      {
        lyricText: "Superhuman ran the test one night",
        note: "Superhuman initially scored just 22% on the Sean Ellis test — well below the 40% threshold. Rather than pivoting, Vohra segmented responses to find 'high-expectation customers' and rebuilt around their needs, eventually reaching 58%.",
        sourceTitle: "Rahul Vohra on Superhuman's PMF engine",
        sourceUrl: "https://www.lennysnewsletter.com/p/superhumans-secret-to-success-rahul-vohra",
      },
      {
        lyricText: "If you have to ask — you don't have it yet",
        note: "Marc Andreessen's famous line about PMF. Lenny's newsletter series explored how this pithy advice left founders anxious — until Vohra gave them a concrete number to measure against.",
        sourceTitle: "Lenny's PMF newsletter series",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket",
      },
      {
        lyricText: "It's the pull you feel from the other side",
        note: "Lenny describes PMF as a shift from pushing your product onto users to feeling them pull it from you. The inbox floods, support tickets spike, and you can't onboard fast enough — that's the pull.",
        sourceTitle: "Lenny's PMF newsletter series",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket",
      },
    ],
  },
  {
    slug: "the-maze",
    title: "The Maze",
    albumSlug: "the-startup-life",
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
    annotations: [
      {
        lyricText: "Most startup ideas are tarpit ideas",
        note: "Dalton Caldwell coined this term on Lenny's podcast. A tarpit idea looks like an unsolved problem, but people have been starting that same startup since the '90s. The median founder spends a full year stuck before realizing they're in one.",
        sourceTitle: "Dalton Caldwell on tarpit ideas",
        sourceUrl: "https://www.lennysnewsletter.com/p/lessons-from-1000-yc-startups",
      },
      {
        lyricText: "Friends at dinner nodding, \"you should leave",
        note: "Caldwell warns that dinner-party validation is a red flag. If everyone instantly gets your idea and agrees it's great, it's probably a tarpit — the obvious-sounding problems are obvious for a reason.",
        sourceTitle: "Dalton Caldwell on tarpit ideas",
        sourceUrl: "https://www.lennysnewsletter.com/p/lessons-from-1000-yc-startups",
      },
      {
        lyricText: "Pivoted three times, the board went cold",
        note: "Caldwell observed across 1,000+ YC startups that pivoting is the norm, not the exception. The best founders treat dead ends as data, not failure. Many of YC's biggest successes came after multiple pivots.",
        sourceTitle: "Dalton Caldwell on tarpit ideas",
        sourceUrl: "https://www.lennysnewsletter.com/p/lessons-from-1000-yc-startups",
      },
      {
        lyricText: "The real ones make you sound a little crazy",
        note: "Both Caldwell and Michael Seibel emphasize that the best startup ideas feel weird and are hard to explain at first. If you can't make it sound crazy-but-brilliant at a dinner party, you might actually be onto something.",
        sourceTitle: "Dalton Caldwell on tarpit ideas",
        sourceUrl: "https://www.lennysnewsletter.com/p/lessons-from-1000-yc-startups",
      },
    ],
  },
  {
    slug: "nobodys-coming",
    title: "Nobody's Coming",
    albumSlug: "the-startup-life",
    trackNumber: 4,
    duration: "2:42",
    audioUrl: "/audio/nobodys-coming.mp3",
    coverImage: "/covers/nobodys-coming.jpg",
    genre: "Garage Rock / Indie Punk",
    mood: "Scrappy, urgent, triumphant",
    tags: ["marketplaces", "cold start", "flywheel"],
    lyrics: `[Verse 1]
I launched to silence — no one came
Two empty sides, both the same
Can't get the riders without a ride
Can't get the drivers to the other side
So I packed a camera, caught a flight
Rang the doorbell, stayed till midnight

[Chorus]
Nobody's coming till somebody's here
So I went first through the door
One knock, one room, one ride, one meal
Then I came back for more

[Verse 2]
He dashed the food on his own date night
Ran the elevator, held on tight
She walked the craft fair, booth to booth
Carried software, told them half the truth
Forty bucks an hour just to drive
The start was always awkward — but alive

[Chorus]
Nobody's coming till somebody's here
So we showed up at the door
One block, one street, one city on the line
Then we came back for more

[Bridge]
Then one morning something changed
Stickers in the windows we never placed
The rider grabbed the wheel, became the ride
I let go... and it didn't fall

[Final Chorus]
Everybody's here cause someone showed up first
Someone went first through the door
One knock, one room, and the whole thing turned
Now they're all knocking back for more

[Outro]
Which came first?
I did`,
    concept: "The marketplace cold-start problem: every great marketplace started by the founder doing tiny, unscalable things until the flywheel caught on its own.",
    keyInsight: "Nobody's coming till somebody's here. Every marketplace flywheel starts with the founder going first through the door.",
    keyQuote: "In the beginning it was me going door to door to convince restaurants to join. I don't think there was anything else that could be substituted for that.",
    quoteSpeaker: "Tony Xu",
    sources: [
      { title: "How to Kickstart and Scale a Marketplace Business (8-part series)", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "A founder launches to silence: two empty sides of a marketplace. So they pack a camera, catch a flight, ring doorbells till midnight. Tony Xu dashed food on his own date night. Then one morning, stickers appeared in windows they never placed. The flywheel caught.",
    annotations: [
      {
        lyricText: "So I packed a camera, caught a flight\nRang the doorbell, stayed till midnight",
        note: "Airbnb co-founders Joe Gebbia and Brian Chesky literally flew to New York with cameras to photograph hosts' apartments themselves. Lenny's research across 17 major marketplaces found that direct sales — one-on-one, door to door — was the crucial early lever for about 60% of successful marketplaces, twice as common as the next biggest lever.",
        sourceTitle: "How to Kickstart and Scale a Marketplace Business – Part 3: Cracking the Chicken-and-Egg Problem",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace",
      },
      {
        lyricText: "He dashed the food on his own date night",
        note: "Tony Xu, DoorDash's co-founder, personally delivered food in the early days. As he told Lenny: 'In the beginning it was me going door to door to convince restaurants to join. I don't think there was anything else that could be substituted for that.' DoorDash's early restaurant growth was 'pounding the pavement, inside and outside sales, people on phones, door to door sales.'",
        sourceTitle: "How to Kickstart and Scale a Marketplace Business – Part 3: Cracking the Chicken-and-Egg Problem",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace",
      },
      {
        lyricText: "She walked the craft fair, booth to booth\nCarried software, told them half the truth",
        note: "Etsy's Dan McKinley told Lenny: 'The main thing that really worked was recruiting sellers in person at craft fairs. This was a small activity in terms of human effort, but it scaled beyond that since the sellers marketed themselves.' The genius was that each seller Etsy recruited became a marketer for the platform — supply driving its own demand.",
        sourceTitle: "How to Kickstart and Scale a Marketplace Business – Part 3: Cracking the Chicken-and-Egg Problem",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace",
      },
      {
        lyricText: "Stickers in the windows we never placed",
        note: "DoorDash's Micah Moreau told Lenny: 'Restaurants did a lot of the marketing for us. They would actually print placards and stickers and put them up in the restaurant, without our help, and often without us knowing. Restaurant owners are enterprising entrepreneurs and are super creative at driving demand.' This supply-driving-demand phenomenon was effective for over 40% of marketplaces studied.",
        sourceTitle: "How to Kickstart and Scale a Marketplace Business – Part 4: Cracking the Chicken-and-Egg Problem",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace",
      },
      {
        lyricText: "Nobody's coming till somebody's here\nSo I went first through the door",
        note: "Word-of-mouth was the most important early growth channel for over half of today's biggest marketplaces. Uber's Andrew Chen told Lenny early growth was '50-60% word of mouth.' But someone had to go first. Lyft's team 'literally went door to door to startups, giving away free cupcakes and donuts, along with coupons to take a free ride.' The paradox: organic growth only kicks in after someone does deeply unscalable work.",
        sourceTitle: "How to Kickstart and Scale a Marketplace Business – Part 4: Cracking the Chicken-and-Egg Problem",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace",
      },
    ],
  },
  {
    slug: "not-venture-scale",
    title: "Not Venture-Scale",
    albumSlug: "the-startup-life",
    trackNumber: 5,
    duration: "2:44",
    audioUrl: "/audio/not-venture-scale.mp3",
    coverImage: "/covers/not-venture-scale.jpg",
    genre: "Indie Folk-Rock",
    mood: "Defiant, bittersweet, warm",
    tags: ["bootstrapping", "independence", "founder identity"],
    lyrics: "",
    concept: "The case for building a business that's 'not venture-scale,' choosing independence and ownership over the unicorn treadmill.",
    keyInsight: "Not every fire needs to be the sun. You can build a real, profitable business that a VC would pass on and own every cent of it.",
    keyQuote: "They want a unicorn. I built a home.",
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
    trackNumber: 6,
    duration: "4:14",
    audioUrl: "/audio/smile-through-the-silence.mp3",
    coverImage: "/covers/smile-through-the-silence.jpg",
    genre: "Piano-Driven Indie Folk",
    mood: "Intimate, building, bittersweet",
    tags: ["fundraising", "rejection", "founder loneliness"],
    lyrics: "",
    concept: "The brutal asymmetry of fundraising: VCs do this every Tuesday, founders do this once in their life.",
    keyInsight: "The power asymmetry of fundraising is devastating: they do this every Tuesday, you do this once in your life. But someone believing in you can change everything.",
    keyQuote: "Fundraising is incredibly opaque, asymmetrical, and is often the difference between having a company and not.",
    quoteSpeaker: "Marc McCabe",
    sources: [
      { title: "A playbook for fundraising", type: "newsletter", url: "https://www.lennysnewsletter.com/p/a-playbook-for-fundraising", guest: "Marc McCabe" },
    ],
    storyBehind: "A founder carves slides at 2AM, pitches to the mirror, melts through 8 months of runway. Five pitches a day for two straight weeks, warm handshakes then silence. Then one VC leans in and asks about the dream, not the deck.",
  },
  {
    slug: "push-the-car",
    title: "Push the Car",
    albumSlug: "the-startup-life",
    trackNumber: 7,
    duration: "3:08",
    audioUrl: "/audio/push-the-car.mp3",
    coverImage: "/covers/push-the-car.jpg",
    genre: "Acoustic Indie Folk",
    mood: "Melancholic, raw, resolute",
    tags: ["failure", "traction", "founder delusion"],
    lyrics: "",
    concept: "Two stories of startups that didn't make it: one that couldn't get real traction despite great credentials, and one that tore down its walls going freemium.",
    keyInsight: "If your product only moves when you're pushing it, it was never alive. The hardest thing is figuring out whether the crowd is rooting for you or for the car.",
    keyQuote: "Don't confuse people rooting for you with market signal.",
    quoteSpeaker: "Jake Fuentes",
    sources: [
      { title: "Lessons learned from a startup that didn't make it", type: "newsletter", url: "https://www.lennysnewsletter.com/p/lessons-learned-from-a-startup-that", guest: "Jake Fuentes" },
    ],
    storyBehind: "Five million raised, a team of ten, repeat founders. But no one switched their systems in. On a quiet night, the founder let go and the car stopped beneath a yellow light. The crowd was cheering for the founders, not the product.",
  },
  {
    slug: "its-never-going-well",
    title: "It's Never Going Well",
    albumSlug: "the-startup-life",
    trackNumber: 8,
    duration: "3:22",
    audioUrl: "/audio/its-never-going-well.mp3",
    coverImage: "/covers/its-never-going-well.jpg",
    genre: "Indie Folk Anthem",
    mood: "Vulnerable, communal, defiant",
    tags: ["founder struggle", "vulnerability", "resilience"],
    lyrics: "",
    concept: "Gustaf Alstromer's lessons from 600+ YC startups: the universal founder experience of struggle, vulnerability, and building anyway.",
    keyInsight: "The worst part of struggling isn't failing. It's thinking it's only you. Shared vulnerability unlocks resilience.",
    keyQuote: "When you ask a founder 'how are things going?' — it's never going well. All founders, when they look each other in the eyes, know that's not the answer.",
    quoteSpeaker: "Gustaf Alstromer",
    sources: [
      { title: "Lessons from 600+ YC startups", type: "podcast", url: "https://www.lennyspodcast.com/lessons-from-working-with-600-yc-startups-gustaf-alstromer-y-combinator-airbnb/", guest: "Gustaf Alstromer" },
    ],
    storyBehind: "Someone asks how it's going. You freeze, then smile. In a YC group session, Gustaf says forget your pitch, just tell us everything. She goes first, voice shaking: 'No traction and we're out of cash.' Something in your chest breaks open, because yours sounds just like that.",
  },
];

const theTalentSearchTracks: Track[] = [
  {
    slug: "first-ten",
    title: "First Ten",
    albumSlug: "the-talent-search",
    trackNumber: 1,
    duration: "3:30",
    audioUrl: "/audio/first-ten.mp3",
    coverImage: "/covers/first-ten.jpg",
    genre: "Liturgical Folk",
    mood: "Warm, congregational, founding anthem",
    tags: ["early hires", "culture", "founding team"],
    lyrics: `[Intro — acoustic guitar, fingerpicked, solo]

[Verse 1]
Empty room and a half-built plan
Two years failing, still no traction
Four guys nobody wants to bet on
Making calls that no one's answering

[Pre-Chorus]
You're asking someone to risk it all
Asking them to fall before the walls are up

[Chorus]
They weren't looking when you found them
Slow and steady, six long months
You didn't post the role, you wrote the letter
One by one until you're ten

[Verse 2]
The first one builds the thing you can't
The second checks your work for cracks
The third one knows a fourth who knows a fifth
The room fills up like that

[Pre-Chorus]
A hundred hours before each yes
You earn the trust before you get the desk

[Chorus]
They weren't looking when you found them
Slow and steady, six long months
You didn't post the role, you wrote the letter
One by one until you're ten

[Bridge — full band enters, organ swells]
Great people pull great people in
You can't fake what's real to them
Don't lower the bar for anyone
The house becomes the first ten rooms

[Final Chorus — full band, congregational feel]
They weren't looking when you found them
Slow and steady, six long months
You didn't hire a team — you built a culture
And it starts with the first ten

[Outro — acoustic guitar returns, quiet]
The first ten rooms you build
Become the house`,
    concept: "A founding hymn about the grueling, deeply personal process of hiring your first ten employees — the people who define everything that follows.",
    keyInsight: "The best early hires aren't found on job boards — they come from personal networks, former colleagues, and relentless outreach. At Segment, the founders tried for months to recruit classmates but 'there was little appetite to join four crazy guys in a room who had been failing for two years straight.'",
    keyQuote: "Believe it or not, there was little appetite to join four crazy guys in a room who had been failing for two years straight.",
    quoteSpeaker: "Calvin French-Owen, co-founder of Segment",
    sources: [
      { title: "Hiring your early team", type: "newsletter" as const, url: "https://www.lennysnewsletter.com/p/hiring-your-early-team", guest: "Lenny Rachitsky" },
    ],
    storyBehind: "Lenny surveyed founders of 40+ iconic startups — Notion, Figma, Linear, Ramp, Segment — about how they hired their first employees. The overwhelming pattern: personal networks were the #1 channel, the best people were never actively looking, and Linear hired a dedicated recruiter at 15 people because 'the best and most sought-after people are often hard and slow to hire.'",
    annotations: [
      {
        lyricText: "Four guys nobody wants to bet on",
        note: "Segment's Calvin French-Owen told Lenny his founding team tried for months to recruit classmates but had 'pretty rotten luck.' His exact words: 'Believe it or not, there was little appetite to join four crazy guys in a room who had been failing for two years straight.' They eventually found their early hires through the YC network instead.",
        sourceTitle: "Hiring your early team",
        sourceUrl: "https://www.lennysnewsletter.com/p/hiring-your-early-team",
      },
      {
        lyricText: "You didn't post the role, you wrote the letter",
        note: "Across Lenny's survey of 40+ startup founders, hiring friends and former colleagues was 'by far the biggest channel' for early hires. Quote after quote confirmed it: 'All of our early hires were friends/ex-coworkers,' 'First hires were practically all former colleagues,' 'I thought about the hardest-working people I knew and reached out to them.'",
        sourceTitle: "Hiring your early team",
        sourceUrl: "https://www.lennysnewsletter.com/p/hiring-your-early-team",
      },
      {
        lyricText: "The third one knows a fourth who knows a fifth",
        note: "The second most effective hiring channel was tapping the networks of your earliest employees — not just the founders' networks. As one founder told Lenny: 'Many of our early hires were people from my network or the network of the very first employees.' Your second sales hire was often a former colleague of your first salesperson. The snowball effect is real.",
        sourceTitle: "Hiring your early team",
        sourceUrl: "https://www.lennysnewsletter.com/p/hiring-your-early-team",
      },
      {
        lyricText: "Don't lower the bar for anyone",
        note: "Linear's co-founder Jori Lallo explained why they hired a dedicated recruiter at just 15 people: 'We cared about hiring the best people, not about the first person who came knocking at our door.' They rejected external agencies because incentives were tied to closed hires, pushing speed over quality. Today Linear has a four-person recruiting function at a 50-person company.",
        sourceTitle: "Hiring your early team",
        sourceUrl: "https://www.lennysnewsletter.com/p/hiring-your-early-team",
      },
      {
        lyricText: "You didn't hire a team — you built a culture",
        note: "Recruiters became a 'surprisingly common' early hire across the most iconic startups Lenny studied — Linear, Figma, Ramp, and Coda all hired dedicated recruiting help early. The pattern: founders who treated hiring as culture-building (not just seat-filling) invested in recruiting infrastructure before it seemed necessary, and it paid off in team quality.",
        sourceTitle: "Hiring your early team",
        sourceUrl: "https://www.lennysnewsletter.com/p/hiring-your-early-team",
      },
    ],
  },
  {
    slug: "the-closer",
    title: "The Closer",
    albumSlug: "the-talent-search",
    trackNumber: 2,
    duration: "3:30",
    audioUrl: "/audio/the-closer.mp3",
    coverImage: "/covers/the-closer.jpg",
    genre: "Neo-Soul",
    mood: "Smooth, confident, late-night groove",
    tags: ["executive recruiting", "closing", "talent"],
    lyrics: `[Verse 1 — smooth, laid-back delivery]
I keep a list of names in ink
The ones who built what others couldn't
A calendar note beside each one
The vest date, the conference, the call
I never rush, I never chase
I just show up where the good ones are

[Pre-Chorus — building warmth]
You won't find them on a job board
They're not refreshing LinkedIn
The best ones don't know they're looking
Till somebody makes them feel it

[Chorus 1 — confident groove]
I know what good looks like
Seven months to make you mine
Coffee first, then ask you how you'd
Build it if the whole thing was yours
I know what good looks like
And you're it

[Verse 2 — storytelling, intimate]
He built Prime Day from a whiteboard
Then wired Snapchat's beating heart
I called and he said, "Why would I leave?"
I said, "Just grab a coffee, no strings"
Four weeks after he signed on
I walked through the same front door

[Pre-Chorus — slight variation]
The resume's the highlight reel
The back channel tells the truth
I want the one your old team misses
Not the name, the proof

[Chorus 2 — varied]
I know what good looks like
Seven months to make you stay
I don't pitch, I just keep listening
Till you tell me what you need
I know what good looks like
And it's you

[Bridge — stripped, reflective]
People aren't commodities
They've got lives beyond the role
The ones who close the hardest deals
Remember that they're courting souls

[Chorus 3 — final, triumphant]
I know what good looks like
Took me seven months this time
You thought it was just conversation
But I was building something real
I know what good looks like
Now you're home`,
    concept: "A song from the perspective of a world-class executive recruiter, turning the long game of talent courtship into a smooth neo-soul groove.",
    keyInsight: "The best candidates are never actively looking. Lauren Ipsen describes her approach as a 'seven month game of courtship' — bringing candidates in as advisors, asking how they'd structure the org, building real rapport before any formal interview process.",
    keyQuote: "It was a seven month game of courtship.",
    quoteSpeaker: "Lauren Ipsen",
    sources: [
      { title: "Lessons from one of the world's top executive recruiters", type: "podcast" as const, url: "https://www.lennyspodcast.com/lessons-from-one-of-the-worlds-top-executive-recruiters-lauren-ipsen/", guest: "Lauren Ipsen" },
    ],
    storyBehind: "Lauren Ipsen, who went from Daversa Partners to General Catalyst's talent team, told Lenny about landing a VP of Engineering through seven months of relationship-building — starting as an advisor, then collaborator, then finally teammate. No formal interview. No transactional process. Just trust built over time.",
    annotations: [
      {
        lyricText: "Seven months to make you mine",
        note: "Lauren Ipsen described to Lenny how she landed a VP of Engineering candidate: 'It was a seven month game of courtship, and let's bring him in to help out from an advising capacity, let's ask him how he would think about structuring this organization.' She explicitly avoided formal interviews because they 'feel transactional.' The result: 'magic can happen and you can land incredible people.'",
        sourceTitle: "Lessons from one of the world's top executive recruiters",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-one-of-the-worlds-top-executive-recruiters-lauren-ipsen/",
      },
      {
        lyricText: "The best ones don't know they're looking",
        note: "Ipsen told Lenny the biggest mistake founders make is being 'distracted by shiny objects' — chasing CPOs of Google or YouTube because of brand recognition. 'Oftentimes those individuals are pretty far from the work and have a great team of executors that are actually the ones in the weeds.' The real targets are the executors nobody's heard of.",
        sourceTitle: "Lessons from one of the world's top executive recruiters",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-one-of-the-worlds-top-executive-recruiters-lauren-ipsen/",
      },
      {
        lyricText: "The back channel tells the truth",
        note: "Ipsen explained to Lenny why she relies on her own network over LinkedIn: 'I'm not just blindly guessing on quantity, spending a ton of time on LinkedIn, and then having to call unknown entities and ask for back channel references when they also might not even feel comfortable sharing the dirt.' Her network referrals guarantee quality because great people 'would never put me in touch with someone that wasn't equally as qualified.'",
        sourceTitle: "Lessons from one of the world's top executive recruiters",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-one-of-the-worlds-top-executive-recruiters-lauren-ipsen/",
      },
      {
        lyricText: "I know what good looks like",
        note: "Ipsen told Lenny she tends to 'lean towards folks that have a chip on their shoulder or have something to prove and want to build.' She specifically warned against hiring senior leaders from big companies who are no longer hungry: the ones who already proved themselves at a YouTube 10-year success story. The signal she looks for is hunger, not pedigree.",
        sourceTitle: "Lessons from one of the world's top executive recruiters",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-one-of-the-worlds-top-executive-recruiters-lauren-ipsen/",
      },
      {
        lyricText: "People aren't commodities",
        note: "Ipsen started her career in broadcast journalism wanting to be on the news, then 'quickly realized I didn't necessarily want to be the face of sadness.' She pivoted to executive search — 'not really something that people major in college' — because she could use her communication skills to make impact 'with a little bit of a different angle.' Her human-first approach to recruiting comes from that journalism instinct: listen first, pitch never.",
        sourceTitle: "Lessons from one of the world's top executive recruiters",
        sourceUrl: "https://www.lennyspodcast.com/lessons-from-one-of-the-worlds-top-executive-recruiters-lauren-ipsen/",
      },
    ],
  },
  {
    slug: "the-one-question",
    title: "The One Question",
    albumSlug: "the-talent-search",
    trackNumber: 3,
    duration: "3:45",
    audioUrl: "/audio/the-one-question.mp3",
    coverImage: "/covers/the-one-question.jpg",
    genre: "Indie Folk-Pop",
    mood: "Warm, earnest, quietly revelatory",
    tags: ["interviewing", "authenticity", "hiring"],
    lyrics: `[Verse 1]
The room is small, the table bare
You've practiced every answer well
I've got forty-five minutes here
To learn the things you'd never tell
You've rehearsed the wins, the near misses
The version you want me to see
But I've been doing this a while now
And I've got one question for free

[Chorus]
Tell me what hard means to you
Watch your face before the words arrive
Tell me what hard means to you
That's when I know you're real inside
Tell me what hard means to you

[Verse 2]
Something in your voice went quiet
Like a breath you've held too long
You picked the story that was hardest
Told me everything that went wrong
Not the version that ends golden
Not the lesson wrapped up neat —
Just the thing you had to live through
And the part that felt like defeat

[Chorus]
Tell me what hard means to you
I can hear the truth before you're through
Tell me what hard means to you
That's the only question worth pursuing
Tell me what hard means to you

[Bridge]
I'm not looking for the right answer
I'm not grading how you fail
I just want to see the person
Underneath the well-told tale
What's the unfair thing you've learned?
What's the question I should've asked?
Let the interview fall away now
I just want to see what lasts

[Final Chorus]
You told me what hard means to you
Didn't flinch before the words came through
You told me what hard means to you
That's the only proof I ever need
Tell me what hard means to you

[Outro]
Forty-five minutes
One question asked
You let me in`,
    concept: "An intimate portrait of a job interview stripped down to the one question that reveals everything: 'What's the hardest thing you've ever done?'",
    keyInsight: "Ramp's VP of Product Geoff Charles asks every candidate one question: 'What's the hardest thing you've ever done?' He's not looking for the right answer — he wants to understand what 'hard' means to them, and how much agency they had in overcoming it.",
    keyQuote: "I want to understand what hard means for them. I want to understand why it was hard. I want to understand how they overcame that difficulty, how they worked with other people to overcome that difficulty, and how much agency they had in overcoming that.",
    quoteSpeaker: "Geoff Charles, VP of Product at Ramp",
    sources: [
      { title: "How to learn the most about a candidate from a single interview question", type: "newsletter" as const, url: "https://www.lennysnewsletter.com/p/how-to-learn-the-most-about-a-candidate-from-a-single-interview-question", guest: "Lenny Rachitsky" },
      { title: "Velocity over everything: How Ramp became the fastest-growing SaaS startup of all time", type: "podcast" as const, url: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/", guest: "Geoff Charles" },
    ],
    storyBehind: "Lenny collected the favorite interview questions of nearly 150 podcast guests and distilled them into 25 high-signal questions. Geoff Charles's 'What's the hardest thing you've ever done?' stood out because it tests for grit, self-awareness, and agency all at once. Annie Pearl (ex-CPO of Calendly) uses a similar approach: 'I look for people being brutally honest about how bad it was and why it failed.'",
    annotations: [
      {
        lyricText: "I've got forty-five minutes here",
        note: "Lenny frames the entire newsletter around this constraint: 'In most hiring processes, you're lucky if you get 45 minutes to chat with a candidate before you have to make a thumbs-up or thumbs-down decision. How do you use that precious time to get the most — and most important — information?' The 25 questions he collected are designed to maximize signal in minimal time.",
        sourceTitle: "How to learn the most about a candidate from a single interview question",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-learn-the-most-about-a-candidate-from-a-single-interview-question",
      },
      {
        lyricText: "Tell me what hard means to you",
        note: "Geoff Charles (VP of Product at Ramp, the fastest-growing SaaS startup ever) told Lenny his go-to question is 'What's the hardest thing you've ever done?' His reasoning: 'I want to understand what hard means for them. I want to understand why it was hard. I want to understand how they overcame that difficulty, how they worked with other people to overcome that difficulty, and how much agency they had in overcoming that.'",
        sourceTitle: "Velocity over everything: How Ramp became the fastest-growing SaaS startup of all time",
        sourceUrl: "https://www.lennyspodcast.com/velocity-over-everything-how-ramp-became-the-fastest-growing-saas-startup-of-all-time-geoff-charl/",
      },
      {
        lyricText: "Not the version that ends golden",
        note: "Annie Pearl (corporate VP at Microsoft, ex-CPO of Calendly) told Lenny she uses a similar question and specifically looks for raw honesty: 'The rest of the interview, they're trying to tell you all the wonderful things they did and all the accomplishments they had. And so I think the rawer the answer in terms of how bad it was and why, the better.'",
        sourceTitle: "How to learn the most about a candidate from a single interview question",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-learn-the-most-about-a-candidate-from-a-single-interview-question",
      },
      {
        lyricText: "What's the unfair thing you've learned?",
        note: "Noah Weiss, CPO of Slack, asks candidates: 'What's an unfair secret you've learned to improve a product team's velocity and energy level?' He told Lenny: 'When I say unfair or secret, I mean not something that you read on Medium. I'm looking for what you learned, how you learned it, how it works, and how you apply it.' The word 'unfair' forces candidates past rehearsed answers.",
        sourceTitle: "How to learn the most about a candidate from a single interview question",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-learn-the-most-about-a-candidate-from-a-single-interview-question",
      },
      {
        lyricText: "What's the question I should've asked?",
        note: "Nikhyl Singhal (VP of Product at Meta) shared a meta-question with Lenny: asking candidates to flip the script and identify what conventional wisdom they'd bet against. 'You could do that for AI, you could do that for domains. You can do all kinds of things.' The best interview questions don't test knowledge — they reveal how candidates think when there's no right answer.",
        sourceTitle: "How to learn the most about a candidate from a single interview question",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-learn-the-most-about-a-candidate-from-a-single-interview-question",
      },
    ],
  },
];

const theInterviewTracks: Track[] = [
  {
    slug: "dont-give-em-your-number",
    title: "Don't Give 'Em Your Number",
    albumSlug: "the-interview",
    trackNumber: 1,
    duration: "3:08",
    audioUrl: "/audio/dont-give-em-your-number.mp3",
    coverImage: "/covers/dont-give-em-your-number.jpg",
    genre: "Gospel-Soul Anthem",
    mood: "Defiant, empowering, swagger",
    tags: ["salary negotiation", "self-advocacy", "knowing your worth"],
    lyrics: "",
    concept: "The rules of salary negotiation: never give your number first, let silence do the talking, understand the game is designed to keep you quiet.",
    keyInsight: "The salary negotiation game has rules, and once you learn them, you stop leaving money on the table.",
    keyQuote: "Every recruiter will ask about your salary expectations. Do not — I repeat, do not — give them a number.",
    quoteSpeaker: "Niya Dragova",
    sources: [
      { title: "The 10 commandments of salary negotiation", type: "newsletter", url: "https://www.lennysnewsletter.com/p/negotiating-comp", guest: "Niya Dragova" },
    ],
    storyBehind: "Rehearsed lines in the parking lot, walked in steady, then she leaned across the table and asked 'what's your number?' Mouth went dry. The system is built to keep you quiet, grateful, and small enough to say 'that's great.'",
  },
  {
    slug: "never-search-alone",
    title: "Never Search Alone",
    albumSlug: "the-interview",
    trackNumber: 2,
    duration: "3:24",
    audioUrl: "/audio/never-search-alone.mp3",
    coverImage: "/covers/never-search-alone.jpg",
    genre: "Acoustic Soul",
    mood: "Warm, intimate, communal and hopeful",
    tags: ["job search", "community", "vulnerability"],
    lyrics: `[Verse 1, warm and intimate]
Kitchen table, six worn chairs
Strangers pouring coffee, no one stares
Hands still trembling from the news
Résumé open, nothing left to lose

[Pre-Chorus]
We all showed up with the same quiet ache
The one we swallow at the school-yard gate

[Chorus, soulful lift]
You don't have to carry this alone
Set it down, somebody's got the weight
You don't have to know the road ahead
Just show up — that's enough today

[Verse 2]
San Fernando, summer, sixty
Teachers circled up with tea
Fifty years they kept that room alive
Through the seasons no one else survived

[Pre-Chorus]
Her son grew up and brought it to the coast
Gave away the thing that mattered most

[Chorus]
You don't have to carry this alone
Set it down, somebody's got the weight
You don't have to know the road ahead
Just show up — that's enough today

[Bridge, stripped back]
Six chairs around a borrowed table
Strangers learning how to ask
We slow down so we can move
Spear in hand, we're throwing back the net

[Chorus, full build]
We don't have to carry this alone
Set it down, we've all got the weight
We don't have to walk the road alone
Just show up — that's enough, that's enough

[Outro, fading]
Ohhh, show up... that's enough`,
    concept: "The power of searching for a job together instead of alone — how a support group of six strangers transforms fear into hope, accountability, and confidence.",
    keyInsight: "Putting anxious job seekers together in a small group and asking them to be open and vulnerable actually flips the anxiety into hope, motivation, and confidence.",
    keyQuote: "Everyone, no matter who they are, feels insecure and anxious in the job search. And if you do it alone, it magnifies that.",
    quoteSpeaker: "Phyl Terry",
    sources: [
      { title: "Land your dream job in today's market: negotiation tactics, job search councils, and more", type: "podcast", url: "https://www.lennysnewsletter.com/p/land-your-dream-job-in-todays-market", guest: "Phyl Terry" },
    ],
    storyBehind: "Phyl Terry's mother formed a council of teachers in 1960 in the San Fernando Valley. That group met for 50 years until the year she died. When Phyl grew up, he brought the same idea to Silicon Valley job seekers — and has now launched over 2,000 free Job Search Councils.",
    annotations: [
      {
        lyricText: "Kitchen table, six worn chairs",
        note: "Phyl Terry's Job Search Councils are groups of exactly six to eight job seekers who commit to supporting each other through the search. Terry told Lenny: 'If you put anxious people together and ask them to be open and vulnerable and to ask for help, it actually flips the anxiety and the fear into hope, into motivation, into accountability and confidence.' Over 2,000 councils have been launched — all completely free and volunteer-driven.",
        sourceTitle: "Land your dream job in today's market: negotiation tactics, job search councils, and more",
        sourceUrl: "https://www.lennysnewsletter.com/p/land-your-dream-job-in-todays-market",
      },
      {
        lyricText: "San Fernando, summer, sixty",
        note: "In 1960 in the San Fernando Valley, Phyl Terry's mother — a newly-minted elementary school teacher — put together a council of teachers. That group met for 50 years until the year she died. When her husband left in 1976, she had to start over as an entry-level teacher, but her council held her hand through it. Terry dedicates the book to her.",
        sourceTitle: "Land your dream job in today's market: negotiation tactics, job search councils, and more",
        sourceUrl: "https://www.lennysnewsletter.com/p/land-your-dream-job-in-todays-market",
      },
      {
        lyricText: "Strangers learning how to ask",
        note: "Terry's methodology centers on 'candidate market fit' — applying product thinking to your job search. Instead of spraying and praying, he asks people to think about what they want and don't want. 'Most people don't do that,' he told Lenny. 'When they get laid off, they spray and pray.' The councils teach people to play to win, not 'not to lose.'",
        sourceTitle: "Land your dream job in today's market: negotiation tactics, job search councils, and more",
        sourceUrl: "https://www.lennysnewsletter.com/p/land-your-dream-job-in-todays-market",
      },
      {
        lyricText: "We slow down so we can move",
        note: "Councils meet twice a week for fast seekers (those actively unemployed) and once a week for slow seekers (those employed but looking). The first meeting — called 'meeting zero' — is entirely about being open and vulnerable, sharing life stories to build trust. Terry's team has invested over 20,000 hours of volunteer work into the program.",
        sourceTitle: "Land your dream job in today's market: negotiation tactics, job search councils, and more",
        sourceUrl: "https://www.lennysnewsletter.com/p/land-your-dream-job-in-todays-market",
      },
      {
        lyricText: "Spear in hand, we're throwing back the net",
        note: "Terry contrasts 'spear fishing' (targeted, strategic outreach) with 'spray and pray' (mass-applying to every opening). Lenny noted the parallel: 'This is very much like a product person thinks about new product.' Terry agreed — the entire Never Search Alone methodology brings a product lens to reinventing the job search.",
        sourceTitle: "Land your dream job in today's market: negotiation tactics, job search councils, and more",
        sourceUrl: "https://www.lennysnewsletter.com/p/land-your-dream-job-in-todays-market",
      },
    ],
  },
  {
    slug: "ninety-three-percent",
    title: "Ninety-Three Percent",
    albumSlug: "the-interview",
    trackNumber: 3,
    duration: "3:18",
    audioUrl: "/audio/ninety-three-percent.mp3",
    coverImage: "/covers/ninety-three-percent.jpg",
    genre: "Boom-Bap Hip Hop",
    mood: "Confident, late-night prep energy turning into swagger",
    tags: ["interview prep", "behavioral interviews", "STAR method"],
    lyrics: `[Verse 1, spoken flow]
Ironed shirt on the doorknob
Coffee cold, haven't touched it
Three a.m. and I'm pacing
Through the launch that almost broke me
Pulled up five old projects
Every detail, every stumble
Wrote the wins, wrote the losses
Wrote the parts that kept me humble

[Pre-Chorus, whispered]
They don't want a perfect stranger
They want proof that you were there

[Chorus, call-and-response]
Walk it back, walk it back
Ninety-three percent on track
Know your name, know your lane
Walk that memory lane

[Verse 2, relaxed flow]
Mirror practice, Tuesday evening
Use their words like they're my own
Map the job to what I've carried
One good reason stands alone
Not a hundred scripted answers
Just the work beneath my hands
Every question is a doorway
Back to where I know I'll land

[Pre-Chorus, whispered]
They don't want a clean rehearsal
They want someone who was there

[Chorus, call-and-response]
Walk it back, walk it back
Ninety-three, I know the track
Speak your truth, show the proof
Walk that memory lane

[Bridge, stripped]
You're not learning lines
You're remembering who you are
Situation, task, and action
Then the part that left a scar

[Chorus, building]
Walk it back, walk it back
Ninety-three — no looking back
Took my time, did the work
Walked that memory lane

[Outro, fading]
Ninety-three... ninety-three...
I know my story cold`,
    concept: "The art of interview prep: not memorizing scripts, but deeply remembering your own story — the projects, the stumbles, and the scars that prove you were there.",
    keyInsight: "Instead of preparing answers to hundreds of behavioral questions, pick three to five major projects and remember every detail about them. Your brain will naturally pull from these stories.",
    keyQuote: "93% percent of them landed jobs at Google, Meta, Uber, Airbnb, Stripe, or a similar top-tier tech company — without burning themselves to the ground endlessly preparing, or winging it and hoping for the best.",
    quoteSpeaker: "Coach Erika",
    sources: [
      { title: "How to pass any first-round interview (even in a terrible talent market)", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-to-pass-any-first-round-interview", guest: "Coach Erika" },
    ],
    storyBehind: "Coach Erika is an engineer-turned-CPO who moonlights as a career coach. Since 2020 she's coached over 200 people through tech job searches. Her Minimum Viable Interview Prep (MVIP) process strips away the noise and focuses on what actually works: know your stories cold, use their language, and let your real experience do the talking.",
    annotations: [
      {
        lyricText: "Pulled up five old projects",
        note: "Coach Erika's core prep method: instead of scripting answers to hundreds of behavioral questions, pick three to five recent major projects and remember every single detail about them. 'Writing all of this down will help you reference the details before future interviews,' she writes. 'When you are asked about past work experiences, your brain will more easily pull from one of these projects.'",
        sourceTitle: "How to pass any first-round interview (even in a terrible talent market)",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-pass-any-first-round-interview",
      },
      {
        lyricText: "Use their words like they're my own",
        note: "Coach Erika's 'mirroring' technique: paste the job description into a doc, highlight keywords, then map each keyword to your own experience. In the interview, use their language to describe what you did. 'The more familiar the interviewer is with the job description and the role requirements, the more effective this technique will be at subconsciously reinforcing your fit for the role.'",
        sourceTitle: "How to pass any first-round interview (even in a terrible talent market)",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-pass-any-first-round-interview",
      },
      {
        lyricText: "Ninety-three percent on track",
        note: "The number is real: Coach Erika has coached over 200 people in tech job searches, and 93% of them landed jobs at Google, Meta, Uber, Airbnb, Stripe, or similar top-tier companies. She's not a recruiter — she's an engineer and product manager who landed her first Big Tech job at Google in 2013 and now moonlights as a career coach.",
        sourceTitle: "How to pass any first-round interview (even in a terrible talent market)",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-pass-any-first-round-interview",
      },
      {
        lyricText: "Situation, task, and action",
        note: "The STAR method (Situation, Task, Action, Result) was invented in the 1970s. Studies found behavioral questions were 55% more effective at predicting on-the-job performance than prevailing techniques. Coach Erika teaches an evolved version she calls 'STAR++': after Result, add what you learned, then how you evolved your approach in a future situation.",
        sourceTitle: "How to pass any first-round interview (even in a terrible talent market)",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-pass-any-first-round-interview",
      },
      {
        lyricText: "They don't want a perfect stranger",
        note: "First-round interviews are designed to filter, not to comprehensively assess. Coach Erika breaks down the typical 45-minute structure: 10% intro (3-5 min), 70% questions from the interviewer (35 min), 20% your questions (5-7 min). The singular goal from the employer's perspective is to determine if they want to invest in additional interviews with you.",
        sourceTitle: "How to pass any first-round interview (even in a terrible talent market)",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-pass-any-first-round-interview",
      },
    ],
  },
  {
    slug: "product-sense",
    title: "Product Sense",
    albumSlug: "the-interview",
    trackNumber: 4,
    duration: "3:32",
    audioUrl: "/audio/product-sense.mp3",
    coverImage: "/covers/product-sense.jpg",
    genre: "Jazz-Pop",
    mood: "Reflective, intimate, gently building",
    tags: ["product sense", "PM interviews", "empathy"],
    lyrics: `[Intro, gentle jazz guitar]

[Verse 1]
Four weeks in my apartment
Mock interviews on the screen
I memorized the template
But something sat between
The rubric and the real thing
The score sheet and the soul
I could list their pain points
But I couldn't feel the pull

[Chorus]
You're reading sheet music
But you never heard the song
See the person, not the deck
Feel where the shoe goes wrong
Sit where they've been sitting
Walk their quiet halls
That's the sense you can't rehearse
It answers when it calls

[Verse 2]
Fifty faces in that chair
Some came armed with slides
Perfect structure, every box
But hollow on the inside
Then someone paused and asked me
"Who's the one that's stuck?"
Not a segment, not a chart
Just a mother out of luck

[Chorus 2]
You're reading sheet music
But you never heard the song
See the person, not the pitch
Feel where the day goes wrong
Sit where they've been hurting
Name what they can't say
That's the sense you can't rehearse
You live it every day

[Bridge, softer]
It's not the mission statement
Or the North Star on a slide
It's the moment someone tells you
What they're too ashamed to hide

[Chorus 3, building]
Stop reading sheet music
Go and listen to the song
See the person, not the data
Feel where the hope goes wrong
Ask the question underneath
The one they swallow down
That's the sense you can't rehearse
That's how the lost get found

[Outro, fading]
See the person...
See the person...`,
    concept: "Product sense isn't a framework you memorize — it's learning to see the real person behind the data, the user behind the segment, the pain behind the feature request.",
    keyInsight: "The best product sense interview answers come from genuine empathy, not templates. The candidates who win are the ones who can describe a specific person's specific problem.",
    keyQuote: "Product sense is the skill of consistently being able to craft products that have the intended impact on their users. It relies on empathy to discover meaningful user needs and creativity to come up with solutions.",
    quoteSpeaker: "Jules Walter",
    sources: [
      { title: "The definitive guide to mastering product sense interviews", type: "newsletter", url: "https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering", guest: "Ben Erez" },
      { title: "How to develop product sense", type: "newsletter", url: "https://www.lennysnewsletter.com/p/how-to-develop-product-sense", guest: "Jules Walter" },
    ],
    storyBehind: "Ben Erez spent four intense weeks in 2020 preparing for a PM role at Facebook. He watched every mock interview on YouTube, drafted templates from the patterns he noticed, and landed the offer. Then he interviewed over 50 candidates from the other side of the table — and realized the ones who won weren't the most structured. They were the ones who could feel the user's actual pain.",
    annotations: [
      {
        lyricText: "Four weeks in my apartment",
        note: "Ben Erez describes his exact preparation journey: 'Over the course of four intense weeks, I spent countless hours watching every mock interview I could find on YouTube and picking the brains of PMs in my network who passed these interviews.' He drafted paper templates from the patterns, practiced with them, and landed the offer at Facebook.",
        sourceTitle: "The definitive guide to mastering product sense interviews",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering",
      },
      {
        lyricText: "Fifty faces in that chair",
        note: "During his time at Facebook, Ben Erez interviewed over 50 candidates, which gave him a deeper understanding of the interviewer's perspective. He later coached hundreds more. Through coaching, his frameworks helped dozens of candidates land total comp packages upward of $600,000.",
        sourceTitle: "The definitive guide to mastering product sense interviews",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering",
      },
      {
        lyricText: "The rubric and the real thing",
        note: "Product sense interviews assess five specific dimensions: clear communication, product motivation, segmentation, problem identification, and solution development. Ben Erez's key insight: 'Excellence in one area can't compensate for weakness in another. But you don't need perfect scores across the board; a solid score for each dimension is sufficient to pass.'",
        sourceTitle: "The definitive guide to mastering product sense interviews",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering",
      },
      {
        lyricText: "Not a segment, not a chart",
        note: "Jules Walter, a longtime PM at Slack and YouTube, defines product sense as 'the skill of consistently being able to craft products that have the intended impact on their users.' It relies on two things: empathy to discover meaningful user needs, and creativity to come up with solutions. Lenny's survey of ~1,000 PMs ranked it as one of the most important — and most vague — PM skills.",
        sourceTitle: "How to develop product sense",
        sourceUrl: "https://www.lennysnewsletter.com/p/how-to-develop-product-sense",
      },
      {
        lyricText: "You're reading sheet music",
        note: "Ben Erez's framework coaching begins with what he calls 'waypointing': before each section, candidates should pause for 1-2 minutes to think, then walk the interviewer through their response. 'This is music to the ears of the interviewer,' he writes. 'It assures them that the candidate is prepared and has a plan to generate the signals they're looking for.'",
        sourceTitle: "The definitive guide to mastering product sense interviews",
        sourceUrl: "https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering",
      },
    ],
  },
];

const deepWorkTracks: Track[] = [
  {
    slug: "good-enough",
    title: "Good Enough",
    albumSlug: "deep-work",
    trackNumber: 1,
    duration: "2:43",
    audioUrl: "/audio/good-enough.mp3",
    coverImage: "/covers/good-enough.jpg",
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
    concept: "Shreyas Doshi's LNO Framework: categorizing tasks as Leverage, Neutral, or Overhead, and giving yourself permission to do overhead tasks at 'good enough.'",
    keyInsight: "Not every task deserves your best. The list won't love you back. Stop asking 'when will I have time?' and start asking 'which tasks deserve my full effort?'",
    keyQuote: "All your tasks are not created equal. Many ambitious people treat each type the same way, and therein lies the problem.",
    quoteSpeaker: "Shreyas Doshi",
    sources: [
      { title: "4 questions Shreyas Doshi wishes he'd asked himself sooner", type: "podcast", url: "https://www.lennyspodcast.com/shreyas-doshi-4-questions/", guest: "Shreyas Doshi" },
    ],
    storyBehind: "Three years at Google, Shreyas couldn't sleep. The list grew longer every week. He found a blog post that cut the noise: some work returns 10x, the rest is overhead. The standup notes nobody reads? Send, that's all. The notes that shape a CEO's next call? Two hours. Good enough is enough.",
    annotations: [
      {
        lyricText: "Three years at Google, couldn't sleep",
        note: "Shreyas Doshi told Lenny about his early years at Google where he treated every task with the same intensity. He'd come home exhausted telling his wife 'I worked all day and nothing's right' — because he was giving overhead tasks the same energy as leverage tasks.",
        sourceTitle: "4 questions Shreyas Doshi wishes he'd asked himself sooner",
        sourceUrl: "https://www.lennyspodcast.com/shreyas-doshi-4-questions/",
      },
      {
        lyricText: "L-N-O, now I know",
        note: "The LNO Framework: Leverage tasks (10x return on effort — prep for a CEO meeting), Neutral tasks (1x return — regular work), Overhead tasks (necessary but low-return — status updates, expense reports). Doshi's insight: do L tasks at 100%, N at 80%, O at 'good enough.'",
        sourceTitle: "4 questions Shreyas Doshi wishes he'd asked himself sooner",
        sourceUrl: "https://www.lennyspodcast.com/shreyas-doshi-4-questions/",
      },
      {
        lyricText: "Next month I'll finally have the time",
        note: "Doshi told Lenny this is the most dangerous lie ambitious people tell themselves. 'Next month' never comes with fewer fires. The breakthrough is switching from 'when will I have time?' to 'which tasks deserve my full effort?' — a question of allocation, not availability.",
        sourceTitle: "4 questions Shreyas Doshi wishes he'd asked himself sooner",
        sourceUrl: "https://www.lennyspodcast.com/shreyas-doshi-4-questions/",
      },
      {
        lyricText: "Spent an hour on notes nobody read",
        note: "Doshi's go-to example of overhead disguised as important work: spending an hour perfecting meeting notes that nobody reads. The standup update? Just send it. The notes that shape a CEO's next decision? Those deserve two hours. Knowing the difference is the whole framework.",
        sourceTitle: "4 questions Shreyas Doshi wishes he'd asked himself sooner",
        sourceUrl: "https://www.lennyspodcast.com/shreyas-doshi-4-questions/",
      },
    ],
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
    annotations: [
      {
        lyricText: "Rehearsed my intro seven times last night",
        note: "Julie Zhuo told Lenny she would rehearse what to say before every leadership meeting at Facebook, even as VP of Design. She described imposter syndrome not as a phase you outgrow, but as a constant companion that follows you up every rung of the ladder.",
        sourceTitle: "Julie Zhuo on accelerating your career and impostor syndrome",
        sourceUrl: "https://www.lennysnewsletter.com/p/episode-2-julie-zhuo",
      },
      {
        lyricText: "She's a VP now, she runs the floor",
        note: "Zhuo went from IC designer to VP of Design at Facebook over 13 years, leading teams of hundreds. Despite her seniority, she told Lenny she paused at the door before meetings, wondering when colleagues would realize she was 'making it up as she went.'",
        sourceTitle: "Julie Zhuo on accelerating your career and impostor syndrome",
        sourceUrl: "https://www.lennysnewsletter.com/p/episode-2-julie-zhuo",
      },
      {
        lyricText: "Everyone at the table thinks everyone else belongs more",
        note: "This was the universal reaction to Episode 2 of Lenny's Podcast. After Julie Zhuo shared her experience, VPs, founders, and senior ICs flooded the comments with the same response: 'I thought it was just me.' The episode proved imposter syndrome is the norm, not the exception, in tech leadership.",
        sourceTitle: "Julie Zhuo on accelerating your career and impostor syndrome",
        sourceUrl: "https://www.lennysnewsletter.com/p/episode-2-julie-zhuo",
      },
      {
        lyricText: "You just learn to work alongside it",
        note: "Zhuo's key insight from 'The Making of a Manager': imposter syndrome never goes away, and trying to eliminate it is the wrong goal. Instead, she advocates learning to coexist with the doubt — acknowledging it without letting it paralyze your decision-making.",
        sourceTitle: "Julie Zhuo on accelerating your career and impostor syndrome",
        sourceUrl: "https://www.lennysnewsletter.com/p/episode-2-julie-zhuo",
      },
    ],
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
    annotations: [
      {
        lyricText: "I can't remember when the fire went cold",
        note: "Andy Johns described burnout on Lenny's show not as a dramatic collapse, but as a slow hollowing out. After 17 years at Facebook, Twitter, Wealthfront, and Quora, the passion didn't vanish in a moment — it faded so gradually he couldn't pinpoint when it disappeared.",
        sourceTitle: "When enough is enough",
        sourceUrl: "https://www.lennyspodcast.com/when-enough-is-enough-andy-johns-ex-fb-twitter-quora/",
      },
      {
        lyricText: "Burnout isn't working too much",
        note: "Multiple guests on Lenny's podcast have reinforced this reframe: burnout isn't about hours logged, it's about meaning lost. Andy Johns worked grueling hours at Facebook and loved it — the burnout came later, when the work no longer felt like his own.",
        sourceTitle: "When enough is enough",
        sourceUrl: "https://www.lennyspodcast.com/when-enough-is-enough-andy-johns-ex-fb-twitter-quora/",
      },
      {
        lyricText: "I'm chasing someone else's dream again",
        note: "Johns told Lenny his 2 AM realization: the title, the comp, the logo on his chest were all someone else's scoreboard. The hollowness of burnout came from optimizing for a game he didn't actually want to win.",
        sourceTitle: "When enough is enough",
        sourceUrl: "https://www.lennyspodcast.com/when-enough-is-enough-andy-johns-ex-fb-twitter-quora/",
      },
      {
        lyricText: "You can't pour from an empty cup",
        note: "Jonny Miller introduced the 'feather, brick, dump truck' framework on Lenny's podcast: your body sends burnout warnings first as a feather (subtle fatigue), then a brick (chronic exhaustion), then the dump truck (full breakdown). Most people ignore the feather. The song's advice — 'you can set it down' — echoes Miller's core teaching.",
        sourceTitle: "Managing nerves, anxiety, and burnout",
        sourceUrl: "https://www.lennysnewsletter.com/p/managing-nerves-anxiety-and-burnout",
      },
    ],
  },
  {
    slug: "when-enough-is-enough",
    title: "When Enough Is Enough",
    albumSlug: "the-human-side",
    trackNumber: 3,
    duration: "",
    audioUrl: "",
    coverImage: "",
    genre: "Cinematic Piano Ballad",
    mood: "Raw, breaking, cathartic",
    tags: ["burnout", "mental health", "identity"],
    lyrics: "",
    isLocked: true,
    concept: "Andy Johns's story of burnout, childhood wounds driving achievement, and learning that the mountain doesn't care how much the climbing cost.",
    keyInsight: "Your body's alarm - broken sleep, broken heart, broken teeth - is telling you something your ambition won't let you hear.",
    keyQuote: "I was experiencing an addiction to achievement as a way to feel whole. I had slowly become the frog boiling in the pot.",
    quoteSpeaker: "Andy Johns",
    sources: [
      { title: "When enough is enough", type: "podcast", url: "https://www.lennyspodcast.com/when-enough-is-enough-andy-johns-ex-fb-twitter-quora/", guest: "Andy Johns" },
    ],
    storyBehind: "Andy's mother died when he was ten. He learned to win so people would want him. Captain, straight A's, six startups. At 28, shaking on the floor. Ground his teeth to dust, rebuilt them twice. Forty-five days in a quiet room, he found the boy behind the noise.",
  },
  {
    slug: "ask-for-help",
    title: "Ask for Help",
    albumSlug: "the-human-side",
    trackNumber: 4,
    duration: "3:38",
    audioUrl: "/audio/ask-for-help.mp3",
    coverImage: "/covers/ask-for-help.jpg",
    genre: "Hymn-Like Folk",
    mood: "Tender, vulnerable, building to congregational warmth",
    tags: ["vulnerability", "leadership", "burnout"],
    lyrics: `[Verse 1, gentle acoustic]
Sat before the blank screen, five PM
Everyone went home, I stayed again
Chest got tight, crept up to my throat
Couldn't write a single honest note

[Verse 2]
First one in and last one standing tall
Answered every message, took each call
Built my name on never needing rest
Wore the weight and called it being blessed

[Chorus]
I don't have to carry this alone
These arms were never meant for stone
Open hands, three words, begin —
Would you help me? Let me in

[Verse 3]
Worked ten times harder than the ask
Would ever cost — just wore the mask
The fear said weakness looks like death
But silence stole my every breath

[Chorus]
I don't have to carry this alone
These arms were never meant for stone
Open hands, three words, begin —
Would you help me? Let me in

[Bridge, building warmth]
They didn't see me as a burden
They didn't think that I was small
They leaned in closer when I wavered
The bravest thing was just the call

[Chorus, congregational]
We don't have to carry this alone
These arms were never meant for stone
Open hands, three words, begin —
Will you help us? Let us in

[Outro, stripped back]
Three words... that changed everything
Three words... I'm still learning`,
    concept: "The paradox that asking for help feels like weakness but is actually the biggest career unlock — told through the story of a product leader drowning in work she could have shared.",
    keyInsight: "You're slowing your trajectory if you don't build the muscle of asking for help. Most leaders work 10x harder to avoid the vulnerability of a single ask.",
    keyQuote: "Asking for help is a sign of weakness, and weakness is a sign of death.",
    quoteSpeaker: "Natalie Rothfels's coaching client",
    sources: [
      { title: "On asking for help (even when you really don't want to)", type: "newsletter" as const, url: "https://www.lennysnewsletter.com/p/on-asking-for-help-even-when-you", guest: "Natalie Rothfels" },
    ],
    storyBehind: "Natalie Rothfels, an executive coach and former PM at Khan Academy and Quizlet, wrote this piece after her own breakdown from overwork. She'd been 'willing and able to work 10 times harder to avoid the vulnerability of asking.' When her body gave out, she lost joy for a job that was a perfect fit — and spent three years rebuilding around one skill: learning to ask.",
    annotations: [
      {
        lyricText: "The fear said weakness looks like death",
        note: "One of Natalie's coaching clients said this exact line in a session: 'Asking for help is a sign of weakness, and weakness is a sign of death.' Rothfels calls it the most visceral expression of the fear she's encountered — the belief that needing others is existentially dangerous.",
        sourceTitle: "On asking for help (even when you really don't want to)",
        sourceUrl: "https://www.lennysnewsletter.com/p/on-asking-for-help-even-when-you",
      },
      {
        lyricText: "Worked ten times harder than the ask",
        note: "Rothfels writes from personal experience: 'I was willing and able to work 10 times harder to avoid the vulnerability of asking for the help I needed and deserved. When my body and my brain gave up, I lost joy for a job that was otherwise a perfect fit.' The math of avoidance is always worse than the ask.",
        sourceTitle: "On asking for help (even when you really don't want to)",
        sourceUrl: "https://www.lennysnewsletter.com/p/on-asking-for-help-even-when-you",
      },
      {
        lyricText: "Sat before the blank screen, five PM",
        note: "Based on Rothfels's client Meena (pseudonym), a Group PM with 10 years of experience at a 300-person Series C SaaS startup. Meena was a player-coach managing PMs, doing IC growth work, and handling hiring — all while on the brink of burnout because she couldn't bring herself to ask for help with any of it.",
        sourceTitle: "On asking for help (even when you really don't want to)",
        sourceUrl: "https://www.lennysnewsletter.com/p/on-asking-for-help-even-when-you",
      },
      {
        lyricText: "They didn't see me as a burden",
        note: "Meena's breakthrough quote: 'The exhaustion of subconsciously assuming I have to do everything on my own robbed me of agency, joy, and so much energy in my work. Shifting this has been radical for me in terms of my relationship to myself and to my work.' The people she asked didn't judge — they leaned in.",
        sourceTitle: "On asking for help (even when you really don't want to)",
        sourceUrl: "https://www.lennysnewsletter.com/p/on-asking-for-help-even-when-you",
      },
      {
        lyricText: "Three words... that changed everything",
        note: "Lenny's intro frames it plainly: 'Every successful person you know became successful because they were skilled at asking for help.' Rothfels provides actual script templates in the article — literal three-word asks ('Can you help?') that her clients use to break the pattern of silent overwork.",
        sourceTitle: "On asking for help (even when you really don't want to)",
        sourceUrl: "https://www.lennysnewsletter.com/p/on-asking-for-help-even-when-you",
      },
    ],
  },
  {
    slug: "nervous-system",
    title: "Nervous System",
    albumSlug: "the-human-side",
    trackNumber: 5,
    duration: "2:33",
    audioUrl: "/audio/nervous-system.mp3",
    coverImage: "/covers/nervous-system.jpg",
    genre: "Intimate Chamber Folk",
    mood: "Hushed, devastating, meditative",
    tags: ["burnout", "anxiety", "breathwork"],
    lyrics: `[Verse 1, close-mic, whispered]
Woke up tired for the third straight week
Jaw clenched tight, couldn't even speak
Checked my phone before my feet hit floor
Held my breath through every unopened door

[Pre-Chorus]
The feather landed soft, I didn't see
The brick came next, it came for me

[Chorus]
My body knew before my mind
A thousand signals I declined
Breathe out slow, twice as long
The calm was here, I had it wrong

[Verse 2]
Sat through meetings, stomach like a stone
Smiled and nodded, swallowed every groan
Built a wall of coffee and control
Numb from neck down, running on the scroll

[Pre-Chorus]
The feather landed months ago
The dump truck's pulling up below

[Chorus]
My body knew before my brain
It kept the score of every strain
Breathe out slow, find the floor
The still was waiting at the door

[Bridge, falsetto]
Four seconds in and four to hold
Eight seconds out — release the cold
State over story, feel your feet
The ground still holds beneath the heat

[Chorus, building]
My body knew before I did
It spoke in aches I kept well-hid
Breathe out slow, let it leave
The feather's falling — I believe

[Outro, barely audible]
Breathe out... longer than you breathe in
Breathe out... let the calm begin`,
    concept: "Your nervous system sends burnout signals long before your mind catches up — first as a feather, then a brick, then a dump truck. The cure starts with one exhale.",
    keyInsight: "When your exhale is twice as long as your inhale, it activates the parasympathetic nervous system and shifts your body from fight-or-flight to calm. The fix is physiological, not psychological.",
    keyQuote: "Ideally, you want to notice when it's the feather and then make adjustments, and not have to wait until you experience the full-blown pain of the dump truck.",
    quoteSpeaker: "Jonny Miller",
    sources: [
      { title: "Managing nerves, anxiety, and burnout", type: "podcast" as const, url: "https://www.lennyspodcast.com/managing-nerves-anxiety-and-burnout-jonny-miller-nervous-system-mastery/", guest: "Jonny Miller" },
    ],
    storyBehind: "Jonny Miller coaches tech professionals on what he calls 'Nervous System Mastery.' On Lenny's podcast, he explained that burnout follows a predictable escalation — feather, brick, dump truck — and that most people don't notice until the dump truck arrives. He taught Lenny a live 4-4-8 breathing exercise that left Lenny saying 'I feel extremely calm. I should do this every podcast episode.'",
    annotations: [
      {
        lyricText: "The feather landed soft, I didn't see",
        note: "Miller's 'feather, brick, dump truck' framework: burnout starts with subtle signals (a feather — waking up tired, mild exhaustion), escalates to a brick (a fight, losing your cool, chronic frustration), then the dump truck (health crisis, getting fired, full breakdown). Most people only notice at the dump truck stage.",
        sourceTitle: "Managing nerves, anxiety, and burnout",
        sourceUrl: "https://www.lennyspodcast.com/managing-nerves-anxiety-and-burnout-jonny-miller-nervous-system-mastery/",
      },
      {
        lyricText: "Breathe out slow, twice as long",
        note: "Miller taught a specific technique on the show: inhale for 4 seconds, hold for 4, exhale for 8. Scientists have discovered that when the exhale is twice as long as the inhale, it activates the parasympathetic nervous system — a calming effect. The reverse (longer inhale) is activating. Miller calls it 'an up or down lever on the nervous system.'",
        sourceTitle: "Managing nerves, anxiety, and burnout",
        sourceUrl: "https://www.lennyspodcast.com/managing-nerves-anxiety-and-burnout-jonny-miller-nervous-system-mastery/",
      },
      {
        lyricText: "Four seconds in and four to hold",
        note: "Miller led Lenny through this exact 4-4-8 breathing exercise live on the podcast. After one round, Lenny said: 'I feel extremely calm. I should do this every podcast episode before we start.' Miller added that humming on the exhale releases nitric oxide, a vasodilator that stimulates the vagus nerve and deepens the calming effect.",
        sourceTitle: "Managing nerves, anxiety, and burnout",
        sourceUrl: "https://www.lennyspodcast.com/managing-nerves-anxiety-and-burnout-jonny-miller-nervous-system-mastery/",
      },
      {
        lyricText: "State over story, feel your feet",
        note: "Miller's core concept: most people try to solve anxiety at the level of 'story' — rationalizing, analyzing, talking it through. 'State over story' means addressing the physiological state first (breath, gaze, grounding) before engaging with the narrative. Change the body's state and the mind follows.",
        sourceTitle: "Managing nerves, anxiety, and burnout",
        sourceUrl: "https://www.lennyspodcast.com/managing-nerves-anxiety-and-burnout-jonny-miller-nervous-system-mastery/",
      },
      {
        lyricText: "My body knew before my mind",
        note: "Miller explains there's a part of the brain called the insular cortex that constantly monitors breathing patterns. When you breathe shallow and rapid into your upper chest, it registers danger and activates the endocrine system's stress response — before your conscious mind has any idea what's happening. Your body literally knows before you do.",
        sourceTitle: "Managing nerves, anxiety, and burnout",
        sourceUrl: "https://www.lennyspodcast.com/managing-nerves-anxiety-and-burnout-jonny-miller-nervous-system-mastery/",
      },
    ],
  },
];

export const albums: Album[] = [
  {
    slug: "the-craft",
    title: "The Craft",
    subtitle: "Build better products",
    description: "Songs about taste, detail obsession, and the invisible work that separates good products from great ones. From Shreyas Doshi's product sense to Linear's relentless pursuit of quality.",
    coverImage: "",
    accentColor: "#b45309",
    tracks: theCraftTracks,
  },
  {
    slug: "growth-engine",
    title: "Growth Engine",
    subtitle: "How products take off",
    description: "Frameworks, strategies, and stories about growing products from zero to massive. The Racecar framework, North Star metrics, streaks, and the loops that compound.",
    coverImage: "",
    accentColor: "#a16207",
    tracks: growthEngineTracks,
  },
  {
    slug: "by-the-numbers",
    title: "By the Numbers",
    subtitle: "Benchmarks & metrics that matter",
    description: "Songs about retention rates, activation metrics, cohort analysis, and the numbers that separate thriving products from dying ones.",
    coverImage: "",
    accentColor: "#0369a1",
    tracks: byTheNumbersTracks,
  },
  {
    slug: "the-weight",
    title: "The Weight",
    subtitle: "Leadership & management",
    description: "The hardest parts of leadership: firing with grace, making tough calls, and carrying the weight that comes with the title.",
    coverImage: "",
    accentColor: "#7c2d12",
    tracks: theWeightTracks,
  },
  {
    slug: "career-moves",
    title: "Career Moves",
    subtitle: "Getting ahead, getting real",
    description: "Career growth, managing up, and the art of making your work visible. The Magic Loop, weekly updates, and compound trust.",
    coverImage: "",
    accentColor: "#0e7490",
    tracks: careerMovesTracks,
  },
  {
    slug: "electric-dreams",
    title: "Electric Dreams",
    subtitle: "Songs about AI",
    description: "The AI revolution in product building: vibe coding, the new stack, and the people shaping what comes next.",
    coverImage: "",
    accentColor: "#7e22ce",
    tracks: electricDreamsTracks,
  },
  {
    slug: "the-startup-life",
    title: "The Startup Life",
    subtitle: "Building from nothing",
    description: "The emotional journey of starting, scaling, and sometimes failing. Marketplace cold starts, doing things that don't scale, fundraising, and the universal founder struggle.",
    coverImage: "",
    accentColor: "#d97706",
    tracks: startupLifeTracks,
  },
  {
    slug: "the-talent-search",
    title: "The Talent Search",
    subtitle: "Hire the best people",
    description: "Songs about finding, interviewing, and closing the people who will define your company. From first hires to executive recruiting.",
    coverImage: "",
    accentColor: "#059669",
    tracks: theTalentSearchTracks,
  },
  {
    slug: "the-interview",
    title: "The Interview",
    subtitle: "Get the job",
    description: "Songs about job searching, interviewing, negotiating, and landing your dream role. Never search alone.",
    coverImage: "",
    accentColor: "#4338ca",
    tracks: theInterviewTracks,
  },
  {
    slug: "deep-work",
    title: "Deep Work",
    subtitle: "Productivity that matters",
    description: "Songs about focus, time management, and protecting the space where real work happens. Indistractable habits and making time for what matters.",
    coverImage: "",
    accentColor: "#1e3a5f",
    tracks: deepWorkTracks,
  },
  {
    slug: "the-human-side",
    title: "The Human Side",
    subtitle: "Feel less alone in the struggle",
    description: "Songs about imposter syndrome, burnout, asking for help, and the things nobody talks about in standups. You're not the only one.",
    coverImage: "",
    accentColor: "#78350f",
    tracks: humanSideTracks,
  },
];
