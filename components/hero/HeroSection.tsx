'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/data/site';
import { SystemDiagram } from './SystemDiagram';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base/90 to-base" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none rounded-full gpu-layer"
        style={{ background: 'radial-gradient(ellipse at center, var(--color-accent-dim) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            {/* Status line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-text-muted font-mono text-sm">
                Available for freelance projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-text-secondary text-lg mb-2 font-mono">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-text-primary">{siteConfig.name.split(' ')[0]}</span>
                <br />
                <span className="text-gradient">{siteConfig.name.split(' ')[1]}</span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-display text-xl sm:text-2xl text-text-secondary font-medium leading-relaxed max-w-xl"
            >
              {siteConfig.headline}
            </motion.p>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-muted text-base leading-relaxed max-w-lg"
            >
              {siteConfig.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-text-inverse font-medium rounded-xl hover:bg-accent/90 transition-all duration-300 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore my work
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </a>
              {siteConfig.cvPath && (
                <a
                  href={siteConfig.cvPath}
                  download="Adam-Tadesse-CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-text-primary font-medium rounded-xl hover:border-accent hover:text-accent transition-all duration-300 text-sm group"
                >
                  <FileDown size={16} className="text-accent group-hover:scale-110 transition-transform duration-200" />
                  Resume / CV
                </a>
              )}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-text-primary font-medium rounded-xl hover:border-accent/40 hover:text-accent transition-all duration-300 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let&apos;s build something
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/Adamtad1216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/adam-tadesse-23b4b1368"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <div className="h-4 w-px bg-border" />
              <span className="text-text-muted font-mono text-xs">
                {siteConfig.location}
              </span>
            </motion.div>
          </div>

          {/* Right — System Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <SystemDiagram />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
