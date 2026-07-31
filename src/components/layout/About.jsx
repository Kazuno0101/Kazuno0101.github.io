import { about } from '../../data/portfolio.js'
import Reveal from '../ui/Reveal.jsx'
import Sticker from '../ui/Sticker.jsx'
import FloatingShape from '../ui/FloatingShape.jsx'

const yearColors = ['text-coral', 'text-blue', 'text-pink']

export default function About() {
  return (
    <section id="about" className="border-b-3 border-ink dark:border-bg relative">
      {/* sticker + floating shapes */}
      <Sticker icon="Asterisk" color="bg-lime" size="md" rotate="left" className="absolute top-10 right-8 hidden md:inline-flex" />
      <Sticker icon="Flame" color="bg-coral" size="sm" rotate="right" className="absolute top-40 right-16 hidden md:inline-flex" />
      <FloatingShape shape="circle" color="bg-blue" size="sm" rotate={0} className="absolute bottom-16 left-10 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid gap-12 md:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="font-mono text-sm text-muted dark:text-bg/70">
              // about
            </span>
            <h2 className="font-display font-extrabold text-ink dark:text-bg text-3xl sm:text-4xl leading-[1.05] tracking-tight">
              {about.headline}
            </h2>
            <div className="flex flex-col gap-4 text-base text-muted dark:text-bg/80">
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            <span className="font-mono text-sm text-muted dark:text-bg/70">
              // experience
            </span>
            <ul className="flex flex-col gap-4">
              {about.experience.map((exp, i) => (
                <li
                  key={i}
                  className="p-5 flex flex-col gap-1 bg-paper dark:bg-ink border-3 border-ink dark:border-bg shadow-hard-sm"
                >
                  <span className={`font-mono text-xs font-bold ${yearColors[i % 3]}`}>
                    {exp.year}
                  </span>
                  <span className="font-display font-bold text-ink dark:text-bg text-lg">
                    {exp.role}
                  </span>
                  <span className="font-mono text-sm text-muted dark:text-bg/70">
                    {exp.org}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
  )
}
