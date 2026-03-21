import Link from "next/link";
import { jtbdCategories } from "@/lib/jtbd";
import { getAllTracks, getAlbumForTrack } from "@/lib/tracks";
import { notFound } from "next/navigation";
import TopicPageClient from "./TopicPageClient";

export function generateStaticParams() {
  return jtbdCategories.map((cat) => ({ tag: cat.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  return {
    title: `Browse - Lenny's Greatest Hits`,
    description: `Songs for what you need right now.`,
  };
}

export default async function TopicPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const category = jtbdCategories.find((c) => c.slug === tag);
  if (!category) notFound();

  const allTracks = getAllTracks();
  const matchingTracks = category.trackSlugs
    .map((slug) => {
      const track = allTracks.find((t) => t.slug === slug);
      if (!track) return null;
      const album = getAlbumForTrack(track.slug);
      return { ...track, albumTitle: album?.title };
    })
    .filter(Boolean) as (typeof allTracks[number] & { albumTitle?: string })[];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/topics"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; All topics
      </Link>
      <h1 className="text-2xl font-bold mb-2">{category.label}</h1>
      <p className="text-muted-foreground text-sm mb-8">{category.description}</p>
      {matchingTracks.length === 0 ? (
        <p className="text-muted-foreground">No tracks found.</p>
      ) : (
        <TopicPageClient
          category={{ label: category.label, description: category.description }}
          tracks={matchingTracks}
        />
      )}
    </main>
  );
}
