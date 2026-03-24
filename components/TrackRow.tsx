"use client";

import Image from "next/image";
import { Play, Pause, Mic, FileText } from "lucide-react";
import { motion } from "framer-motion";
import type { Track } from "@/lib/types";
import VoteButtons from "@/components/VoteButtons";

type TrackRowProps = {
  track: Track;
  index: number;
  showAlbum?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onNavigate?: () => void;
  isCurrentTrack?: boolean;
  isPlaying?: boolean;
};

export default function TrackRow({
  track,
  index,
  showAlbum = false,
  onPlay,
  onPause,
  onNavigate,
  isCurrentTrack = false,
  isPlaying = false,
}: TrackRowProps) {
  const handleRowClick = onNavigate || onPlay;
  return (
    <motion.div
      className="group flex items-center gap-4 px-4 py-3 -mx-4 rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
      whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
      transition={{ duration: 0.15 }}
      onClick={handleRowClick}
    >
      {/* Track Number / Play Icon / Equalizer */}
      <div
        className="w-8 flex items-center justify-center shrink-0"
        onClick={(e) => {
          e.stopPropagation();
          if (isPlaying && onPause) {
            onPause();
          } else if (onPlay) {
            onPlay();
          }
        }}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-[3px] h-4 group-hover:hidden">
              <span className="w-[3px] rounded-full animate-eq-1" style={{ height: "60%", backgroundColor: "var(--primary)" }} />
              <span className="w-[3px] rounded-full animate-eq-2" style={{ height: "100%", backgroundColor: "var(--primary)" }} />
              <span className="w-[3px] rounded-full animate-eq-3" style={{ height: "40%", backgroundColor: "var(--primary)" }} />
            </div>
            <span className="hidden group-hover:block">
              <Pause className="w-4 h-4 text-foreground" fill="currentColor" />
            </span>
          </>
        ) : (
          <>
            <span
              className={`text-sm tabular-nums ${isCurrentTrack ? "hidden" : "group-hover:hidden"}`}
              style={isCurrentTrack ? { color: "#b45309" } : { color: "rgba(161,161,170,0.5)" }}
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

      {/* Title + Subtitle + Source */}
      <div className="flex-1 min-w-0">
        <p
          className="text-[15px] font-medium truncate"
          style={isCurrentTrack ? { color: "#b45309" } : {}}
        >
          {track.title}
        </p>
        <p className="text-xs text-muted-foreground/80 truncate mt-0.5">
          {track.sources?.[0] ? (
            <>
              {track.sources[0].type === "podcast" ? (
                <Mic className="w-3 h-3 inline -mt-0.5" />
              ) : (
                <FileText className="w-3 h-3 inline -mt-0.5" />
              )}
              {" "}
              {track.sources[0].guest || track.sources[0].title}
              {track.sources[0].guest && track.sources[0].title && (
                <span className="text-muted-foreground/60">{" · "}{track.sources[0].title}</span>
              )}
            </>
          ) : (
            showAlbum ? track.albumSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : track.genre
          )}
        </p>
      </div>

      {/* Vote & Share buttons — always visible */}
      <div
        className="hidden sm:flex items-center shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <VoteButtons trackSlug={track.slug} accentColor="#b45309" />
      </div>

      {/* Duration */}
      <span className="text-xs text-muted-foreground/50 tabular-nums shrink-0 hidden sm:inline">
        {track.duration}
      </span>
    </motion.div>
  );
}
