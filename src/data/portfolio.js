export const personal = {
  name: 'Muhigiri Ashuza Albin',
  role: 'Full Stack Engineer',
  taglines: [
    'Full Stack Engineer',
    'AI Systems Builder',
    'Backend Developer',
    'Frontend Engineer',
    'Open Source Contributor',
  ],
  location: 'Kigali, Rwanda',
  email: 'ashuzamh@gmail.com',
  phone: '+250 826 722 88',
  available: true,
  bio: "I'm a Full Stack Engineer building AI-powered products for African education and communities. From GPU backends running Whisper STT to offline-first PWAs in African languages — I work across the full stack and ship things that matter.",
  cv: '/Ash_cv.pdf',
  social: {
    github: 'https://github.com/Ashuza11',
    linkedin: 'https://www.linkedin.com/in/m-ashuza',
    youtube: 'https://www.youtube.com/channel/UCinfVg-zvw94JBb5_F-LmiA',
    twitter: 'https://twitter.com/m_Ashuza1',
  },
  stats: [
    { value: 7, label: 'Projects Shipped', suffix: '+' },
    { value: 50, label: 'Students Mentored', suffix: '+' },
    { value: 15, label: 'Events Hosted', suffix: '+' },
    { value: 3, label: 'Years Building', suffix: '+' },
  ],
  languages: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'SQL', 'Bash'],
}

