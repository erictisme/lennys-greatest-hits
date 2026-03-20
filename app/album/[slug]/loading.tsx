export default function AlbumLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Album header skeleton */}
      <header className="px-4 sm:px-6 pt-8 pb-10 sm:pb-12 bg-black/[0.02]">
        <div className="max-w-3xl mx-auto w-full">
          <div className="w-24 h-4 bg-black/5 rounded animate-pulse mb-8" />
          <div className="w-12 h-1.5 bg-black/10 rounded-full mb-5 animate-pulse" />
          <div className="w-48 h-10 bg-black/5 rounded animate-pulse mb-3" />
          <div className="w-64 h-5 bg-black/5 rounded animate-pulse mb-3" />
          <div className="w-80 h-4 bg-black/5 rounded animate-pulse" />
          <div className="w-24 h-10 bg-black/10 rounded-full mt-6 animate-pulse" />
        </div>
      </header>

      {/* Track list skeleton */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-4 px-4 py-4">
              <div className="w-6 h-6 bg-black/5 rounded animate-pulse" />
              <div className="flex-1">
                <div className="w-40 h-4 bg-black/5 rounded animate-pulse mb-2" />
                <div className="w-24 h-3 bg-black/5 rounded animate-pulse" />
              </div>
              <div className="w-12 h-3 bg-black/5 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
