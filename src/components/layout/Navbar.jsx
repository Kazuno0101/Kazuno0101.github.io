import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme.jsx'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'
import { useMagnetic } from '../../hooks/useMagnetic.js'
import { nav } from '../../data/portfolio.js'
import { Sun, Moon, Menu } from 'lucide-react'
import MobileMenu from '../ui/MobileMenu.jsx'

const sectionIds = ['top', 'about', 'work', 'skills', 'contact']

function MagneticButton({ children, ...props }) {
  const ref = useMagnetic(0.25)
  return <button ref={ref} {...props}>{children}</button>
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/95 dark:bg-ink/95 backdrop-blur-sm border-b-3 border-ink dark:border-bg">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-base font-bold text-ink dark:text-bg flex items-center gap-2"
          >
            <span className="inline-block h-3 w-3 bg-coral" aria-hidden="true" />
            kazuno
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <ul className="hidden sm:flex items-center gap-6 font-mono text-sm">
              {nav.map((item) => {
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
              onClick={toggleTheme}
              aria-label={isDark ? 'Aktifkan light mode' : 'Aktifkan dark mode'}
              className="btn-pop border-3 border-ink dark:border-bg bg-blue p-3 text-ink dark:text-ink hover:bg-ink hover:text-bg"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </MagneticButton>

            <MagneticButton
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu"
              aria-expanded={menuOpen}
              className="sm:hidden btn-pop border-3 border-ink dark:border-bg bg-pink p-3 text-ink dark:text-ink hover:bg-ink hover:text-bg"
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
