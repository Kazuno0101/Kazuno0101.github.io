export const profile = {
  name: 'Nuno Alwi',
  role: 'Frontend Developer',
  tagline: 'Web yang cepat, rapi, dan enak dipakai. React & TypeScript.',
  location: 'Bandung, ID',
  email: 'kazunonuno@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/kazuno0101' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/nunoalwi' },
  ],
  resumeUrl: '#',
}

export const about = {
  prompt: '$ whoami',
  headline: 'Antarmuka yang bikin pengguna betah.',
  body: [
    'Frontend developer yang peduli detail — dari spacing yang pas sampai performance score yang hijau. Saya bikin kode bukan cuma buat mesin, tapi juga buat developer lain yang bakal baca.',
    'Main di React, TypeScript, dan Node.js sehari-hari. Terbuka untuk freelance, kolaborasi, atau obrolan soal web dev.',
  ],
  experience: [
    { year: '2024 — sekarang', role: 'Frontend Developer', org: 'PT Contoh Digital', description: 'Dashboard analytics dan design system untuk produk internal. Dipakai ratusan karyawan setiap hari.' },
    { year: '2022 — 2024', role: 'Full-stack Developer', org: 'Startup Anonim', description: 'Marketplace dari nol sampai 10K+ pengguna aktif. Product page, payment gateway, sampai dashboard seller.' },
    { year: '2020 — 2022', role: 'Web Developer', org: 'Studio Mandiri', description: '20+ proyek klien — dari landing page sampai web app kompleks. Fokus di performa dan aksesibilitas.' },
  ],
}

export const projects = [
  {
    id: '01',
    title: 'Aplikasi Antrian Realtime',
    description: 'Sistem antrian klinik berbasis WebSocket. Waktu tunggu pasien turun 40%.',
    tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    category: 'web',
    demo: '#',
    repo: '#',
  },
  {
    id: '02',
    title: 'Dashboard Analitik IoT',
    description: 'Pantau ribuan perangkat IoT. Filter per waktu, lihat tren, export laporan.',
    tech: ['TypeScript', 'Next.js', 'TimescaleDB', 'Chart.js'],
    category: 'data',
    demo: '#',
    repo: '#',
  },
  {
    id: '03',
    title: 'Marketplace UMKM',
    description: 'Platform jualan online untuk UMKM lokal. Payment gateway dan logistik terintegrasi.',
    tech: ['React', 'Express', 'MySQL', 'Midtrans'],
    category: 'web',
    demo: '#',
    repo: '#',
  },
  {
    id: '04',
    title: 'CLI Catatan Cepat',
    description: 'Catat ide dari terminal dalam detik. Tag, pencarian fuzzy, auto-sync ke Git.',
    tech: ['Go', 'Cobra', 'SQLite'],
    category: 'tool',
    demo: '#',
    repo: '#',
  },
  {
    id: '05',
    title: 'Game Edukasi Anak',
    description: 'Mini-game matematika offline-first berbasis PWA. Belajar sambil main.',
    tech: ['Vue', 'Vite', 'PWA'],
    category: 'web',
    demo: '#',
    repo: '#',
  },
  {
    id: '06',
    title: 'API Public Cuaca',
    description: 'Satu endpoint, banyak provider. Ringan, ter-cache, dan ter-rate-limit.',
    tech: ['Fastify', 'Redis', 'Docker'],
    category: 'api',
    demo: '#',
    repo: '#',
  },
]

// Warna latar kartu proyek bergantian per kategori (konsisten, bukan acak)
export const projectAccent = {
  web: 'bg-amber text-ink',
  data: 'bg-blue text-ink',
  tool: 'bg-lime text-ink',
  api: 'bg-pink text-ink',
}

export const skills = {
  prompt: '// skills',
  groups: [
    {
      label: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Go', 'Python', 'SQL'],
    },
    {
      label: 'Frameworks',
      items: ['React', 'Next.js', 'Node.js', 'Express', 'Fastify', 'Vue'],
    },
    {
      label: 'Tools',
      items: ['Git', 'Docker', 'PostgreSQL', 'Redis', 'Vite', 'Tailwind CSS'],
    },
  ],
}

export const contact = {
  prompt: '$ contact',
  headline: 'Punya proyek? Yuk, ngobrol.',
  email: 'kazunonuno@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/kazuno0101' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/nunoalwi' },
  ],
}

export const nav = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#work' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
]
