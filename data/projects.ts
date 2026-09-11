import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'urbansight',
    title: 'UrbanSight',
    category: 'fullstack',
    shortDescription: 'Geospatial Risk Prediction & Smart City Utility Dashboard',
    description:
      'A comprehensive smart city web platform developed for Arba Minch Water Supply and Sewerage Utility. Features an advanced geospatial risk prediction engine ("Leakage Analytics / Predictive Insights Engine") that predicts high-risk geographic infrastructure zones using dynamic geohash grids.',
    role: 'Full-Stack Developer (Independent)',
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Geohash Precision 7',
      'Leaflet GIS',
      'MAD Anomaly Detection',
      'Z-score Statistics',
      'Predictive Analytics',
    ],
    status: 'live',
    featured: true,
    flagship: true,
    image: '/images/urban-sight.png',
    github: 'https://github.com/Adamtad1216/UrbanSight',
    live: 'https://urban-sight.vercel.app/',
    year: '2024',
    problem:
      'Urban water utilities face unexpected pipeline ruptures, unmonitored leakages, and rapid network demand shifts. Without automated anomaly detection and spatial risk modeling, utility teams are trapped in reactive firefighting rather than targeting high-risk sectors before service breaks.',
    solution:
      'UrbanSight centralizes municipal water operations on an interactive GIS map, ingesting citizen issue reports alongside new connection pressure to compute dynamic, geohashed risk scores across city sectors with statistical anomaly detection.',
    engineering:
      'Architected independently as a complete MERN stack application with a multi-tiered predictive insights engine. The risk pipeline runs three model iterations: V1 heuristic baseline (percentile-75 thresholding), V2 statistical rolling-window analysis (Z-score anomaly detection), and V3 production-grade Median Absolute Deviation (MAD) anomaly detection with geohash precision-7 spatial neighbor smoothing (~150m × 150m cells). Assets and telemetry are tracked via branch connection codes, customer IDs, and reading zones.',
    features: [
      'Geospatial Risk Prediction Engine ("Leakage Analytics")',
      'Multi-model analytics pipeline (V1 Heuristic, V2 Z-score, V3 MAD Anomaly Detection)',
      'Dynamic Geohash Precision 7 sector gridding (~150m × 150m cells)',
      'Spatial neighbor smoothing across adjacent geohash cells',
      'Citizen IssueReport & NewConnectionRequest multi-source telemetry',
      'Asset tracking by waterConnectionCode, customerCode & readingZone',
      'Interactive Leaflet GIS visualization with sector risk heat-levels',
      'Operational work-order dispatch & field reporting workflow',
    ],
    sections: [
      {
        title: 'The Problem & Context',
        content:
          'Managing municipal water infrastructure across expanding urban areas is plagued by silent leakages and uneven infrastructure stress. Arba Minch Water Supply and Sewerage Utility needed an objective, data-driven way to locate vulnerable sectors before pipe bursts cause catastrophic supply disruptions and financial loss.',
      },
      {
        title: 'The Predictive Engine Architecture',
        content:
          'Branded as "Leakage Analytics" / "Predictive Insights Engine" in the UI (frontend/src/pages/LeakagePrediction.tsx), the AI is a dedicated geospatial risk prediction engine that computes risk scores and flags statistical spikes across dynamic geohash grid sectors. (It is specifically focused on geospatial infrastructure risk and does not perform water consumption forecasting or automated narrative reports).',
      },
      {
        title: 'Three-Tier Model Evolution',
        content:
          'The analytics pipeline runs three distinct model versions: V1 (analyticsService.js) classifies zones as red/yellow/green using percentile-75 thresholds and 7-day trend comparisons; V2 (analyticsV2Service.js) introduces Z-score anomaly detection, rolling window comparisons, confidence scoring, and optional logistic regression; V3 (analyticsV3Service.js) delivers production-grade Median Absolute Deviation (MAD) anomaly detection, rolling 7d/14d volatility metrics, and spatial neighbor smoothing across adjacent geohash cells.',
      },
      {
        title: 'Dynamic Zone Gridding & Asset Telemetry',
        content:
          'Tracked sectors are dynamically generated without arbitrary limits using Geohash precision 7 (~150m × 150m cells). Any cell with issue or connection activity in the lookback window is dynamically evaluated. Data sources combine citizen-reported leaks/outages (IssueReport model) and infrastructure demand requests (NewConnectionRequest model), binding directly to branch assets (waterConnectionCode, customerCode, readingZone).',
      },
    ],
  },
  {
    slug: 'accessible-exam-system',
    title: 'Ethiopian National Accessible Exam System',
    category: 'fullstack',
    shortDescription: 'Dual-Language Audio-Guided Examination Platform',
    description:
      'An accessibility-first web examination platform engineered for visually impaired students and teachers, featuring native browser Web Speech API voice synthesis with dual-language support (English & Amharic).',
    role: 'Full-Stack Developer (Independent)',
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Web Speech API (TTS)',
      'SpeechSynthesisUtterance',
      'Accessibility (A11y / WCAG)',
      'Keyboard-Only Navigation',
    ],
    status: 'completed',
    featured: true,
    image: '/images/accessible-exam.png',
    github:
      'https://github.com/Adamtad1216/Ethiopian-National-Accessible-Exam-System',
    year: '2024',
    conceptHeadline: 'Technology should not create barriers.',
    problem:
      'Digital examination portals overwhelmingly depend on visual interaction, dense tables, and pointer-driven workflows. For visually impaired learners and educators in Ethiopia, standard web systems create insurmountable barriers to independent academic assessment.',
    solution:
      'A purpose-built examination platform with built-in client-side voice synthesis, allowing blind learners to listen to questions, navigate test options via audio cues and keyboard shortcuts, and submit exams with total autonomy.',
    engineering:
      'Architected with native browser Web Speech API (window.speechSynthesis and SpeechSynthesisUtterance) in the client service (frontend/src/services/tts.ts), removing external cloud TTS latency, network failure points, and recurring API costs. Features voice selection by language (English and Amharic), customizable speech rate and voice pitch, accessible keyboard focus rings, and high-contrast WCAG-aligned UI.',
    features: [
      'Native browser Web Speech API TTS (zero third-party API dependencies)',
      'Dual-language voice synthesis support (English & Amharic)',
      'Customizable speech rate, pitch, and voice profile selection',
      'Audio-guided exam workflows (question readback, option recitation)',
      'Accessible keyboard-driven navigation with explicit focus states',
      'Role-based interfaces for educators to configure audio exams',
      'High-contrast, screen-reader friendly interface architecture',
    ],
    sections: [
      {
        title: 'The Problem & Accessibility Gap',
        content:
          'Standard digital assessment tools assume sighted students and teachers. Visually impaired students frequently must rely on human readers or third-party screen readers that stumble over examination formats, mathematical symbols, and localized languages.',
      },
      {
        title: 'Client-Side TTS Implementation',
        content:
          'Implemented directly in frontend/src/services/tts.ts utilizing window.speechSynthesis and SpeechSynthesisUtterance. This guarantees instant auditory feedback without external cloud dependencies or bandwidth lag, and gives users full control over speech rate, volume, and voice pitch.',
      },
      {
        title: 'Bilingual Voice Synthesis',
        content:
          'Integrated language-aware voice filtering to support both English and Amharic speech engines available in modern browsers, ensuring Ethiopian students can navigate localized examination content naturally.',
      },
      {
        title: 'Inclusive UX & Audio Workflows',
        content:
          'The interface was conceived with an accessibility-first mindset — featuring strict keyboard focus trapping, high-contrast visual tokens, and voice-assisted confirmation modals so students can verify question selections before final submission.',
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
    stack: ['HTML5', 'CSS3 / Keyframes', 'JavaScript', 'Motion Design', 'Canvas'],
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
      'Rich animation sequences and parallax transitions',
      'Immersive visual storytelling layout',
      'Creative interaction design and micro-interactions',
      'Experimental CSS and JavaScript-driven motion techniques',
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
    shortDescription: '18-Module Enterprise Distribution & Supply Chain ERP',
    description:
      'An enterprise-grade wholesale distribution ERP engineered by Clone Technologies. Unifies multi-warehouse inventory, procurement, sales orders, fleet logistics, dynamic pricing, and accounting across 18 integrated modules with PostgreSQL and Prisma ORM.',
    role: 'Co-Founder & Full-Stack Developer',
    stack: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Redux Toolkit',
      'TanStack React Query',
      'TanStack Table',
      'React Hook Form',
      'Zod',
      'React Router v7',
      'Recharts',
      'Leaflet',
      'Node.js',
      'Express.js v5',
      'PostgreSQL',
      'Prisma ORM',
      'JWT & Bcrypt',
      'Multer & Cloudinary',
      'Nodemailer',
      'Pino Logger',
      'Swagger / OpenAPI',
      'Vitest & Supertest',
    ],
    status: 'in-progress',
    featured: true,
    image: '/images/wholesale-erp.png',
    year: '2024',
    problem:
      'Wholesale distribution enterprises struggle with fragmented operations: inventory stock-outs across disparate branches, manual purchase order errors, complex tiered B2B pricing, and blind dispatch logistics that cause delayed deliveries and revenue leakage.',
    solution:
      'A high-performance 18-module ERP platform built on Express v5, PostgreSQL, and Prisma ORM that connects purchasing, inventory reservations, dynamic customer credit lines, fleet dispatching, and executive analytics into a real-time system.',
    engineering:
      'Architected collaboratively within Clone Technologies by three equal co-founders. The frontend leverages React 19, Vite, Redux Toolkit, TanStack React Query & Table, and React Router v7. The backend runs Express.js v5 with PostgreSQL and Prisma ORM, implementing Zod schema validation, Leaflet for fleet logistics, Recharts for executive analytics, Pino structured logging, Swagger/OpenAPI documentation, and Vitest/Supertest test suites.',
    features: [
      '18 Integrated Enterprise Modules for end-to-end wholesale operations',
      'Granular Role-Based Access Control (RBAC) & authentication (JWT/Bcrypt)',
      'Multi-branch and multi-warehouse real-time inventory management',
      'Full procurement cycle: Purchase Orders, Goods Receipt Notes (GRN) & Invoicing',
      'Stock fulfillment engine with inventory reservation and picking workflows',
      'Dynamic B2B tiered pricing, quantity breaks, and customer credit lines',
      'Delivery & logistics module with fleet tracking and route planning (Leaflet)',
      'AI intelligence module for predictive demand and restocking insights',
      'Executive KPI reporting & analytics dashboards with Recharts',
      'Automated PDF document generation, audit activity logging & Pino telemetry',
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
        title: '18 Core Enterprise Modules',
        content:
          'The system consists of 18 integrated core modules: Identity & Access Management (RBAC), Supplier Management, Procurement (Purchase Orders & Receipts), Finance (Invoicing, Payments & Credits), Product Catalog, Branches & Warehouses, Inventory Management (Stock Levels & Adjustments), Stock Fulfillment & Reservations, Customer Management, Sales Orders & Quotations, Dynamic Pricing & Discounts, Delivery & Logistics (Fleet & Dispatch), Sales Returns & Refunds, Notifications, Audit & Activity Logging, Reporting & Analytics Dashboards, AI Intelligence & Recommendations, and Document Management.',
      },
      {
        title: 'Core Functional Areas',
        content:
          'Identity & Access Management provides RBAC user permissions. Supplier Management handles vendor profiles, contacts, and payment terms. Procurement automates purchase orders, GRN, and supplier invoices. Finance & Invoicing tracks sales invoicing, payments, credit limits, and allocations. Product Catalog governs categories, brands, units, and barcode tracking. Branches & Warehouses provides multi-facility setup. Inventory Management & Stock Fulfillment ensure real-time stock tracking, transfers, reservations, and order picking. Customer Management powers B2B/B2C profiles and credit lines. Sales Orders, Pricing & Discounts handle order approvals, tiered pricing, and quantity breaks. Delivery & Logistics manages vehicle fleet routing and dispatch. Reporting, AI & Auditing provide executive KPIs, predictive restocking, and complete activity trails.',
      },
      {
        title: 'Modern Enterprise Tech Stack',
        content:
          'Built with modern technologies: React 19, Vite, Tailwind CSS, Redux Toolkit, TanStack React Query, TanStack Table, React Hook Form, Zod, React Router v7, Recharts, Leaflet, Node.js, Express.js v5, PostgreSQL, Prisma ORM, JWT, Bcrypt, Multer, Cloudinary, Nodemailer, Pino, Swagger/OpenAPI, Vitest, and Supertest.',
      },
      {
        title: 'Startup Engineering by Clone Technologies',
        content:
          'Engineered as equal co-founders at Clone Technologies. The system demonstrates enterprise-scale domain modeling, strict relational database design with PostgreSQL & Prisma, comprehensive testing pipelines, and readiness for production deployment.',
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
