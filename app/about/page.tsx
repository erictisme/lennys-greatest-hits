import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Lenny's Greatest Hits",
  description:
    "How Lenny Rachitsky's best podcast and newsletter insights became real, catchy songs.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto w-full px-4 sm:px-6">
      <header className="pt-12 sm:pt-16 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          About This Project
        </h1>
      </header>

      <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
        <p>
          <strong className="text-foreground">Lenny&apos;s Greatest Hits</strong> turns the best
          insights from Lenny Rachitsky&apos;s podcast and newsletter into real,
          catchy, playable songs. Each track captures a specific idea &mdash;
          product-market fit, hiring, growth, leadership &mdash; and makes it
          stick the way only music can.
        </p>

        <p>
          Every song starts with deep research across Lenny&apos;s archive of 349
          newsletters and 289 podcast episodes. We pull out the core insight, the
          memorable quotes, and the emotional truth behind each topic. Then we
          write original lyrics designed to be catchy first and educational
          second &mdash; think Hamilton, not Schoolhouse Rock. The music is
          generated on Suno and organized into thematic albums.
        </p>

        <p>
          This project is a contest entry for Lenny&apos;s &ldquo;build something
          cool with my data&rdquo; challenge. The goal: prove that the ideas
          people quote on X and share in Slack channels can live as something you
          hum in the shower. Tech culture deserves its own anthems.
        </p>

        <p>
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/erictisme/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline hover:text-foreground/80 transition-colors"
          >
            Eric Tan
          </a>
          .
        </p>
      </div>

      <footer className="border-t border-border/50 py-8 mt-12 text-center">
        <Link
          href="/"
          className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors"
        >
          &larr; Back to music
        </Link>
      </footer>
    </div>
  );
}
