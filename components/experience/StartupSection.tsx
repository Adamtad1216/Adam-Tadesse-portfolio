'use client';

import { motion } from 'framer-motion';
import { Users, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { fadeUp } from '@/lib/animations';

const coFounders = [
  {
    name: 'Adam Tadesse',
    role: 'Co-Founder & Full-Stack Developer',
    education: 'B.Sc. Software Engineering',
  },
  {
    name: 'Mati Melkamu',
    role: 'Co-Founder & Full-Stack Developer',
    education: 'B.Sc. Software Engineering',
  },
  {
    name: 'Mintesnot Markos',
    role: 'Co-Founder & Full-Stack Developer',
    education: 'B.Sc. Software Engineering',
  },
];

export function StartupSection() {
  return (
    <motion.div variants={fadeUp} className="mb-16">
      <div className="relative rounded-3xl border border-accent/20 bg-gradient-to-b from-accent/[0.04] to-surface p-8 lg:p-12 overflow-hidden">
        {/* Subtle decorative glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none gpu-layer"
          style={{ background: 'radial-gradient(circle at top right, var(--color-accent-dim) 0%, transparent 70%)' }}
        />

        {/* Badge & Title */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
              Startup Venture
            </span>
            <span className="text-text-muted text-xs font-mono">
              Addis Ababa, Ethiopia
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <ShieldCheck size={14} className="text-accent" />
            Equal Three-Founder Partnership
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-text-primary">
              Clone Technologies
            </h3>
            <p className="text-accent font-medium text-base">
              Co-Founder &amp; Full-Stack Developer
            </p>
            <p className="text-text-secondary leading-relaxed">
              Co-founded Clone Technologies alongside two fellow software engineering graduates to architect and engineer enterprise business solutions. Working as equal co-founders, we joined forces to tackle complex business operations through modern software architecture.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Our flagship focus is the Wholesale Distribution System ERP — an enterprise-grade platform designed to unify fragmented supply chain, inventory, and order fulfillment workflows into a cohesive digital backbone.
            </p>

            <div className="pt-2">
              <Link
                href="/work/wholesale-distribution-erp"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Explore the ERP Case Study
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: 3 Equal Founders Grid */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
              <Users size={14} className="text-accent" />
              Equal Co-Founders &amp; Engineers
            </div>

            {coFounders.map((founder) => (
              <div
                key={founder.name}
                className="p-4 rounded-xl border border-border-subtle bg-surface/80 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-display font-semibold text-text-primary text-sm">
                    {founder.name}
                  </h4>
                  <p className="text-text-muted text-xs font-mono mt-0.5">
                    {founder.role}
                  </p>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono text-accent/80 px-2 py-0.5 rounded bg-accent/5 border border-accent/10 shrink-0">
                  {founder.education}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
