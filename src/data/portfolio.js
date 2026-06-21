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
  avatar: '/images/Mashuza.jpeg',
  bio: 'I am a Full Stack Engineer based in Kigali, Rwanda, building AI powered systems that expand access to education and amplify African languages and cultures. My work spans production backends, frontend interfaces, and AI inference pipelines. I have shipped GPU deployments running Whisper speech recognition and offline first PWAs serving learners across Africa in their mother tongues. Outside of engineering, I contribute to the developer community through technical mentoring, workshops, and open source projects.',
  cv: '/Ash_cv.pdf',
  social: {
    github: 'https://github.com/Ashuza11',
    linkedin: 'https://www.linkedin.com/in/m-ashuza',
    youtube: 'https://www.youtube.com/channel/UCinfVg-zvw94JBb5_F-LmiA',
    twitter: 'https://twitter.com/m_Ashuza1',
  },
  socialHandles: {
    github: 'Ashuza11',
    linkedin: 'm-ashuza',
    youtube: 'AshTech',
    twitter: 'm_Ashuza1',
  },
  interests: [
    'AI Systems and LLM Applications',
    'Offline First and PWA Development',
    'African Language Technologies',
    'Full Stack Engineering (Python and TypeScript)',
    'Developer Education and Mentoring',
    'Open Source for Social Impact',
  ],
  stats: [
    { value: 7,  label: 'Projects Shipped', suffix: '+' },
    { value: 50, label: 'Students Mentored', suffix: '+' },
    { value: 15, label: 'Events Hosted',     suffix: '+' },
    { value: 3,  label: 'Years Building',    suffix: '+' },
  ],
  languages: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'SQL', 'Bash'],
}

export const skills = [
  { category: 'Backend',   items: ['FastAPI', 'Flask', 'Django', 'Node.js', 'REST APIs', 'WebSockets'] },
  { category: 'Frontend',  items: ['React 19', 'Next.js 15', 'Vite', 'TypeScript', 'Tailwind CSS', 'CSS Custom Properties'] },
  { category: 'Mobile',    items: ['Flutter', 'Dart', 'PWA', 'Offline First'] },
  { category: 'Databases', items: ['PostgreSQL', 'Neon', 'SQLite', 'Redis'] },
  { category: 'DevOps',    items: ['Docker', 'GitHub Actions', 'Netlify', 'Render', 'Cloudflare Pages', 'Azure', 'AWS S3'] },
  { category: 'AI and ML', items: ['Whisper STT', 'GPT-3.5 and GPT-4', 'Llama 3', 'Modal GPU', 'Inngest', 'LangChain', 'Hugging Face'] },
  { category: 'Design',    items: ['Figma', 'UI/UX Design', 'Design Systems'] },
]

export const projects = [
  {
    id: 1,
    title: 'BongoLab',
    description:
      "Africa's first multi-subject STEM simulation platform. 30+ simulations across Physics, Chemistry, Biology, Math, Earth Science, and AI/ML. SimForge AI engine generates custom simulations from a single sentence. Offline first PWA in 5+ African languages.",
    tech: ['React 19', 'Vite', 'Matter.js', 'Konva.js', 'PWA', 'Tailwind CSS', 'AI'],
    live: 'https://bongolab.stemrh.org',
    github: 'https://github.com/Ashuza11',
    highlight: 'Finalist at Deep Learning Indaba Ideathon 2025',
    category: 'AI',
    featured: true,
  },
  {
    id: 2,
    title: 'Bina.ai',
    description:
      'AI powered learning platform for African children aged 4 to 6. Personalized songs and stories in African genres and languages. Next.js 15 and React 19 frontend, dual Python/Modal GPU backends, Whisper STT, AWS S3, Neon PostgreSQL, Inngest job queue.',
    tech: ['Next.js 15', 'FastAPI', 'Modal GPU', 'Whisper', 'AWS S3', 'PostgreSQL', 'TypeScript'],
    live: 'https://www.binaai.live',
    github: null,
    highlight: 'MIND Institute and University of the Witwatersrand',
    category: 'AI',
    featured: true,
  },
  {
    id: 3,
    title: 'Bic Rouge',
    description:
      'LLM powered assignment grading and student feedback platform. FastAPI, GPT-3.5 Turbo, and Llama 3 8B backend, React and Tailwind frontend, Flutter mobile app, deployed on Azure.',
    tech: ['FastAPI', 'GPT-3.5', 'Llama 3', 'React', 'Flutter', 'Azure', 'Docker'],
    live: 'https://github.com/Ashuza11/AI_Project_BicRouge',
    github: 'https://github.com/Ashuza11/AI_Project_BicRouge',
    highlight: 'Presented at Deep Learning Indaba 2025',
    category: 'AI',
    featured: true,
  },
  {
    id: 4,
    title: 'Ntina',
    description:
      'Audio STEM knowledge base in 10+ African mother tongues. Offline first with no literacy barriers, designed for learners without reading fluency.',
    tech: ['PWA', 'Offline First', 'African Languages', 'Audio'],
    live: 'https://stemrh.org',
    github: null,
    highlight: null,
    category: 'AI',
    featured: false,
  },
  {
    id: 5,
    title: 'Faida App',
    description:
      'Real time inventory and sales management for telecom vendors across DRC (Bukavu, Goma, Lubumbashi). Flask and PostgreSQL backend, React and Tailwind frontend, Docker on Render, GitHub Actions CI/CD, partial offline support.',
    tech: ['Flask', 'PostgreSQL', 'React', 'Docker', 'Render', 'GitHub Actions'],
    live: 'https://faida-landing.pages.dev',
    github: null,
    highlight: null,
    category: 'Full Stack',
    featured: false,
  },
  {
    id: 6,
    title: 'CirFarm',
    description:
      'Digital transformation platform for an agricultural SME. End to end: database schema, REST APIs, React frontend, Figma designs, and full deployment.',
    tech: ['React', 'Flask', 'PostgreSQL', 'Figma', 'Cloudflare Pages'],
    live: 'https://cirfarm.pages.dev',
    github: null,
    highlight: null,
    category: 'Full Stack',
    featured: false,
  },
  {
    id: 7,
    title: 'DDC RDC',
    description:
      'Institutional website for a DRC based organisation. React, Figma design system, Tailwind CSS, deployed on Cloudflare Pages.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'Cloudflare Pages'],
    live: 'https://ddcrdc.pages.dev',
    github: null,
    highlight: null,
    category: 'Full Stack',
    featured: false,
  },
]

