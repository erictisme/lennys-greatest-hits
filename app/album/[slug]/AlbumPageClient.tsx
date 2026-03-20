"use client";

import Link from "next/link";
import { ArrowLeft, Play, Pause, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { getAlbumBySlug } from "@/lib/tracks";
import { notFound } from "next/navigation";
import { useAudio } from "@/lib/audio-context";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";

const gradientClass: Record<string, string> = {
  founders: "gradient-founders",
  product: "gradient-product",
  builders: "gradient-builders",
  "the-human-side": "gradient-human",
};

export default function AlbumPageClient({ slug }: { slug: string }) {
  const album = getAlbumBySlug(slug);
  const audio = useAudio();

  const [playCounts, setPlayCounts] = useState<Record<string, number>>({});

  // Load play counts on mount and refresh periodically while playing
  useEffect(() => {
    const loadCounts = () => {
      try {
        const counts = JSON.parse(localStorage.getItem("lgh-play-counts") || "{}");
        setPlayCounts(counts);
      } catch {
        // ignore
      }
    };
    loadCounts();
    const interval = setInterval(loadCounts, 3000);
    return () => clearInterval(interval);
  }, []);

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
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          {/* Play All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6"
          >
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
          </motion.div>
        </div>
      </header>

      {/* Track List */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 max-w-3xl mx-auto w-full">
        <div className="flex flex-col">
          {album.tracks.map((track, i) => {
            const isCurrentTrack = audio.currentTrack?.slug === track.slug;
            const isPlaying = isCurrentTrack && audio.isPlaying;

            return (
              <motion.div
                key={track.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
              >
                <div className="group flex items-center gap-4 px-4 py-4 -mx-4 rounded-lg hover:bg-black/[0.04] transition-colors">
                  {/* Track Number / Play Button */}
                  <button
                    onClick={() => {
                      if (isCurrentTrack) {
                        audio.togglePlay();
                      } else {
                        handlePlayTrack(i);
                      }
                    }}
                    className="w-6 flex items-center justify-center"
                  >
                    {isPlaying ? (
                      <Pause
                        className="w-4 h-4"
                        style={{ color: album.accentColor }}
                        fill="currentColor"
                      />
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
                  </button>

                  {/* Track Info */}
                  <Link
                    href={`/track/${track.slug}`}
                    className="flex-1 min-w-0"
                  >
                    <p
                      className="text-[15px] font-medium truncate transition-colors"
                      style={isCurrentTrack ? { color: album.accentColor } : {}}
                    >
                      {track.title}
                    </p>
                    <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
                      {track.genre} &middot; {track.mood}
                    </p>
                  </Link>

                  {/* Play Count + Duration */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground/50">
                    {(playCounts[track.slug] || 0) > 0 && (
                      <span className="tabular-nums">
                        {playCounts[track.slug]} {playCounts[track.slug] === 1 ? "play" : "plays"}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {track.duration}
                    </span>
                  </div>
                </div>

                {/* Divider (not after last) */}
                {i < album.tracks.length - 1 && (
                  <div className="border-b border-border/30 mx-4" />
                )}
              </motion.div>
            );
          })}
        </div>
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
