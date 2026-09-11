'use client';

import { motion } from 'framer-motion';
import { GitBranch, Terminal, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { siteConfig } from '@/data/site';

interface LabRepo {
  name: string;
  account: 'primary' | 'previous';
  accountHandle: string;
  description: string;
  url: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  tags: string[];
  branch: string;
}

const curatedRepos: LabRepo[] = [
  {
    name: 'UrbanSight',
    account: 'primary',
    accountHandle: 'Adamtad1216',
    description:
      'Smart city web dashboard for municipal water & sewerage utility. Real-time telemetry, geospatial mapping, and AI-assisted predictive reporting.',
    url: 'https://github.com/Adamtad1216/UrbanSight',
    language: 'JavaScript / React',
    languageColor: '#f7df1e',
    stars: 12,
    forks: 4,
    tags: ['MERN', 'Geospatial', 'AI/ML', 'Full-Stack'],
    branch: 'main',
  },
  {
    name: 'Ethiopian-National-Accessible-Exam-System',
    account: 'primary',
    accountHandle: 'Adamtad1216',
    description:
      'Assistive examination platform engineered for visually impaired students and educators with integrated Text-to-Speech audio navigation workflows.',
    url: 'https://github.com/Adamtad1216/Ethiopian-National-Accessible-Exam-System',
    language: 'JavaScript / Node.js',
    languageColor: '#3178c6',
    stars: 8,
    forks: 2,
    tags: ['Accessibility', 'Text-to-Speech', 'Express', 'MongoDB'],
    branch: 'main',
  },
  {
    name: 'Adam-Galaxy-Travel',
    account: 'previous',
    accountHandle: 'AdamTd',
    description:
      'Experimental frontend journey exploring motion design, choreography, visual layering, and interactive UI storytelling.',
    url: 'https://github.com/AdamTd/Adam-Galaxy-Travel',
    language: 'JavaScript / CSS3',
    languageColor: '#e34c26',
    stars: 6,
    forks: 1,
    tags: ['Creative Frontend', 'Animation', 'UI/UX'],
    branch: 'main',
  },
  {
    name: 'software-architecture-patterns',
    account: 'primary',
    accountHandle: 'Adamtad1216',
    description:
      'Curated implementations of 15+ software design patterns (Repository, Factory, Observer, Strategy) demonstrating clean architecture principles.',
    url: 'https://github.com/Adamtad1216',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 15,
    forks: 5,
    tags: ['Design Patterns', 'Architecture', 'Clean Code'],
    branch: 'main',
  },
];

export function GithubSection() {
  return (
    <SectionWrapper id="lab">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <SectionHeading
          label="// The Lab"
          title="Open Source & Continuous Building"
          description="Where ideas get prototyped, architecture gets tested, and systems are built out in the open."
        />

        {/* Dual GitHub Account Cards */}
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Primary Account */}
          <div className="relative rounded-2xl border border-accent/20 bg-accent/[0.03] p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-text-primary text-lg">
                      Adamtad1216
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/20 text-accent font-semibold">
                      PRIMARY
                    </span>
                  </div>
                  <p className="text-text-muted text-xs font-mono">
                    Current Engineering Hub
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/Adamtad1216"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent/40 transition-all"
                aria-label="Visit primary GitHub profile @Adamtad1216"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Home of full-stack engineering repositories, enterprise systems,
              smart city dashboards, and assistive technology platforms.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-text-muted pt-4 border-t border-accent/10">
              <span className="flex items-center gap-1.5 text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Active Systems
              </span>
              <span>Full-Stack &amp; Architecture</span>
            </div>
          </div>

          {/* Previous Account */}
          <div className="relative rounded-2xl border border-border bg-surface p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-elevated border border-border flex items-center justify-center text-text-muted">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-text-primary text-lg">
                      AdamTd
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-elevated text-text-muted">
                      ARCHIVE
                    </span>
                  </div>
                  <p className="text-text-muted text-xs font-mono">
                    Creative &amp; Early Works
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/AdamTd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-elevated text-text-secondary hover:text-accent hover:border-accent/40 transition-all"
                aria-label="Visit archive GitHub profile @AdamTd"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Creative frontend explorations, motion experiments, and earlier
              interactive software prototypes documenting my engineering evolution.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-text-muted pt-4 border-t border-border-subtle">
              <span className="flex items-center gap-1.5">
                <Terminal size={12} className="text-text-muted" />
                Motion &amp; Visual Lab
              </span>
              <span>Earlier Repositories</span>
            </div>
          </div>
        </motion.div>

        {/* Curated Lab Repositories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {curatedRepos.map((repo) => (
            <motion.div
              key={repo.name}
              variants={fadeUp}
              className="group relative rounded-2xl border border-border hover:border-accent/30 bg-surface p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Code2 size={18} className="text-accent shrink-0" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-base font-bold text-text-primary group-hover:text-accent transition-colors truncate"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-text-muted hover:text-accent transition-colors shrink-0"
                    aria-label={`Open ${repo.name} repository`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="text-text-muted text-xs leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-text-secondary bg-elevated border border-border-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Meta */}
              <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs font-mono text-text-muted">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <GitBranch size={12} />
                    {repo.branch}
                  </span>
                  <span className="text-[10px] text-accent/80 font-mono">
                    @{repo.accountHandle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-12 p-6 rounded-2xl border border-border-subtle bg-elevated flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-xs text-text-secondary">
              git clone https://github.com/Adamtad1216/&lt;repo&gt;
            </span>
          </div>
          <a
            href={siteConfig.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline"
          >
            Explore all repositories on GitHub
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
