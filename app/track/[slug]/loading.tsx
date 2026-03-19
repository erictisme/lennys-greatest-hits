export default function TrackLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header skeleton */}
      <header className="px-4 sm:px-6 pt-8 pb-8 sm:pb-10 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto w-full">
          <div className="w-20 h-4 bg-white/5 rounded animate-pulse mb-8" />
          <div className="w-32 h-3 bg-white/10 rounded animate-pulse mb-3" />
          <div className="w-56 h-8 bg-white/5 rounded animate-pulse mb-2" />
          <div className="w-36 h-4 bg-white/5 rounded animate-pulse" />
        </div>
      </header>

      {/* Player skeleton */}
      <div className="px-4 sm:px-6 py-5 sm:py-6 border-b border-border/30">
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-5 h-5 bg-white/5 rounded animate-pulse" />
            <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse" />
            <div className="w-5 h-5 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="h-1.5 bg-white/5 rounded-full animate-pulse" />
          <div className="flex justify-between mt-1.5">
            <div className="w-8 h-3 bg-white/5 rounded animate-pulse" />
            <div className="w-8 h-3 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Lyrics skeleton */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 max-w-2xl mx-auto w-full">
        <div className="w-12 h-3 bg-white/10 rounded animate-pulse mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-white/5 rounded animate-pulse"
              style={{ width: `${50 + Math.random() * 40}%` }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
