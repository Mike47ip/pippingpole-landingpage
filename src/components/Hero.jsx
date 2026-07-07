import FloatingShapes from './FloatingShapes.jsx';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-28 lg:pt-48 lg:pb-36"
    >
      {/* blueprint grid backdrop */}
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 right-0 w-[36rem] h-[36rem] bg-blue-500/20 rounded-full blur-[140px]" />
      <FloatingShapes variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <div
            className="hero-in inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 mb-8"
            style={{ animationDelay: '0ms' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            <span className="tag-label">Custom Engineering Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold text-white tracking-tight">
            <span className="hero-in block" style={{ animationDelay: '120ms' }}>
              Software cut to the exact
            </span>
            <span className="hero-in block" style={{ animationDelay: '240ms' }}>
              <span className="relative inline-block mx-0">
                <span className="relative z-10 text-blue-400">shape</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-blue-500/20 -z-0" />
              </span>{' '}
              of your business.
            </span>
          </h1>

          <p
            className="hero-in mt-6 text-lg text-paper/65 max-w-xl leading-relaxed"
            style={{ animationDelay: '380ms' }}
          >
            No templates, no bloated off-the-shelf suites. We measure how your
            company actually operates, then design and build the system that
            fits it — down to the workflow.
          </p>

          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '500ms' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 transition-colors shadow-glow"
            >
              Scope your project
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 text-paper font-medium px-7 py-3.5 transition-colors"
            >
              See how we build
            </a>
          </div>

          <div
            className="hero-in mt-14 grid grid-cols-3 gap-8 max-w-md"
            style={{ animationDelay: '620ms' }}
          >
            {[
              ['40+', 'systems shipped'],
              ['12wk', 'avg. delivery'],
              ['98%', 'client retention'],
            ].map(([stat, label]) => (
              <div key={label} className="border-l border-blue-500/30 pl-4">
                <div className="font-display text-2xl font-bold text-white">{stat}</div>
                <div className="text-xs text-paper/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Schematic / pattern-piece illustration */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div
            className="hero-in-fade absolute inset-0 rounded-2xl border border-blue-500/20 bg-ink-800/60 backdrop-blur-sm corner-bracket"
            style={{ animationDelay: '260ms' }}
          />
          <span
            className="hero-in-fade absolute -top-3 left-6 tag-label bg-ink-900 px-2"
            style={{ animationDelay: '380ms' }}
          >
            FIG. 01 — SYSTEM PATTERN
          </span>

          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full p-10">
            <g fill="none" stroke="#2B5CFF" strokeWidth="1.2" opacity="0.55">
              <rect x="40" y="40" width="130" height="130" rx="10" pathLength="1" className="hero-draw" style={{ animationDelay: '420ms' }} />
              <rect x="200" y="40" width="160" height="80" rx="10" pathLength="1" className="hero-draw" style={{ animationDelay: '540ms' }} />
              <rect x="40" y="200" width="90" height="160" rx="10" pathLength="1" className="hero-draw" style={{ animationDelay: '660ms' }} />
              <rect x="160" y="230" width="200" height="130" rx="10" pathLength="1" className="hero-draw" style={{ animationDelay: '780ms' }} />
            </g>
            <g fill="#5B82FF" className="hero-in-fade" style={{ animationDelay: '1150ms' }}>
              <circle cx="40" cy="40" r="3" />
              <circle cx="170" cy="40" r="3" />
              <circle cx="170" cy="170" r="3" />
              <circle cx="40" cy="170" r="3" />
              <circle cx="360" cy="120" r="3" />
              <circle cx="360" cy="360" r="3" />
            </g>
            <g stroke="#FF7A3D" strokeWidth="1.4" opacity="0.8">
              <path d="M170 100 H200" pathLength="1" className="hero-draw" style={{ animationDelay: '1250ms', strokeDasharray: '0.12 0.12' }} />
              <path d="M130 170 V200" pathLength="1" className="hero-draw" style={{ animationDelay: '1300ms', strokeDasharray: '0.2 0.2' }} />
              <path d="M130 300 H160" pathLength="1" className="hero-draw" style={{ animationDelay: '1350ms', strokeDasharray: '0.25 0.25' }} />
            </g>
            <g className="hero-in-fade" style={{ animationDelay: '1450ms' }}>
              <text x="55" y="65" fontFamily="JetBrains Mono" fontSize="10" fill="#5EEAD4">
                AUTH
              </text>
              <text x="215" y="65" fontFamily="JetBrains Mono" fontSize="10" fill="#5EEAD4">
                CORE-API
              </text>
              <text x="55" y="225" fontFamily="JetBrains Mono" fontSize="10" fill="#5EEAD4">
                DATA
              </text>
              <text x="180" y="255" fontFamily="JetBrains Mono" fontSize="10" fill="#5EEAD4">
                DASHBOARD
              </text>
            </g>
          </svg>

          <span
            className="hero-in-fade absolute bottom-4 right-6 font-mono text-[10px] text-paper/30"
            style={{ animationDelay: '1550ms' }}
          >
            SCALE 1:1 — REV. C
          </span>
        </div>
      </div>
    </section>
  );
}
