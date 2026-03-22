"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X, Shuffle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllAlbums, getAllTracks, getAlbumForTrack } from "@/lib/tracks";
import { useAudio } from "@/lib/audio-context";
import { trackEvent } from "@/lib/analytics";
import TrackRow from "@/components/TrackRow";
import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  const allAlbums = getAllAlbums();
  const allTracks = useMemo(() => getAllTracks().filter((t) => !t.isLocked), []);
  const router = useRouter();
  const audio = useAudio();

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filtered tracks for search
  const filteredTracks = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();
    return allTracks.filter((t) => {
      const album = getAlbumForTrack(t.slug);
      return (
        t.title.toLowerCase().includes(q) ||
        t.genre.toLowerCase().includes(q) ||
        (t.tags && t.tags.some((tag) => tag.toLowerCase().includes(q))) ||
        (album && album.title.toLowerCase().includes(q))
      );
    });
  }, [debouncedQuery, allTracks]);

  // Popular tracks: sorted by play count, fallback to curated picks
  const curatedSlugs = ["not-venture-scale", "dont-give-em-your-number", "fire-with-grace", "vibe-coding", "burnout"];
  const [popularTracks, setPopularTracks] = useState(() => {
    const curated = curatedSlugs
      .map((s) => allTracks.find((t) => t.slug === s))
      .filter(Boolean) as typeof allTracks;
    return curated.length > 0 ? curated : allTracks.slice(0, 6);
  });

  useEffect(() => {
    try {
      const counts = JSON.parse(localStorage.getItem("lgh-play-counts") || "{}");
      // Find tracks with >20 plays, sorted by count
      const earned = [...allTracks]
        .filter((t) => (counts[t.slug] || 0) > 20)
        .sort((a, b) => (counts[b.slug] || 0) - (counts[a.slug] || 0));

      if (earned.length > 0) {
        // Earned tracks take spots from the bottom of curated list
        const curated = curatedSlugs
          .map((s) => allTracks.find((t) => t.slug === s))
          .filter(Boolean) as typeof allTracks;
        const earnedSlugs = new Set(earned.map((t) => t.slug));
        // Remove any curated tracks that are also earned (avoid duplicates)
        const remaining = curated.filter((t) => !earnedSlugs.has(t.slug));
        // Earned fill from top, curated fill remaining spots
        const merged = [...earned, ...remaining].slice(0, 5);
        setPopularTracks(merged);
      }
      // If no earned tracks, keep curated picks
    } catch {
      // Keep curated picks
    }
  }, [allTracks]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTrackPlay = useCallback(
    (track: typeof allTracks[number]) => {
      trackEvent("track_played", { track: track.slug, track_title: track.title, page: "home" });
      audio.play(track);
    },
    [audio]
  );

  const handleTrackNavigate = useCallback(
    (track: typeof allTracks[number]) => {
      trackEvent("track_played", { track: track.slug, track_title: track.title, page: "home" });
      audio.play(track);
      router.push(`/track/${track.slug}`);
    },
    [audio, router]
  );

  const isSearching = debouncedQuery.trim().length > 0;

  return (
    <div className="flex flex-col min-h-screen max-w-5xl mx-auto w-full px-4 sm:px-6">
      {/* 1. Artist Header */}
      <header className="pt-12 sm:pt-16 pb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Lenny&apos;s Greatest Hits
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          {allTracks.length} songs &middot; {allAlbums.filter((a) => !a.comingSoon).length} albums
        </p>
        <button
          onClick={() => {
            trackEvent("shuffle_play_clicked");
            const track = audio.shuffleAll();
            if (track) router.push(`/track/${track.slug}`);
          }}
          className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#b45309" }}
        >
          <Shuffle className="w-4 h-4" />
          Shuffle Play
        </button>
      </header>

      {/* 2. Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
        <input
          type="text"
          placeholder="Search songs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 text-sm bg-white/[0.06] border border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-border/60 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results or Main Content */}
      <AnimatePresence mode="wait">
        {isSearching ? (
          <motion.div
            key="search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex-1 pb-16"
          >
            <p className="text-xs text-muted-foreground/50 mb-3">
              {filteredTracks.length} result{filteredTracks.length !== 1 ? "s" : ""}
            </p>
            {filteredTracks.map((track, i) => (
              <TrackRow
                key={track.slug}
                track={track}
                index={i}
                showAlbum
                onPlay={() => handleTrackPlay(track)}
                onNavigate={() => handleTrackNavigate(track)}
                isCurrentTrack={audio.currentTrack?.slug === track.slug}
                isPlaying={audio.currentTrack?.slug === track.slug && audio.isPlaying}
              />
            ))}
            {filteredTracks.length === 0 && (
              <p className="text-sm text-muted-foreground/40 mt-4">No songs found.</p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex-1"
          >
            {/* 3. Popular Section */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Popular</h2>
                <Link
                  href="/songs"
                  className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors uppercase tracking-wide font-medium"
                >
                  Show all
                </Link>
              </div>
              {popularTracks.map((track, i) => (
                <TrackRow
                  key={track.slug}
                  track={track}
                  index={i}
                  showAlbum
                  onPlay={() => handleTrackPlay(track)}
                  onNavigate={() => handleTrackNavigate(track)}
                  isCurrentTrack={audio.currentTrack?.slug === track.slug}
                  isPlaying={audio.currentTrack?.slug === track.slug && audio.isPlaying}
                />
              ))}
            </section>

            {/* 4. Discography Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Discography</h2>
                <Link
                  href="/albums"
                  className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors uppercase tracking-wide font-medium"
                >
                  Show all
                </Link>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory" style={{ WebkitOverflowScrolling: "touch" }}>
                {allAlbums.map((album, i) => (
                  <motion.div
                    key={album.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="snap-start"
                  >
                    <Link
                      href={`/album/${album.slug}`}
                      className="shrink-0 group block"
                    >
                      <div className="w-40 sm:w-44">
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-2 shadow-md transition-transform duration-300 group-hover:scale-[1.04]">
                          {album.coverImage ? (
                            <Image
                              src={album.coverImage}
                              alt={album.title}
                              width={176}
                              height={176}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full bg-white/[0.06] flex items-center justify-center">
                              <span className="text-4xl opacity-30">🎵</span>
                            </div>
                          )}
                          {album.comingSoon && (
                            <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-primary/80 text-primary-foreground">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold truncate">{album.title}</p>
                        <p className="text-xs text-muted-foreground/60 truncate">
                          {album.tracks.filter((t) => !t.isLocked).length} tracks
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 5. Footer */}
            <section className="py-10 sm:py-14">
              <EmailSignup />
            </section>

            <footer className="border-t border-border/50 py-8 sm:py-12 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Built from Lenny Rachitsky&apos;s archive of 349 newsletters and 289
                podcasts.
              </p>
              <p className="text-xs text-muted-foreground/50">
                Built by{" "}
                <a
                  href="https://www.linkedin.com/in/erictisme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  Eric Tan
                </a>
              </p>
              <p className="text-xs text-muted-foreground/30 mt-1">
                <Link
                  href="/feedback"
                  className="hover:text-foreground/50 transition-colors"
                >
                  Send Feedback
                </Link>
                {" · "}
                <a
                  href="https://www.lennysdata.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground/50 transition-colors"
                >
                  Built on Lenny&apos;s Data
                </a>
                {" · "}
                <a
                  href="https://www.youtube.com/@CodeRiffAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground/50 transition-colors"
                >
                  Build with us on Code Riff
                </a>
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
