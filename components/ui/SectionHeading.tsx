'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`mb-16 lg:mb-20 ${align === 'center' ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block text-accent font-mono text-sm mb-4 tracking-wider uppercase">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-text-secondary text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
