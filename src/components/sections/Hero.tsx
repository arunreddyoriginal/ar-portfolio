'use client';

// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const terminalLines = [
  { text: '→ Scanning prospect website...', status: '✓ done', delay: 0.8 },
  { text: '→ Detecting pain points...', status: '✓ done', delay: 1.4 },
  { text: '→ Writing personalised email...', status: '✓ done', delay: 2.0 },
  { text: '→ Logging to database...', status: '✓ done', delay: 2.6 },
  { text: '→ Sent in 14 seconds', status: null, delay: 3.2 },
];

const trustItems = [
  'Google Cloud',
  'Gemini 2.5',
  'Claude API',
  'Google ADK',
  'AlloyDB',
  'n8n',
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="section-label">AI Workflow & Agentic AI Architect</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--text-primary)] mb-6"
            >
              I build AI systems that eliminate your most{' '}
              <span
                className="font-serif-italic text-[var(--accent)]"
                style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                expensive
              </span>{' '}
              bottlenecks.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-xl"
            >
              Most businesses waste 20+ hours a week on work that doesn&apos;t need a human
              brain. I build the automation infrastructure that handles it — from n8n workflow
              pipelines to multi-agent AI systems that reason, decide, and act on their own.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="bg-[var(--accent)] text-white rounded-full px-7 py-3.5 font-medium hover:bg-[var(--accent-hover)] transition-colors text-sm"
              >
                See the work →
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="border border-[var(--border)] rounded-full px-7 py-3.5 font-medium hover:bg-[var(--bg-subtle)] transition-colors text-sm text-[var(--text-primary)]"
              >
                Let&apos;s talk
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-medium mb-3">
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {trustItems.map((item) => (
                  <span key={item} className="stack-badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0, 0, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-[var(--shadow-lg)]">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-subtle)]">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-[var(--text-muted)] font-mono">
                  outreach_agent_v2.js — running
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-3 min-h-[260px]">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className="terminal-line flex items-center justify-between"
                    style={{ animationDelay: `${line.delay}s` }}
                  >
                    <span className="text-[var(--text-secondary)]">{line.text}</span>
                    {line.status && (
                      <span className="text-green-500 text-xs font-medium ml-4">
                        {line.status}
                      </span>
                    )}
                    {!line.status && i === terminalLines.length - 1 && (
                      <span className="text-[var(--accent)] text-xs font-semibold ml-4">
                        ⚡ complete
                      </span>
                    )}
                  </div>
                ))}

                {/* Blinking cursor */}
                <div className="flex items-center gap-1 text-[var(--text-muted)]">
                  <span>$</span>
                  <span className="cursor-blink inline-block w-2 h-4 bg-[var(--accent)] ml-1" />
                </div>
              </div>

              {/* Stats footer */}
              <div className="grid grid-cols-3 border-t border-[var(--border)]">
                {[
                  { value: '14s', label: 'send time' },
                  { value: '9', label: 'projects shipped' },
                  { value: '24/7', label: 'automation uptime' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="px-4 py-3 text-center border-r last:border-r-0 border-[var(--border)]"
                  >
                    <div className="text-xl font-bold text-[var(--text-primary)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ArrowDown size={14} />
              </motion.div>
            </motion.div>
        </div>
    </section>
  );
}
