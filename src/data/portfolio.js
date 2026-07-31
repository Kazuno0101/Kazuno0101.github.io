// Edit isi ini untuk mengganti konten portfolio.
// Semua field sudah diberi contoh realistis, ganti dengan data kamu sendiri.

export const profile = {
  name: 'Nuno Alwi',
  role: 'Frontend Developer',
  tagline: 'Membangun antarmuka web yang cepat, rapi, dan mudah dirawat dengan React & TypeScript.',
  location: 'Bandung, ID',
  email: 'halo@kazuno.dev',
  socials: [
    { label: 'GitHub', url: 'https://github.com/kazuno0101' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/username' },
  ],
  resumeUrl: '#',
}

export const about = {
  prompt: '$ whoami',
  headline: 'Saya bangun antarmuka yang cepat dirilis, nyaman dipakai, dan mudah dirawat tim.',
  body: [
    'Berpengalaman membangun aplikasi web end-to-end, dari antarmuka hingga API. Saya lebih suka solusi sederhana ketika bisa, dan selalu menjaga performa serta aksesibilitas.',
    'Saat ini fokus di ekosistem React, TypeScript, dan Node.js. Terbuka untuk proyek freelance, kolaborasi, atau kontribusi open-source.',
  ],
  experience: [
    { year: '2024 — sekarang', role: 'Frontend Developer', org: 'PT Contoh Digital', description: 'Membangun dashboard analytics dan komponen design system untuk produk internal. Menggunakan React, TypeScript, dan Tailwind CSS.' },
    { year: '2022 — 2024', role: 'Full-stack Developer', org: 'Startup Anonim', description: 'Mengembangkan platform marketplace dari nol hingga 10K+ pengguna aktif. Stack: Next.js, Express, PostgreSQL.' },
    { year: '2020 — 2022', role: 'Web Developer', org: 'Studio Mandiri', description: 'Menangani 20+ proyek klien mulai dari landing page hingga aplikasi web kompleks. Fokus pada performa dan aksesibilitas.' },
  ],
}

export const projects = [
  {
    id: '01',
    title: 'Aplikasi Antrian Realtime',
    description: 'Mengurangi waktu tunggu pasien 40% lewat sistem antrian realtime berbasis WebSocket untuk klinik.',
    tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    category: 'web',
    demo: '#',
    repo: '#',
  },
  {
    id: '02',
    title: 'Dashboard Analitik IoT',
    description: 'Mempermudah pemantauan ribuan perangkat IoT lewat dashboard analitik dengan filter waktu dan export laporan.',
    tech: ['TypeScript', 'Next.js', 'TimescaleDB', 'Chart.js'],
    category: 'data',
    demo: '#',
    repo: '#',
  },
  {
    id: '03',
    title: 'Marketplace UMKM',
    description: 'Mendigitalkan UMKM lokal lewat marketplace siap pakai dengan payment gateway dan logistik terintegrasi.',
    tech: ['React', 'Express', 'MySQL', 'Midtrans'],
    category: 'web',
    demo: '#',
    repo: '#',
  },
  {
    id: '04',
    title: 'CLI Catatan Cepat',
    description: 'Mencatat ide dalam hitungan detik dari terminal dengan tag, pencarian fuzzy, dan sync otomatis ke Git.',
    tech: ['Go', 'Cobra', 'SQLite'],
    category: 'tool',
    demo: '#',
    repo: '#',
  },
  {
    id: '05',
    title: 'Game Edukasi Anak',
    description: 'Membuat belajar matematika dasar menyenangkan lewat mini-game web offline-first berbasis PWA.',
    tech: ['Vue', 'Vite', 'PWA'],
    category: 'web',
    demo: '#',
    repo: '#',
  },
  {
    id: '06',
    title: 'API Public Cuaca',
    description: 'Data cuaca dari banyak provider dalam satu API ringan, cepat, dan ter-rate-limit.',
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
  headline: 'Punya ide atau proyek? Mari kita wujudkan bareng.',
  email: 'halo@kazuno.dev',
  socials: [
    { label: 'GitHub', url: 'https://github.com/kazuno0101' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/username' },
  ],
}

export const nav = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#work' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
]
