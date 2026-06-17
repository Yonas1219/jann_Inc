export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-violet-500/8 blur-[120px] animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-600/6 blur-[80px] animate-float-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-transparent" />
    </div>
  );
}

export function NoiseOverlay() {
  return (
    <div
      className="noise-overlay absolute inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
