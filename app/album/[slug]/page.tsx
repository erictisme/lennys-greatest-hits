import type { Metadata } from "next";
import { getAlbumBySlug } from "@/lib/tracks";
import AlbumPageClient from "./AlbumPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) {
    return { title: "Album Not Found — Lenny's Greatest Hits" };
  }

  const title = `${album.title} — Lenny's Greatest Hits`;
  const description = `${album.subtitle}. ${album.description}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "music.album",
      images: [
        {
          url: `/api/og?type=album&slug=${slug}`,
          width: 1200,
          height: 630,
          alt: album.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?type=album&slug=${slug}`],
    },
  };
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  return <AlbumPageClient slug={slug} />;
}
