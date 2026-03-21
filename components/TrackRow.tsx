"use client";

import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import type { Track } from "@/lib/types";

type TrackRowProps = {
  track: Track;
  index: number;
  showAlbum?: boolean;
  onPlay?: () => void;
  isCurrentTrack?: boolean;
  isPlaying?: boolean;
};

export default function TrackRow({
  track,
  index,
  showAlbum = false,
  onPlay,
  isCurrentTrack = false,
  isPlaying = false,
}: TrackRowProps) {
  return (
    <motion.div
      className="group flex items-center gap-4 px-4 py-3 -mx-4 rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
      whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
      transition={{ duration: 0.15 }}
      onClick={onPlay}
    >
      {/* Track Number / Play Icon / Equalizer */}
      <div className="w-8 flex items-center justify-center shrink-0">
        {isPlaying ? (
          <div className="flex items-center gap-[3px] h-4">
            <span className="w-[3px] bg-green-500 rounded-full animate-eq-1" style={{ height: "60%" }} />
            <span className="w-[3px] bg-green-500 rounded-full animate-eq-2" style={{ height: "100%" }} />
            <span className="w-[3px] bg-green-500 rounded-full animate-eq-3" style={{ height: "40%" }} />
          </div>
        ) : (
          <>
            <span
              className={`text-sm tabular-nums ${isCurrentTrack ? "hidden" : "group-hover:hidden"}`}
              style={isCurrentTrack ? { color: "#22c55e" } : { color: "rgba(161,161,170,0.5)" }}
            >
              {index + 1}
            </span>
            <span className={`${isCurrentTrack ? "" : "hidden group-hover:block"}`}>
              <Play className="w-4 h-4 text-foreground" fill="currentColor" />
            </span>
          </>
        )}
      </div>

      {/* Cover Thumbnail */}
      {track.coverImage && (
        <div className="shrink-0">
          <Image
            src={track.coverImage}
            alt={track.title}
            width={40}
            height={40}
            className="rounded"
          />
        </div>
      )}

      {/* Title + Subtitle */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-[15px] font-medium truncate ${isCurrentTrack ? "text-green-500" : "text-foreground"}`}
        >
          {track.title}
        </p>
        <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
          {showAlbum ? track.albumSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : track.genre}
        </p>
      </div>

      {/* Duration */}
      <span className="text-xs text-muted-foreground/50 tabular-nums shrink-0">
        {track.duration}
      </span>
    </motion.div>
  );
}
