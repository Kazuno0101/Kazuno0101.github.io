// English content — single source of content for the 'en' locale.
// Structure must always match id.js (validation: same keys).

export const en = {
  meta: {
    title: 'Portfolio — Nuno Alwi',
    description:
      'Developer portfolio — projects, skills, and contact. Brutalist theme, high contrast.',
  },

  profile: {
    name: 'Nuno Alwi',
    role: 'Frontend Developer',
    tagline: 'Fast, clean, and comfortable to use. React & TypeScript.',
    location: 'Bandung, ID',
    email: 'kazunonuno@gmail.com',
    phone: '',
    socials: [
      { label: 'GitHub', url: 'https://github.com/kazuno0101' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/nunoalwi' },
    ],
    resumeUrl: '#',
  },

  about: {
    prompt: '$ whoami',
    headline: 'Interfaces that keep users coming back.',
    body: [
      'A frontend developer who cares about details — from precise spacing to green performance scores. I write code not just for machines, but for the developers who will read it next.',
      'I work with React, TypeScript, and Node.js daily. Open to freelance work, collaboration, or a chat about web dev.',
    ],
    experience: [
      { year: '2024 — present', role: 'Frontend Developer', org: 'PT Contoh Digital', description: 'Analytics dashboards and a design system for internal products. Used by hundreds of employees every day.' },
      { year: '2022 — 2024', role: 'Full-stack Developer', org: 'Anonymous Startup', description: 'A marketplace from zero to 10K+ active users. Product pages, payment gateway integration, and seller dashboards.' },
      { year: '2020 — 2022', role: 'Web Developer', org: 'Independent Studio', description: '20+ client projects — from landing pages to complex web apps. Focused on performance and accessibility.' },
    ],
  },

  projects: [
    {
      id: '01',
      title: 'SIUNU',
      description: 'A database platform for Nadhatul Ulama campuses across Indonesia. Monitoring, recapitulation, visualization, and internal correspondence in one platform.',
      tech: ['Next.js'],
      category: 'web',
      type: 'client',
      demo: '#',
      repo: '#',
    },
    {
      id: '02',
      title: 'Profiling KOMDIGI',
      description: 'Information system for Post, Telecommunications, and Broadcasting providers. Integrated administrative data, compliance records, and financial information.',
      tech: ['Next.js'],
      category: 'data',
      type: 'client',
      demo: '#',
      repo: '#',
    },
    {
      id: '03',
      title: 'Tax Decision System',
      description: 'Search, management, and download of tax dispute decision documents. Legal data access for the public, practitioners, and academics.',
      tech: ['Next.js'],
      category: 'data',
      type: 'client',
      demo: '#',
      repo: '#',
    },
    {
      id: '04',
      title: 'ARA-POS',
      description: 'POS application and store operations management. Transactions, inventory, financial reports, analytics dashboards, and user management in one platform.',
      tech: ['Laravel'],
      category: 'web',
      type: 'client',
      demo: '#',
      repo: '#',
    },
    {
      id: '05',
      title: 'Jepretin',
      description: 'A photo and video website with unique and funny filters. The first project built entirely with vibe coding.',
      tech: ['Next.js', 'shadcn/ui', 'MediaPipe'],
      category: 'web',
      type: 'personal',
      demo: '#',
      repo: '#',
    },
  ],

  skills: {
    prompt: '// skills',
    groups: [
      { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Go', 'Python', 'SQL'] },
      { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', 'Fastify', 'Vue'] },
      { label: 'Tools', items: ['Git', 'Docker', 'PostgreSQL', 'Redis', 'Vite', 'Tailwind CSS'] },
    ],
  },

  contact: {
    headline: 'Got a project? Let\u2019s talk.',
    email: 'kazunonuno@gmail.com',
    socials: [
      { label: 'GitHub', url: 'https://github.com/kazuno0101' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/nunoalwi' },
    ],
  },

  // Nav labels use lowercase English terminal style in both locales (design accent).
  nav: [
    { label: 'about', href: '#about' },
    { label: 'work', href: '#work' },
    { label: 'skills', href: '#skills' },
    { label: 'contact', href: '#contact' },
  ],

  ui: {
    hero: {
      roles: ['Frontend', 'Backend', 'Fullstack'],
      roleSuffix: 'Developer',
      ticker: ['OPEN TO WORK', 'OPEN TO FREELANCE'],
      clockAria: 'Local time: {time}',
      ctaWork: 'view work →',
      ctaContact: 'start a chat',
      ctaCv: 'download cv ↓',
    },
    navbar: {
      themeLight: 'Switch to light mode',
      themeDark: 'Switch to dark mode',
      openMenu: 'Open menu',
      downloadCv: 'Download CV (PDF)',
      switchLang: 'Switch language to Indonesian',
    },
    mobileMenu: {
      title: 'Navigation menu',
      close: 'Close menu',
    },
    projectsSection: {
      heading: 'selected work',
      filters: [
        { value: 'all', label: 'all' },
        { value: 'client', label: 'client work' },
        { value: 'personal', label: 'personal' },
      ],
      showAll: 'view all ({n})',
      close: 'close',
      ariaFilter: 'Filter by type',
    },
    card: {
      project: 'project',
      detail: 'detail',
      expand: 'click to expand',
      closeDetail: 'ESC / click back',
      closeAria: 'Close detail',
      detailAria: ' (detail view)',
    },
    skillsSection: {
      heading: 'tech stack',
    },
    tickerWall: {
      aria: 'ticker wall',
      facts: ['CAFFEINE-POWERED', 'MECHANICAL KEYBOARD', 'PIXEL PERFECTIONIST', 'COMMITS EVERY DAY', 'CLEAN GIT HISTORY', 'SHIP EVERY FRIDAY'],
      availabilitySuffix: ['OPEN FOR FREELANCE', 'REMOTE / HYBRID', 'RESPONSE < 24 HOURS'],
    },
    footer: {
      items: ['THEME: BRUTALIST', 'BUILT WITH REACT + TAILWIND'],
      rights: '© {year} {name}. all rights reserved.',
      backToTop: 'back to top ↑',
    },
  },

  // CV-only content (not shown on the website).
  cv: {
    headings: {
      summary: 'Summary',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
    },
    summary:
      'Frontend developer focused on fast, clean, and accessible interfaces. Experienced building dashboards, information systems, and marketplaces from scratch to production with React, TypeScript, and Node.js.',
    // TODO: replace with real education history.
    education: [
      { degree: 'B.Sc. in Informatics', school: 'Universitas Contoh', year: '2016 — 2020' },
    ],
  },
}
