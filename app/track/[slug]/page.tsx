import type { Metadata } from "next";
import { getTrackBySlug, getAlbumForTrack, getAllTracks } from "@/lib/tracks";
import TrackPageClient from "./TrackPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTracks().map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  const album = track ? getAlbumForTrack(slug) : undefined;

  if (!track || !album) {
    return { title: "Track Not Found | Lenny's Greatest Hits" };
  }

  const guest = track.sources?.[0]?.guest;
  const title = guest
    ? `${track.title} — ${guest} | Lenny's Greatest Hits`
    : `${track.title} — ${album.title} | Lenny's Greatest Hits`;
  const description = track.keyQuote
    ? `"${track.keyQuote}" — ${track.quoteSpeaker}. ${track.concept}`
    : track.concept;

  const imageUrl = track.coverImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "music.song",
      images: [{ url: imageUrl, width: 1200, height: 1200, alt: track.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function TrackPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);

  const jsonLd = track
    ? {
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        name: track.title,
        byArtist: {
          "@type": "MusicGroup",
          name: "Lenny's Greatest Hits",
        },
        duration: track.duration,
        url: `https://lennys-greatest-hits.vercel.app/track/${slug}`,
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <TrackPageClient slug={slug} />
    </>
  );
}
