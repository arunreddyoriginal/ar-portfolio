'use client';
// src/components/sections/Industries.tsx
import { motion } from 'framer-motion';

const industries = [
  {
    icon: '🏠',
    name: 'Real Estate',
    uses: [
      'Lead qualification & follow-up sequences',
      'CRM sync automation',
      'Listing description generation',
      'Market report automation',
    ],
  },
  {
    icon: '🛒',
    name: 'E-commerce & Retail',
    uses: [
      'AI customer support (handles 80% of tickets)',
      'Inventory alert automation',
      'Review sentiment analysis',
      'Returns processing workflows',
    ],
  },
  {
    icon: '💻',
    name: 'SaaS & Tech',
    uses: [
      'Trial-to-paid onboarding flows',
      'Support ticket triage system',
      'Churn risk detection',
      'Product usage report automation',
    ],
  },
  {
    icon: '📢',
    name: 'Marketing & Agencies',
    uses: [
      'Client report generation',
      'Content pipeline automation',
      'Lead scoring workflows',
      'Proposal generation from brief',
    ],
  },
  {
    icon: '🏥',
    name: 'Healthcare & Clinics',
    uses: [
      'Appointment reminder systems',
      'Staff scheduling automation',
      'Patient intake processing',
      'Compliance document workflows',
    ],
  },
  {
    icon: '💼',
    name: 'Finance & Operations',
    uses: [
      'Invoice processing automation',
      'Approval workflow systems',
      'Spend anomaly detection',
      'Vendor communication pipelines',
    ],
  },
];

export default function Industries() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="industries" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="section-container">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Industries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)] max-w-3xl"
          >
            Whatever your industry, the bottleneck is the same.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors group"
            >
              <div className="text-2xl mb-3">{ind.icon}</div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors">
                {ind.name}
              </h3>
              <ul className="space-y-2">
                {ind.uses.map((use, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-muted)] mt-0.5 flex-shrink-0">·</span>
                    {use}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Don&apos;t see your industry?
          </p>
          <button
            onClick={scrollToContact}
            className="text-[var(--accent)] font-medium text-sm hover:underline"
          >
            Tell me your bottleneck — I&apos;ll tell you if I can automate it →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
