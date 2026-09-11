'use client';

import { motion } from 'framer-motion';
import { fadeUp, scrollViewport } from '@/lib/animations';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = '',
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={fadeUp}
      className={`relative py-24 lg:py-32 ${fullWidth ? '' : 'max-w-7xl mx-auto px-6 lg:px-8'} ${className}`}
    >
      {children}
    </motion.section>
  );
}
