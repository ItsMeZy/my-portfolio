interface Project {
  format: 'Web' | 'Desktop' | 'Research'
  category: string
  title: string
  description: string
  stack?: string[]
  repository?: string
}

export const profile = {
  name: 'Zyril Errol Gatchalian',
  location: 'Based in Como, Italy · Working in Switzerland',
  email: 'zegerrol@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zyril-errol-gatchalian-146473295/',
}

export const experience = {
  company: 'Zucchetti · TCPOS',
  role: 'Junior Software Developer',
  periods: [
    { type: 'Full-time', start: '2023-06', startLabel: 'Jun 2023', end: null, endLabel: 'Present' },
    { type: 'Part-time', start: '2019-09', startLabel: 'Sep 2019', end: '2023-06', endLabel: 'Jun 2023' },
  ],
}

export const education = {
  institution: 'SUPSI',
  fullName: 'University of Applied Sciences and Arts of Southern Switzerland',
  field: 'Computer Engineering',
  masterPeriod: 'Sep 2019 – Present',
  bachelorPeriod: 'Sep 2016 – Sep 2019',
  thesis: 'A blockchain-based training management system.',
  source: 'https://www.fuzzbug.com/teaching.php',
}

export const certification = {
  name: 'ASP.NET Core in .NET 6: Dependency Injection',
  issuer: 'LinkedIn',
  date: '2023-11',
  dateLabel: 'Nov 2023',
}

export const skills = [
  { title: 'Backend & desktop', tools: ['C#', '.NET Framework 4.7.2', '.NET 6 / 8 / 10', 'ASP.NET Core', 'DevExpress WinForms & XtraReports', 'AutoMapper', 'Autofac', 'OpenIddict', 'Serilog'] },
  { title: 'Frontend', tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
  { title: 'Data', tools: ['SQL Server', 'Oracle SQL', 'PostgreSQL', 'Redis'] },
  { title: 'Testing & delivery', tools: ['xUnit v3', 'NSubstitute', 'Docker', 'Podman', 'WSL2', 'Nginx', 'Keycloak', 'Git', 'Azure DevOps', 'GitHub', 'Vercel'] },
]

export const projects: Project[] = [
  {
    format: 'Web',
    category: 'Self-hosted full-stack app',
    title: 'Smart Pantry',
    description: 'A pantry and meal planning app with a React dashboard and an Android client. Daily expiry checks flag ingredients to use soon, and AI-generated recipes account for what’s on hand, prep time, and nutrition goals.',
    stack: ['ASP.NET Core 8', 'EF Core', 'PostgreSQL', 'React', 'TypeScript', 'Kotlin', 'Semantic Kernel', 'Docker'],
  },
  {
    format: 'Desktop',
    category: 'Windows desktop · Photography',
    title: 'Photo Cull',
    description: 'A desktop app that helps photographers review RAW shoots offline. It groups similar frames, scores sharpness, exposure, and composition, and saves review decisions locally while preserving the original files.',
    stack: ['Tauri v2', 'Rust', 'Python', 'React', 'TypeScript', 'Tailwind CSS'],
    repository: 'https://github.com/ItsMeZy/photo-cull',
  },
  {
    format: 'Web',
    category: 'Personal automation',
    title: 'Expense Tracking Dashboard',
    description: 'A personal dashboard that turns monthly PDF bank statements into structured expense records for review.',
    stack: ['Google Apps Script', 'Google Drive', 'HTML', 'JSON'],
  },
  {
    format: 'Web',
    category: 'Progressive web app',
    title: 'Audio Player',
    description: 'A browser audio player with a live frequency visualizer. It uses the Web Audio API to analyze playback and a Web Worker to draw the visualization off the main thread.',
    stack: ['JavaScript', 'Web Audio API', 'Web Workers'],
    repository: 'https://github.com/ItsMeZy/PWA_audioplayer',
  },
  {
    format: 'Research',
    category: 'University project',
    title: 'Recommender System',
    description: 'A C# project that explores recommendations from transaction history using collaborative filtering and Apriori association rules.',
    stack: ['C#', '.NET', 'Accord.NET'],
    repository: 'https://github.com/ItsMeZy/RecommenderSystem',
  },
  {
    format: 'Web',
    category: 'Frontend',
    title: 'Personal Portfolio',
    description: 'A React and TypeScript site featuring an interactive stack diagram, animated section navigation and a saved color theme.',
    stack: ['React', 'TypeScript', 'Framer Motion'],
    repository: 'https://github.com/ItsMeZy/my-portfolio',
  },
]
