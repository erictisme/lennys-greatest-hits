"use client";

import { useRef, useEffect, useMemo } from "react";

interface SyncedLine {
  text: string;
  time: number;
  isChorus: boolean;
  isQuote: boolean;
  speaker?: string;
}

interface SyncedLyricsProps {
  lyrics: string;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  accentColor: string;
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
  onSeek,
}: SyncedLyricsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  // Auto-scroll to keep active line centered
  useEffect(() => {
    if (activeIndex < 0 || !isPlaying) return;
    const el = lineRefs.current[activeIndex];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndex, isPlaying]);

  if (lines.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="space-y-1"
    >
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

        return (
          <button
            key={i}
            ref={(el) => { lineRefs.current[i] = el; }}
            onClick={() => {
              if (duration > 0) onSeek(line.time);
            }}
            className="block w-full text-left transition-all duration-300 cursor-pointer rounded px-2 py-0.5 hover:bg-white/5"
            style={{
              opacity,
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
        );
      })}
    </div>
  );
}
