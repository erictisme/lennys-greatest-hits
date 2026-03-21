"use client";

import { useState, useEffect, useCallback } from "react";
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { getSessionId } from "@/lib/session";
import { trackEvent } from "@/lib/analytics";

interface VoteButtonsProps {
  trackSlug: string;
  accentColor?: string;
}

type VoteType = "up" | "down" | null;

interface VoteState {
  upCount: number;
  downCount: number;
  userVote: VoteType;
}

export default function VoteButtons({
  trackSlug,
  accentColor = "#22c55e",
}: VoteButtonsProps) {
  const [state, setState] = useState<VoteState>({
    upCount: 0,
    downCount: 0,
    userVote: null,
  });
  const [animating, setAnimating] = useState<VoteType>(null);
  const [copied, setCopied] = useState(false);

  // Fetch existing vote counts + user vote on mount
  useEffect(() => {
    const sessionId = getSessionId();
    if (!sessionId) return;

    fetch(`/api/vote?slug=${trackSlug}&session_id=${sessionId}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          setState({
            upCount: data.upvotes ?? 0,
            downCount: data.downvotes ?? 0,
            userVote: data.userVote ?? null,
          });
        }
      })
      .catch(() => {});
  }, [trackSlug]);

  const handleVote = useCallback(
    async (voteType: "up" | "down") => {
      const sessionId = getSessionId();
      if (!sessionId) return;

      const newVote: VoteType =
        state.userVote === voteType ? null : voteType;

      // Optimistic update
      setState((prev) => {
        let { upCount, downCount } = prev;
        if (prev.userVote === "up") upCount--;
        if (prev.userVote === "down") downCount--;
        if (newVote === "up") upCount++;
        if (newVote === "down") downCount++;
        return {
          upCount: Math.max(0, upCount),
          downCount: Math.max(0, downCount),
          userVote: newVote,
        };
      });

      setAnimating(voteType);
      setTimeout(() => setAnimating(null), 300);

      trackEvent("vote_cast", {
        track: trackSlug,
        vote_type: newVote ?? "removed",
      });

      try {
        await fetch("/api/vote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: trackSlug,
            vote_type: newVote ?? voteType,
            session_id: sessionId,
          }),
        });
      } catch {}
    },
    [state.userVote, trackSlug]
  );

  const handleShare = async () => {
    const url = `${window.location.origin}/track/${trackSlug}`;
    trackEvent("share_clicked", { platform: "copy", track: trackSlug });
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-1">
      {/* Thumbs Up */}
      <motion.button
        onClick={() => handleVote("up")}
        animate={animating === "up" ? { scale: [1, 1.25, 1] } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Vote up"
      >
        <ThumbsUp
          className="w-5 h-5 transition-colors"
          style={{
            color: state.userVote === "up" ? accentColor : "hsl(var(--muted-foreground) / 0.6)",
            fill: state.userVote === "up" ? accentColor : "transparent",
          }}
        />
        {state.upCount > 0 && (
          <span
            className="text-xs font-medium tabular-nums"
            style={{
              color: state.userVote === "up" ? accentColor : "hsl(var(--muted-foreground) / 0.6)",
            }}
          >
            {state.upCount}
          </span>
        )}
      </motion.button>

      {/* Thumbs Down */}
      <motion.button
        onClick={() => handleVote("down")}
        animate={animating === "down" ? { scale: [1, 1.25, 1] } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Vote down"
      >
        <ThumbsDown
          className="w-5 h-5 transition-colors"
          style={{
            color: state.userVote === "down" ? accentColor : "hsl(var(--muted-foreground) / 0.6)",
            fill: state.userVote === "down" ? accentColor : "transparent",
          }}
        />
        {state.downCount > 0 && (
          <span
            className="text-xs font-medium tabular-nums"
            style={{
              color: state.userVote === "down" ? accentColor : "hsl(var(--muted-foreground) / 0.6)",
            }}
          >
            {state.downCount}
          </span>
        )}
      </motion.button>

      {/* Share (copy link) */}
      <div className="relative">
        <button
          onClick={handleShare}
          className="flex items-center px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
          style={{ color: copied ? accentColor : "hsl(var(--muted-foreground) / 0.6)" }}
          aria-label="Copy link"
        >
          <Share2 className="w-5 h-5" />
        </button>
        {copied && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap pointer-events-none">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}
