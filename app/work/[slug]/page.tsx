import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ExternalLink,
  Users,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { projects, getProjectBySlug } from '@/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              {project.category}
            </span>
            {project.status === 'live' && (
              <span className="flex items-center gap-1.5 text-xs text-success font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Live
              </span>
            )}
            {project.status === 'in-progress' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Launching Soon / Final Testing
              </span>
            )}
            {project.year && (
              <span className="text-text-muted font-mono text-xs">
                {project.year}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl lg:text-6xl font-bold text-text-primary mb-4">
            {project.title}
          </h1>

          {project.conceptHeadline && (
            <p className="text-text-secondary text-xl italic mb-4">
              &ldquo;{project.conceptHeadline}&rdquo;
            </p>
          )}

          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <div>
              <p className="text-text-muted font-mono text-xs uppercase tracking-wider mb-1">
                Role
              </p>
              <p className="text-text-primary text-sm">{project.role}</p>
            </div>
            {project.year && (
              <div>
                <p className="text-text-muted font-mono text-xs uppercase tracking-wider mb-1">
                  Year
                </p>
                <p className="text-text-primary text-sm">{project.year}</p>
              </div>
            )}
            <div>
              <p className="text-text-muted font-mono text-xs uppercase tracking-wider mb-1">
                Status
              </p>
              <p className="text-text-primary text-sm capitalize">
                {project.status}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm text-text-secondary hover:text-accent hover:border-accent/40 transition-all"
              >
                <GithubIcon size={16} />
                View Source
                <ArrowUpRight size={12} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-text-inverse text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Project Snapshot Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-border bg-surface mb-16 aspect-video shadow-2xl">
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={`${project.title} snapshot`}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center bg-elevated">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative text-center space-y-3">
                <p className="font-display text-2xl font-bold text-text-primary/20">
                  {project.title}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Stack */}
        {project.stack.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-mono text-accent/80 bg-accent/[0.08] border border-accent/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Problem / Solution */}
        {(project.problem || project.solution) && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {project.problem && (
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-error" />
                  The Problem
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-8">
                <h2 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  The Solution
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Sections */}
        {project.sections && project.sections.length > 0 && (
          <div className="space-y-8 mb-16">
            {project.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                  {section.title}
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Engineering */}
        {project.engineering && (
          <div className="mb-16 rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display text-xl font-bold text-text-primary mb-4">
              The Engineering
            </h2>
            <p className="text-text-muted leading-relaxed">
              {project.engineering}
            </p>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-xl font-bold text-text-primary mb-6">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border-subtle bg-surface"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team */}
        {project.team && project.team.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Users size={20} className="text-accent" />
              Team
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {project.team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-border bg-surface p-5 text-center"
                >
                  <p className="font-display font-semibold text-text-primary">
                    {member.name}
                  </p>
                  <p className="text-text-muted text-sm mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-border-subtle">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
          >
            Have a similar project?
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
