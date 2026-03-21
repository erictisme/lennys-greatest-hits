import Link from "next/link";
import Image from "next/image";
import { jtbdCategories } from "@/lib/jtbd";
import { getAllTracks, getAlbumForTrack } from "@/lib/tracks";
import { notFound } from "next/navigation";

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
    .map((slug) => allTracks.find((t) => t.slug === slug))
    .filter(Boolean) as typeof allTracks;

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
        <div className="space-y-3">
          {matchingTracks.map((track) => {
            const album = getAlbumForTrack(track.slug);
            const hasImage = !!track.coverImage;
            return (
              <Link
                key={track.slug}
                href={`/track/${track.slug}`}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                {hasImage ? (
                  <Image
                    src={track.coverImage}
                    alt={track.title}
                    width={48}
                    height={48}
                    className="rounded object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded bg-muted flex items-center justify-center shrink-0">
                    <span className="text-lg opacity-30">🎵</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{track.title}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {album?.title} &middot; {track.genre}
                    {track.duration ? ` \u00B7 ${track.duration}` : ""}
                  </p>
                  {track.isLocked && (
                    <span className="text-[10px] text-muted-foreground/50">Coming soon</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
