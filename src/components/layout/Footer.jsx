import { useLocale } from '../../hooks/useLocale.jsx'
import Marquee from '../ui/Marquee.jsx'

export default function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  // Di dalam komponen supaya ikut re-render saat locale berganti.
  const footerItems = [...t.ui.footer.items, t.profile.email, t.profile.role]
  const rights = t.ui.footer.rights
    .replace('{year}', year)
    .replace('{name}', t.profile.name)

  return (
    <footer className="bg-bg dark:bg-ink">
      {/* ticker strip */}
      <div className="border-b-3 border-ink dark:border-bg overflow-hidden py-3 bg-coral">
        <Marquee
          items={footerItems}
          duration={40}
          reactToScroll
          className="font-mono text-xs font-bold text-ink"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 safe-x flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-muted dark:text-bg/70">
        <a href="#top" className="font-bold text-ink dark:text-bg hover:text-coral dark:hover:text-amber transition-colors duration-120">
          kazuno
        </a>
        <span>{rights}</span>
        <a
          href="#top"
          className="btn-pop border-3 border-ink dark:border-bg bg-blue px-3 py-2 text-ink hover:bg-ink hover:text-bg"
        >
          {t.ui.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
