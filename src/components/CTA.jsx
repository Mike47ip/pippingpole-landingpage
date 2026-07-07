import FloatingShapes from './FloatingShapes.jsx';

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_50%_100%_at_50%_100%,black,transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[24rem] bg-blue-500/20 rounded-full blur-[130px]" />
      <FloatingShapes variant="cta" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="tag-label">Start a Project</span>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Tell us what's not fitting.
          <br />
          We'll draft the pattern.
        </h2>
        <p className="mt-6 text-paper/60 max-w-lg mx-auto leading-relaxed">
          A 30-minute scoping call is enough for us to tell you whether a
          custom system makes sense for your business, and roughly what
          it'll take.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="flex-1 rounded-full bg-ink-800 border border-white/10 focus:border-blue-500/60 px-5 py-3.5 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3.5 text-sm transition-colors shadow-glow whitespace-nowrap"
          >
            Book the call
          </button>
        </form>
        <p className="mt-4 font-mono text-[11px] text-paper/30">
          NO OBLIGATION — REPLY WITHIN 1 BUSINESS DAY
        </p>
      </div>
    </section>
  );
}
