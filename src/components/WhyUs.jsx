const POINTS = [
  {
    title: 'You own the code',
    desc: 'No vendor lock-in, no licensing fees for software built around your business. The repository is yours from day one.',
  },
  {
    title: 'One team, start to finish',
    desc: 'The engineers who scope your project are the ones who build and support it. No hand-offs, no re-explaining context.',
  },
  {
    title: 'Built to outlast trends',
    desc: 'We choose boring, stable technology for the parts that must never break, and modern tooling for what needs to move fast.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="tag-label">Why Forgeworks</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            We build for the way your
            <span className="text-blue-400"> company</span> actually runs —
            not the way software usually assumes it does.
          </h2>
          <p className="mt-6 text-paper/60 leading-relaxed max-w-md">
            Off-the-shelf tools force your team to adapt to the software.
            We reverse that. The system adapts to you, and stays that way
            as your business changes.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {POINTS.map((p) => (
            <div key={p.title} className="flex gap-5">
              <div className="mt-1 w-9 h-9 shrink-0 rounded-lg border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                <span className="w-2 h-2 rounded-sm bg-signal rotate-45" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white font-display">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-paper/60 leading-relaxed max-w-md">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
