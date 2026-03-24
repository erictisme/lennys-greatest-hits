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
  Mic,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { getTrackBySlug, getAlbumForTrack } from "@/lib/tracks";
import { notFound, useRouter } from "next/navigation";
import { useAudio } from "@/lib/audio-context";
import { trackEvent } from "@/lib/analytics";
import LyricsDisplay from "@/components/SyncedLyrics";
import EmailSignup from "@/components/EmailSignup";
import VoteButtons from "@/components/VoteButtons";
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
  const router = useRouter();

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

  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoverTime, setHoverTime] = useState<{ time: number; x: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [playCount, setPlayCount] = useState<number | null>(null);
  const [audioAvailable, setAudioAvailable] = useState<boolean | null>(null);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyStatus, setNotifyStatus] = useState<"idle" | "loading" | "done">("idle");

  useEffect(() => {
    fetch(`/api/play?slugs=${slug}`)
      .then((r) => r.json())
      .then((d) => { if (d.counts) setPlayCount(d.counts[slug] || 0); })
      .catch(() => {});
  }, [slug]);

  // Check if audio is actually available
  useEffect(() => {
    if (!track?.audioUrl) return;
    fetch(track.audioUrl, { method: "HEAD" })
      .then((r) => setAudioAvailable(r.ok))
      .catch(() => setAudioAvailable(false));
  }, [track?.audioUrl]);

  if (!track || !album) {
    notFound();
  }

  // Determine if this track is the currently playing one
  const isCurrentTrack = audio.currentTrack?.slug === track.slug;
  const isPlaying = isCurrentTrack && audio.isPlaying;
  const currentTime = isCurrentTrack ? audio.currentTime : 0;
  const duration = isCurrentTrack ? audio.duration : 0;

  // Prev/Next track navigation — use album tracks so navigation stays within the album
  const albumTracks = album.tracks;
  const currentIndex = albumTracks.findIndex((t) => t.slug === track.slug);
  const prevTrack = currentIndex > 0 ? albumTracks[currentIndex - 1] : null;
  const nextTrack =
    currentIndex < albumTracks.length - 1 ? albumTracks[currentIndex + 1] : null;

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

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${track.title} | Lenny's Greatest Hits`;

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header
        className={`${gradientClass[album.slug] ?? ""} px-4 sm:px-6 pt-8 pb-8 sm:pb-10`}
      >
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <span className="text-muted-foreground/30">·</span>
            <Link
              href={`/album/${album.slug}`}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {album.title}
            </Link>
          </div>

          <div className="flex items-start gap-5">
            {track.coverImage && (
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                {!imageLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-muted" />
                )}
                <Image
                  src={track.coverImage}
                  alt={track.title}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (album.coverImage && img.src !== album.coverImage) img.src = album.coverImage;
                  }}
                />
              </div>
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
                {playCount !== null && playCount > 0 && (
                  <span className="text-muted-foreground/40"> &middot; {playCount} {playCount === 1 ? "play" : "plays"}</span>
                )}
              </p>
              {track.sources?.[0] && (
                <p className="text-xs text-muted-foreground/50 mt-1">
                  {track.sources[0].type === "podcast" ? (
                    <Mic className="w-3 h-3 inline -mt-0.5" />
                  ) : (
                    <FileText className="w-3 h-3 inline -mt-0.5" />
                  )}
                  {" "}
                  {track.sources[0].guest || track.sources[0].title}
                  {track.sources[0].guest && track.sources[0].title && (
                    <span className="text-muted-foreground/30"> · {track.sources[0].title}</span>
                  )}
                </p>
              )}
              {track.tags && track.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {track.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/topics/${tag}`}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-full border border-border/40 text-muted-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              {!track.isLocked && (
                <div className="mt-3">
                  <VoteButtons trackSlug={track.slug} accentColor={album.accentColor} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Audio Player or Coming Soon */}
      {(track.isLocked || audioAvailable === false) ? (
        <div className="px-4 sm:px-6 py-10 border-b border-border/30">
          <div className="max-w-2xl mx-auto w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground mb-3">
              <Lock className="w-3.5 h-3.5" />
              {"Audio Coming Soon"}
            </div>
            {!track.isLocked && (
              <p className="text-sm text-muted-foreground/60 mb-6 max-w-sm mx-auto">
                This track isn&apos;t available yet. Drop your email and we&apos;ll let you know when it&apos;s ready.
              </p>
            )}
            {notifyStatus === "done" ? (
              <p className="text-sm text-green-400 font-medium">✓ You&apos;re on the list!</p>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!notifyEmail) return;
                  setNotifyStatus("loading");
                  await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: notifyEmail }),
                  });
                  setNotifyStatus("done");
                }}
                className="flex gap-2 max-w-sm mx-auto"
              >
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/[0.06] border border-border/30 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-border/60"
                />
                <button
                  type="submit"
                  disabled={notifyStatus === "loading"}
                  className="px-4 py-2 text-sm font-semibold rounded-lg text-white disabled:opacity-50"
                  style={{ backgroundColor: album.accentColor }}
                >
                  {notifyStatus === "loading" ? "..." : "Notify me"}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <div className="px-4 sm:px-6 py-5 sm:py-6 border-b border-border/30">
          <div className="max-w-2xl mx-auto w-full">
            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <button
                onClick={() => { if (prevTrack) { audio.prev(); router.push(`/track/${prevTrack.slug}`); } }}
                disabled={!prevTrack}
                className="disabled:opacity-30"
              >
                <SkipBack className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </button>

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

              <button
                onClick={() => { if (nextTrack) { audio.next(); router.push(`/track/${nextTrack.slug}`); } }}
                disabled={!nextTrack}
                className="disabled:opacity-30"
              >
                <SkipForward className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </button>
            </div>

            {/* Progress Bar */}
            <div
              className="group relative cursor-pointer py-2 -my-2"
              onClick={seek}
              onMouseMove={handleProgressHover}
              onMouseLeave={() => setHoverTime(null)}
            >
              <div className="relative h-[6px] group-hover:h-[10px] bg-white/10 rounded-full transition-[height] duration-150">
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
                  Space - play / pause<br />
                  ← → - seek ±10s<br />
                  N - next track<br />
                  P - previous track
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
            <LyricsDisplay
              lyrics={track.lyrics}
              accentColor={album.accentColor}
              trackTitle={track.title}
              albumTitle={album.title}
              annotations={track.annotations}
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

        {/* Based on */}
        {track.sources.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-3">
              Based on
            </h2>
            <div className="space-y-3">
              {track.sources.map((source, i) => (
                <div
                  key={i}
                  className="border-l-[3px] rounded-r-lg bg-white/[0.04] px-4 py-3"
                  style={{ borderColor: album.accentColor }}
                >
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("source_clicked", { source_title: source.title, guest: source.guest, track: slug })}
                      className="font-lenny text-sm text-foreground hover:underline inline-flex items-center gap-1.5"
                    >
                      {source.title}
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  ) : (
                    <p className="font-lenny text-sm text-foreground">{source.title}</p>
                  )}
                  <div className="flex items-center gap-2 mt-1.5">
                    {source.guest && (
                      <span className="text-xs text-muted-foreground/70">{source.guest}</span>
                    )}
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground"
                    >
                      {source.type === "podcast" ? (
                        <Mic className="w-2.5 h-2.5" />
                      ) : (
                        <FileText className="w-2.5 h-2.5" />
                      )}
                      {source.type === "podcast" ? "Podcast" : "Newsletter"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Vote + Share (hidden for locked tracks) */}
        {!track.isLocked && (
          <div className="flex flex-wrap items-center gap-3">
            <VoteButtons trackSlug={track.slug} accentColor={album.accentColor} />
            {track.sunoId && (
              <a
                href={`https://suno.com/song/${track.sunoId}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("suno_link_clicked", { track: slug, track_title: track.title })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Listen on Suno
              </a>
            )}
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
    </motion.div>
  );
}
