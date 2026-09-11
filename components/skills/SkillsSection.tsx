'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Layers,
  Cloud,
  Code2,
  Layout,
  Smartphone,
  Cpu,
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/skills';
import { designPatterns } from '@/data/patterns';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { SkillCategory } from '@/types';

const categoryIcons: Record<SkillCategory, React.ElementType> = {
  backend: Server,
  databases: Database,
  architecture: Layers,
  devops: Cloud,
  languages: Code2,
  frontend: Layout,
  mobile: Smartphone,
  other: Cpu,
};

export function SkillsSection() {
  const [activePattern, setActivePattern] = useState<number | null>(null);

  return (
    <SectionWrapper id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <SectionHeading
          label="// Skills & Patterns"
          title="Technical Arsenal"
          description="Core competencies with emphasis on backend systems, databases, architecture, and DevOps."
        />

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {skillGroups.map((group) => {
            const Icon = categoryIcons[group.category];
            const isPrimary = group.emphasis === 'primary';

            return (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className={cn(
                  'rounded-2xl border p-6 transition-all duration-500',
                  isPrimary
                    ? 'border-accent/20 bg-accent/[0.03] hover:border-accent/40'
                    : 'border-border bg-surface hover:border-border'
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center',
                      isPrimary
                        ? 'bg-accent/10 text-accent'
                        : 'bg-elevated text-text-muted'
                    )}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-text-primary">
                      {group.label}
                    </h3>
                    {isPrimary && (
                      <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                        Core Focus
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-text-muted text-xs mb-4 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-text-secondary">{skill.name}</span>
                      <span
                        className={cn(
                          'text-[10px] font-mono',
                          skill.proficiency === 'core'
                            ? 'text-accent'
                            : 'text-text-muted'
                        )}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Design Patterns */}
        <motion.div variants={fadeUp}>
          <div className="mb-12">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              {'// Patterns Behind the Code'}
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-text-primary mt-2">
              How I Think
            </h3>
            <p className="text-text-muted mt-2 max-w-xl">
              Experience with 15+ software design patterns. Here are some that
              shape how I architect systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {designPatterns.map((pattern, i) => (
              <motion.button
                key={pattern.name}
                variants={fadeUp}
                onClick={() =>
                  setActivePattern(activePattern === i ? null : i)
                }
                className={cn(
                  'text-left rounded-xl border p-5 transition-all duration-300',
                  activePattern === i
                    ? 'border-accent/40 bg-accent/[0.05]'
                    : 'border-border bg-surface hover:border-border'
                )}
                aria-expanded={activePattern === i}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      'font-mono text-xs uppercase tracking-wider',
                      pattern.category === 'creational'
                        ? 'text-amber-400'
                        : pattern.category === 'structural'
                          ? 'text-blue-400'
                          : 'text-emerald-400'
                    )}
                  >
                    {pattern.category}
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold text-text-primary mb-1">
                  {pattern.name}
                </h4>

                <AnimatePresence>
                  {activePattern === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-muted text-xs leading-relaxed mt-2 mb-2">
                        {pattern.description}
                      </p>
                      <p className="text-text-secondary text-xs">
                        <span className="text-accent font-mono">Use:</span>{' '}
                        {pattern.useCase}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
