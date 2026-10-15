import { useLocale } from '../../hooks/useLocale.jsx'

// Toggle bahasa brutalist: menampilkan kode bahasa TUJUAN
// (saat bahasa Indonesia aktif, tombol menampilkan "EN").
// Prop onDark untuk dipakai di permukaan gelap (mis. MobileMenu).
export default function LanguageToggle({ onDark = false, className = '' }) {
  const { locale, toggleLocale, t } = useLocale()
  const target = locale === 'id' ? 'EN' : 'ID'

  const base = onDark
    ? 'border-3 border-bg bg-lime text-ink hover:bg-bg hover:text-ink'
    : 'border-3 border-ink dark:border-bg bg-lime text-ink hover:bg-ink hover:text-bg'

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.ui.navbar.switchLang}
      title={t.ui.navbar.switchLang}
      className={`btn-pop font-mono text-sm font-bold px-3 py-3 ${base} ${className}`}
    >
      {target}
    </button>
  )
}
