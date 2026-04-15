// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getProjectBySlug, getAllSlugs } from '@/data/projects';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Arun Reddy`,
    description: project.tagline,
  };
}

const categoryColors: Record<string, string> = {
  'Workflow Automation': 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  'Agentic AI': 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  'Infrastructure': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
};

export default function CaseStudyPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="pt-24 pb-24">
        <div className="section-container max-w-4xl">
          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  categoryColors[project.category]
                }`}
              >
                {project.category}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 hover:opacity-80 transition-opacity"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live Demo
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Problem */}
          <section className="mb-10 p-8 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4">
              The Problem
            </h2>
            <p className="text-[var(--text-primary)] leading-relaxed">{project.problem}</p>
          </section>

          {/* Solution */}
          <section className="mb-10 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
              The Solution
            </h2>
            <p className="text-[var(--text-primary)] leading-relaxed">{project.solution}</p>
          </section>

          {/* Architecture (optional) */}
          {project.architecture && (
            <section className="mb-10 p-8 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border)]">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                Architecture
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
                {project.architecture}
              </p>
            </section>
          )}

          {/* Impact */}
          <section className="mb-10 p-8 rounded-2xl bg-[var(--accent-subtle)] border border-[var(--accent)]/20">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
              Business Impact
            </h2>
            <p className="text-[var(--text-primary)] leading-relaxed font-medium">{project.impact}</p>
          </section>

          {/* Stack */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="stack-badge">{tech}</span>
              ))}
            </div>
          </section>

          {/* What I can build */}
          <section className="mb-14 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6">
              What I can build for your company
            </h2>
            <ul className="space-y-3">
              {project.whatICanBuild.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold mt-0.5 flex-shrink-0">→</span>
                  <span className="text-[var(--text-secondary)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center p-10 rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)]">
            <h3 className="font-bold text-2xl text-[var(--text-primary)] mb-3">
              Want something similar?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
              Tell me your bottleneck. I&apos;ll tell you what to build, how long it takes, and what it
              costs — in a free 20-minute discovery call.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-full px-7 py-3.5 font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              Let&apos;s talk →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
