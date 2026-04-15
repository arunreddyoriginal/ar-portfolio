'use client';

// src/components/sections/Projects.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, Brain, Server } from 'lucide-react';
import Link from 'next/link';
import { projects, type ProjectCategory } from '@/data/projects';

const categoryIcons: Record<string, React.ReactNode> = {
  'Workflow Automation': <Zap size={12} />,
  'Agentic AI': <Brain size={12} />,
  'Infrastructure': <Server size={12} />,
};

const categoryColors: Record<string, string> = {
  'Workflow Automation': 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  'Agentic AI': 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  'Infrastructure': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
};

const filters: Array<{ label: string; value: ProjectCategory | 'All' }> = [
  { label: 'All', value: 'All' },
  { label: 'Workflow Automation', value: 'Workflow Automation' },
  { label: 'Agentic AI', value: 'Agentic AI' },
  { label: 'Infrastructure', value: 'Infrastructure' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-4"
          >
            9 systems shipped.{' '}
            <span
              className="font-serif-italic text-[var(--text-secondary)]"
              style={{ fontFamily: 'var(--font-serif), serif' }}
            >
              Each one solving a real bottleneck.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg max-w-2xl"
          >
            Not demos. Not tutorials. Production systems that automate real workflows.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.value
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.25, 0, 0, 1] }}
                className={project.featured && i < 3 ? 'md:col-span-1' : ''}
              >
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-7 card-hover relative overflow-hidden">
                    {/* Accent bar on hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl" />

                    {/* Category badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                          categoryColors[project.category]
                        }`}
                      >
                        {categoryIcons[project.category]}
                        {project.category}
                      </span>
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Stack chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="stack-badge text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="stack-badge text-xs">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                      <span>Read case study</span>
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
