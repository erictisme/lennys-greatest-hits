"use client";

import { useState, useEffect, useCallback } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
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

  // Fetch existing vote counts + user vote on mount
  useEffect(() => {
    const sessionId = getSessionId();
    if (!sessionId) return;

    fetch(`/api/vote?slug=${trackSlug}&session_id=${sessionId}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          setState({
            upCount: data.up_count ?? 0,
            downCount: data.down_count ?? 0,
            userVote: data.user_vote ?? null,
          });
        }
      })
      .catch(() => {
        // API not available yet — silent fail
      });
  }, [trackSlug]);

  const handleVote = useCallback(
    async (voteType: "up" | "down") => {
      const sessionId = getSessionId();
      if (!sessionId) return;

      // Determine new vote: toggle off if same, switch if different
      const newVote: VoteType =
        state.userVote === voteType ? null : voteType;

      // Optimistic update
      setState((prev) => {
        let { upCount, downCount } = prev;

        // Remove previous vote
        if (prev.userVote === "up") upCount--;
        if (prev.userVote === "down") downCount--;

        // Add new vote
        if (newVote === "up") upCount++;
        if (newVote === "down") downCount++;

        return {
          upCount: Math.max(0, upCount),
          downCount: Math.max(0, downCount),
          userVote: newVote,
        };
      });

      // Trigger pop animation
      setAnimating(voteType);
      setTimeout(() => setAnimating(null), 300);

      // Track in PostHog
      if (newVote) {
        trackEvent("vote_cast", { track: trackSlug, vote_type: newVote });
      } else {
        trackEvent("vote_cast", { track: trackSlug, vote_type: "removed" });
      }

      // POST to API
      try {
        await fetch("/api/vote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: trackSlug,
            vote_type: newVote,
            session_id: sessionId,
          }),
        });
      } catch {
        // API not available — optimistic state stays
      }
    },
    [state.userVote, trackSlug]
  );

  return (
    <div className="flex items-center gap-3">
      {/* Thumbs Up */}
      <motion.button
        onClick={() => handleVote("up")}
        animate={
          animating === "up" ? { scale: [1, 1.2, 1] } : { scale: 1 }
        }
        transition={{ duration: 0.25 }}
        className="flex items-center gap-1.5 group"
        aria-label="Vote up"
      >
        <ThumbsUp
          className="w-[18px] h-[18px] transition-colors"
          style={{
            color:
              state.userVote === "up"
                ? accentColor
                : "hsl(var(--muted-foreground))",
            fill:
              state.userVote === "up" ? accentColor : "transparent",
          }}
        />
        <span
          className="text-xs font-medium tabular-nums transition-colors"
          style={{
            color:
              state.userVote === "up"
                ? accentColor
                : "hsl(var(--muted-foreground))",
          }}
        >
          {state.upCount}
        </span>
      </motion.button>

      {/* Thumbs Down */}
      <motion.button
        onClick={() => handleVote("down")}
        animate={
          animating === "down" ? { scale: [1, 1.2, 1] } : { scale: 1 }
        }
        transition={{ duration: 0.25 }}
        className="flex items-center gap-1.5 group"
        aria-label="Vote down"
      >
        <ThumbsDown
          className="w-[18px] h-[18px] transition-colors"
          style={{
            color:
              state.userVote === "down"
                ? accentColor
                : "hsl(var(--muted-foreground))",
            fill:
              state.userVote === "down" ? accentColor : "transparent",
          }}
        />
        <span
          className="text-xs font-medium tabular-nums transition-colors"
          style={{
            color:
              state.userVote === "down"
                ? accentColor
                : "hsl(var(--muted-foreground))",
          }}
        >
          {state.downCount}
        </span>
      </motion.button>
    </div>
  );
}
