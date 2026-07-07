import FloatingShapes from './FloatingShapes.jsx';

const PROJECTS = [
  {
    tag: 'HOSPITALITY',
    title: 'Hotel Management System',
    desc: 'A full property operations platform for Paradise Royal Hotel — bookings & reservations, front desk, room management, billing, expenses, and bar & store inventory, all in one system.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    image: '/projects/hotel-management.png',
    href: null,
  },
  {
    tag: 'RESTAURANT',
    title: 'Restaurant Management System',
    desc: 'A waiter station built for speed on the floor — browse the menu by category, build an order, assign a table, and fire it to the kitchen without missing a step.',
    stack: ['React', 'Real-time sync'],
    image: '/projects/restaurant-management.png',
    href: null,
  },
  {
    tag: 'RETAIL',
    title: 'POS System',
    desc: 'A point-of-sale system for fast checkout — smart product search, live stock counts, credit sales, and a running transaction history synced across terminals.',
    stack: ['React', 'Offline-first sync'],
    image: '/projects/pos-system.png',
    href: null,
  },
  {
    tag: 'HR & OPERATIONS',
    title: 'AttendIQ — Attendance System',
    desc: 'A mobile-first attendance tracker that plugs straight into HR — on-time, late, and absence counts per office, updated the moment someone checks in.',
    stack: ['React Native', 'HR integration'],
    image: '/projects/attendiq.png',
    href: null,
  },
  {
    tag: 'LOGISTICS',
    title: 'Transport & Logistics System',
    desc: 'Dispatch, fleet tracking, and delivery scheduling built around how a logistics team actually coordinates a day of runs.',
    stack: ['React', 'Node.js'],
    image: null,
    href: null,
  },
  {
    tag: 'EDUCATION',
    title: 'School Management System',
    desc: 'Admissions, class scheduling, grading, and fee tracking in one system built for how a school office actually runs its term.',
    stack: ['React', 'Node.js'],
    image: null,
    href: null,
  },
];

function ProjectThumb({ project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-ink-900">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
      </div>
    );
  }
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

export default function Portfolio() {
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
            <div
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-ink-800/40 hover:border-blue-500/30 transition-colors p-5"
            >
              <ProjectThumb project={p} />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
