"use client";

import Link from "next/link";
import { Music } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div>
        <Music className="w-12 h-12 text-muted-foreground/30 mx-auto mb-6" />
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Track Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          This song isn&apos;t in the setlist. Maybe it&apos;s still in the
          studio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          Back to All Albums
        </Link>
      </div>
    </div>
  );
}
