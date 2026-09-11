import { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'backend',
    label: 'Backend Engineering',
    description: 'Server-side architecture, APIs, and business logic',
    emphasis: 'primary',
    skills: [
      { name: 'Node.js', category: 'backend', proficiency: 'core' },
      { name: 'Express.js v5', category: 'backend', proficiency: 'core' },
      { name: 'NestJS', category: 'backend', proficiency: 'core' },
      { name: 'REST APIs & Swagger', category: 'backend', proficiency: 'core' },
    ],
  },
  {
    category: 'databases',
    label: 'Databases & ORMs',
    description: 'Data modeling, query optimization, and persistence',
    emphasis: 'primary',
    skills: [
      { name: 'PostgreSQL', category: 'databases', proficiency: 'core' },
      { name: 'Prisma ORM', category: 'databases', proficiency: 'core' },
      { name: 'MongoDB', category: 'databases', proficiency: 'core' },
      { name: 'Database Design', category: 'databases', proficiency: 'core' },
    ],
  },
  {
    category: 'architecture',
    label: 'Architecture & Patterns',
    description: 'System design, design patterns, and scalable architectures',
    emphasis: 'primary',
    skills: [
      { name: 'System Architecture', category: 'architecture', proficiency: 'core' },
      { name: 'Design Patterns (15+)', category: 'architecture', proficiency: 'core' },
      { name: 'API Design', category: 'architecture', proficiency: 'core' },
    ],
  },
  {
    category: 'devops',
    label: 'DevOps',
    description: 'Deployment, CI/CD, and infrastructure',
    emphasis: 'primary',
    skills: [
      { name: 'DevOps', category: 'devops', proficiency: 'proficient' },
      { name: 'Deployment', category: 'devops', proficiency: 'proficient' },
      { name: 'CI/CD', category: 'devops', proficiency: 'proficient' },
    ],
  },
  {
    category: 'languages',
    label: 'Languages',
    description: 'Core programming languages',
    emphasis: 'secondary',
    skills: [
      { name: 'JavaScript', category: 'languages', proficiency: 'core' },
      { name: 'TypeScript', category: 'languages', proficiency: 'core' },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend',
    description: 'UI frameworks, styling, and interactive experiences',
    emphasis: 'secondary',
    skills: [
      { name: 'React 19', category: 'frontend', proficiency: 'core' },
      { name: 'Next.js', category: 'frontend', proficiency: 'core' },
      { name: 'Redux Toolkit & TanStack Query', category: 'frontend', proficiency: 'core' },
      { name: 'Tailwind CSS', category: 'frontend', proficiency: 'proficient' },
      { name: 'Animation / Motion', category: 'frontend', proficiency: 'proficient' },
    ],
  },
  {
    category: 'mobile',
    label: 'Mobile',
    description: 'Cross-platform mobile development',
    emphasis: 'secondary',
    skills: [
      { name: 'React Native', category: 'mobile', proficiency: 'proficient' },
    ],
  },
  {
    category: 'other',
    label: 'Additional',
    description: 'AI integration, accessibility, and other capabilities',
    emphasis: 'secondary',
    skills: [
      { name: 'AI Integration', category: 'other', proficiency: 'proficient' },
      { name: 'Accessibility', category: 'other', proficiency: 'proficient' },
    ],
  },
];
