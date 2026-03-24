"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Library, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function GlobalNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Don't render on the home page — it has its own header
  if (isHome) return null;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-11 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Lenny&apos;s Greatest Hits</span>
          </Link>
          <Link
            href="/songs"
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              pathname === "/songs"
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Library className="w-3.5 h-3.5" />
            All Songs
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="p-2 rounded-full hover:bg-white/[0.06] text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Search"
            title="Search songs"
          >
            <Search className="w-4 h-4" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
