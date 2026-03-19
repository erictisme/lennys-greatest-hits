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
import { getAllTracks } from "./tracks";
import { getAlbumForTrack } from "./tracks";

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
  accentColor: string;
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
    const onEnded = () => {
      setIsPlaying(false);
      // Auto-advance to next track in queue
      setCurrentTrack((prev) => {
        if (!prev) return null;
        const idx = queue.findIndex((t) => t.slug === prev.slug);
        if (idx >= 0 && idx < queue.length - 1) {
          const nextTrack = queue[idx + 1];
          audio.src = nextTrack.audioUrl;
          audio.play().catch(() => {});
          setIsPlaying(true);
          return nextTrack;
        }
        return prev;
      });
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    const onVolumeChange = () => {
      try { localStorage.setItem("lgh-volume", String(audio.volume)); } catch { /* ignore */ }
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("volumechange", onVolumeChange);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("volumechange", onVolumeChange);
      audio.pause();
      audio.src = "";
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // When queue changes and we're in auto-advance, update the ended handler
  const queueRef = useRef(queue);
  queueRef.current = queue;

  // Re-bind ended handler when queue changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      const currentQueue = queueRef.current;
      setCurrentTrack((prev) => {
        if (!prev) {
          setIsPlaying(false);
          return null;
        }
        const idx = currentQueue.findIndex((t) => t.slug === prev.slug);
        if (idx >= 0 && idx < currentQueue.length - 1) {
          const nextTrack = currentQueue[idx + 1];
          audio.src = nextTrack.audioUrl;
          audio.play().catch(() => {});
          setIsPlaying(true);
          return nextTrack;
        }
        setIsPlaying(false);
        return prev;
      });
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [queue]);

  const play = useCallback((track: Track) => {
    const audio = audioRef.current;
    if (!audio) return;
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
  }, []);

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
        accentColor,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
