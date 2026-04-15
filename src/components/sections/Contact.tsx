'use client';

// src/components/sections/Contact.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CircleCheckBig, Clock, MessageSquare, Globe } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
  budget: string;
  source: string;
}

const whyWorkWithMe = [
  {
    icon: <Clock size={16} />,
    title: 'Working prototype in 48 hours',
    desc: 'You see something running before most agencies finish the discovery call.',
  },
  {
    icon: <MessageSquare size={16} />,
    title: 'Reply within 24 hours — always',
    desc: "If I can't help, I'll tell you immediately. No ghosting.",
  },
  {
    icon: <Globe size={16} />,
    title: 'Fully remote, globally available',
    desc: 'Working with clients across US, UK, and beyond. Time zone is not a problem.',
  },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Start here
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-4"
          >
            Tell me what&apos;s breaking your operation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg"
          >
            I read every message and respond within 24 hours. If there&apos;s a fit, I&apos;ll send
            you a calendar link for a free 20-minute discovery call.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Why work with me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {whyWorkWithMe.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">{item.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">
                &ldquo;You don&apos;t need a brief, a budget, or a clear idea. Just tell me
                what&apos;s slowing your team down. I&apos;ll tell you if I can fix it.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">— Arun Reddy</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
                <CircleCheckBig size={40} className="text-green-500" />
                <h3 className="font-semibold text-xl text-[var(--text-primary)]">Got it.</h3>
                <p className="text-[var(--text-secondary)] max-w-xs">
                  I&apos;ll be back within 24 hours. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: true })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Company *
                    </label>
                    <input
                      {...register('company', { required: true })}
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">Required</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                    Email *
                  </label>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Valid email required</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                    Describe the process you want to automate *
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    placeholder="e.g. Our sales team manually researches 50 leads daily and writes each email by hand. It takes 3 hours every morning..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">Required</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Budget range
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      <option value="">Select range</option>
                      <option>Under $500</option>
                      <option>$500 – $2,000</option>
                      <option>$2,000 – $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      How did you find me?
                    </label>
                    <select
                      {...register('source')}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      <option value="">Select</option>
                      <option>LinkedIn</option>
                      <option>Google</option>
                      <option>Referral</option>
                      <option>Upwork</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] text-white rounded-xl py-4 font-medium hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Send it</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Email me directly at arunreddy.co@gmail.com
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
