"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAudio } from "@/lib/audio-context";
import { Track } from "@/lib/types";

type TopicCategory = {
  label: string;
  description: string;
};

type TrackWithAlbum = Track & {
  albumTitle?: string;
};

export default function TopicPageClient({
  category,
  tracks,
}: {
  category: TopicCategory;
  tracks: TrackWithAlbum[];
}) {
  const audio = useAudio();
  const router = useRouter();

  const handleTrackClick = (track: TrackWithAlbum) => {
    if (track.isLocked || !track.audioUrl) return;
    const isCurrentTrack = audio.currentTrack?.slug === track.slug;
    if (isCurrentTrack) {
      audio.togglePlay();
    } else {
      audio.play(track);
      audio.setAlbumQueue(track.albumSlug);
    }
  };

  return (
    <div className="space-y-3">
      {tracks.map((track) => {
        const isCurrentTrack = audio.currentTrack?.slug === track.slug;
        const isPlaying = isCurrentTrack && audio.isPlaying;
        return (
          <div
            key={track.slug}
            onClick={() => handleTrackClick(track)}
            className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
              track.isLocked || !track.audioUrl
                ? "opacity-50 cursor-default"
                : "hover:bg-white/5 cursor-pointer"
            } ${isCurrentTrack ? "bg-white/5" : ""}`}
          >
            {track.coverImage ? (
              <Image
                src={track.coverImage}
                alt={track.title}
                width={48}
                height={48}
                className="rounded object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded bg-muted flex items-center justify-center shrink-0">
                <span className="text-lg opacity-30">🎵</span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p
                className={`font-medium text-sm truncate ${
                  isPlaying ? "text-primary" : ""
                }`}
              >
                {track.title}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {track.albumTitle} &middot; {track.genre}
                {track.duration ? ` \u00B7 ${track.duration}` : ""}
              </p>
              {track.isLocked && (
                <span className="text-[10px] text-muted-foreground/50">
                  Coming soon
                </span>
              )}
            </div>
            {!track.isLocked && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/track/${track.slug}`);
                }}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground shrink-0"
                aria-label={`Go to ${track.title}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
