import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme.jsx'
import { useLocale } from '../../hooks/useLocale.jsx'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'
import { useMagnetic } from '../../hooks/useMagnetic.js'
import { generateCv } from '../../utils/generateCv.js'
import { Sun, Moon, Menu, Download } from 'lucide-react'
import MobileMenu from '../ui/MobileMenu.jsx'
import LanguageToggle from '../ui/LanguageToggle.jsx'

const sectionIds = ['top', 'about', 'work', 'skills', 'contact']

function MagneticButton({ children, ...props }) {
  const ref = useMagnetic(0.25)
  return <button ref={ref} {...props}>{children}</button>
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { locale, t } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/95 dark:bg-ink/95 backdrop-blur-sm border-b-3 border-ink dark:border-bg">
        <nav className="max-w-6xl mx-auto px-6 py-4 safe-x flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-base font-bold text-ink dark:text-bg flex items-center gap-2"
          >
            <span className="inline-block h-3 w-3 bg-coral" aria-hidden="true" />
            kazuno
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <ul className="hidden sm:flex items-center gap-6 font-mono text-sm">
              {t.nav.map((item) => {
                const isActive = activeId === item.href.slice(1)
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`nav-link text-ink dark:text-bg transition-colors duration-120 ${
                        isActive ? 'is-active font-bold' : 'hover:text-coral dark:hover:text-amber'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            <MagneticButton
              onClick={() => generateCv(locale)}
              aria-label={t.ui.navbar.downloadCv}
              title={t.ui.navbar.downloadCv}
              className="btn-pop border-3 border-ink dark:border-bg bg-amber p-3 text-ink hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink"
            >
              <Download size={18} />
            </MagneticButton>

            <LanguageToggle />

            <MagneticButton
              onClick={toggleTheme}
              aria-label={isDark ? t.ui.navbar.themeLight : t.ui.navbar.themeDark}
              className="btn-pop border-3 border-ink dark:border-bg bg-blue p-3 text-ink dark:text-ink hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </MagneticButton>

            <MagneticButton
              onClick={() => setMenuOpen(true)}
              aria-label={t.ui.navbar.openMenu}
              aria-expanded={menuOpen}
              className="sm:hidden btn-pop border-3 border-ink dark:border-bg bg-pink p-3 text-ink dark:text-ink hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink"
            >
              <Menu size={18} />
            </MagneticButton>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
