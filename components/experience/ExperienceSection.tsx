'use client';

import { motion } from 'framer-motion';
import { Briefcase, Rocket, MapPin, Calendar } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experiences } from '@/data/experience';
import { fadeUp, staggerContainer } from '@/lib/animations';

import { StartupSection } from './StartupSection';

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <SectionHeading
          label="// Experience & Ventures"
          title="Where I've worked & built"
          description="From co-founding an enterprise software startup to working in professional QA and engineering teams."
        />

        {/* Dedicated Startup Spotlight */}
        <StartupSection />

        <div className="space-y-6 max-w-4xl">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              className="group rounded-2xl border border-border hover:border-accent/20 bg-surface p-8 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {exp.type === 'startup' ? (
                      <Rocket size={16} className="text-accent" />
                    ) : (
                      <Briefcase size={16} className="text-accent" />
                    )}
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      {exp.company}
                    </h3>
                    {exp.type === 'startup' && (
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                        Startup
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary font-medium">{exp.role}</p>
                </div>
                <div className="flex items-center gap-4 text-text-muted text-sm font-mono shrink-0">
                  {exp.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-text-muted mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
