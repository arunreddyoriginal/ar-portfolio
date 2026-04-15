'use client';
// src/components/sections/Services.tsx
import { motion } from 'framer-motion';
import { Zap, Brain, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Zap size={22} />,
    track: 'Track 1',
    title: 'AI Workflow Automation',
    subtitle: 'Fast, reliable automation without custom AI reasoning',
    bestFor: 'SMBs, internal ops teams, marketing/sales workflows',
    delivery: '3–7 days',
    price: 'From $500',
    description:
      'For businesses that need reliable, structured automation. Trigger-based pipelines that connect your tools, remove manual steps, and run 24/7 without human involvement.',
    examples: [
      'Lead intake → AI research → personalised email in 15 seconds',
      'Gmail monitoring → AI reply analysis → team alert with suggested next step',
      'Form submission → CRM sync → onboarding sequence trigger',
    ],
    cta: 'This is what you need →',
    accent: false,
  },
  {
    icon: <Brain size={22} />,
    track: 'Track 2',
    title: 'Agentic AI Systems',
    subtitle: 'AI that reasons, decides, and acts across multiple steps',
    bestFor: 'Complex ops workflows, multi-step reasoning, long-running processes',
    delivery: '1–3 weeks',
    price: 'From $2,000',
    description:
      'For businesses where the workflow can\'t be pre-defined — where the AI needs to make decisions, handle exceptions, and adapt. Multi-agent systems that coordinate like a team.',
    examples: [
      'Support triage that classifies, prioritises, and drafts replies autonomously',
      'Tech stack detection agent that generates personalised outreach per company',
      'Natural language analytics layer over your business database',
      'Adaptive onboarding system that reasons about what each user already knows',
    ],
    cta: 'This is what you need →',
    accent: true,
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="section-container">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-4"
          >
            Two ways I work with you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg max-w-2xl"
          >
            Not sure which fits? I&apos;ll tell you in the first 5 minutes of a discovery call.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0, 0, 1] }}
              className={`rounded-2xl border p-8 ${
                s.accent
                  ? 'border-[var(--accent)] bg-[var(--accent-subtle)]'
                  : 'border-[var(--border)] bg-[var(--bg-card)]'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                s.accent ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-subtle)] text-[var(--accent)]'
              }`}>
                {s.icon}
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                {s.track}
              </p>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{s.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-5">{s.subtitle}</p>

              <div className="flex gap-4 mb-6">
                <div className="text-center px-4 py-2 rounded-xl bg-[var(--bg-subtle)] flex-1">
                  <div className="text-xs text-[var(--text-muted)] mb-0.5">Delivery</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{s.delivery}</div>
                </div>
                <div className="text-center px-4 py-2 rounded-xl bg-[var(--bg-subtle)] flex-1">
                  <div className="text-xs text-[var(--text-muted)] mb-0.5">Starting</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{s.price}</div>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">{s.description}</p>

              <ul className="space-y-2 mb-8">
                {s.examples.map((ex, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] mt-0.5">→</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`flex items-center gap-1.5 text-sm font-medium ${
                  s.accent ? 'text-[var(--accent)]' : 'text-[var(--accent)]'
                } hover:opacity-80 transition-opacity`}
              >
                {s.cta} <ArrowUpRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Unsure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center p-8 rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)]"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Not sure which you need?
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a free 20-min discovery call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
