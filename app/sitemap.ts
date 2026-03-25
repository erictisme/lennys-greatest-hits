import { MetadataRoute } from "next";
import { getAllTracks, getAllAlbums } from "@/lib/tracks";
import { jtbdCategories } from "@/lib/jtbd";

const BASE_URL = "https://lennys-greatest-hits.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const tracks = getAllTracks().filter((t) => !t.isLocked);
  const albums = getAllAlbums();
  const topics = jtbdCategories;

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/songs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/albums`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/feedback`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/topics`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const trackPages: MetadataRoute.Sitemap = tracks.map((track) => ({
    url: `${BASE_URL}/track/${track.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const albumPages: MetadataRoute.Sitemap = albums.map((album) => ({
    url: `${BASE_URL}/album/${album.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const topicPages: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: `${BASE_URL}/topics/${topic.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...trackPages, ...albumPages, ...topicPages];
}
