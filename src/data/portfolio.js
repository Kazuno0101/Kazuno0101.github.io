// Agregator konten per-locale + konstanta yang tidak bergantung bahasa.
// Komponen UI sebaiknya ambil konten lewat useLocale(); helper di bawah
// dipakai oleh kode non-React (mis. generateCv).

import { id as dictId } from './locale/id.js'
import { en as dictEn } from './locale/en.js'

export const dictionaries = { id: dictId, en: dictEn }

export const getPortfolio = (locale) => dictionaries[locale] ?? dictionaries.id

// Warna latar kartu proyek bergantian per kategori (konsisten, bukan acak)
export const projectAccent = {
  web: 'bg-amber text-ink',
  data: 'bg-blue text-ink',
  tool: 'bg-lime text-ink',
  api: 'bg-pink text-ink',
}
