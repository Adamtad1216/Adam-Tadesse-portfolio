import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Adam Tadesse',
  title: 'Full-Stack Developer',
  location: 'Addis Ababa, Ethiopia',
  email: 'adamtadesse9@gmail.com',
  profileImage: '/images/profile-placeholder.svg',
  cvPath: null, // Add '/Adam-Tadesse-CV.pdf' when ready
  education: {
    institution: 'Arba Minch University',
    degree: "Bachelor's Degree",
    field: 'Software Engineering',
    note: 'Graduated among the top-performing students',
  },
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/Adamtad1216',
      label: 'GitHub — Primary',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/AdamTd',
      label: 'GitHub — Previous',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adam-tadesse-23b4b1368',
      label: 'LinkedIn',
    },
    {
      platform: 'Email',
      url: 'mailto:adamtadesse9@gmail.com',
      label: 'Email',
    },
  ],
  headline: 'I turn complex problems into software that works.',
  subheadline:
    'Full-stack developer focused on backend systems, databases, architecture, and building complete digital products from idea to deployment.',
  description:
    'Adam Tadesse is a full-stack developer based in Addis Ababa, Ethiopia, specializing in backend engineering, database design, system architecture, and building complete software products.',
};

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;
