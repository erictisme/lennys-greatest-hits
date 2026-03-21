"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { getAllAlbums } from "@/lib/tracks";
import { useAudio } from "@/lib/audio-context";
import TrackRow from "@/components/TrackRow";

export default function AlbumsPage() {
  const allAlbums = getAllAlbums();
  const audio = useAudio();

  const handleTrackPlay = useCallback(
    (track: Parameters<typeof audio.play>[0]) => {
      audio.play(track);
    },
    [audio]
  );

  return (
    <div className="flex flex-col min-h-screen max-w-5xl mx-auto w-full px-4 sm:px-6 pb-24">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/20 -mx-4 px-4 sm:-mx-6 sm:px-6 py-3 flex items-center gap-3">
        <Link
          href="/"
          className="shrink-0 p-1 -ml-1 hover:bg-white/[0.06] rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </Link>
        <span className="text-sm font-semibold truncate">
          Lenny&apos;s Greatest Hits
        </span>
      </header>

      {/* Album List */}
      <div className="mt-6 space-y-0">
        {allAlbums.map((album, albumIndex) => {
          const isComingSoon = album.comingSoon === true;
          const unlockedTracks = album.tracks.filter((t) => !t.isLocked);

          return (
            <motion.section
              key={album.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: albumIndex * 0.05 }}
              className={`py-6 ${albumIndex < allAlbums.length - 1 ? "border-b border-border/20" : ""} ${isComingSoon ? "opacity-40" : ""}`}
            >
              {/* Album Header */}
              <Link
                href={isComingSoon ? "#" : `/album/${album.slug}`}
                className={`flex items-center gap-4 mb-4 group ${isComingSoon ? "pointer-events-none" : ""}`}
              >
                <div className="relative shrink-0 w-20 h-20 rounded-lg overflow-hidden shadow-md">
                  {album.coverImage ? (
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/[0.06] flex items-center justify-center">
                      <span className="text-2xl opacity-30">🎵</span>
                    </div>
                  )}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white/60" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold truncate group-hover:underline">
                    {album.title}
                  </h2>
                  <p className="text-xs text-muted-foreground/60 truncate">
                    {album.subtitle}
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide rounded-full bg-white/[0.06] text-muted-foreground/60">
                    {unlockedTracks.length} track{unlockedTracks.length !== 1 ? "s" : ""}
                    {isComingSoon && " · Coming Soon"}
                  </span>
                </div>
              </Link>

              {/* Track List */}
              {!isComingSoon && (
                <div>
                  {unlockedTracks.map((track, trackIndex) => (
                    <TrackRow
                      key={track.slug}
                      track={track}
                      index={trackIndex}
                      showAlbum={false}
                      onPlay={() => handleTrackPlay(track)}
                      isCurrentTrack={audio.currentTrack?.slug === track.slug}
                      isPlaying={
                        audio.currentTrack?.slug === track.slug && audio.isPlaying
                      }
                    />
                  ))}
                </div>
              )}
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
