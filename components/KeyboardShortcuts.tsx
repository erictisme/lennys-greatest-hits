"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/lib/audio-context";

const shortcuts = [
  { keys: "Space", action: "Play / Pause" },
  { keys: "←  →", action: "Seek ±10s" },
  { keys: "Alt + ←", action: "Previous track" },
  { keys: "Alt + →", action: "Next track" },
  { keys: "N / P", action: "Next / Previous" },
];

export default function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);
  const { currentTrack } = useAudio();

  if (!currentTrack) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 z-40 w-8 h-8 rounded-full bg-white/[0.08] border border-border/40 hidden sm:flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:bg-white/[0.15] transition-colors shadow-lg"
        aria-label="Keyboard shortcuts"
      >
        ?
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="bg-popover border border-border rounded-lg shadow-xl p-5 max-w-xs w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-medium mb-4">Keyboard Shortcuts</p>
              <div className="space-y-2.5">
                {shortcuts.map(({ keys, action }) => (
                  <div key={keys} className="flex items-center justify-between">
                    <kbd className="bg-muted px-2 py-0.5 rounded text-xs font-mono text-muted-foreground">
                      {keys}
                    </kbd>
                    <span className="text-xs text-muted-foreground/70">{action}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
