export default function GradientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-[-280px] right-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
    </div>
  );
}
