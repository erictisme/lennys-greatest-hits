"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Play, Pause, SkipBack, SkipForward, Share2, Loader2 } from "lucide-react";
import { useAudio } from "@/lib/audio-context";
import { getAlbumForTrack, getAllTracks } from "@/lib/tracks";
import { trackEvent } from "@/lib/analytics";

export default function NowPlayingBar() {
  const {
    currentTrack,
    isPlaying,
    isBuffering,
    currentTime,
    duration,
    togglePlay,
    next,
    prev,
    seek,
    accentColor,
    queue,
    upNextTrack,
    countdown,
    cancelCountdown,
    setOnTrackChange,
  } = useAudio();

  const router = useRouter();
  const [hoverTime, setHoverTime] = useState<{ time: number; x: number } | null>(null);
  const [copied, setCopied] = useState(false);

  // Register router-based navigation for auto-advance
  useEffect(() => {
    setOnTrackChange((slug: string) => {
      router.push(`/track/${slug}`);
    });
    return () => setOnTrackChange(null);
  }, [router, setOnTrackChange]);

  if (!currentTrack) return null;

  const album = getAlbumForTrack(currentTrack.slug);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const currentIdx = queue.findIndex((t) => t.slug === currentTrack.slug);
  const allTracks = getAllTracks();
  const globalIdx = allTracks.findIndex((t) => t.slug === currentTrack.slug);
  const hasPrev = currentIdx > 0 || globalIdx > 0;
  const hasNext = (currentIdx >= 0 && currentIdx < queue.length - 1) || (globalIdx >= 0 && globalIdx < allTracks.length - 1);

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

  const handleBarHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    setHoverTime({ time: fraction * duration, x: e.clientX - rect.left });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg" style={{ borderTopColor: accentColor ? accentColor + '40' : undefined }}>
      {/* Up Next countdown banner */}
      {upNextTrack && countdown !== null && (
        <div
          className="flex items-center justify-between px-3 sm:px-4 py-2 text-sm border-b border-border/30"
          style={{ backgroundColor: `${accentColor}15` }}
        >
          <span className="text-muted-foreground">
            Up next: <span className="font-medium text-foreground">{upNextTrack.title}</span>
            {" "}- playing in {countdown}…
          </span>
          <button
            onClick={cancelCountdown}
            className="ml-3 px-3 py-1 text-xs font-medium rounded-full border border-border/50 hover:border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Progress bar — thin line at top of bar */}
      <div
        className="cursor-pointer group relative py-1.5 -mb-1.5"
        onClick={handleSeek}
        onMouseMove={handleBarHover}
        onMouseLeave={() => setHoverTime(null)}
      >
        <div className="relative h-[6px] group-hover:h-[10px] bg-white/10 transition-[height] duration-150">
          <div
            className="absolute inset-y-0 left-0 transition-[width] duration-300 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
        {hoverTime && (
          <div
            className="absolute -top-5 -translate-x-1/2 px-2 py-0.5 bg-foreground text-background text-xs rounded pointer-events-none"
            style={{ left: hoverTime.x }}
          >
            {formatTime(hoverTime.time)}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 max-w-5xl mx-auto">
        {/* Album color swatch + track info */}
        <Link
          href={`/track/${currentTrack.slug}`}
          className="flex items-center gap-3 min-w-0 flex-1 group/link rounded-md -mx-1.5 px-1.5 hover:bg-white/[0.06] transition-colors"
        >
          {currentTrack.coverImage ? (
            <Image
              src={currentTrack.coverImage}
              alt={currentTrack.title}
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded flex-shrink-0 object-cover"
            />
          ) : (
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded flex-shrink-0 flex items-center justify-center text-white/60 text-lg"
              style={{ backgroundColor: accentColor }}
            >
              ♪
            </div>
          )}
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate group-hover/link:underline">{currentTrack.title}</p>
            <p className="text-[11px] sm:text-xs text-muted-foreground/60 truncate">
              {album?.title}
            </p>
          </div>
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => prev()}
            className={`hidden sm:block ${hasPrev ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/30"} transition-colors`}
            disabled={!hasPrev}
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: accentColor, color: "#ffffff" }}
          >
            {isBuffering ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-4 h-4" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            )}
          </button>

          <button
            onClick={() => next()}
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

        {/* Share — primary click copies link */}
        <div className="relative">
          <button
            onClick={async () => {
              const url = `${window.location.origin}/track/${currentTrack.slug}`;
              trackEvent("share_clicked", { platform: "copy", track: currentTrack.slug, track_title: currentTrack.title });
              await navigator.clipboard.writeText(url);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-muted-foreground hover:text-foreground transition-colors p-1.5"
          >
            <Share2 className="w-4 h-4" />
          </button>
          {copied && (
            <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap pointer-events-none">
              Copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
