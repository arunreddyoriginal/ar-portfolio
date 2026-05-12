'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const CALENDLY_URL = 'https://calendly.com/arunreddy-co/discovery';

const ease = [0.25, 0, 0, 1] as const;

function Section({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="section-container">{children}</div>
    </section>
  );
}

// ─── SECTION 1: HERO ────────────────────────────────────────

function PhoneAnimation() {
  const [counter, setCounter] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 7) {
          setSent(true);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    const reset = setInterval(() => {
      setCounter(0);
      setSent(false);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(reset);
    };
  }, []);

  return (
    <div className="w-full max-w-[320px] mx-auto lg:mx-0">
      <div className="rounded-[2rem] border-2 border-[var(--border-strong)] bg-[var(--bg-card)] overflow-hidden shadow-[var(--shadow-lg)]">
        {/* Phone notch */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-20 h-1.5 rounded-full bg-[var(--border-strong)]" />
        </div>

        <div className="px-5 pb-6">
          {/* Header */}
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">
            From: Your Roofing Co
          </p>

          {/* Counter */}
          <div className="flex items-center gap-2 mb-4">
            <div className="font-mono text-2xl font-bold text-[var(--text-primary)] tabular-nums">
              {counter}s
            </div>
            {sent && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <CheckCircle2 size={20} className="text-green-500" />
              </motion.div>
            )}
            {sent && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-semibold text-green-500"
              >
                Sent in 7s
              </motion.span>
            )}
          </div>

          {/* SMS bubble */}
          <div className="rounded-2xl rounded-tl-sm bg-[var(--accent-subtle)] border border-[var(--border)] p-4">
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              Hi Mike, thanks for reaching out about your emergency roof leak
              &mdash; we can help. Got a minute for a quick call? Book here:
              calendly.com/...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="section-container relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              For US &amp; UK roofing, HVAC, and solar contractors
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6"
            >
              Stop losing $80 leads to slow{' '}
              <span
                className="font-serif-italic text-[var(--accent)]"
                style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                response times.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-xl"
            >
              Every lead you don&apos;t text back in 5 minutes is 21x less
              likely to qualify. We text every new lead in under 60 seconds
              &mdash; even at 2am &mdash; so you stop paying for leads your
              competitors are closing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] text-white rounded-full px-7 py-3.5 font-medium hover:bg-[var(--accent-hover)] transition-colors text-sm text-center"
              >
                Book a 15-min discovery call
              </a>
              <a
                href="#demo"
                className="border border-[var(--border)] rounded-full px-7 py-3.5 font-medium hover:bg-[var(--bg-subtle)] transition-colors text-sm text-[var(--text-primary)] text-center"
              >
                See the 2-min demo
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="flex justify-center"
          >
            <PhoneAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: THE PROBLEM ─────────────────────────────────

const statCards = [
  {
    number: '21x',
    label:
      'more likely to qualify a lead contacted within 5 minutes vs. 30 minutes',
    source: 'InsideSales / MIT Lead Response Management Study',
  },
  {
    number: '47 hours',
    label:
      'average response time across B2B companies. 27% never respond at all.',
    source: 'Drift 2018 Lead Response Report (433 companies audited)',
  },
  {
    number: '$250–$500',
    label:
      'what you pay per home-services lead on Google Ads or LSA. Half die in your inbox.',
    source: 'WebFX 2026 Home Services Marketing Benchmarks',
  },
];

