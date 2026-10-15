import { useEffect, useRef } from 'react'
import { useLocale } from '../../hooks/useLocale.jsx'
import { generateCv } from '../../utils/generateCv.js'
import { X, Download } from 'lucide-react'
import LanguageToggle from './LanguageToggle.jsx'

// Full-screen brutalist nav overlay. Focus-trapped.
// Closes on: link tap, X button, Esc, or resize to >= sm.
export default function MobileMenu({ open, onClose }) {
  const { locale, t } = useLocale()
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    const onResize = () => {
      if (window.innerWidth >= 640) onClose()
    }

    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink text-bg flex flex-col sm:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={t.ui.mobileMenu.title}
    >
      <div className="flex items-center justify-between border-b-3 border-bg px-6 py-4">
        <span className="font-mono text-base font-bold text-bg">kazuno</span>
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label={t.ui.mobileMenu.close}
          className="btn-invert border-3 border-bg p-3 hover:bg-bg hover:text-ink"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {t.nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-baseline gap-4 border-b-3 border-bg/30 py-4 font-display text-4xl font-bold text-bg"
          >
            <span className="font-mono text-sm text-amber">0{i + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="border-t-3 border-bg px-6 py-6 font-mono text-xs text-bg/70">
        <p className="mb-2">// {t.profile.email}</p>
        <div className="flex gap-4">
          {t.profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-amber"
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <LanguageToggle onDark />
          <button
            type="button"
            onClick={() => {
              onClose()
              generateCv(locale)
            }}
            className="btn-pop flex items-center gap-1.5 border-3 border-bg bg-bg px-3 py-2 text-xs font-bold text-ink hover:bg-amber hover:text-ink"
          >
            <Download size={14} />
            {t.ui.navbar.downloadCv}
          </button>
        </div>
      </div>
    </div>
  )
}
