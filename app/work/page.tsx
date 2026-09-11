import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Adam Tadesse — full-stack applications, smart city dashboards, accessibility platforms, and enterprise systems.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            All Projects
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            A collection of engineering projects — each one a complete problem
            solved through architecture, code, and iteration.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="relative group rounded-2xl border border-border hover:border-accent/30 bg-surface p-8 transition-all duration-500"
            >
              {/* Main card link */}
              <Link
                href={`/work/${project.slug}`}
                className="absolute inset-0 z-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View ${project.title} case study`}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 pointer-events-none">
                {/* Number */}
                <span className="font-display text-4xl font-bold text-text-primary/10 shrink-0 w-16">
                  0{i + 1}
                </span>

                {/* Snapshot Thumbnail */}
                {project.image && (
                  <div className="relative w-28 h-20 rounded-xl overflow-hidden border border-border-subtle bg-elevated shrink-0 hidden sm:block">
                    <Image
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="112px"
                    />
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    {project.status === 'live' && (
                      <span className="flex items-center gap-1.5 text-xs text-success font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary">
                    {project.shortDescription}
                  </p>
                  <p className="text-text-muted text-sm">{project.role}</p>
                </div>

                {/* Stack + Arrow */}
                <div className="flex items-center gap-6 shrink-0">
                  <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-mono text-text-muted bg-elevated"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Action icons */}
                  <div className="flex items-center gap-3 pointer-events-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors p-1"
                        aria-label={`View ${project.title} source code`}
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors p-1"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <ArrowUpRight
                      size={20}
                      className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
