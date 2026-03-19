"use client";

import Link from "next/link";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useAudio } from "@/lib/audio-context";
import { getAlbumForTrack } from "@/lib/tracks";

export default function NowPlayingBar() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    next,
    prev,
    seek,
    accentColor,
    queue,
  } = useAudio();

  if (!currentTrack) return null;

  const album = getAlbumForTrack(currentTrack.slug);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const currentIdx = queue.findIndex((t) => t.slug === currentTrack.slug);
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx >= 0 && currentIdx < queue.length - 1;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    seek(fraction * duration);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/30 bg-[#0a0a0a]/95 backdrop-blur-lg">
      {/* Progress bar — thin line at top of bar */}
      <div
        className="h-1 cursor-pointer group"
        onClick={handleSeek}
      >
        <div className="relative h-full bg-white/10">
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: `${progress}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 max-w-5xl mx-auto">
        {/* Album color swatch + track info */}
        <Link
          href={`/track/${currentTrack.slug}`}
          className="flex items-center gap-3 min-w-0 flex-1"
        >
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded flex-shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate">{currentTrack.title}</p>
            <p className="text-[11px] sm:text-xs text-muted-foreground/60 truncate">
              {album?.title}
            </p>
          </div>
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className={`hidden sm:block ${hasPrev ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/30"} transition-colors`}
            disabled={!hasPrev}
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: accentColor, color: "#0a0a0a" }}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            )}
          </button>

          <button
            onClick={next}
            className={`hidden sm:block ${hasNext ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/30"} transition-colors`}
            disabled={!hasNext}
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Time display */}
        <div className="hidden sm:flex items-center text-xs text-muted-foreground/50 w-24 justify-end">
          <span>{formatTime(currentTime)}</span>
          <span className="mx-1">/</span>
          <span>{duration > 0 ? formatTime(duration) : currentTrack.duration}</span>
        </div>
      </div>
    </div>
  );
}
