"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function OnboardingTooltips() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("lgh-onboarding-seen")) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    localStorage.setItem("lgh-onboarding-seen", "1");
    setVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white/[0.04] border border-border/30 rounded-lg px-5 py-4 mb-6"
    >
      <button
        onClick={dismiss}
        className="absolute top-3 right-3 text-muted-foreground/60 hover:text-foreground transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      <p className="text-sm font-medium mb-3">Welcome to Lenny&apos;s Greatest Hits 🎵</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <span>🔺</span>
          <span>Tap the play triangle to preview a song</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <span>📄</span>
          <span>Tap the song row to see lyrics &amp; learnings</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <span>👍</span>
          <span>Vote thumbs up/down to give Eric feedback</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <span>🔗</span>
          <span>Share your favorites — it helps a lot!</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground/60 mt-3">Have fun exploring! 🎵</p>
    </motion.div>
  );
}
