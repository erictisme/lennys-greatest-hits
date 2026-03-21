import Link from "next/link";
import { jtbdCategories } from "@/lib/jtbd";

export const metadata = {
  title: "What Do You Need? - Lenny's Greatest Hits",
  description: "Browse songs by what you're trying to accomplish — from getting first users to surviving the founder journey.",
};

export default function TopicsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Back to home
      </Link>
      <h1 className="text-2xl font-bold mb-2">What do you need?</h1>
      <p className="text-muted-foreground mb-8">
        Find the right song for where you are right now.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {jtbdCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/topics/${cat.slug}`}
            className="group rounded-xl border border-border/50 p-5 hover:border-foreground/30 hover:bg-black/[0.02] transition-all"
          >
            <p className="font-medium text-[15px] group-hover:text-foreground transition-colors">
              {cat.label}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              {cat.description}
            </p>
            <p className="text-[10px] text-muted-foreground/40 mt-2">
              {cat.trackSlugs.length} tracks
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
