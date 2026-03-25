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
    alternates: {
      canonical: `/album/${slug}`,
    },
  };
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  const jsonLd = album
    ? {
        "@context": "https://schema.org",
        "@type": "MusicAlbum",
        name: album.title,
        numTracks: album.tracks.length,
        description: album.description,
        url: `https://lennys-greatest-hits.vercel.app/album/${slug}`,
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
      <AlbumPageClient slug={slug} />
    </>
  );
}
