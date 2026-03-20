"use client";

import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  ExternalLink,
} from "lucide-react";
import { getTrackBySlug, getAlbumForTrack, getAllTracks } from "@/lib/tracks";
import { notFound } from "next/navigation";
import { useAudio } from "@/lib/audio-context";
import { trackEvent } from "@/lib/analytics";
import SyncedLyrics from "@/components/SyncedLyrics";
import EmailSignup from "@/components/EmailSignup";
import { Lock } from "lucide-react";

const gradientClass: Record<string, string> = {
  founders: "gradient-founders",
  product: "gradient-product",
  builders: "gradient-builders",
  "the-human-side": "gradient-human",
  "the-operators": "gradient-the-operators",
  "growth-engine": "gradient-growth-engine",
  "the-startup-life": "gradient-the-startup-life",
  "career-moves": "gradient-career-moves",
  frameworks: "gradient-frameworks",
};

export default function TrackPageClient({ slug }: { slug: string }) {
  const track = getTrackBySlug(slug);
  const album = track ? getAlbumForTrack(slug) : undefined;
  const audio = useAudio();

  // Set the queue to the album's tracks when visiting a track page.
  // If audio is already playing, only update the queue without interrupting playback.
  useEffect(() => {
    if (album && !track?.isLocked) {
      if (audio.isPlaying || audio.currentTrack) {
        audio.setAlbumQueue(album.slug);
      } else {
        audio.playAlbum(album.slug, (track?.trackNumber ?? 1) - 1);
      }
    }
    // Only run when slug changes, not on every audio state update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Track lyrics_viewed on page load
  useEffect(() => {
    if (track) {
      trackEvent("lyrics_viewed", { track: slug, track_title: track?.title });
    }
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  // Track listening depth milestones (25/50/75/100%)
  const milestonesHit = useRef<Set<number>>(new Set());
  useEffect(() => {
    milestonesHit.current = new Set();
  }, [slug]);

  if (!track || !album) {
    notFound();
  }

  // Determine if this track is the currently playing one
  const isCurrentTrack = audio.currentTrack?.slug === track.slug;
  const isPlaying = isCurrentTrack && audio.isPlaying;
  const currentTime = isCurrentTrack ? audio.currentTime : 0;
  const duration = isCurrentTrack ? audio.duration : 0;

  // Prev/Next track navigation
  const allTracks = getAllTracks();
  const currentIndex = allTracks.findIndex((t) => t.slug === track.slug);
  const prevTrack = currentIndex > 0 ? allTracks[currentIndex - 1] : null;
  const nextTrack =
    currentIndex < allTracks.length - 1 ? allTracks[currentIndex + 1] : null;

  // Track listening depth milestones
  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;
  for (const milestone of [25, 50, 75, 100]) {
    if (pct >= milestone && !milestonesHit.current.has(milestone)) {
      milestonesHit.current.add(milestone);
      trackEvent(`track_completed_${milestone}`, { track: slug, track_title: track.title });
    }
  }

  const togglePlay = () => {
    if (isCurrentTrack) {
      audio.togglePlay();
    } else {
      trackEvent("track_played", { track: slug, track_title: track.title, page: "track" });
      audio.play(track);
    }
  };

  const [hoverTime, setHoverTime] = useState<{ time: number; x: number } | null>(null);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    audio.seek(fraction * duration);
  };

  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    setHoverTime({ time: fraction * duration, x: e.clientX - rect.left });
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `🎵 ${track.title} | Lenny's Greatest Hits`;

  const handleShareX = () => {
    trackEvent("share_clicked", { platform: "x", track: slug, track_title: track.title });
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareLinkedIn = () => {
    trackEvent("share_clicked", { platform: "linkedin", track: slug, track_title: track.title });
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCopyLink = async () => {
    trackEvent("share_clicked", { platform: "copy", track: slug, track_title: track.title });
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        className={`${gradientClass[album.slug] ?? ""} px-4 sm:px-6 pt-8 pb-8 sm:pb-10`}
      >
        <div className="max-w-2xl mx-auto w-full">
          <Link
            href={`/album/${album.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {album.title}
          </Link>

          <div className="flex items-start gap-5">
            {track.coverImage && (
              <Image
                src={track.coverImage}
                alt={track.title}
                width={176}
                height={176}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-lg shadow-md object-cover flex-shrink-0"
              />
            )}
            <div className="min-w-0">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-2"
                style={{ color: album.accentColor }}
              >
                {album.title} &middot; Track {track.trackNumber}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
                {track.title}
              </h1>
              <p className="text-sm text-muted-foreground/70">
                {track.genre} &middot; {track.mood}
              </p>
              {track.tags && track.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-full border border-border/40 text-muted-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Audio Player or Coming Soon */}
      {track.isLocked ? (
        <div className="px-4 sm:px-6 py-8 border-b border-border/30">
          <div className="max-w-2xl mx-auto w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground mb-6">
              <Lock className="w-3.5 h-3.5" />
              Coming Soon
            </div>
            <EmailSignup heading="Get notified when this song drops" />
          </div>
        </div>
      ) : (
        <div className="px-4 sm:px-6 py-5 sm:py-6 border-b border-border/30">
          <div className="max-w-2xl mx-auto w-full">
            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mb-4">
              {prevTrack ? (
                <Link href={`/track/${prevTrack.slug}`}>
                  <SkipBack className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
              ) : (
                <SkipBack className="w-5 h-5 text-muted-foreground/30" />
              )}

              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: album.accentColor,
                  color: "#ffffff",
                }}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" fill="currentColor" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                )}
              </button>

              {nextTrack ? (
                <Link href={`/track/${nextTrack.slug}`}>
                  <SkipForward className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
              ) : (
                <SkipForward className="w-5 h-5 text-muted-foreground/30" />
              )}
            </div>

            {/* Progress Bar */}
            <div
              className="group relative cursor-pointer py-2 -my-2"
              onClick={seek}
              onMouseMove={handleProgressHover}
              onMouseLeave={() => setHoverTime(null)}
            >
              <div className="relative h-[6px] group-hover:h-[10px] bg-black/10 rounded-full transition-[height] duration-150">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-300 ease-linear"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: album.accentColor,
                  }}
                />
              </div>
              {hoverTime && (
                <div
                  className="absolute -top-6 -translate-x-1/2 px-2 py-0.5 bg-foreground text-background text-xs rounded pointer-events-none"
                  style={{ left: hoverTime.x }}
                >
                  {formatTime(hoverTime.time)}
                </div>
              )}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground/50 mt-1.5">
              <span>{formatTime(currentTime)}</span>
              <span className="group/keys relative cursor-default">
                {duration > 0 ? formatTime(duration) : track.duration}
                <span className="hidden sm:inline ml-2 text-muted-foreground/30">⌨</span>
                <span className="invisible group-hover/keys:visible absolute right-0 bottom-full mb-2 w-48 p-2 bg-foreground text-background text-[10px] leading-relaxed rounded shadow-lg z-50 pointer-events-none">
                  Space — play / pause<br />
                  ← → — seek ±10s<br />
                  N — next track<br />
                  P — previous track
                </span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 max-w-2xl mx-auto w-full">
        {/* Key Quote */}
        {track.keyQuote && (
          <blockquote
            className="border-l-2 pl-4 mb-8 text-sm italic text-muted-foreground/80"
            style={{ borderColor: album.accentColor }}
          >
            &ldquo;{track.keyQuote}&rdquo;
            {track.quoteSpeaker && (
              <span className="block mt-1 not-italic text-xs text-muted-foreground/50">
                - {track.quoteSpeaker}
              </span>
            )}
          </blockquote>
        )}

        {/* Story Behind This Song */}
        {track.storyBehind && (
          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-3">
              The Story Behind This Song
            </h2>
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              {track.storyBehind}
            </p>
          </section>
        )}

        {/* Synced Lyrics (hidden for locked tracks) */}
        {!track.isLocked && (
          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-4">
              Lyrics
            </h2>
            <SyncedLyrics
              lyrics={track.lyrics}
              currentTime={currentTime}
              duration={duration}
              isPlaying={isPlaying}
              accentColor={album.accentColor}
              trackTitle={track.title}
              albumTitle={album.title}
              onSeek={(time) => audio.seek(time)}
            />
          </section>
        )}
        {track.isLocked && (
          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-4">
              Lyrics
            </h2>
            <p className="text-sm text-muted-foreground/50 italic">Lyrics coming soon...</p>
          </section>
        )}

        {/* Source Attribution */}
        {track.sources.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-3">
              Inspired by
            </h2>
            <div className="space-y-2">
              {track.sources.map((source, i) => {
                if (source.url) {
                  return (
                    <a
                      key={i}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("source_clicked", { source_title: source.title, guest: source.guest, track: slug })}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                      <span>{source.title}</span>
                    </a>
                  );
                }

                return (
                  <p key={i} className="text-sm text-muted-foreground/70">
                    {source.title}
                  </p>
                );
              })}
            </div>
          </section>
        )}

        {/* Share (hidden for locked tracks) */}
        {!track.isLocked && (
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: copied ? album.accentColor : "transparent",
                color: copied ? "#ffffff" : undefined,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: copied ? album.accentColor : "hsl(var(--border) / 0.5)",
              }}
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
            <button
              onClick={handleShareX}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground border border-border/50 hover:border-border transition-colors"
            >
              Share to X
            </button>
            <button
              onClick={handleShareLinkedIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground border border-border/50 hover:border-border transition-colors"
            >
              Share to LinkedIn
            </button>
          </div>
        )}
      </main>

      {/* Prev / Next Navigation */}
      <nav className="border-t border-border/30 px-4 sm:px-6 py-5 sm:py-6">
        <div className="max-w-2xl mx-auto flex justify-between">
          {prevTrack ? (
            <Link
              href={`/track/${prevTrack.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="block text-xs text-muted-foreground/50 mb-0.5">
                Previous
              </span>
              {prevTrack.title}
            </Link>
          ) : (
            <div />
          )}
          {nextTrack ? (
            <Link
              href={`/track/${nextTrack.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <span className="block text-xs text-muted-foreground/50 mb-0.5">
                Next
              </span>
              {nextTrack.title}
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
}
