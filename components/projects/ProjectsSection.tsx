'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/types';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getFeaturedProjects, getFlagshipProject } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

function FlagshipProject({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeUp} className="mb-20">
      <div className="relative group block rounded-2xl border border-border hover:border-accent/30 bg-surface overflow-hidden transition-all duration-500">
        {/* Main card link covering background */}
        <Link
          href={`/work/${project.slug}`}
          className="absolute inset-0 z-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={`View ${project.title} case study`}
        />

        {/* Top accent bar */}
        <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="relative z-10 p-8 lg:p-12 pointer-events-none">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left — Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-accent font-mono text-xs tracking-wider uppercase">
                  Flagship Project
                </span>
                {project.status === 'live' && (
                  <span className="flex items-center gap-1.5 text-xs text-success font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Live
                  </span>
                )}
                {project.status === 'in-progress' && (
                  <span className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Launching Soon
                  </span>
                )}
              </div>

              <h3 className="font-display text-3xl lg:text-4xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-text-secondary text-lg">
                {project.shortDescription}
              </p>

              <p className="text-text-muted leading-relaxed">
                {project.problem}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono text-accent/80 bg-accent/[0.08] border border-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2 pointer-events-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors p-1"
                  >
                    <GithubIcon size={16} />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors p-1"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                <Link
                  href={`/work/${project.slug}`}
                  className="flex items-center gap-1 text-sm text-accent ml-auto group-hover:translate-x-1 transition-transform duration-300 pointer-events-auto"
                >
                  View Case Study
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — Visual / Snapshot */}
            <div className="relative rounded-xl overflow-hidden bg-elevated border border-border-subtle aspect-video lg:aspect-auto min-h-[280px] lg:min-h-[340px] flex items-center justify-center">
              {project.image ? (
                <div className="relative w-full h-full min-h-[280px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} snapshot`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent opacity-60" />
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="relative text-center p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20">
                      <span className="font-display text-2xl font-bold text-accent">US</span>
                    </div>
                    <p className="font-display text-lg font-medium text-text-primary">
                      Smart City Dashboard
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLinks = project.github || project.live;

  return (
    <motion.div variants={fadeUp} className="h-full">
      <div className="relative group rounded-2xl border border-border hover:border-accent/30 bg-surface overflow-hidden transition-all duration-500 h-full flex flex-col justify-between">
        {/* Main card link covering background */}
        <Link
          href={`/work/${project.slug}`}
          className="absolute inset-0 z-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={`View ${project.title} case study`}
        />

        <div className="relative z-10 pointer-events-none flex flex-col h-full justify-between">
          {/* Visual header / Snapshot */}
          <div className="relative h-52 bg-elevated flex items-center justify-center overflow-hidden border-b border-border-subtle">
            {project.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={`${project.title} snapshot`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
              </div>
            ) : (
              <>
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative text-center space-y-2">
                  <span
                    className="font-display text-4xl font-bold opacity-10"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  {project.conceptHeadline && (
                    <p className="text-text-muted text-sm italic px-6">
                      &ldquo;{project.conceptHeadline}&rdquo;
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-accent font-mono text-xs tracking-wider uppercase">
                      {project.category}
                    </span>
                    {project.status === 'in-progress' && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        Launching Soon
                      </span>
                    )}
                    {project.status === 'live' && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono text-success bg-success/10 border border-success/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-1 shrink-0"
                />
              </div>

              <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-mono text-text-muted bg-elevated"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="px-2 py-0.5 rounded text-xs font-mono text-text-muted bg-elevated">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Links */}
            {hasLinks && (
              <div className="flex items-center gap-4 pt-4 border-t border-border-subtle pointer-events-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors p-1"
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors p-1"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            )}

            {/* Status indicator for projects without links */}
            {!hasLinks && project.status === 'completed' && (
              <div className="pt-4 border-t border-border-subtle">
                <span className="text-xs font-mono text-text-muted">
                  Links coming soon
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const flagship = getFlagshipProject();
  const otherProjects = getFeaturedProjects().filter((p) => !p.flagship);

  return (
    <SectionWrapper id="work">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <SectionHeading
          label="// Selected Work"
          title="Projects that solve real problems"
          description="Each project represents a complete engineering challenge — from understanding the problem to deploying the solution."
        />

        {/* Flagship */}
        {flagship && <FlagshipProject project={flagship} />}

        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>

        {/* View all link */}
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-text-secondary border border-border rounded-xl hover:text-accent hover:border-accent/40 transition-all duration-300"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
