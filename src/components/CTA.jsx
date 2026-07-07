import { useState } from 'react';
import FloatingShapes from './FloatingShapes.jsx';

// 1. Create (or open) a form at https://formspree.io
// 2. Go to that form's Settings tab and copy its Endpoint URL
//    (looks like: https://formspree.io/f/xxxxxxxx)
// 3. Paste it below, replacing the placeholder.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjkajaaw';

export default function CTA() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `New project inquiry from ${form.name || 'website'}`,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_50%_100%_at_50%_100%,black,transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[24rem] bg-blue-500/20 rounded-full blur-[130px]" />
      <FloatingShapes variant="cta" />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <span className="tag-label">Start a Project</span>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Tell us what's not fitting.
          <br />
          We'll draft the pattern.
        </h2>
        <p className="mt-6 text-paper/60 max-w-lg mx-auto leading-relaxed">
          Send a few details about your project and we'll reply with next
          steps — usually within one business day.
        </p>

        {status === 'success' ? (
          <div className="mt-10 rounded-2xl border border-blue-500/25 bg-blue-500/5 px-6 py-10">
            <p className="font-display text-lg font-semibold text-white">
              Message sent.
            </p>
            <p className="mt-2 text-sm text-paper/60">
              We'll get back to you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 text-left flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="tag-label block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl bg-ink-800 border border-white/10 focus:border-blue-500/60 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="tag-label block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full rounded-xl bg-ink-800 border border-white/10 focus:border-blue-500/60 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="tag-label block mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this project about?"
                className="w-full rounded-xl bg-ink-800 border border-white/10 focus:border-blue-500/60 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="tag-label block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a bit about what you're trying to build..."
                className="w-full rounded-xl bg-ink-800 border border-white/10 focus:border-blue-500/60 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 text-sm transition-colors shadow-glow"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-signal text-center">
                Something went wrong sending that — please try again, or
                email us directly.
              </p>
            )}
          </form>
        )}

        <p className="mt-6 font-mono text-[11px] text-paper/30">
          NO OBLIGATION — REPLY WITHIN 1 BUSINESS DAY
        </p>
      </div>
    </section>
  );
}