import { profile } from '../../data/portfolio.js'
import Marquee from '../ui/Marquee.jsx'

// Two-row ticker wall between Projects and Skills.
const facts = [
  'CAFFEINE-POWERED',
  'MECHANICAL KEYBOARD',
  'PIXEL PERFECTIONIST',
  'COMMITS EVERY DAY',
  'CLEAN GIT HISTORY',
  'SHIP EVERY FRIDAY',
]

const availability = [
  'OPEN FOR FREELANCE',
  'REMOTE / HYBRID',
  profile.location,
  profile.email,
  'RESPONSE < 24 HOURS',
]

function pill(text) {
  return (
    <span className="inline-block border-2 border-current px-3 py-1 font-display font-extrabold uppercase">
      {text}
    </span>
  )
}

export default function TickerWall() {
  return (
    <section aria-label="ticker wall" className="border-b-3 border-ink dark:border-bg overflow-hidden">
      {/* Row 1: fun facts — leftward, on coral */}
      <div className="border-b-3 border-ink dark:border-bg bg-coral py-4">
        <Marquee
          items={facts.map(pill)}
          duration={26}
          separator="✦"
          className="text-ink text-xl"
        />
      </div>

      {/* Row 2: availability — rightward, on amber */}
      <div className="bg-amber py-4">
        <Marquee
          items={availability.map(pill)}
          duration={24}
          reverse
          separator="●"
          className="text-ink text-lg"
        />
      </div>
    </section>
  )
}
