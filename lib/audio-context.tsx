"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { Track } from "./types";
import { getAllTracks, getAlbumForTrack } from "./tracks";
import { albums } from "./albums";

interface AudioState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  queue: Track[];
  play: (track: Track) => void;
  pause: () => void;
  resume: () => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  next: () => void;
  prev: () => void;
  playAlbum: (albumSlug: string, startIndex?: number) => void;
  setAlbumQueue: (albumSlug: string) => void;
  accentColor: string;
  getPlayCount: (slug: string) => number;
  upNextTrack: Track | null;
  countdown: number | null;
  cancelCountdown: () => void;
}

const AudioContext = createContext<AudioState | null>(null);

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [queue, setQueue] = useState<Track[]>([]);
  const [upNextTrack, setUpNextTrack] = useState<Track | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Restore last-played track from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lgh-last-track");
      if (saved) {
        const slug = JSON.parse(saved);
        const allTracks = getAllTracks();
        const track = allTracks.find((t) => t.slug === slug);
        if (track) {
          setCurrentTrack(track);
          const albumTracks = allTracks.filter((t) => t.albumSlug === track.albumSlug);
          setQueue(albumTracks);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist current track slug to localStorage
  useEffect(() => {
    if (currentTrack) {
      try {
        localStorage.setItem("lgh-last-track", JSON.stringify(currentTrack.slug));
      } catch {
        // ignore
      }
    }
  }, [currentTrack]);

  // Create audio element once on mount
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    // Restore saved volume
    try {
      const savedVol = localStorage.getItem("lgh-volume");
      if (savedVol) audio.volume = parseFloat(savedVol);
    } catch {
      // ignore
    }
    audioRef.current = audio;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    const onVolumeChange = () => {
      try { localStorage.setItem("lgh-volume", String(audio.volume)); } catch { /* ignore */ }
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("volumechange", onVolumeChange);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("volumechange", onVolumeChange);
      audio.pause();
      audio.src = "";
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Play count tracking: increment after 5 seconds of playback
  const playCountedRef = useRef<string | null>(null);
  useEffect(() => {
    if (!currentTrack) return;
    // Reset when track changes
    playCountedRef.current = null;
  }, [currentTrack?.slug]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!currentTrack || !isPlaying || currentTime < 5) return;
    if (playCountedRef.current === currentTrack.slug) return;
    playCountedRef.current = currentTrack.slug;
    try {
      const key = "lgh-play-counts";
      const counts = JSON.parse(localStorage.getItem(key) || "{}");
      counts[currentTrack.slug] = (counts[currentTrack.slug] || 0) + 1;
      localStorage.setItem(key, JSON.stringify(counts));
    } catch {
      // ignore
    }
  }, [currentTrack, isPlaying, currentTime]);

  const getPlayCount = useCallback((slug: string): number => {
    try {
      const counts = JSON.parse(localStorage.getItem("lgh-play-counts") || "{}");
      return counts[slug] || 0;
    } catch {
      return 0;
    }
  }, []);

  // When queue changes and we're in auto-advance, update the ended handler
  const queueRef = useRef(queue);
  queueRef.current = queue;

  const clearCountdown = useCallback(() => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    setCountdown(null);
    setUpNextTrack(null);
  }, []);

  const cancelCountdown = useCallback(() => {
    clearCountdown();
    audioRef.current?.pause();
    setIsPlaying(false);
  }, [clearCountdown]);

  // Start playing the up-next track (used by countdown completion)
  const playUpNext = useCallback((track: Track, newQueue?: Track[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (newQueue) {
      setQueue(newQueue);
      queueRef.current = newQueue;
    }
    audio.src = track.audioUrl;
    audio.play().catch(() => {});
    setIsPlaying(true);
    setCurrentTrack(track);
    clearCountdown();
  }, [clearCountdown]);

  // Countdown tick effect
  useEffect(() => {
    if (countdown === null || !upNextTrack) return;
    if (countdown <= 0) {
      // Find if this is a cross-album transition (upNextTrack in different album)
      const currentQueue = queueRef.current;
      const inCurrentQueue = currentQueue.some((t) => t.slug === upNextTrack.slug);
      if (!inCurrentQueue) {
        // Cross-album: set new queue
        const nextAlbumTracks = albums.find((a) => a.slug === upNextTrack.albumSlug)?.tracks ?? [];
        playUpNext(upNextTrack, nextAlbumTracks);
      } else {
        playUpNext(upNextTrack);
      }
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => (c !== null ? c - 1 : null)), 1000);
    return () => clearTimeout(timer);
  }, [countdown, upNextTrack, playUpNext]);

  // Re-bind ended handler when queue changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      const currentQueue = queueRef.current;
      // Read current track synchronously via a state getter
      setCurrentTrack((prev) => {
        if (!prev) {
          setIsPlaying(false);
          return null;
        }
        const idx = currentQueue.findIndex((t) => t.slug === prev.slug);
        let nextTrackToPlay: Track | null = null;

        if (idx >= 0 && idx < currentQueue.length - 1) {
          nextTrackToPlay = currentQueue[idx + 1];
        } else {
          // Queue exhausted — try next album
          const albumIdx = albums.findIndex((a) => a.slug === prev.albumSlug);
          if (albumIdx >= 0 && albumIdx < albums.length - 1) {
            const nextAlbum = albums[albumIdx + 1];
            if (nextAlbum.tracks.length > 0) {
              nextTrackToPlay = nextAlbum.tracks[0];
            }
          }
        }

        if (nextTrackToPlay) {
          // Start countdown instead of immediate play
          setUpNextTrack(nextTrackToPlay);
          setCountdown(5);
          setIsPlaying(false);
        } else {
          // Last album — stop playback
          setIsPlaying(false);
        }
        return prev; // Keep current track displayed during countdown
      });
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [queue]);

  const play = useCallback((track: Track) => {
    const audio = audioRef.current;
    if (!audio) return;
    clearCountdown();
    // If same track, just resume
    setCurrentTrack((prev) => {
      if (prev?.slug === track.slug) {
        audio.play().catch(() => {});
        return prev;
      }
      audio.src = track.audioUrl;
      audio.play().catch(() => {});
      setCurrentTime(0);
      setDuration(0);
      return track;
    });
  }, [clearCountdown]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const resume = useCallback(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  const next = useCallback(() => {
    if (!currentTrack) return;
    const idx = queue.findIndex((t) => t.slug === currentTrack.slug);
    if (idx >= 0 && idx < queue.length - 1) {
      play(queue[idx + 1]);
    }
  }, [currentTrack, queue, play]);

  const prev = useCallback(() => {
    if (!currentTrack) return;
    const audio = audioRef.current;
    // If more than 3 seconds in, restart current track
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    const idx = queue.findIndex((t) => t.slug === currentTrack.slug);
    if (idx > 0) {
      play(queue[idx - 1]);
    }
  }, [currentTrack, queue, play]);

  const setAlbumQueue = useCallback((albumSlug: string) => {
    const allTracks = getAllTracks();
    const albumTracks = allTracks.filter((t) => t.albumSlug === albumSlug);
    if (albumTracks.length > 0) {
      setQueue(albumTracks);
    }
  }, []);

  const playAlbum = useCallback(
    (albumSlug: string, startIndex = 0) => {
      const allTracks = getAllTracks();
      const albumTracks = allTracks.filter((t) => t.albumSlug === albumSlug);
      if (albumTracks.length === 0) return;
      setQueue(albumTracks);
      play(albumTracks[startIndex] ?? albumTracks[0]);
    },
    [play]
  );

  const accentColor = currentTrack
    ? getAlbumForTrack(currentTrack.slug)?.accentColor ?? "#fafafa"
    : "#fafafa";

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        queue,
        play,
        pause,
        resume,
        togglePlay,
        seek,
        next,
        prev,
        playAlbum,
        setAlbumQueue,
        accentColor,
        getPlayCount,
        upNextTrack,
        countdown,
        cancelCountdown,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
