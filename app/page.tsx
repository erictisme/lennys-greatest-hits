"use client";

import Link from "next/link";
import { Music, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { getAllAlbums } from "@/lib/tracks";

const gradientClass: Record<string, string> = {
  founders: "gradient-founders",
  product: "gradient-product",
  builders: "gradient-builders",
  "the-human-side": "gradient-human",
};

export default function Home() {
  const albums = getAllAlbums();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <header className="flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Headphones className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Tech Culture Anthems
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
            Lenny&apos;s
            <br />
            Greatest Hits
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            The insights you quote on X — turned into songs you can feel.
            Based on Lenny Rachitsky&apos;s most iconic podcast episodes.
          </p>
        </motion.div>
      </header>

      {/* Album Grid */}
      <main className="flex-1 px-4 sm:px-6 pb-16 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {albums.map((album, i) => (
            <motion.div
              key={album.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <Link href={`/album/${album.slug}`} className="block group">
                <div
                  className={`${gradientClass[album.slug] ?? ""} card-glass card-glow rounded-xl p-6 sm:p-8 transition-all duration-300 group-hover:scale-[1.02]`}
                  style={{ "--glow-color": album.accentColor } as React.CSSProperties}
                >
                  {/* Accent bar */}
                  <div
                    className="w-10 h-1 rounded-full mb-4"
                    style={{ backgroundColor: album.accentColor }}
                  />
                  <h2 className="text-2xl font-bold tracking-tight mb-1">
                    {album.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    {album.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">
                    {album.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
                    <Music className="w-3.5 h-3.5" />
                    <span>{album.tracks.length} tracks</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* About + Footer */}
      <footer className="border-t border-border/50 px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Built from Lenny Rachitsky&apos;s archive of 349 newsletters and 289
            podcasts.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Built with Suno AI + Claude Code &middot;{" "}
            <a
              href="https://www.linkedin.com/in/erictansongyi/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Eric Tan
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
