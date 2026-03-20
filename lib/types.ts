export type Album = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  accentColor: string;
  tracks: Track[];
};

export type Track = {
  slug: string;
  title: string;
  albumSlug: string;
  trackNumber: number;
  duration: string;
  audioUrl: string;
  genre: string;
  mood: string;
  lyrics: string;
  concept: string;
  keyInsight: string;
  sources: Source[];
  keyQuote: string;
  quoteSpeaker: string;
  storyBehind?: string;
};

export type LyricLine = {
  time: number;
  text: string;
  isChorus: boolean;
  isQuote: boolean;
  speaker?: string;
};

export type Source = {
  title: string;
  type: "podcast" | "newsletter";
  url: string;
  guest: string;
};