export const skills = [
  {
    category: 'Backend',
    items: ['FastAPI', 'Flask', 'Django', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Frontend',
    items: ['React 19', 'Next.js 15', 'Vite', 'TypeScript', 'Tailwind CSS', 'CSS Custom Properties'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart', 'PWA', 'Offline-first'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Neon', 'SQLite', 'Redis'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'Netlify', 'Render', 'Cloudflare Pages', 'Azure', 'AWS S3'],
  },
  {
    category: 'AI / ML',
    items: ['Whisper STT', 'GPT-3.5 / GPT-4', 'Llama 3', 'Modal GPU', 'Inngest', 'LangChain', 'Hugging Face'],
  },
  {
    category: 'Design',
    items: ['Figma', 'UI/UX Design', 'Design Systems'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'BongoLab',
    description:
      "Africa's first multi-subject STEM simulation platform. 30+ simulations across Physics, Chemistry, Biology, Math, Earth Science, and AI/ML. SimForge AI engine generates custom simulations from a single sentence. Offline-first PWA in 5+ African languages.",
    tech: ['React 19', 'Vite', 'Matter.js', 'Konva.js', 'PWA', 'Tailwind CSS', 'AI'],
    live: 'https://bongolab.stemrh.org',
    github: 'https://github.com/Ashuza11',
    highlight: 'Finalist — Deep Learning Indaba Ideathon 2025',
    category: 'AI',
  },
  {
    id: 2,
    title: 'Bina.ai',
    description:
      'AI-powered learning platform for African children aged 4–6. Personalized songs and stories in African genres and languages. Next.js 15 + React 19 frontend, dual Python/Modal GPU backends, Whisper STT, AWS S3, Neon PostgreSQL, Inngest job queue.',
    tech: ['Next.js 15', 'FastAPI', 'Modal GPU', 'Whisper', 'AWS S3', 'PostgreSQL', 'TypeScript'],
    live: 'https://www.binaai.live',
    github: null,
    highlight: 'MIND Institute × University of the Witwatersrand',
    category: 'AI',
  },
  {
    id: 3,
    title: 'Bic Rouge',
    description:
      'LLM-powered assignment grading and student feedback platform. FastAPI + GPT-3.5 Turbo + Llama 3 8B backend, React and Tailwind frontend, Flutter mobile app, deployed on Azure.',
    tech: ['FastAPI', 'GPT-3.5', 'Llama 3', 'React', 'Flutter', 'Azure', 'Docker'],
    live: 'https://github.com/Ashuza11/AI_Project_BicRouge',
    github: 'https://github.com/Ashuza11/AI_Project_BicRouge',
    highlight: 'Presented at Deep Learning Indaba 2025',
    category: 'AI',
  },
  {
    id: 4,
    title: 'Ntina',
    description:
      'Audio STEM knowledge base in 10+ African mother tongues. Offline-first with no literacy barriers — designed for learners without reading fluency.',
    tech: ['PWA', 'Offline-first', 'African Languages', 'Audio'],
    live: 'https://stemrh.org',
    github: null,
    highlight: null,
    category: 'AI',
  },
  {
    id: 5,
    title: 'Faida App',
    description:
      'Real-time inventory and sales management for telecom vendors across DRC (Bukavu, Goma, Lubumbashi). Flask and PostgreSQL backend, React and Tailwind frontend, Docker on Render, GitHub Actions CI/CD, partial offline support.',
    tech: ['Flask', 'PostgreSQL', 'React', 'Docker', 'Render', 'GitHub Actions'],
    live: 'https://faida-landing.pages.dev',
    github: null,
    highlight: null,
    category: 'Full Stack',
  },
  {
    id: 6,
    title: 'CirFarm',
    description:
      'Digital transformation platform for an agricultural SME. End-to-end: database schema, REST APIs, React frontend, Figma designs, and full deployment.',
    tech: ['React', 'Flask', 'PostgreSQL', 'Figma', 'Cloudflare Pages'],
    live: 'https://cirfarm.pages.dev',
    github: null,
    highlight: null,
    category: 'Full Stack',
  },
  {
    id: 7,
    title: 'DDC RDC',
    description:
      'Institutional website for a DRC-based organisation. React, Figma design system, Tailwind CSS, deployed on Cloudflare Pages.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'Cloudflare Pages'],
    live: 'https://ddcrdc.pages.dev',
    github: null,
    highlight: null,
    category: 'Full Stack',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Full Stack AI Engineer (Consultant)',
    org: 'AIAM Initiative — MIND Institute × University of the Witwatersrand',
    period: 'Nov 2025 — Present',
    location: 'Remote',
    description:
      'Built Bina.ai end-to-end: dual Modal GPU backends, Whisper STT pipeline, Next.js 15 frontend, GitHub Actions CI/CD.',
    type: 'work',
  },
  {
    id: 2,
    role: 'Founder & Full Stack Engineer',
    org: 'African STEM Resources Hub',
    period: 'Jun 2025 — Present',
    location: 'Kigali, Rwanda',
    description:
      'Founded and built BongoLab and Ntina. Designed SimForge AI engine for on-demand simulation generation. Finalist at Deep Learning Indaba Ideathon 2025.',
    type: 'work',
  },
  {
    id: 3,
    role: 'Digital Transformation Consultant & Full Stack Developer',
    org: 'CirFarm',
    period: 'Jan 2023 — Present',
    location: 'Bukavu, DRC',
    description:
      'End-to-end web development for an agricultural SME — schema design, REST APIs, React frontend, Figma designs, and deployment.',
    type: 'work',
  },
  {
    id: 4,
    role: 'Gold Microsoft Learn Student Ambassador',
    org: 'Microsoft',
    period: 'Feb 2023 — Aug 2025',
    location: 'DRC & Online',
    description:
      'Led AI project cohorts, mentored 50+ students, hosted 15+ technical events across DRC and online.',
    type: 'community',
  },
  {
    id: 5,
    role: 'Learning Facilitator & CS Department Head',
    org: 'CREDDA-ULPGL Research Center',
    period: 'Nov 2022 — Aug 2025',
    location: 'Goma, DRC',
    description:
      'Led the CS department and English Club. Partnered with Morehouse College on Congo Curriculum initiative.',
    type: 'community',
  },
]

export const gallery = [
  // Add entries as:
  // { src: '/gallery/filename.jpg', caption: 'Event name · Location · Year', category: 'workshop|conference|training' }
]
