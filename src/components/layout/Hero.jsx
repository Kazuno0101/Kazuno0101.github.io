import { about, profile } from '../../data/portfolio.js'
import { useClock } from '../../hooks/useClock.js'
import Marquee from '../ui/Marquee.jsx'
import Sticker from '../ui/Sticker.jsx'
import FloatingShape from '../ui/FloatingShape.jsx'

// Colored ticker: alternating bright pills instead of flat strip
const tickerLabels = [
  'TERSEDIA UNTUK KERJA',
  profile.location,
  profile.role,
  'TERSEDIA UNTUK FREELANCE',
]

const tickerColors = ['bg-amber', 'bg-blue', 'bg-pink', 'bg-lime']

const tickerItems = tickerLabels.map((label, i) => (
  <span className={`inline-block border-2 border-ink px-3 py-1 ${tickerColors[i % tickerColors.length]} text-ink`}>
    {label}
  </span>
))

export default function Hero() {
  const wib = useClock('Asia/Jakarta')

  return (
    <section id="top" className="border-b-3 border-ink dark:border-bg overflow-hidden relative">
      {/* decorative sticker cluster — top-right */}
      <div className="absolute top-20 right-8 hidden md:flex flex-col gap-3 items-center">
        <Sticker icon="Sparkles" color="bg-pink" size="lg" rotate="right" />
        <Sticker icon="Code2" color="bg-blue" size="md" rotate="left" />
      </div>

      {/* floating shapes — left side, hidden on small screens */}
      <FloatingShape shape="circle" color="bg-amber" size="md" rotate={12} className="absolute top-32 left-6 hidden lg:block" />
      <FloatingShape shape="cross" color="bg-coral" size="sm" rotate={-8} className="absolute bottom-40 left-16 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 flex flex-col gap-8">
        {/* status strip with live clock */}
        <div className="flex items-center gap-4 font-mono text-xs text-muted dark:text-bg/70 flex-wrap">
          <span className="inline-block h-2.5 w-2.5 bg-coral animate-pulse" aria-hidden="true" />
          {about.prompt}
          <span className="border-2 border-current px-2 py-0.5 font-bold text-ink dark:text-bg bg-lime" aria-label={`Waktu lokal: ${wib}`}>
            WIB {wib}
          </span>
        </div>

        {/* poster wordmark + headline */}
        <div className="overflow-hidden">
          <h1 className="font-display font-extrabold text-ink dark:text-bg leading-[0.9] tracking-tight">
            <span className="hero-line block text-5xl sm:text-7xl md:text-8xl" style={{ animationDelay: '60ms' }}>
              {profile.name}
            </span>
            <span className="hero-line block text-coral text-5xl sm:text-7xl md:text-8xl" style={{ animationDelay: '180ms' }}>
              {profile.role}
            </span>
          </h1>
        </div>

        <div className="hero-line" style={{ animationDelay: '320ms' }}>
          <p className="text-lg text-muted dark:text-bg/80 max-w-xl">
            {profile.tagline}
          </p>
        </div>

        <div className="hero-line flex flex-wrap gap-4" style={{ animationDelay: '440ms' }}>
          <a
            href="#work"
            className="btn-pop border-3 border-ink dark:border-bg bg-amber text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink"
          >
            lihat proyek →
          </a>
          <a
            href="#contact"
            className="btn-pop border-3 border-ink dark:border-bg bg-lime text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink"
          >
            mulai ngobrol
          </a>
        </div>
      </div>

      {/* colored status ticker (velocity-reactive) */}
      <div className="border-t-3 border-ink dark:border-bg py-3">
        <Marquee
          items={tickerItems}
          duration={28}
          separator="✦"
          reactToScroll
          className="font-mono text-sm font-bold"
        />
      </div>
    </section>
  )
}
