'use client';
// src/components/sections/FAQ.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "I don't have a technical team. Will I be able to use what you build?",
    a: "Yes. I document everything in plain English and build with maintainability in mind. If you can send an email, you can run what I build. I also offer a 30-day support window after every delivery.",
  },
  {
    q: "What's the difference between workflow automation and agentic AI?",
    a: "Workflow automation follows a fixed path — if X happens, do Y. Agentic AI can reason, adapt, and handle situations it's never seen before. Most businesses need both. I'll tell you which one fits your problem in the first 5 minutes of a call.",
  },
  {
    q: "How do I know this will actually save time?",
    a: "We define the time-savings metric before I start. If I can't show you a measurable outcome in the discovery call, I won't take the project.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. All client work is fully remote. I work async-first and can accommodate US and UK time zones for calls.",
  },
  {
    q: "What happens after delivery?",
    a: "30-day support window is included in every project. After that, I offer monthly retainer packages for businesses that want ongoing maintenance and improvements.",
  },
  {
    q: "Can you work with our existing tools?",
    a: "Almost certainly yes. n8n connects to 400+ services natively. For custom integrations — if there's an API, I can connect to it.",
  },
  {
    q: "How quickly can you start?",
    a: "Usually within 1–3 days of our discovery call. I keep capacity for a maximum of 2 active clients at a time so you always get full attention.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="section-container max-w-3xl">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)]"
          >
            Common questions
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-[var(--bg-subtle)] transition-colors"
              >
                <span className="font-medium text-[var(--text-primary)] pr-2">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed text-sm border-t border-[var(--border)] pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
