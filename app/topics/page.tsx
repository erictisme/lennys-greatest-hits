import Link from "next/link";
import { getAllTracks } from "@/lib/tracks";

export const metadata = {
  title: "Browse by Topic - Lenny's Greatest Hits",
  description: "Explore songs by topic - from hustle and growth to leadership and strategy.",
};

export default function TopicsPage() {
  const tracks = getAllTracks().filter((t) => !t.isLocked);
  const tagSet = new Set<string>();
  for (const track of tracks) {
    if (track.tags) {
      for (const tag of track.tags) {
        tagSet.add(tag);
      }
    }
  }
  const tags = Array.from(tagSet).sort((a, b) => a.localeCompare(b));

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Back to home
      </Link>
      <h1 className="text-2xl font-bold mb-8">Browse by Topic</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/topics/${tag}`}
            className="rounded-full border border-border px-4 py-2 text-sm text-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    </main>
  );
}
