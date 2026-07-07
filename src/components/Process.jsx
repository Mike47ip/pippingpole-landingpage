const STEPS = [
  {
    rev: 'REV. A',
    title: 'Measure',
    desc: 'We sit with the people who use the system daily and map exactly where the current process fits — and where it strains.',
  },
  {
    rev: 'REV. B',
    title: 'Draft the pattern',
    desc: 'A technical blueprint of the system: data model, integrations, and screens — reviewed with you before a line of code is written.',
  },
  {
    rev: 'REV. C',
    title: 'Build',
    desc: 'Iterative development in short cycles, with a working build in your hands every week, not at the end of the project.',
  },
  {
    rev: 'REV. D',
    title: 'Fit & ship',
    desc: 'We test against real usage, adjust the fit, and hand over a system your team already knows how to use.',
  },
];

import FloatingShapes from './FloatingShapes.jsx';

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-28 border-t border-white/5 bg-ink-800/40">
      <FloatingShapes variant="process" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="tag-label">The Process</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built like a tailored pattern, not a template.
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.rev} className="relative pl-6 border-l border-blue-500/25">
              <span className="font-mono text-[11px] text-blue-400 tracking-wider">
                {step.rev}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white font-display">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-paper/60 leading-relaxed">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="hidden lg:block absolute top-1 -right-3 w-1.5 h-1.5 rounded-full bg-signal" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
