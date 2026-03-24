"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play, Pause, Clock, MoreHorizontal, Share2, Check, Lock, Mic, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getAlbumBySlug } from "@/lib/tracks";
import { notFound, useRouter } from "next/navigation";
import { useAudio } from "@/lib/audio-context";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useState, useRef } from "react";
import EmailSignup from "@/components/EmailSignup";
import VoteButtons from "@/components/VoteButtons";

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

export default function AlbumPageClient({ slug }: { slug: string }) {
  const album = getAlbumBySlug(slug);
  const audio = useAudio();
  const router = useRouter();

  const [playCounts, setPlayCounts] = useState<Record<string, number> | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [albumShareOpen, setAlbumShareOpen] = useState(false);
  const [albumCopied, setAlbumCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const albumShareRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [openMenu]);

  // Close album share menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (albumShareRef.current && !albumShareRef.current.contains(e.target as Node)) {
        setAlbumShareOpen(false);
      }
    };
    if (albumShareOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [albumShareOpen]);

  const getAlbumUrl = () =>
    typeof window !== "undefined" ? `${window.location.origin}/album/${slug}` : "";

  const getTrackUrl = (trackSlug: string) =>
    typeof window !== "undefined" ? `${window.location.origin}/track/${trackSlug}` : "";

  const handleAlbumShareX = () => {
    const url = getAlbumUrl();
    const comingSoonText = album?.comingSoon ? " (coming soon)" : "";
    const text = encodeURIComponent(`Check out ${album?.title}${comingSoonText} on Lenny's Greatest Hits | ${album?.subtitle}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, "_blank");
    trackEvent("share_clicked", { platform: "x", album: slug, type: "album" });
    setAlbumShareOpen(false);
  };

  const handleAlbumShareLinkedIn = () => {
    const url = getAlbumUrl();
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    trackEvent("share_clicked", { platform: "linkedin", album: slug, type: "album" });
    setAlbumShareOpen(false);
  };

  const handleAlbumCopyLink = async () => {
    const url = getAlbumUrl();
    await navigator.clipboard.writeText(url);
    setAlbumCopied(true);
    setTimeout(() => setAlbumCopied(false), 2000);
    trackEvent("share_clicked", { platform: "copy_link", album: slug, type: "album" });
    setAlbumShareOpen(false);
  };

  const handleShareX = (trackSlug: string, title: string) => {
    const url = getTrackUrl(trackSlug);
    const text = encodeURIComponent(`🎵 ${title} | Lenny's Greatest Hits`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, "_blank");
    trackEvent("share_clicked", { platform: "x", track: trackSlug, track_title: title });
    setOpenMenu(null);
  };

  const handleShareLinkedIn = (trackSlug: string, title: string) => {
    const url = getTrackUrl(trackSlug);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    trackEvent("share_clicked", { platform: "linkedin", track: trackSlug, track_title: title });
    setOpenMenu(null);
  };

  const handleCopyLink = async (trackSlug: string, title: string) => {
    const url = getTrackUrl(trackSlug);
    await navigator.clipboard.writeText(url);
    setCopiedSlug(trackSlug);
    setTimeout(() => setCopiedSlug(null), 2000);
    trackEvent("share_clicked", { platform: "copy_link", track: trackSlug, track_title: title });
    setOpenMenu(null);
  };

  // Load play counts from Supabase
  useEffect(() => {
    if (album) {
      const slugs = album.tracks.filter((t) => !t.isLocked).map((t) => t.slug).join(",");
      if (slugs) {
        fetch(`/api/play?slugs=${slugs}`)
          .then((r) => r.json())
          .then((d) => { if (d.counts) setPlayCounts(d.counts); })
          .catch(() => {});
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (album) {
      trackEvent("album_opened", { album: album.slug, album_title: album.title });
    }
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!album) {
    notFound();
  }

  const handlePlayAll = () => {
    trackEvent("track_played", { track: album.tracks[0]?.slug, track_title: album.tracks[0]?.title, page: "album" });
    audio.playAlbum(album.slug, 0);
  };

  const handlePlayTrack = (index: number) => {
    const t = album.tracks[index];
    if (t) trackEvent("track_played", { track: t.slug, track_title: t.title, page: "album" });
    audio.playAlbum(album.slug, index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      {/* Album Header */}
      <header
        className={`${gradientClass[album.slug] ?? ""} px-4 sm:px-6 pt-8 pb-10 sm:pb-12`}
      >
        <div className="max-w-3xl mx-auto w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Albums
          </Link>

          <div className="flex items-start gap-6">
            <div className="shrink-0">
              {album.coverImage ? (
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  width={160}
                  height={160}
                  className="rounded-lg shadow-md"
                />
              ) : (
                <div
                  className={`w-[160px] h-[160px] rounded-lg shadow-md ${gradientClass[album.slug] ?? ""} flex items-center justify-center`}
                >
                  <span className="text-5xl opacity-30">🎵</span>
                </div>
              )}
            </div>
            <div className="min-w-0">
              <div
                className="w-12 h-1.5 rounded-full mb-5"
                style={{ backgroundColor: album.accentColor }}
              />
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
                {album.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-3">
                {album.subtitle}
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-xl">
                {album.description}
              </p>
            </div>
          </div>

          {/* Play All Button or Coming Soon Badge + Share */}
          <div className="mt-6 flex items-center gap-3">
            {album.comingSoon ? (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                <Lock className="w-3.5 h-3.5" />
                Coming Soon
              </span>
            ) : (
              <button
                onClick={handlePlayAll}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  backgroundColor: album.accentColor,
                  color: "#ffffff",
                }}
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Play All
              </button>
            )}

            {/* Album Share Button */}
            <div className="relative" ref={albumShareRef}>
              <button
                onClick={() => setAlbumShareOpen(!albumShareOpen)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>

              <AnimatePresence>
                {albumShareOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-1 z-50 bg-popover rounded-lg shadow-lg border border-border/50 py-1 w-[180px]"
                  >
                    <button
                      onClick={handleAlbumShareX}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      Share to X
                    </button>
                    <button
                      onClick={handleAlbumShareLinkedIn}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      Share to LinkedIn
                    </button>
                    <button
                      onClick={handleAlbumCopyLink}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                    >
                      {albumCopied ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                      {albumCopied ? "Copied!" : "Copy Link"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Track count & total duration */}
          {(() => {
            const playable = album.tracks.filter((t) => !t.isLocked);
            const totalSecs = playable.reduce((sum, t) => {
              const parts = t.duration.split(":");
              return sum + parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
            }, 0);
            const mins = Math.floor(totalSecs / 60);
            const secs = totalSecs % 60;
            return (
              <p className="text-xs text-muted-foreground/50 mt-3">
                {playable.length} track{playable.length !== 1 ? "s" : ""} · {mins} min {secs > 0 ? `${secs} sec` : ""}
              </p>
            );
          })()}
        </div>
      </header>

      {/* Track List */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 max-w-3xl mx-auto w-full">
        <div className="flex flex-col">
          {album.tracks.map((track, i) => {
            const isCurrentTrack = audio.currentTrack?.slug === track.slug;
            const isPlaying = isCurrentTrack && audio.isPlaying;
            const locked = !!track.isLocked;

            return (
              <div key={track.slug}>
                <div
                  className="group flex items-center gap-4 px-4 py-4 -mx-4 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
                  onClick={() => {
                    if (locked) return;
                    router.push(`/track/${track.slug}`);
                  }}
                >
                  {/* Track Number / Play Icon / Lock Icon */}
                  {locked ? (
                    <div className="w-11 h-11 flex items-center justify-center shrink-0 -ml-2.5">
                      <Lock className="w-4 h-4 text-muted-foreground/40" />
                    </div>
                  ) : (
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0 -ml-2.5"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isCurrentTrack) {
                          audio.togglePlay();
                        } else {
                          handlePlayTrack(i);
                        }
                      }}
                    >
                      {isPlaying ? (
                        <span className="flex items-end gap-[2px] h-4 w-4">
                          <span className="w-[3px] rounded-full animate-eq-1" style={{ height: "60%", backgroundColor: album.accentColor }} />
                          <span className="w-[3px] rounded-full animate-eq-2" style={{ height: "100%", backgroundColor: album.accentColor }} />
                          <span className="w-[3px] rounded-full animate-eq-3" style={{ height: "40%", backgroundColor: album.accentColor }} />
                        </span>
                      ) : (
                        <>
                          <span className={`text-sm ${isCurrentTrack ? "" : "group-hover:hidden"} ${isCurrentTrack ? "hidden" : ""}`} style={isCurrentTrack ? { color: album.accentColor } : { color: "rgba(161,161,170,0.5)" }}>
                            {track.trackNumber}
                          </span>
                          <span className={`${isCurrentTrack ? "" : "hidden group-hover:block"}`}>
                            <Play
                              className="w-4 h-4"
                              style={{ color: album.accentColor }}
                              fill="currentColor"
                            />
                          </span>
                        </>
                      )}
                    </div>
                  )}

                  {/* Track Thumbnail (hidden for locked) */}
                  {!locked && track.coverImage && (
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

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[15px] font-medium truncate transition-colors"
                      style={isCurrentTrack ? { color: album.accentColor } : {}}
                    >
                      {track.title}
                    </p>
                    {locked ? (
                      <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
                        {track.concept}
                      </p>
                    ) : (
                      <>
                        <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
                          {track.sources && track.sources.length > 0 && (track.sources[0].guest || track.sources[0].title) ? (
                            <>
                              {track.sources[0].type === "podcast" ? (
                                <Mic className="w-3 h-3 inline -mt-0.5" />
                              ) : (
                                <FileText className="w-3 h-3 inline -mt-0.5" />
                              )}
                              {" "}
                              {track.sources[0].guest || track.sources[0].title}
                              {track.sources[0].guest && track.sources[0].title && (
                                <span className="text-muted-foreground/40"> · {track.sources[0].title}</span>
                              )}
                            </>
                          ) : (
                            <>{track.genre} &middot; {track.mood}</>
                          )}
                        </p>
                        {track.tags && track.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {track.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-1.5 py-0 text-[10px] font-medium rounded-full border border-border/30 text-muted-foreground/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Vote Buttons (hidden for locked) */}
                  {!locked && (
                    <div
                      className="hidden sm:flex items-center shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <VoteButtons trackSlug={track.slug} accentColor={album.accentColor} />
                    </div>
                  )}

                  {/* Play Count + Duration (hidden for locked) */}
                  {!locked && (
                    <div className="flex items-center gap-3 text-xs text-muted-foreground/50">
                      {playCounts && (playCounts[track.slug] || 0) > 0 && (
                        <span className="tabular-nums">
                          {playCounts[track.slug]} {playCounts[track.slug] === 1 ? "play" : "plays"}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {track.duration}
                      </span>
                    </div>
                  )}

                  {/* Share Menu (hidden for locked) */}
                  {!locked && (
                    <div className="relative" ref={openMenu === track.slug ? menuRef : undefined}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenu(openMenu === track.slug ? null : track.slug);
                        }}
                        className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1.5 rounded-md hover:bg-white/[0.06]"
                        aria-label="Share options"
                      >
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground/60" />
                      </button>

                      <AnimatePresence>
                        {openMenu === track.slug && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -4 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-0 top-full mt-1 z-50 bg-popover rounded-lg shadow-lg border border-border/50 py-1 w-[180px]"
                          >
                            <button
                              onClick={() => handleShareX(track.slug, track.title)}
                              className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                            >
                              <Share2 className="w-3.5 h-3.5" />
                              Share to X
                            </button>
                            <button
                              onClick={() => handleShareLinkedIn(track.slug, track.title)}
                              className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                            >
                              <Share2 className="w-3.5 h-3.5" />
                              Share to LinkedIn
                            </button>
                            <button
                              onClick={() => handleCopyLink(track.slug, track.title)}
                              className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                            >
                              {copiedSlug === track.slug ? (
                                <Check className="w-3.5 h-3.5 text-green-600" />
                              ) : (
                                <Share2 className="w-3.5 h-3.5" />
                              )}
                              {copiedSlug === track.slug ? "Copied!" : "Copy Link"}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                </div>

                {/* Divider (not after last) */}
                {i < album.tracks.length - 1 && (
                  <div className="border-b border-border/30 mx-4" />
                )}
              </div>
            );
          })}
        </div>

        {album.comingSoon && (
          <div className="mt-8">
            <EmailSignup heading="Get notified when this album drops" />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-muted-foreground/50">
            {album.tracks.length} tracks &middot;{" "}
            <Link href="/" className="underline hover:text-foreground transition-colors">
              Back to all albums
            </Link>
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
