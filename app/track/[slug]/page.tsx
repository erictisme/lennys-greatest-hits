import type { Metadata } from "next";
import { getTrackBySlug, getAlbumForTrack } from "@/lib/tracks";
import TrackPageClient from "./TrackPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  const album = track ? getAlbumForTrack(slug) : undefined;

  if (!track || !album) {
    return { title: "Track Not Found — Lenny's Greatest Hits" };
  }

  const title = `${track.title} — ${album.title} | Lenny's Greatest Hits`;
  const description = track.keyQuote
    ? `"${track.keyQuote}" — ${track.quoteSpeaker}. ${track.concept}`
    : track.concept;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "music.song",
      images: [
        {
          url: `/api/og?type=track&slug=${slug}`,
          width: 1200,
          height: 630,
          alt: track.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?type=track&slug=${slug}`],
    },
  };
}

export default async function TrackPage({ params }: Props) {
  const { slug } = await params;
  return <TrackPageClient slug={slug} />;
}
