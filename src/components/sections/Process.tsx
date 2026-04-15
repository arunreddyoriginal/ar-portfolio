'use client';
// src/components/sections/Process.tsx
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Discovery',
    duration: '20 minutes',
    body: "You tell me the bottleneck. I ask the right questions. By the end of the call I'll tell you exactly what to build, how long it takes, and what it costs. No pitch deck. No fluff. No obligation.",
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Build',
    duration: '48 hrs – 2 weeks',
    body: "You get a working prototype within 48 hours of project start. Full delivery depends on complexity — workflow automations in 3–7 days, agentic systems in 1–3 weeks. You see progress throughout.",
    icon: '⚡',
  },
  {
    step: '03',
    title: 'Deploy + Handoff',
    duration: '30-day support included',
    body: "Everything deployed, documented, and transferred. I write documentation like a human — not a developer — so your team can actually use it. 30-day support window included in every project.",
    icon: '🚀',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)]"
          >
            How working with me looks
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
            >
              {/* Connector line between cards (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[3.5rem] -right-3 w-6 h-px bg-[var(--border-strong)] z-10" />
              )}

              <div className="text-3xl mb-5">{step.icon}</div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest">
                  {step.step}
                </span>
                <span className="text-xs text-[var(--text-muted)] bg-[var(--bg-subtle)] px-2.5 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{step.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
