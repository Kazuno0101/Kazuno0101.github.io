import { useLocale } from '../../hooks/useLocale.jsx'
import Marquee from '../ui/Marquee.jsx'

function pill(text) {
  return (
    <span className="inline-block border-2 border-current px-3 py-1 font-display font-extrabold uppercase">
      {text}
    </span>
  )
}

// Two-row ticker wall between Projects and Skills.
export default function TickerWall() {
  const { t } = useLocale()
  const { facts, availabilitySuffix } = t.ui.tickerWall

  // Di dalam komponen supaya ikut re-render saat locale berganti.
  const availability = [
    availabilitySuffix[0],
    availabilitySuffix[1],
    t.profile.location,
    t.profile.email,
    availabilitySuffix[2],
  ]

  return (
    <section aria-label={t.ui.tickerWall.aria} className="border-b-3 border-ink dark:border-bg overflow-hidden">
      {/* Row 1: fun facts — leftward, on coral */}
      <div className="border-b-3 border-ink dark:border-bg bg-coral py-4">
        <Marquee
          items={facts.map(pill)}
          duration={26}
          separator="✦"
          className="text-ink text-sm sm:text-xl"
        />
      </div>

      {/* Row 2: availability — rightward, on amber */}
      <div className="bg-amber py-4">
        <Marquee
          items={availability.map(pill)}
          duration={24}
          reverse
          separator="●"
          className="text-ink text-sm sm:text-lg"
        />
      </div>
    </section>
  )
}
