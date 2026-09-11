'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  Layout,
  Database,
  Code2,
  Globe,
  IterationCw,
} from 'lucide-react';

const stages = [
  { icon: Lightbulb, label: 'IDEA', color: '#f59e0b', shadow: 'rgba(245, 158, 11, 0.25)' },
  { icon: Layout, label: 'ARCHITECT', color: '#7c3aed', shadow: 'rgba(124, 58, 237, 0.25)' },
  { icon: Database, label: 'DATABASE', color: '#3b82f6', shadow: 'rgba(59, 130, 246, 0.25)' },
  { icon: Code2, label: 'API', color: '#22c55e', shadow: 'rgba(34, 197, 94, 0.25)' },
  { icon: Globe, label: 'APPLICATION', color: 'var(--color-accent)', shadow: 'var(--color-accent-dim)' },
  { icon: IterationCw, label: 'DEPLOY', color: '#ec4899', shadow: 'rgba(236, 72, 153, 0.25)' },
];

export function SystemDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto" role="img" aria-label="System architecture flow diagram showing the development process from Idea to Deployment">
      {/* Central ring */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        {/* Outer ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="170"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-border"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        {/* Inner ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-border-subtle"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
        />

        {/* Connecting lines from center to nodes */}
        {stages.map((_, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const x = 200 + 170 * Math.cos(angle);
          const y = 200 + 170 * Math.sin(angle);
          return (
            <motion.line
              key={`line-${i}`}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border-subtle"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
            />
          );
        })}

        {/* Flow arrows between nodes */}
        {stages.map((_, i) => {
          const angle1 = (i * 60 - 90) * (Math.PI / 180);
          const angle2 = ((i + 1) * 60 - 90) * (Math.PI / 180);
          const x1 = 200 + 145 * Math.cos(angle1);
          const y1 = 200 + 145 * Math.sin(angle1);
          const x2 = 200 + 145 * Math.cos(angle2);
          const y2 = 200 + 145 * Math.sin(angle2);
          const cx = 200 + 100 * Math.cos((angle1 + angle2) / 2);
          const cy = 200 + 100 * Math.sin((angle1 + angle2) / 2);
          return (
            <motion.path
              key={`arc-${i}`}
              d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
              stroke={stages[i].color}
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.2, delay: 1 + i * 0.2 }}
            />
          );
        })}
      </svg>

      {/* Center label */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="font-mono text-xs text-accent tracking-widest uppercase">
          Full Stack
        </p>
        <p className="font-display text-lg font-bold text-text-primary mt-1">
          System
        </p>
        <p className="font-display text-lg font-bold text-text-primary -mt-1">
          Builder
        </p>
      </motion.div>

      {/* Stage nodes */}
      {stages.map((stage, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const radius = 42.5; // percentage from center
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const Icon = stage.icon;

        return (
          <motion.div
            key={stage.label}
            className="absolute flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8 + i * 0.15,
              duration: 0.5,
              type: 'spring',
              bounce: 0.3,
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl border border-border-subtle bg-surface flex items-center justify-center"
              whileHover={{ scale: 1.1, borderColor: stage.color }}
              transition={{ duration: 0.2 }}
              style={{
                boxShadow: `0 0 20px -5px ${stage.shadow}`,
              }}
            >
              <Icon size={20} style={{ color: stage.color }} />
            </motion.div>
            <span className="font-mono text-[10px] tracking-wider text-text-muted">
              {stage.label}
            </span>
          </motion.div>
        );
      })}

      {/* Ambient rotating ring - hardware accelerated CSS keyframe */}
      <div
        className="absolute inset-6 rounded-full border border-border-subtle/40 animate-spin-ambient pointer-events-none"
        style={{ borderStyle: 'dashed' }}
      />
    </div>
  );
}
