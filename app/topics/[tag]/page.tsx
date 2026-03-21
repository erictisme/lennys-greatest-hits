import Link from "next/link";
import Image from "next/image";
import { getAllTracks, getAlbumForTrack } from "@/lib/tracks";

export function generateStaticParams() {
  const tracks = getAllTracks();
  const tagSet = new Set<string>();
  for (const track of tracks) {
    if (track.tags) {
      for (const tag of track.tags) {
        tagSet.add(tag);
      }
    }
  }
  return Array.from(tagSet).map((tag) => ({ tag }));
}

export function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  // Next.js 15 async params — but generateMetadata can return sync for static
  return {
    title: `Topic - Lenny's Greatest Hits`,
    description: `Songs about this topic from Lenny's Greatest Hits.`,
  };
}

export default async function TopicPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allTracks = getAllTracks().filter((t) => !t.isLocked);
  const matchingTracks = allTracks.filter(
    (t) => t.tags?.some((tt) => tt.toLowerCase() === decodedTag.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/topics"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; All topics
      </Link>
      <h1 className="text-2xl font-bold mb-8">{decodedTag}</h1>
      {matchingTracks.length === 0 ? (
        <p className="text-muted-foreground">No tracks found for this topic.</p>
      ) : (
        <div className="space-y-3">
          {matchingTracks.map((track) => {
            const album = getAlbumForTrack(track.slug);
            return (
              <Link
                key={track.slug}
                href={`/track/${track.slug}`}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                <Image
                  src={track.coverImage}
                  alt={track.title}
                  width={48}
                  height={48}
                  className="rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{track.title}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {album?.title} &middot; {track.genre} &middot; {track.duration}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