function ProblemSection() {
  return (
    <Section className="bg-[var(--bg-secondary)]">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-3"
      >
        The math is brutal.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[var(--text-secondary)] text-lg mb-12"
      >
        Three numbers every contractor running paid ads should memorize.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {statCards.map((card, i) => (
          <motion.div
            key={card.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, ease }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8"
          >
            <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-3">
              {card.number}
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {card.label}
            </p>
            <p className="text-xs text-[var(--text-muted)]">{card.source}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
      >
        If you spend $20,000/month on leads and your response time is slower
        than 5 minutes, you&apos;re throwing roughly $10,000 of that into the
        trash every single month.
      </motion.p>
    </Section>
  );
}

// ─── SECTION 3: WHAT YOU GET ────────────────────────────────

const checklist = [
  'AI-powered SMS response to every new lead in under 60 seconds — 24 hours a day, including weekends and holidays.',
  'Personalized message that references the lead\'s exact service request — not a generic auto-reply.',
  'Real-time Slack alert to your team the moment a lead comes in.',
  'Google Sheets log with every lead, response time, source, and outcome.',
  'Twilio integration with full A2P 10DLC registration support (we walk you through it).',
  'Weekly performance report every Friday — total leads, average response time, after-hours captures.',
  '30-day optimization included — we tune the AI message and add improvements based on your real data.',
];

const flowNodes = ['New Lead', 'AI Drafts Reply', 'SMS Sent', 'Slack Alert', 'Logged'];

function FlowAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (flowNodes.length + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-8">
      {flowNodes.map((node, i) => (
        <div key={node} className="flex flex-col items-center">
          <motion.div
            className={`px-5 py-3 rounded-xl border text-sm font-medium transition-colors duration-300 ${
              i <= activeIndex
                ? 'border-[var(--accent)] bg-[var(--accent-subtle)] text-[var(--accent)]'
                : 'border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)]'
            }`}
          >
            {node}
          </motion.div>
          {i < flowNodes.length - 1 && (
            <div
              className={`w-px h-6 transition-colors duration-300 ${
                i < activeIndex
                  ? 'bg-[var(--accent)]'
                  : 'bg-[var(--border)]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function WhatYouGet() {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-3"
      >
        What you get.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[var(--text-secondary)] text-lg mb-12"
      >
        One system. Built in 5 business days. Pays for itself in the first
        month.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {checklist.map((item, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle2
                size={18}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4 text-center">
            Data flow
          </p>
          <FlowAnimation />
        </motion.div>
      </div>
    </Section>
  );
}

// ─── SECTION 4: HOW IT WORKS ────────────────────────────────

const steps = [
  {
    number: '01',
    heading: 'Day 1 — Kickoff',
    body: '30-min call. We map your lead sources, set up your Twilio account together, and you sign a one-page SOW.',
  },
  {
    number: '02',
    heading: 'Days 2–4 — Build',
    body: 'We configure the workflow, register your Twilio number with the carriers, and test end-to-end with simulated leads. You see live progress.',
  },
  {
    number: '03',
    heading: 'Day 5 — Live',
    body: 'We go live and babysit the first 24 hours. You get your first weekly performance report on Friday.',
  },
];

function HowItWorks() {
  return (
    <Section className="bg-[var(--bg-secondary)]">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-12"
      >
        From signed to live in 5 business days.
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, ease }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-bold mb-5">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              {step.heading}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── SECTION 5: PRICING ─────────────────────────────────────

function Pricing() {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-12 text-center"
      >
        Simple pricing. No surprises.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, ease }}
        className="max-w-[500px] mx-auto rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 shadow-[var(--shadow)]"
      >
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
          Speed-to-Lead SMS System
        </h3>

        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-[var(--text-primary)]">
            $1,000
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            one-time setup
          </p>
        </div>

        <div className="border-t border-[var(--border)] my-6" />

        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-[var(--text-primary)]">
            + $300 / month
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            optimization retainer (starts 30 days after go-live, cancel anytime
            with 30 days notice)
          </p>
        </div>

        <div className="border-t border-[var(--border)] my-6" />

        <ul className="space-y-2 mb-8">
          {[
            'Twilio + AI API costs paid directly to providers (~$10–20/month total)',
            'No long-term contract',
            '30-day money-back guarantee if not delivered in working order',
          ].map((line, i) => (
            <li
              key={i}
              className="text-xs text-[var(--text-secondary)] flex gap-2"
            >
              <span className="text-[var(--text-muted)]">·</span>
              {line}
            </li>
          ))}
        </ul>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[var(--accent)] text-white rounded-full py-3.5 font-medium hover:bg-[var(--accent-hover)] transition-colors text-sm text-center"
        >
          Book a 15-min discovery call
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-sm text-[var(--text-muted)] mt-6"
      >
        Available for businesses in the United States and United Kingdom. Other
        countries: ask on the discovery call.
      </motion.p>
    </Section>
  );
}

// ─── SECTION 6: DEMO ────────────────────────────────────────

function Demo() {
  return (
    <Section id="demo" className="bg-[var(--bg-secondary)]">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-3"
      >
        See it run.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[var(--text-secondary)] text-lg mb-12"
      >
        Here&apos;s what happens the moment a lead fills out your form.
      </motion.p>

      {/* TODO: Replace with Loom embed iframe when recorded */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        id="demo-video"
        className="w-full aspect-video rounded-2xl border-2 border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)] flex items-center justify-center mb-8"
      >
        <p className="text-[var(--text-muted)] text-sm font-medium">
          Demo video coming soon
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {[
          'Form submitted at 0s',
          'AI drafts personalized SMS at 3s',
          'SMS delivered to customer at 7s',
        ].map((caption, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
            <span className="text-sm text-[var(--text-secondary)]">
              {caption}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── SECTION 7: PILOT RESULTS ───────────────────────────────

const pilotCards = [
  {
    number: '< 10s',
    label:
      'Average end-to-end response time in simulated lead testing (form submit to SMS delivered)',
  },
  {
    number: '100%',
    label:
      'Of valid leads received an SMS within the response window during 50+ test runs',
  },
  {
    number: '0',
    label:
      'Manual hours required after go-live — the system runs without supervision',
  },
];

function PilotResults() {
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-3"
      >
        What the system actually does.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[var(--text-secondary)] text-lg mb-12 max-w-2xl"
      >
        Honest pilot data from our own testing &mdash; not a real client yet,
        but real performance numbers.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {pilotCards.map((card, i) => (
          <motion.div
            key={card.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, ease }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8"
          >
            <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-3">
              {card.number}
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {card.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-sm text-[var(--text-muted)] max-w-2xl mx-auto"
      >
        We&apos;re opening up the first 3 client slots for November–December
        2026. Your real data replaces these pilot numbers as soon as we go live.
      </motion.p>
    </Section>
  );
}

// ─── SECTION 8: FAQ ─────────────────────────────────────────

const faqItems = [
  {
    q: 'What if I cancel after the first month?',
    a: 'No long contract. The setup fee is one-time. The $300/month retainer is month-to-month with 30 days\' notice — cancel for any reason.',
  },
  {
    q: "What's the total ongoing cost beyond the $300/month?",
    a: "You'll pay Twilio directly: roughly $1.15/month for your number, $19 one-time for A2P 10DLC registration, plus about $0.012 per SMS sent. For a contractor at 500 leads/month, total third-party cost is around $10–20/month. AI API runs on a free tier at your volume.",
  },
  {
    q: 'Do I need to know anything technical?',
    a: "No. We handle everything. You'll log into Twilio once during kickoff to verify your business, then you never touch the system again. Slack alerts and the Google Sheet are the only things you interact with.",
  },
  {
    q: 'How is this different from a Zapier or HubSpot auto-reply?',
    a: "Two things. First: every message is personalized to the actual lead's service request — not a templated 'thanks, we'll be in touch.' Second: the SMS arrives in under 60 seconds at 2am, 7 days a week, with no human involvement. Most auto-replies fire only during business hours or sit in a queue.",
  },
  {
    q: "What if my Twilio account isn't approved in time?",
    a: "Twilio's A2P 10DLC approval typically takes 1–3 business days for LLCs and corporations. We start the registration on Day 1 so it's approved by Day 4–5. If carriers reject the registration, we refund the setup fee in full.",
  },
  {
    q: 'Can you integrate with my existing CRM (ServiceTitan, JobNimbus, Housecall Pro)?',
    a: "Yes — that's a phase-2 integration after the SMS system is live, typically scoped at an additional $500 setup. We don't do it on Day 1 because we want the core system delivering value first.",
  },
  {
    q: 'Do you work outside the US and UK?',
    a: "For SMS deliverability and carrier compliance reasons, we currently support US and UK only. Other countries — ask on the discovery call and we'll tell you honestly whether we can make it work.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section className="bg-[var(--bg-secondary)]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-12"
        >
          Questions you&apos;re probably asking.
        </motion.h2>

        <div className="space-y-3">
          {faqItems.map((faq, i) => (
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
                <span className="font-medium text-[var(--text-primary)] pr-2">
                  {faq.q}
                </span>
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
                    transition={{ duration: 0.25, ease }}
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
    </Section>
  );
}

// ─── SECTION 9: FINAL CTA ───────────────────────────────────

function FinalCTA() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          Ready to stop losing leads?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-4"
        >
          Book a 15-min discovery call.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed"
        >
          I&apos;ll ask about your current lead flow, response times, and ad
          spend. If it&apos;s a fit, I&apos;ll tell you exactly what I&apos;d
          build and what it costs. If it isn&apos;t, I&apos;ll tell you that
          too.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--accent)] text-white rounded-full px-8 py-4 font-medium hover:bg-[var(--accent-hover)] transition-colors text-sm"
          >
            Book a 15-min discovery call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 space-y-1"
        >
          {[
            'Reply within 24 hours — always',
            '30-day money-back guarantee on the setup fee',
            'No pitch deck. No fluff. No obligation.',
          ].map((line, i) => (
            <p key={i} className="text-xs text-[var(--text-muted)]">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-sm text-[var(--text-secondary)]"
        >
          Or email{' '}
          <a
            href="mailto:arunreddy.co@gmail.com"
            className="text-[var(--accent)] hover:underline"
          >
            arunreddy.co@gmail.com
          </a>{' '}
          &middot; +91 91001 71125
        </motion.p>
      </div>
    </Section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────

export default function SpeedToLeadPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <WhatYouGet />
      <HowItWorks />
      <Pricing />
      <Demo />
      <PilotResults />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
