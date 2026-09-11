export interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: 'fullstack' | 'frontend' | 'systems' | 'creative';
  shortDescription: string;
  description: string;
  role: string;
  stack: string[];
  status: 'live' | 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  flagship?: boolean;
  github?: string;
  live?: string;
  image?: string;
  gallery?: string[];
  problem?: string;
  solution?: string;
  engineering?: string;
  features?: string[];
  outcome?: string;
  team?: TeamMember[];
  year?: string;
  conceptHeadline?: string;
  sections?: ProjectSection[];
}

export interface ProjectSection {
  title: string;
  content: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: 'core' | 'proficient' | 'familiar';
  icon?: string;
}

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'databases'
  | 'devops'
  | 'architecture'
  | 'other';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  description: string;
  skills: Skill[];
  emphasis: 'primary' | 'secondary';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  type: 'employment' | 'internship' | 'startup' | 'freelance';
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  note?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  location: string;
  email: string;
  profileImage: string;
  logo?: string;
  cvPath: string | null;
  education: Education;
  socials: SocialLink[];
  headline: string;
  subheadline: string;
  description: string;
}

export interface DesignPattern {
  name: string;
  category: 'creational' | 'structural' | 'behavioral';
  description: string;
  useCase: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
