import { profile } from '../../data/portfolio.js'
import Marquee from '../ui/Marquee.jsx'

const footerItems = ['THEMES: BRUTALIST', 'BUILT WITH REACT + TAILWIND', profile.email, profile.role]

export default function Footer() {
  const year = new Date().getFullYear()

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
        <span>
          © {year} {profile.name}. all rights reserved.
        </span>
        <a
          href="#top"
          className="btn-pop border-3 border-ink dark:border-bg bg-blue px-3 py-2 text-ink hover:bg-ink hover:text-bg"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  )
}
