import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-md border border-blue-500/50 bg-blue-500/10 flex items-center justify-center corner-bracket">
            <span className="w-2 h-2 bg-signal rounded-sm rotate-45" />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight text-white">
            Pipping<span className="text-blue-400">Pole</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper/70 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-5 py-2.5 transition-colors shadow-glow"
          >
            Start a build
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-md border border-white/10"
        >
          <span
            className={`block w-5 h-px bg-paper transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-paper transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-900 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-paper/80 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-full bg-blue-500 text-white text-sm font-semibold px-5 py-3"
          >
            Start a build
          </a>
        </div>
      )}
    </header>
  );
}
