import { skills } from '../../data/portfolio.js'
import Reveal from '../ui/Reveal.jsx'
import Marquee from '../ui/Marquee.jsx'
import Sticker from '../ui/Sticker.jsx'
import FloatingShape from '../ui/FloatingShape.jsx'

// Flatten all skills into one ticker stream
const allSkills = skills.groups.flatMap((g) => g.items)

const panelTints = ['bg-amber text-ink', 'bg-blue text-ink', 'bg-lime text-ink']

export default function Skills() {
  return (
    <section id="skills" className="border-b-3 border-ink dark:border-bg relative">
      {/* decorative elements */}
      <Sticker icon="Bolt" color="bg-pink" size="md" rotate="right" className="absolute top-10 right-8 hidden md:inline-flex" />
      <FloatingShape shape="square" color="bg-coral" size="sm" rotate={15} className="absolute bottom-20 right-24 hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-10">
        <Reveal className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-muted dark:text-bg/70">
            {skills.prompt}
          </span>
          <h2 className="font-display font-extrabold text-ink dark:text-bg text-3xl sm:text-4xl tracking-tight">
            tech stack
          </h2>
        </Reveal>

        {/* full-stack ticker (velocity-reactive) */}
        <Reveal className="border-y-3 border-ink dark:border-bg overflow-hidden bg-coral">
          <Marquee
            items={allSkills}
            duration={35}
            reverse
            pauseOnHover
            reactToScroll
            className="py-4 font-display font-bold text-2xl text-ink"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {skills.groups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 100}
              className={`p-6 border-3 border-ink dark:border-bg shadow-hard ${panelTints[i % 3]}`}
            >
              <h3 className="font-mono text-xs uppercase mb-5 opacity-80 font-bold flex items-center gap-2">
                <span className="inline-block h-2 w-2 bg-current" aria-hidden="true" />
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display font-bold text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
