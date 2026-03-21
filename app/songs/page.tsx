"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Pause, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { getAllTracksSorted, getAlbumForTrack } from "@/lib/tracks";
import { useAudio } from "@/lib/audio-context";

type SortMode = "newest" | "alphabetical" | "album";

export default function SongsPage() {
  const [sortBy, setSortBy] = useState<SortMode>("newest");
  const audio = useAudio();

  const tracks = getAllTracksSorted(sortBy).filter((t) => !t.isLocked);
  const trackCount = tracks.length;

  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-16 max-w-3xl mx-auto w-full">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Home
      </Link>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
          All Songs
        </h1>
        <p className="text-sm text-muted-foreground">
          {trackCount} tracks
        </p>
      </div>

      {/* Sort pills */}
      <div className="flex gap-2 mb-8">
        {([
          { key: "newest", label: "Newest" },
          { key: "alphabetical", label: "A-Z" },
          { key: "album", label: "By Album" },
        ] as const).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSortBy(key)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
              sortBy === key
                ? "bg-foreground text-background border-foreground"
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Track list */}
      <div className="flex flex-col gap-0.5">
        {tracks.map((track) => {
          const album = getAlbumForTrack(track.slug);
          const isCurrentTrack = audio.currentTrack?.slug === track.slug;
          const isPlayingThis = isCurrentTrack && audio.isPlaying;

          return (
            <motion.div
              key={track.slug}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              className="group flex items-center gap-3 py-2.5 px-3 -mx-3 rounded-lg cursor-pointer transition-colors"
              onClick={() => {
                window.location.href = `/track/${track.slug}`;
              }}
            >
              {/* Cover thumbnail with play overlay */}
              <div className="relative w-10 h-10 flex-shrink-0 rounded overflow-hidden">
                {track.coverImage ? (
                  <Image
                    src={track.coverImage}
                    alt={track.title}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-xs opacity-30">~</span>
                  </div>
                )}
                {/* Play button overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isPlayingThis) {
                      audio.pause();
                    } else {
                      audio.play(track);
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={isPlayingThis ? "Pause" : "Play"}
                >
                  {isPlayingThis ? (
                    <Pause className="w-4 h-4 text-white" fill="white" />
                  ) : (
                    <Play className="w-4 h-4 text-white" fill="white" />
                  )}
                </button>
                {/* Currently playing indicator (visible when not hovering) */}
                {isPlayingThis && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:opacity-0 transition-opacity">
                    <div className="flex gap-0.5 items-end h-3">
                      <span className="w-0.5 bg-white animate-pulse rounded-full" style={{ height: "60%", animationDelay: "0ms" }} />
                      <span className="w-0.5 bg-white animate-pulse rounded-full" style={{ height: "100%", animationDelay: "150ms" }} />
                      <span className="w-0.5 bg-white animate-pulse rounded-full" style={{ height: "40%", animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Track info */}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium truncate ${
                    isCurrentTrack ? "text-primary" : ""
                  }`}
                >
                  {track.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {album?.title ?? "Unknown Album"}
                </p>
              </div>

              {/* Release date + Duration */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {track.releaseDate && (
                  <span className="hidden sm:inline text-xs text-muted-foreground/50 tabular-nums">
                    {new Date(track.releaseDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                )}
                <span className="text-xs text-muted-foreground tabular-nums">
                  {track.duration}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