export const experience = [
  {
    id: 1,
    role: 'Full Stack AI Engineer (Consultant)',
    org: 'AIAM Initiative, MIND Institute and University of the Witwatersrand',
    period: 'Nov 2025 to Present',
    location: 'Remote',
    description:
      'Built Bina.ai end to end: dual Modal GPU backends, Whisper STT pipeline, Next.js 15 frontend, GitHub Actions CI/CD.',
    type: 'work',
  },
  {
    id: 2,
    role: 'Founder and Full Stack Engineer',
    org: 'African STEM Resources Hub',
    period: 'Jun 2025 to Present',
    location: 'Kigali, Rwanda',
    description:
      'Founded and built BongoLab and Ntina. Designed SimForge AI engine for on-demand simulation generation. Finalist at Deep Learning Indaba Ideathon 2025.',
    type: 'work',
  },
  {
    id: 3,
    role: 'Digital Transformation Consultant and Full Stack Developer',
    org: 'CirFarm',
    period: 'Jan 2023 to Present',
    location: 'Bukavu, DRC',
    description:
      'End to end web development for an agricultural SME: schema design, REST APIs, React frontend, Figma designs, and deployment.',
    type: 'work',
  },
  {
    id: 4,
    role: 'Gold Microsoft Learn Student Ambassador',
    org: 'Microsoft',
    period: 'Feb 2023 to Aug 2025',
    location: 'DRC and Online',
    description:
      'Led AI project cohorts, mentored 50+ students, hosted 15+ technical events across DRC and online.',
    type: 'community',
  },
  {
    id: 5,
    role: 'Learning Facilitator and CS Department Head',
    org: 'CREDDA-ULPGL Research Center',
    period: 'Nov 2022 to Aug 2025',
    location: 'Goma, DRC',
    description:
      'Led the CS department and English Club. Partnered with Morehouse College on Congo Curriculum initiative.',
    type: 'community',
  },
]

export const gallery = [
  { src: '/gallery/_MG_0143.jpg',                      caption: 'Deep Learning Indaba · Dakar, Senegal · 2024',  category: 'conference' },
  { src: '/gallery/_MG_0168.jpg',                      caption: 'Deep Learning Indaba · Dakar, Senegal · 2024',  category: 'conference' },
  { src: '/gallery/PXL_20240823_101621803.MP.jpg',     caption: 'Deep Learning Indaba · 2024',                   category: 'conference' },
  { src: '/gallery/PXL_20240823_105348875.PORTRAIT.jpg', caption: 'Deep Learning Indaba · 2024',                 category: 'conference' },
  { src: '/gallery/PXL_20240612_103406759.NIGHT.jpg',  caption: 'STEM Training Session · DRC · Jun 2024',        category: 'training'   },
  { src: '/gallery/post1.jpg',                         caption: 'STEM Training Session · DRC · Jun 2024',        category: 'training'   },
  { src: '/gallery/PXL_20240426_115810277.jpg',        caption: 'Microsoft AI Workshop · DRC · Apr 2024',        category: 'workshop'   },
  { src: '/gallery/IMG_20240426_135513_901.jpg',       caption: 'Microsoft AI Workshop · DRC · Apr 2024',        category: 'workshop'   },
  { src: '/gallery/PXL_20230825_111031412.jpg',        caption: 'Tech Expo · DRC · Aug 2023',                    category: 'conference' },
  { src: '/gallery/photo_2023-12-13_00-53-26.jpg',     caption: 'Community Event · DRC · Dec 2023',              category: 'workshop'   },
  { src: '/gallery/PXL_20230427_103631815.MP.jpg',     caption: 'AI Training Session · DRC · Apr 2023',          category: 'training'   },
  { src: '/gallery/PXL_20230401_110700928.NIGHT.jpg',  caption: 'Tech Event · DRC · Apr 2023',                   category: 'workshop'   },
  { src: '/gallery/PXL_20230329_101836023.jpg',        caption: 'MLSA Community Session · DRC · Mar 2023',       category: 'workshop'   },
  { src: '/gallery/PXL_20230322_085902917.PORTRAIT.jpg', caption: 'MLSA Workshop · Goma, DRC · Mar 2023',        category: 'workshop'   },
  { src: '/gallery/PXL_20230322_090746151.jpg',        caption: 'MLSA Workshop · Goma, DRC · Mar 2023',          category: 'workshop'   },
  { src: '/gallery/5841354483081266970_121.jpg',       caption: 'Community Tech Event · DRC',                    category: 'workshop'   },
  { src: '/gallery/5845858082708636792_121.jpg',       caption: 'Community Tech Event · DRC',                    category: 'workshop'   },
  { src: '/gallery/5845858082708636794_121.jpg',       caption: 'Community Tech Event · DRC',                    category: 'workshop'   },
  { src: '/gallery/poster.png',                        caption: 'Event Poster · DRC',                            category: 'conference' },
  { src: '/gallery/event_resume.png',                  caption: 'Event Flyer · DRC',                             category: 'workshop'   },
]
