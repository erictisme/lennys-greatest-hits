export interface JTBDCategory {
  slug: string;
  label: string;
  description: string;
  trackSlugs: string[];
}

export const jtbdCategories: JTBDCategory[] = [
  {
    slug: "get-first-users",
    label: "I want to get my first users",
    description: "Scrappy tactics to go from zero to traction",
    trackSlugs: [
      "do-things-that-dont-scale",
      "the-first-thousand",
      "nobodys-coming",
      "talk-to-users",
      "go-viral",
    ],
  },
  {
    slug: "find-product-market-fit",
    label: "I want to find product-market fit",
    description: "How to know when you've built something people want",
    trackSlugs: [
      "product-market-fit",
      "the-maze",
      "whats-the-job",
      "find-your-north-star",
      "test-everything",
    ],
  },
  {
    slug: "grow-faster",
    label: "I want to grow faster",
    description: "Frameworks and engines for scaling your product",
    trackSlugs: [
      "the-racecar",
      "dont-break-the-streak",
      "go-viral",
      "you-aint-that",
      "the-ramp-speed",
    ],
  },
  {
    slug: "build-great-products",
    label: "I want to build great products",
    description: "Craft, taste, and the frameworks behind iconic products",
    trackSlugs: [
      "taste",
      "eleven-stars",
      "doesnt-feel-right-yet",
      "the-disease",
      "ship-it",
      "trace-it-back",
    ],
  },
  {
    slug: "lead-better",
    label: "I want to lead better",
    description: "Managing up, managing out, and managing yourself",
    trackSlugs: [
      "the-magic-loop",
      "state-of-the-me",
      "fire-with-grace",
      "im-in-the-room",
      "build-the-machine",
    ],
  },
  {
    slug: "survive-the-journey",
    label: "I want to survive the journey",
    description: "Burnout, imposter syndrome, failure, and resilience",
    trackSlugs: [
      "burnout",
      "imposter",
      "when-enough-is-enough",
      "its-never-going-well",
      "push-the-car",
    ],
  },
  {
    slug: "raise-money",
    label: "I want to raise money (or not)",
    description: "Fundraising, bootstrapping, and knowing when to walk away",
    trackSlugs: [
      "smile-through-the-silence",
      "not-venture-scale",
      "push-the-car",
    ],
  },
  {
    slug: "level-up-career",
    label: "I want to level up my career",
    description: "Negotiation, visibility, and compounding growth",
    trackSlugs: [
      "the-magic-loop",
      "dont-give-em-your-number",
      "state-of-the-me",
      "good-enough",
      "vibe-coding",
    ],
  },
];
