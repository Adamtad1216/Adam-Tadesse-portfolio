import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'urbansight',
    title: 'UrbanSight',
    category: 'fullstack',
    shortDescription: 'Smart City Web Dashboard',
    description:
      'A smart city web dashboard developed for Arba Minch Water Supply and Sewerage Utility. A comprehensive system for managing urban infrastructure operations with AI-powered capabilities.',
    role: 'Full-Stack Developer (Independent)',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI/ML Integration'],
    status: 'live',
    featured: true,
    flagship: true,
    image: '/images/urban-sight.png',
    github: 'https://github.com/Adamtad1216/UrbanSight',
    live: 'https://urban-sight.vercel.app/',
    year: '2024',
    problem:
      'Urban water supply and sewerage utilities need to manage complex infrastructure, track operational workflows, and make data-driven decisions — but often rely on fragmented, manual processes that limit visibility and responsiveness.',
    solution:
      'UrbanSight is a full-stack smart city dashboard that centralizes operational data, provides geospatial visualization, and integrates AI for reporting and predictive analysis — giving utility operators a single system to monitor, manage, and improve city services.',
    engineering:
      'Built independently as a complete MERN stack application. The architecture handles real-time operational workflows, geospatial mapping for infrastructure visualization, AI-powered report generation, and predictive analytics. The system includes a companion mobile application for field operations.',
    features: [
      'Smart city operational dashboard',
      'AI-powered report generation',
      'AI-based prediction capabilities',
      'Geospatial maps and infrastructure visualization',
      'Operational workflow management',
      'Mobile application for field operations',
      'Full-stack MERN architecture',
    ],
    sections: [
      {
        title: 'The Problem',
        content:
          'Urban utilities manage thousands of infrastructure assets across a city. Without centralized visibility, operational decisions are reactive rather than proactive — leading to inefficiency, delayed maintenance, and poor resource allocation.',
      },
      {
        title: 'The System',
        content:
          'UrbanSight provides a unified dashboard where operators can visualize infrastructure on maps, track work orders through defined workflows, and access real-time operational data — replacing fragmented manual processes with a single source of truth.',
      },
      {
        title: 'The Intelligence',
        content:
          'AI integration enables automated report generation from operational data and predictive analysis to anticipate infrastructure needs before they become critical — shifting operations from reactive to proactive.',
      },
      {
        title: 'The Engineering',
        content:
          'The entire system was independently architected and built as a full MERN stack application — from database schema design through API architecture to the frontend dashboard and companion mobile app. Every layer was handled by a single developer.',
      },
    ],
  },
  {
    slug: 'accessible-exam-system',
    title: 'Ethiopian National Accessible Exam System',
    category: 'fullstack',
    shortDescription: 'Accessibility-First Examination Platform',
    description:
      'A web system designed to improve accessibility for visually impaired students and teachers, facilitating learning and examination workflows through inclusive technology.',
    role: 'Full-Stack Developer (Independent)',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Text-to-Speech'],
    status: 'completed',
    featured: true,
    image: '/images/accessible-exam.png',
    github:
      'https://github.com/Adamtad1216/Ethiopian-National-Accessible-Exam-System',
    year: '2024',
    conceptHeadline: 'Technology should not create barriers.',
    problem:
      'Visually impaired students and teachers in Ethiopia face significant barriers when interacting with digital examination systems. Standard web interfaces assume visual interaction, excluding users who rely on assistive technologies.',
    solution:
      'A purpose-built examination platform with Text-to-Speech integration that enables visually impaired users to navigate, take, and manage exams through audio-driven interfaces — making the examination process genuinely accessible.',
    engineering:
      'Built as a full MERN stack application with TTS integration as a first-class feature rather than an afterthought. The system architecture ensures that every workflow — from exam creation to exam-taking to results review — is navigable through audio feedback.',
    features: [
      'Text-to-Speech integration for visually impaired users',
      'Accessible examination workflows',
      'Teacher and student interfaces',
      'Audio-driven navigation system',
      'Full-stack MERN architecture',
    ],
    sections: [
      {
        title: 'The Problem',
        content:
          'Digital examination systems typically assume sighted users. For visually impaired students and teachers, this creates exclusion from educational processes that are increasingly moving online.',
      },
      {
        title: 'The Approach',
        content:
          'Rather than adding accessibility as a layer on top of a conventional system, the platform was designed from the ground up with TTS integration and audio-driven workflows as core architectural decisions.',
      },
      {
        title: 'The Impact',
        content:
          'The system enables visually impaired users to independently navigate examination workflows — creating, taking, and reviewing exams through audio feedback without requiring sighted assistance.',
      },
    ],
  },
  {
    slug: 'adam-galaxy-travel',
    title: 'Adam Galaxy Travel',
    category: 'creative',
    shortDescription: 'Immersive Visual Travel Experience',
    description:
      'A visually experimental travel project focused heavily on animation, interaction design, and creating an immersive web experience that pushes creative frontend boundaries.',
    role: 'Frontend Developer',
    stack: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    status: 'completed',
    featured: true,
    image: '/images/galaxy-travel.png',
    github: 'https://github.com/AdamTd/Adam-Galaxy-Travel',
    year: '2023',
    problem:
      'Most travel websites rely on static layouts and stock photography. The challenge was to create a web experience that makes the user feel the excitement of travel through motion and visual storytelling.',
    solution:
      'A frontend-only project that uses creative animation, visual layering, and interaction design to create an immersive experience — demonstrating that compelling web experiences come from thoughtful motion design, not just content.',
    features: [
      'Rich animation sequences',
      'Immersive visual storytelling',
      'Creative interaction design',
      'Experimental frontend techniques',
    ],
    sections: [
      {
        title: 'The Vision',
        content:
          'This project explores what happens when animation and interaction become the primary storytelling tools. Every transition, hover state, and scroll interaction was designed to create a sense of movement and discovery.',
      },
      {
        title: 'The Craft',
        content:
          'Pure frontend experimentation — pushing CSS animations, JavaScript-driven motion, and visual layering to create an experience that feels more like an interactive film than a traditional website.',
      },
    ],
  },
  {
    slug: 'wholesale-distribution-erp',
    title: 'Wholesale Distribution System ERP',
    category: 'systems',
    shortDescription: 'Enterprise Resource Planning System',
    description:
      'A comprehensive ERP system for wholesale distribution management, built as part of Clone Technologies — a three-founder startup focused on building business software solutions.',
    role: 'Co-Founder & Full-Stack Developer',
    stack: [], // Technologies to be specified later
    status: 'completed',
    featured: true,
    image: '/images/wholesale-erp.png',
    // github and live URLs to be added when available
    year: '2024',
    problem:
      'Wholesale distribution businesses manage complex workflows across inventory, orders, suppliers, customers, and logistics. Without integrated systems, these operations become fragmented and error-prone.',
    solution:
      'A full ERP system designed to unify wholesale distribution workflows into a single platform — handling the complexity of business operations that distribution companies face daily.',
    engineering:
      'Built collaboratively within Clone Technologies, a three-founder startup where all founders contributed as full-stack developers. The system demonstrates large-scale application architecture, business workflow modeling, and the ability to work effectively within a technical team.',
    features: [
      'Enterprise resource planning',
      'Wholesale distribution management',
      'Business workflow automation',
      'Collaborative startup development',
    ],
    team: [
      {
        name: 'Adam Tadesse',
        role: 'Co-Founder & Full-Stack Developer',
      },
      {
        name: 'Mati Melkamu',
        role: 'Co-Founder & Full-Stack Developer',
      },
      {
        name: 'Mintesnot Markos',
        role: 'Co-Founder & Full-Stack Developer',
      },
    ],
    sections: [
      {
        title: 'The Challenge',
        content:
          'Building enterprise-grade software requires understanding complex business domains, designing for scale, and making architectural decisions that support evolving requirements — all while shipping working software.',
      },
      {
        title: 'The Team',
        content:
          'Clone Technologies is a startup founded by three software engineering graduates who share equal founding status. The team combines individual technical strengths with collaborative problem-solving to build production business software.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getFlagshipProject(): Project | undefined {
  return projects.find((p) => p.flagship);
}
