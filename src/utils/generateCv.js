import { getPortfolio } from '../data/portfolio.js'

// Generate CV ATS-friendly langsung di browser via jsPDF.
//
// Aturan ATS yang dipegang:
// - Satu kolom penuh, urutan baca atas ke bawah (tanpa tabel/grid/kolom ganda)
// - Font Helvetica bawaan (font standar yang dikenali parser ATS)
// - Teks asli yang bisa di-select/copy — bukan gambar, bukan render mode aneh
// - Heading standar (Experience, Education, Skills, Projects) sesuai locale
// - Bullet pakai "- ", tanpa glyph dekoratif
//
// jsPDF di-import dinamis supaya bundle utama tetap ramping.

export async function generateCv(locale) {
  const { jsPDF } = await import('jspdf')
  const t = getPortfolio(locale)
  const { profile, about, skills, projects, cv } = t

  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 48
  const maxWidth = pageWidth - margin * 2
  let y = margin

  const ensureSpace = (needed) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage()
      y = margin
    }
  }

  const writeText = (text, { size = 10, style = 'normal', gapAfter = 0, indent = 0 } = {}) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    const lines = doc.splitTextToSize(text, maxWidth - indent)
    const lineHeightPt = size * 1.35
    lines.forEach((line) => {
      ensureSpace(lineHeightPt)
      doc.text(line, margin + indent, y + size * 0.85)
      y += lineHeightPt
    })
    y += gapAfter
  }

  const sectionHeading = (label) => {
    ensureSpace(48)
    y += 12
    doc.setLineWidth(1)
    doc.setDrawColor(20)
    doc.line(margin, y, pageWidth - margin, y)
    y += 6
    writeText(label, { size: 12, style: 'bold', gapAfter: 6 })
  }

  // Header: nama, role, baris kontak
  writeText(profile.name, { size: 20, style: 'bold' })
  writeText(profile.role, { size: 12, gapAfter: 4 })
  const contactLine = [
    profile.email,
    profile.phone,
    profile.location,
    ...profile.socials.map((s) => s.url.replace('https://', '')),
  ]
    .filter(Boolean)
    .join(' | ')
  writeText(contactLine, { size: 9 })

  // Ringkasan
  sectionHeading(cv.headings.summary)
  writeText(cv.summary, { gapAfter: 4 })

  // Pengalaman
  sectionHeading(cv.headings.experience)
  about.experience.forEach((exp) => {
    writeText(`${exp.role} - ${exp.org}`, { size: 11, style: 'bold' })
    writeText(exp.year, { size: 9, style: 'italic', gapAfter: 2 })
    writeText(`- ${exp.description}`, { gapAfter: 8 })
  })

  // Pendidikan
  sectionHeading(cv.headings.education)
  cv.education.forEach((edu) => {
    writeText(`${edu.degree} - ${edu.school}`, { size: 11, style: 'bold' })
    writeText(edu.year, { size: 9, style: 'italic', gapAfter: 8 })
  })

  // Keahlian (per grup, satu baris per grup)
  sectionHeading(cv.headings.skills)
  skills.groups.forEach((g) => {
    writeText(`${g.label}: ${g.items.join(', ')}`, { gapAfter: 4 })
  })

  // Proyek pilihan
  sectionHeading(cv.headings.projects)
  projects.forEach((p) => {
    writeText(`${p.title} (${p.tech.join(', ')})`, { size: 11, style: 'bold', gapAfter: 2 })
    writeText(`- ${p.description}`, { gapAfter: 8 })
  })

  doc.setProperties({
    title: `CV - ${profile.name}`,
    author: profile.name,
    creator: profile.name,
    subject: profile.role,
  })

  doc.save(`CV-${profile.name.replace(/\s+/g, '-')}-${locale.toUpperCase()}.pdf`)
}
