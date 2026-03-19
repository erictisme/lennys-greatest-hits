"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Share2,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { getTrackBySlug, getAlbumForTrack, getAllTracks } from "@/lib/tracks";
import { notFound } from "next/navigation";
import { useAudio } from "@/lib/audio-context";

const gradientClass: Record<string, string> = {
  founders: "gradient-founders",
  product: "gradient-product",
  builders: "gradient-builders",
  "the-human-side": "gradient-human",
};

function parseDisplayLyrics(raw: string): string[] {
  return raw
    .split("\n")
    .filter(
      (line) =>
        line.trim() !== "" &&
        !line.trim().startsWith("[")
    );
}

export default function TrackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const track = getTrackBySlug(slug);
  const album = track ? getAlbumForTrack(slug) : undefined;
  const audio = useAudio();

  // Set the queue to the album's tracks when visiting a track page
  useEffect(() => {
    if (album) {
      audio.playAlbum(album.slug, (track?.trackNumber ?? 1) - 1);
    }
    // Only run when slug changes, not on every audio state update
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const togglePlay = () => {
    if (isCurrentTrack) {
      audio.togglePlay();
    } else {
      audio.play(track);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    audio.seek(fraction * duration);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleShare = async () => {
    const url = window.location.href;
    const text = `${track.title} — Lenny's Greatest Hits`;
    if (navigator.share) {
      await navigator.share({ title: text, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const lyricLines = parseDisplayLyrics(track.lyrics);
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </div>
      </header>

      {/* Audio Player */}
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
                color: "#0a0a0a",
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
            className="group relative h-1.5 bg-white/10 rounded-full cursor-pointer"
            onClick={seek}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-100"
              style={{
                width: `${progress}%`,
                backgroundColor: album.accentColor,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground/50 mt-1.5">
            <span>{formatTime(currentTime)}</span>
            <span>{duration > 0 ? formatTime(duration) : track.duration}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 max-w-2xl mx-auto w-full">
        {/* Key Quote */}
        {track.keyQuote && (
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-l-2 pl-4 mb-8 text-sm italic text-muted-foreground/80"
            style={{ borderColor: album.accentColor }}
          >
            &ldquo;{track.keyQuote}&rdquo;
            {track.quoteSpeaker && (
              <span className="block mt-1 not-italic text-xs text-muted-foreground/50">
                — {track.quoteSpeaker}
              </span>
            )}
          </motion.blockquote>
        )}

        {/* Lyrics */}
        <section className="mb-10">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-4">
            Lyrics
          </h2>
          <div className="space-y-1">
            {lyricLines.map((line, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-muted-foreground/80"
              >
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Source Attribution */}
        {track.sources.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-3">
              Inspired by
            </h2>
            <div className="space-y-2">
              {track.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                  <span>
                    {source.title}
                    {source.guest && (
                      <span className="text-muted-foreground/50">
                        {" "}
                        — {source.guest}
                      </span>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Share */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground border border-border/50 hover:border-border transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
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
