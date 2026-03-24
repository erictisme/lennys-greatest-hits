export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero skeleton */}
      <header className="flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="w-40 h-4 bg-white/5 rounded animate-pulse mb-6" />
        <div className="w-72 h-12 bg-white/5 rounded animate-pulse mb-3" />
        <div className="w-56 h-12 bg-white/5 rounded animate-pulse mb-4" />
        <div className="w-80 h-5 bg-white/5 rounded animate-pulse" />
      </header>

      {/* Album grid skeleton */}
      <main className="flex-1 px-4 sm:px-6 pb-16 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="card-glass rounded-xl p-6 sm:p-8 animate-pulse"
            >
              <div className="w-10 h-1 bg-white/10 rounded-full mb-4" />
              <div className="w-32 h-6 bg-white/5 rounded mb-2" />
              <div className="w-48 h-4 bg-white/5 rounded mb-3" />
              <div className="w-full h-10 bg-white/5 rounded mb-4" />
              <div className="w-16 h-3 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
