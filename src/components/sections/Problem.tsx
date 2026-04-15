'use client';
// src/components/sections/Problem.tsx
import { motion } from 'framer-motion';

const pains = [
  {
    number: '01',
    headline: "Your sales team spends 3+ hours a day on prospecting",
    body: "Every rep manually researches leads, writes personalised emails, and tracks replies in a spreadsheet. While they're doing that, your pipeline is stalling. The work is necessary. The manual execution is not.",
  },
  {
    number: '02',
    headline: "Your data sits in 4 tools and nobody can see the full picture",
    body: "Questions that should take 10 seconds take a half-day of back-and-forth between teams, spreadsheet exports, and a BI analyst who's always backed up. Every stakeholder is making decisions on stale data.",
  },
  {
    number: '03',
    headline: "Your support team is drowning in repetitive tickets",
    body: "80% of support volume is the same 20 questions. Every ticket still gets manually read, triaged, and routed as if it's the first time you've seen it. Your best support people are doing the work of a sorting algorithm.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            The problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)]"
          >
            Your team is solving problems that shouldn&apos;t need humans.
          </motion.h2>
        </div>

        <div className="space-y-4">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0, 0, 1] }}
              className="group flex gap-8 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-colors card-hover"
            >
              <span className="text-5xl font-bold text-[var(--bg-subtle)] group-hover:text-[var(--accent-subtle)] transition-colors select-none flex-shrink-0 hidden md:block">
                {pain.number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {pain.headline}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{pain.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-lg text-center text-[var(--text-secondary)]"
        >
          These aren&apos;t staffing problems.{' '}
          <span className="text-[var(--text-primary)] font-semibold">
            They&apos;re systems problems.
          </span>{' '}
          And systems problems have systems solutions.
        </motion.p>
      </div>
    </section>
  );
}
