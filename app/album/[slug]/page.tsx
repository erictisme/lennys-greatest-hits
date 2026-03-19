"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { getAlbumBySlug } from "@/lib/tracks";
import { notFound } from "next/navigation";

const gradientClass: Record<string, string> = {
  founders: "gradient-founders",
  product: "gradient-product",
  builders: "gradient-builders",
  "the-human-side": "gradient-human",
};

export default function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const album = getAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Album Header */}
      <header
        className={`${gradientClass[album.slug] ?? ""} px-6 pt-8 pb-12`}
      >
        <div className="max-w-3xl mx-auto w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Albums
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-12 h-1.5 rounded-full mb-5"
              style={{ backgroundColor: album.accentColor }}
            />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
              {album.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-3">
              {album.subtitle}
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-xl">
              {album.description}
            </p>
          </motion.div>

          {/* Play All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6"
          >
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: album.accentColor,
                color: "#0a0a0a",
              }}
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Play All
            </button>
          </motion.div>
        </div>
      </header>

      {/* Track List */}
      <main className="flex-1 px-6 py-8 max-w-3xl mx-auto w-full">
        <div className="flex flex-col">
          {album.tracks.map((track, i) => (
            <motion.div
              key={track.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
            >
              <Link
                href={`/track/${track.slug}`}
                className="group flex items-center gap-4 px-4 py-4 -mx-4 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                {/* Track Number */}
                <span className="w-6 text-center text-sm text-muted-foreground/50 group-hover:hidden">
                  {track.trackNumber}
                </span>
                <span className="w-6 text-center hidden group-hover:block">
                  <Play
                    className="w-4 h-4 mx-auto"
                    style={{ color: album.accentColor }}
                    fill="currentColor"
                  />
                </span>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium truncate group-hover:text-foreground transition-colors">
                    {track.title}
                  </p>
                  <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
                    {track.genre} &middot; {track.mood}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
                  <Clock className="w-3 h-3" />
                  {track.duration}
                </div>
              </Link>

              {/* Divider (not after last) */}
              {i < album.tracks.length - 1 && (
                <div className="border-b border-border/30 mx-4" />
              )}
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-muted-foreground/50">
            {album.tracks.length} tracks &middot;{" "}
            <Link href="/" className="underline hover:text-foreground transition-colors">
              Back to all albums
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
