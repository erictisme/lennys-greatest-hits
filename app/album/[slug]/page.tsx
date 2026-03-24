import type { Metadata } from "next";
import { getAlbumBySlug, getAllTracks } from "@/lib/tracks";
import { albums } from "@/lib/albums";
import AlbumPageClient from "./AlbumPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) {
    return { title: "Album Not Found | Lenny's Greatest Hits" };
  }

  const title = `${album.title} | Lenny's Greatest Hits`;
  const description = `${album.subtitle}. ${album.description}`;

  const imageUrl = album.coverImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "music.album",
      images: [{ url: imageUrl, width: 1200, height: 1200, alt: album.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  return <AlbumPageClient slug={slug} />;
}
