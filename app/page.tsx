"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAllAlbums } from "@/lib/tracks";

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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
            Lenny&apos;s
            <br />
            Greatest Hits
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            The insights you quote on X, turned into songs you can feel.
            Based on Lenny Rachitsky&apos;s most iconic podcast episodes.
          </p>
        </motion.div>
      </header>

      {/* Album Grid */}
      <main className="flex-1 px-4 sm:px-6 pb-16 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6">
          {albums.map((album, i) => (
            <motion.div
              key={album.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <Link href={`/album/${album.slug}`} className="block group">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-3 shadow-md transition-transform duration-300 group-hover:scale-[1.03]">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-sm sm:text-base font-bold tracking-tight truncate">
                  {album.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  {album.tracks.length} tracks &middot; {album.subtitle}
                </p>
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
