"use client";

import { useRef, useMemo, useState } from "react";
import { Share2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import ShareLyricModal from "./ShareLyricModal";

interface SyncedLine {
  text: string;
  time: number;
  isChorus: boolean;
  isQuote: boolean;
  isSectionLabel: boolean;
  speaker?: string;
}

interface SyncedLyricsProps {
  lyrics: string;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  accentColor: string;
  trackTitle: string;
  albumTitle: string;
  onSeek: (time: number) => void;
}

function parseLyrics(raw: string, duration: number): SyncedLine[] {
  const lines: SyncedLine[] = [];
  let inChorus = false;
  let inQuote = false;
  let speaker: string | undefined;

  for (const rawLine of raw.split("\n")) {
    const trimmed = rawLine.trim();
    if (trimmed === "") continue;

    // Section tags like [Verse 1], [Chorus], [Bridge], [Outro]
    if (/^\[.+\]$/.test(trimmed)) {
      const tag = trimmed.toLowerCase();
      inChorus = tag.includes("chorus");
      // Detect quote sections if any
      if (tag.includes("quote")) {
        inQuote = true;
        const match = trimmed.match(/\[Quote[:\s-]*(.+)\]/i);
        speaker = match?.[1]?.trim();
      } else {
        inQuote = false;
        speaker = undefined;
      }
      // Add as a visible section label
      const label = trimmed.slice(1, -1); // Remove brackets
      lines.push({
        text: label,
        time: 0,
        isChorus: inChorus,
        isQuote: false,
        isSectionLabel: true,
      });
      continue;
    }

    // Detect inline quote markers: lines wrapped in quotes with attribution
    const quoteMatch = trimmed.match(/^"(.+)"(?:\s*[—–-]\s*(.+))?$/);
    const lineIsQuote = inQuote || !!quoteMatch;
    const lineSpeaker = speaker || quoteMatch?.[2]?.trim();
    const lineText = quoteMatch ? quoteMatch[1] : trimmed;

    lines.push({
      text: lineText,
      time: 0, // filled below
      isChorus: inChorus,
      isQuote: lineIsQuote,
      isSectionLabel: false,
      speaker: lineSpeaker,
    });
  }

  // Evenly space lines across the song duration
  if (lines.length > 0 && duration > 0) {
    const interval = duration / lines.length;
    for (let i = 0; i < lines.length; i++) {
      lines[i].time = i * interval;
    }
  }

  return lines;
}

export default function SyncedLyrics({
  lyrics,
  currentTime,
  duration,
  isPlaying,
  accentColor,
  trackTitle,
  albumTitle,
  onSeek,
}: SyncedLyricsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [shareLine, setShareLine] = useState<string | null>(null);

  const lines = useMemo(() => parseLyrics(lyrics, duration), [lyrics, duration]);

  // Find current line index
  const activeIndex = useMemo(() => {
    if (duration <= 0 || lines.length === 0) return -1;
    let idx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (currentTime >= lines[i].time) {
        idx = i;
      } else {
        break;
      }
    }
    return idx;
  }, [currentTime, duration, lines]);

  if (lines.length === 0) return null;

  return (
    <>
      <div ref={containerRef} className="space-y-1">
        {lines.map((line, i) => {
          const isActive = i === activeIndex;
          const isNear = Math.abs(i - activeIndex) <= 2;
          const hasActiveState = activeIndex >= 0 && duration > 0;

          let opacity = 1;
          if (hasActiveState) {
            if (isActive) opacity = 1;
            else if (isNear) opacity = 0.5;
            else opacity = 0.3;
          } else {
            opacity = 0.8;
          }

          if (line.isSectionLabel) {
            return (
              <div
                key={i}
                ref={(el) => { lineRefs.current[i] = el; }}
                className="px-2 pt-4 pb-1"
                style={{ opacity: hasActiveState ? 0.4 : 0.5 }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/50">
                  {line.text}
                </span>
              </div>
            );
          }

          return (
            <div
              key={i}
              ref={(el) => { lineRefs.current[i] = el; }}
              className="group flex items-center gap-1 rounded hover:bg-black/5 transition-all duration-300"
              style={{ opacity }}
            >
              <button
                onClick={() => {
                  if (duration > 0) onSeek(line.time);
                }}
                className="flex-1 text-left cursor-pointer px-2 py-0.5"
                style={{
                  color: isActive ? accentColor : undefined,
                  fontSize: isActive ? "17px" : "15px",
                  fontWeight: isActive ? 600 : 400,
                  fontStyle: line.isQuote ? "italic" : undefined,
                }}
              >
                {line.text}
                {line.isQuote && line.speaker && (
                  <span className="text-xs text-muted-foreground/50 ml-2 not-italic">
                    — {line.speaker}
                  </span>
                )}
              </button>
              <button
                onClick={() => { trackEvent("lyric_shared", { lyric: line.text, track: trackTitle }); setShareLine(line.text); }}
                className="opacity-0 group-hover:opacity-60 hover:!opacity-100 p-1.5 rounded-full hover:bg-black/10 transition-all shrink-0"
                aria-label={`Share lyric: ${line.text}`}
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

      {shareLine && (
        <ShareLyricModal
          lyric={shareLine}
          trackTitle={trackTitle}
          albumTitle={albumTitle}
          accentColor={accentColor}
          onClose={() => setShareLine(null)}
        />
      )}
    </>
  );
}
