// Ambient decorative layer: small blueprint-motif shapes (brackets, orbit
// rings, pattern dots) that spin/bob continuously and drift at different
// speeds on scroll via the data-parallax attribute (see the script in
// Layout.astro). Purely decorative — aria-hidden and pointer-events-none.

const VARIANTS = {
  hero: [
    { top: '14%', left: '3%', speed: 0.05, node: (
      <div className="w-12 h-12 border border-blue-500/30 rotate-45 spin-slow" />
    ) },
    { top: '72%', left: '7%', speed: -0.08, node: (
      <div className="w-5 h-5 bg-signal/25 rotate-45 float-bob-fast" />
    ) },
    { top: '8%', right: '10%', speed: 0.1, node: (
      <div className="w-20 h-20 rounded-full border border-dashed border-blue-400/25 spin-slow-rev" />
    ) },
    { top: '55%', right: '4%', speed: -0.06, node: (
      <div className="w-3 h-3 bg-cyan-glow/40 rounded-sm float-bob-slow" />
    ) },
  ],
  services: [
    { top: '6%', left: '2%', speed: 0.07, node: (
      <div className="w-8 h-8 border border-blue-500/25 rounded-sm spin-slow-rev" />
    ) },
    { top: '80%', right: '6%', speed: -0.1, node: (
      <div className="w-14 h-14 border border-dashed border-signal/25 rounded-full float-bob-slow" />
    ) },
    { top: '40%', right: '2%', speed: 0.04, node: (
      <div className="w-4 h-4 bg-blue-400/30 rotate-45 float-bob" />
    ) },
  ],
  process: [
    { top: '10%', right: '5%', speed: 0.08, node: (
      <div className="w-16 h-16 border border-blue-500/20 rotate-45 spin-slow" />
    ) },
    { top: '75%', left: '4%', speed: -0.05, node: (
      <div className="w-6 h-6 bg-cyan-glow/25 rounded-full float-bob" />
    ) },
  ],
  cta: [
    { top: '12%', left: '8%', speed: 0.06, node: (
      <div className="w-10 h-10 border border-dashed border-blue-400/25 rounded-full spin-slow-rev" />
    ) },
    { top: '70%', right: '10%', speed: -0.09, node: (
      <div className="w-5 h-5 bg-signal/25 rotate-45 float-bob-slow" />
    ) },
    { top: '20%', right: '20%', speed: 0.03, node: (
      <div className="w-3 h-3 bg-blue-400/30 rounded-sm float-bob-fast" />
    ) },
  ],
};

export default function FloatingShapes({ variant = 'hero' }) {
  const shapes = VARIANTS[variant] || VARIANTS.hero;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {shapes.map((s, i) => (
        <div
          key={i}
          data-parallax={s.speed}
          className="absolute will-change-transform"
          style={{ top: s.top, left: s.left, right: s.right }}
        >
          {s.node}
        </div>
      ))}
    </div>
  );
}
