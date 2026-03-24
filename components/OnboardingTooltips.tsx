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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between px-4 py-2.5 mb-4 rounded-lg bg-white/[0.04] border border-border/20"
    >
      <p className="text-xs text-muted-foreground/70">
        Every song is built from a real Lenny podcast or article. Tap any song to hear the insight.
      </p>
      <button
        onClick={dismiss}
        className="ml-4 flex-shrink-0 text-muted-foreground/60 hover:text-foreground transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
