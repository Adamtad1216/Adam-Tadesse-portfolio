'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Users, Zap } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';

const milestones = [
  {
    icon: GraduationCap,
    title: 'Software Engineering Graduate',
    description: `Earned a Bachelor's degree in Software Engineering from Arba Minch University, graduating among the top-performing students. Built a strong foundation in algorithms, system design, and software architecture.`,
    period: 'University',
  },
  {
    icon: Code2,
    title: 'Full-Stack Builder',
    description:
      'Developed complete systems independently — from database schema design through API architecture to frontend interfaces and mobile applications. Each project handled end-to-end by a single developer.',
    period: 'Independent',
  },
  {
    icon: Rocket,
    title: 'Independent System Builder',
    description:
      'Built UrbanSight, a smart city dashboard with AI-powered capabilities and geospatial features, and the Ethiopian National Accessible Exam System — both as the sole developer handling the full technical stack.',
    period: 'Projects',
  },
  {
    icon: Users,
    title: 'Startup Co-Founder',
    description:
      'Co-founded Clone Technologies with two fellow engineers to build enterprise business software. Collaborated as equals to architect and develop the Wholesale Distribution System ERP.',
    period: 'Clone Technologies',
  },
  {
    icon: Zap,
    title: 'Continuously Adapting Engineer',
    description:
      'Committed to learning new technologies rapidly and applying them to solve real problems. From AI integration to accessibility, each project pushes into new territory.',
    period: 'Ongoing',
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <SectionHeading
          label="// About"
          title="Engineering Story"
          description="The path from understanding systems to building them."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Profile + Summary */}
          <motion.div variants={fadeUp} className="lg:col-span-4 space-y-6">
            {/* Profile image */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl border border-border bg-surface overflow-hidden">
                <Image
                  src={siteConfig.profileImage}
                  alt={`${siteConfig.name} profile`}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />
            </div>

            {/* Quick facts */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-muted font-mono text-xs w-20">Name</span>
                <span className="text-text-primary">{siteConfig.name}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-muted font-mono text-xs w-20">Title</span>
                <span className="text-text-primary">{siteConfig.title}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-muted font-mono text-xs w-20">Location</span>
                <span className="text-text-primary">{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-muted font-mono text-xs w-20">Education</span>
                <span className="text-text-primary">
                  {siteConfig.education.degree}, {siteConfig.education.field}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-text-muted font-mono text-xs w-20">University</span>
                <span className="text-text-primary">
                  {siteConfig.education.institution}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

              <div className="space-y-8">
                {milestones.map((milestone, i) => {
                  const Icon = milestone.icon;
                  return (
                    <motion.div
                      key={milestone.title}
                      variants={fadeUp}
                      custom={i}
                      className="relative pl-16"
                    >
                      {/* Node */}
                      <div className="absolute left-3 top-1 w-6 h-6 rounded-lg bg-surface border border-border flex items-center justify-center">
                        <Icon size={12} className="text-accent" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-lg font-semibold text-text-primary">
                            {milestone.title}
                          </h3>
                          <span className="text-text-muted font-mono text-xs hidden sm:inline">
                            {milestone.period}
                          </span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
