import { albums } from "./albums";
import { Album, Track } from "./types";

export function getAllAlbums(): Album[] {
  return albums;
}

export function getAlbumBySlug(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}

export function getTrackBySlug(slug: string): Track | undefined {
  for (const album of albums) {
    const track = album.tracks.find((t) => t.slug === slug);
    if (track) return track;
  }
  return undefined;
}

export function getTracksByAlbum(albumSlug: string): Track[] {
  const album = getAlbumBySlug(albumSlug);
  return album?.tracks ?? [];
}

export function getAllTracks(): Track[] {
  return albums.flatMap((album) => album.tracks);
}

export function getAlbumForTrack(trackSlug: string): Album | undefined {
  return albums.find((album) =>
    album.tracks.some((t) => t.slug === trackSlug)
  );
}
