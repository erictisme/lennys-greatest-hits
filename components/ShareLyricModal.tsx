"use client";

import { useRef, useState, useCallback } from "react";
import { X, Download, Share2 } from "lucide-react";
import html2canvas from "html2canvas-pro";
import { trackEvent } from "@/lib/analytics";

interface ShareLyricModalProps {
  lyric: string;
  trackTitle: string;
  albumTitle: string;
  accentColor: string;
  onClose: () => void;
}

export default function ShareLyricModal({
  lyric,
  trackTitle,
  albumTitle,
  accentColor,
  onClose,
}: ShareLyricModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const generateImage = useCallback(async (): Promise<Blob | null> => {
    if (!cardRef.current) return null;
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
    });
    return new Promise((resolve) =>
      canvas.toBlob((blob) => resolve(blob), "image/png")
    );
  }, []);

  const handleDownload = async () => {
    trackEvent("share_clicked", { platform: "download", track: trackTitle, lyric });
    setDownloading(true);
    try {
      const blob = await generateImage();
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${trackTitle.toLowerCase().replace(/\s+/g, "-")}-lyric.png`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };

  const shareText = `"${lyric}"\n\n${trackTitle} - ${albumTitle}\nLenny's Greatest Hits`;

  const shareOnX = () => {
    trackEvent("share_clicked", { platform: "x", track: trackTitle, lyric });
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);
    window.open(
      `https://x.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    trackEvent("share_clicked", { platform: "linkedin", track: trackTitle, lyric });
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-200">
        {/* Card Preview */}
        <div
          ref={cardRef}
          className="relative w-full aspect-square rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8"
          style={{
            background: `linear-gradient(145deg, ${accentColor}33 0%, #0a0a0a 60%, ${accentColor}1a 100%)`,
          }}
        >
          {/* Decorative blurred circle */}
          <div
            className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: accentColor }}
          />
          <div
            className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-15 blur-3xl"
            style={{ backgroundColor: accentColor }}
          />

          {/* Lyric text */}
          <p className="relative z-10 text-center text-xl sm:text-2xl font-bold leading-relaxed text-white max-w-[85%]">
            &ldquo;{lyric}&rdquo;
          </p>

          {/* Bottom attribution */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 z-10">
            <p className="text-xs font-medium text-white/70">
              {trackTitle} &middot; {albumTitle}
            </p>
            <p className="text-[10px] text-white/40 tracking-wider uppercase">
              lennys-greatest-hits.vercel.app
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-black transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            <Download className="w-4 h-4" />
            {downloading ? "Saving..." : "Download"}
          </button>

          <button
            onClick={shareOnX}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/10 hover:bg-white/15 text-white transition-colors"
          >
            Share on X
          </button>

          <button
            onClick={shareOnLinkedIn}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/10 hover:bg-white/15 text-white transition-colors"
          >
            LinkedIn
          </button>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
