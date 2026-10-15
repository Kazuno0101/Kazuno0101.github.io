// Konten bahasa Indonesia — sumber tunggal konten untuk locale 'id'.
// Struktur harus selalu sama dengan en.js (validasi: key sama).

export const id = {
  meta: {
    title: 'Portfolio — Nuno Alwi',
    description:
      'Portofolio developer — proyek, skill, dan kontak. Tema brutalist, kontras tinggi.',
  },

  profile: {
    name: 'Nuno Alwi',
    role: 'Frontend Developer',
    tagline: 'Web yang cepat, rapi, dan enak dipakai. React & TypeScript.',
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
  },

  projects: [
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
    {
      id: '05',
      title: 'Jepretin',
      description: 'Website untuk foto dan video dengan filter unik dan lucu. Proyek pertama yang dibangun dengan full vibe coding.',
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
      { label: 'Bahasa', items: ['JavaScript', 'TypeScript', 'Go', 'Python', 'SQL'] },
      { label: 'Framework', items: ['React', 'Next.js', 'Node.js', 'Express', 'Fastify', 'Vue'] },
      { label: 'Tools', items: ['Git', 'Docker', 'PostgreSQL', 'Redis', 'Vite', 'Tailwind CSS'] },
    ],
  },

  contact: {
    headline: 'Punya proyek? Yuk, ngobrol.',
    email: 'kazunonuno@gmail.com',
    socials: [
      { label: 'GitHub', url: 'https://github.com/kazuno0101' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/nunoalwi' },
    ],
  },

  // Label nav pakai gaya terminal lowercase English di kedua bahasa (aksen desain).
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
      clockAria: 'Waktu lokal: {time}',
      ctaWork: 'lihat proyek →',
      ctaContact: 'mulai ngobrol',
      ctaCv: 'download cv ↓',
    },
    navbar: {
      themeLight: 'Aktifkan light mode',
      themeDark: 'Aktifkan dark mode',
      openMenu: 'Buka menu',
      downloadCv: 'Unduh CV (PDF)',
      switchLang: 'Ganti bahasa ke Inggris',
    },
    mobileMenu: {
      title: 'Menu navigasi',
      close: 'Tutup menu',
    },
    projectsSection: {
      heading: 'proyek terpilih',
      filters: [
        { value: 'all', label: 'semua' },
        { value: 'client', label: 'kerja klien' },
        { value: 'personal', label: 'personal' },
      ],
      showAll: 'lihat semua ({n})',
      close: 'tutup',
      ariaFilter: 'Filter berdasarkan tipe',
    },
    card: {
      project: 'project',
      detail: 'detail',
      expand: 'click to expand',
      closeDetail: 'ESC / click back',
      closeAria: 'Tutup detail',
      detailAria: ' (tampilan detail)',
    },
    skillsSection: {
      heading: 'tech stack',
    },
    tickerWall: {
      aria: 'ticker wall',
      facts: ['DITENAGAI KOPI', 'MECHANICAL KEYBOARD', 'PERFEKSIONIS PIKSEL', 'COMMIT TIAP HARI', 'GIT HISTORY BERSIH', 'SHIP SETIAP JUMAT'],
      availabilitySuffix: ['TERBUKA UNTUK FREELANCE', 'REMOTE / HYBRID', 'RESPON < 24 JAM'],
    },
    footer: {
      items: ['TEMA: BRUTALIST', 'DIBANGUN DENGAN REACT + TAILWIND'],
      rights: '© {year} {name}. semua hak dilindungi.',
      backToTop: 'kembali ke atas ↑',
    },
  },

  // Konten khusus CV (bagian yang tidak tampil di website).
  cv: {
    headings: {
      summary: 'Ringkasan',
      experience: 'Pengalaman',
      education: 'Pendidikan',
      skills: 'Keahlian',
      projects: 'Proyek',
    },
    summary:
      'Frontend developer dengan fokus pada antarmuka yang cepat, rapi, dan aksesibel. Berpengalaman membangun dashboard, sistem informasi, dan marketplace dari nol sampai produksi dengan React, TypeScript, dan Node.js.',
    // TODO: ganti dengan riwayat pendidikan asli.
    education: [
      { degree: 'S1 Teknik Informatika', school: 'Universitas Contoh', year: '2016 — 2020' },
    ],
  },
}
