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
    title: 'SIUNU',
    description: 'Sistem pangkalan data kampus Nadhatul Ulama se-Indonesia. Monitoring, rekapitulasi, visualisasi, dan persuratan internal dalam satu platform.',
    tech: ['Next.js'],
    category: 'web',
    type: 'client',
    demo: '#',
    repo: '#',
  },
  {
    id: '02',
    title: 'Profiling KOMDIGI',
    description: 'Sistem informasi penyelenggara Pos, Telekomunikasi, dan Penyiaran. Data administratif, rekam jejak kepatuhan, dan informasi keuangan terintegrasi.',
    tech: ['Next.js'],
    category: 'data',
    type: 'client',
    demo: '#',
    repo: '#',
  },
  {
    id: '03',
    title: 'Sistem Putusan Pajak',
    description: 'Pencarian, pengelolaan, dan pengunduhan dokumen putusan sengketa perpajakan. Akses data hukum untuk publik, praktisi, dan akademisi.',
    tech: ['Next.js'],
    category: 'data',
    type: 'client',
    demo: '#',
    repo: '#',
  },
  {
    id: '04',
    title: 'ARA-POS',
    description: 'Aplikasi POS dan manajemen operasional toko. Transaksi, stok, laporan keuangan, dashboard analitik, dan manajemen user dalam satu platform.',
    tech: ['Laravel'],
    category: 'web',
    type: 'client',
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
