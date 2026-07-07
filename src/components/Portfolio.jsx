import { useState, useEffect } from 'react';
import FloatingShapes from './FloatingShapes.jsx';

// Replace these with your real profile links — shown at the bottom of
// each project's expanded view.
const LINKEDIN_URL = 'https://linkedin.com/in/your-profile';
const GITHUB_URL = 'https://github.com/your-username';

// Each project takes an `images` array. Add as many as you like — the
// modal will show a slider automatically once there's more than one.
const PROJECTS = [
  {
    tag: 'HOSPITALITY',
    title: 'Hotel Management System',
    desc: 'A full property operations platform for Paradise Royal Hotel — bookings & reservations, front desk, room management, billing, expenses, and bar & store inventory, all in one system.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    images: ['/projects/hotel-management.png'],
  },
  {
    tag: 'RESTAURANT',
    title: 'Restaurant Management System',
    desc: 'A waiter station built for speed on the floor — browse the menu by category, build an order, assign a table, and fire it to the kitchen without missing a step.',
    stack: ['React', 'Real-time sync'],
    images: ['/projects/restaurant-management.png'],
  },
  {
    tag: 'RETAIL',
    title: 'POS System',
    desc: 'A point-of-sale system for fast checkout — smart product search, live stock counts, credit sales, and a running transaction history synced across terminals.',
    stack: ['React', 'Offline-first sync'],
    images: ['/projects/pos-system.png'],
  },
  {
    tag: 'HR & OPERATIONS',
    title: 'AttendIQ — Attendance System',
    desc: 'A mobile-first attendance tracker that plugs straight into HR — on-time, late, and absence counts per office, updated the moment someone checks in.',
    stack: ['React Native', 'HR integration'],
    images: ['/projects/attendiq.png'],
  },
  {
    tag: 'LOGISTICS',
    title: 'Transport & Logistics System',
    desc: 'Dispatch, fleet tracking, and delivery scheduling built around how a logistics team actually coordinates a day of runs.',
    stack: ['React', 'Node.js'],
    images: [],
  },
  {
    tag: 'EDUCATION',
    title: 'School Management System',
    desc: 'Admissions, class scheduling, grading, and fee tracking in one system built for how a school office actually runs its term.',
    stack: ['React', 'Node.js'],
    images: [],
  },
];

function EmptyThumb() {
  return (
    <div className="relative aspect-[16/10] rounded-lg border border-dashed border-blue-500/25 bg-ink-900/60 flex flex-col items-center justify-center gap-2">
      <div className="w-9 h-9 rounded-md border border-blue-500/30 bg-blue-500/10 flex items-center justify-center corner-bracket">
        <span className="w-2 h-2 bg-signal rounded-sm rotate-45" />
      </div>
      <span className="font-mono text-[10px] tracking-[0.2em] text-paper/35 uppercase">
        Screenshot coming soon
      </span>
    </div>
  );
}

// Static thumbnail used on the grid card — always shows the first image.
function CardThumb({ images, title }) {
  if (!images.length) return <EmptyThumb />;
  return (
    <div className="relative rounded-lg border border-white/10 bg-ink-900 overflow-hidden">
      <div className="aspect-[16/10] flex items-center justify-center bg-ink-900">
        <img
          src={images[0]}
          alt={`${title} screenshot`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Interactive slider used inside the modal — arrows + dots + arrow-key nav.
function ImageSlider({ images, title }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [hasMultiple, images.length]);

  if (!images.length) return <EmptyThumb />;

  return (
    <div className="relative rounded-lg border border-white/10 bg-ink-900 overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-ink-900/80">
        <span className="w-2 h-2 rounded-full bg-blue-500/50" />
        <span className="w-2 h-2 rounded-full bg-signal/50" />
        <span className="w-2 h-2 rounded-full bg-cyan-glow/50" />
      </div>

      <div className="relative aspect-[16/10] flex items-center justify-center bg-ink-900">
        <img
          src={images[index]}
          alt={`${title} screenshot ${index + 1} of ${images.length}`}
          className="w-full h-full object-contain"
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ink-900/80 border border-white/15 hover:border-blue-500/50 flex items-center justify-center text-paper/70 hover:text-white transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ink-900/80 border border-white/15 hover:border-blue-500/50 flex items-center justify-center text-paper/70 hover:text-white transition-colors"
            >
              ›
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex items-center justify-center gap-2 py-3 border-t border-white/10 bg-ink-900/80">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all ${
                i === index ? 'w-4 h-1.5 bg-blue-400' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      <div
        className="absolute inset-0 bg-ink-900/90 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-ink-800 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-ink-900/80 border border-white/10 hover:border-white/25 flex items-center justify-center text-paper/60 hover:text-white transition-colors"
        >
          ✕
        </button>

        <div className="p-6 sm:p-8">
          <ImageSlider images={project.images} title={project.title} />

          <span className="mt-6 block font-mono text-[10px] tracking-[0.2em] text-signal">
            {project.tag}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white font-display">
            {project.title}
          </h3>
          <p className="mt-4 text-sm text-paper/65 leading-relaxed">{project.desc}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] tracking-wide text-blue-400 border border-blue-500/25 rounded-full px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <span className="tag-label">More of our work</span>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-blue-500/40 text-sm text-paper/80 hover:text-white px-4 py-2 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-blue-500/40 text-sm text-paper/80 hover:text-white px-4 py-2 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="relative overflow-hidden py-28 border-t border-white/5">
      <FloatingShapes variant="services" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="tag-label">Selected Work</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Systems we've shipped,
            <br />
            not just services we offer.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className="group text-left rounded-2xl border border-white/10 bg-ink-800/40 hover:border-blue-500/30 transition-colors p-5 cursor-pointer"
            >
              <CardThumb images={p.images} title={p.title} />
              <span className="mt-5 block font-mono text-[10px] tracking-[0.2em] text-signal">
                {p.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white font-display">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-paper/60 leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] tracking-wide text-blue-400 border border-blue-500/25 rounded-full px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-block text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View full details →
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}