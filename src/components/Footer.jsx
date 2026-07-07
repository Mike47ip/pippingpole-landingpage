const COLUMNS = [
  {
    heading: 'Studio',
    links: ['Work', 'Process', 'Why Us', 'Careers'],
  },
  {
    heading: 'Services',
    links: ['Internal Systems', 'Customer Platforms', 'Automation', 'Modernization'],
  },
  {
    heading: 'Company',
    links: ['Contact', 'Privacy Policy', 'Terms'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-md border border-blue-500/50 bg-blue-500/10 flex items-center justify-center">
              <span className="w-2 h-2 bg-signal rounded-sm rotate-45" />
            </span>
            <span className="font-display font-semibold text-lg text-white">
              Pipping<span className="text-blue-400">Pole</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-paper/50 max-w-xs leading-relaxed">
            A custom software studio building systems tailored to how your
            business actually operates.
          </p>

          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href="https://wa.me/233501424150"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper/60 hover:text-white transition-colors w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              WhatsApp — +233 50 142 4150
            </a>
            <a
              href="mailto:pippingpole@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-paper/60 hover:text-white transition-colors w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              pippingpole@gmail.com
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h4 className="tag-label">{col.heading}</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-paper/60 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-paper/30">
            © {new Date().getFullYear()} Forgeworks Studio. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-paper/30">BUILT TO SPEC</p>
        </div>
      </div>
    </footer>
  );
}