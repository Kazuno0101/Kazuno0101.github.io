import { contact } from '../../data/portfolio.js'
import { useMagnetic } from '../../hooks/useMagnetic.js'
import Reveal from '../ui/Reveal.jsx'
import Sticker from '../ui/Sticker.jsx'
import FloatingShape from '../ui/FloatingShape.jsx'

function MagneticA({ children, ...props }) {
  const ref = useMagnetic(0.2)
  return <a ref={ref} {...props}>{children}</a>
}

export default function Contact() {
  return (
    <section id="contact" className="border-b-3 border-ink dark:border-bg bg-amber relative overflow-hidden">
      {/* stickers cluster — bottom-right */}
      <div className="absolute bottom-12 right-10 hidden md:flex flex-col gap-3 items-center">
        <Sticker icon="Zap" color="bg-blue" size="lg" rotate="right" />
        <Sticker icon="Heart" color="bg-coral" size="md" rotate="left" />
      </div>

      {/* floating shapes */}
      <FloatingShape shape="ring" color="bg-ink" size="xl" rotate={20} className="absolute top-8 left-8 hidden lg:block" />
      <FloatingShape shape="plus" color="bg-lime" size="sm" rotate={-15} className="absolute bottom-24 left-24 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 flex flex-col gap-8">
        <Reveal delay={80}>
          <h2 className="font-display font-extrabold text-ink text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl">
            {contact.headline}
          </h2>
        </Reveal>

        <Reveal delay={180} className="flex flex-wrap gap-4 items-center">
          <MagneticA
            href={`mailto:${contact.email}`}
            className="btn-pop border-3 border-ink bg-ink text-bg font-mono text-sm font-bold px-6 py-3.5 hover:bg-pink hover:text-ink"
          >
            {contact.email} ↗
          </MagneticA>

          <div className="flex gap-4 flex-wrap">
            {contact.socials.map((s, i) => (
              <MagneticA
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-pop border-3 border-ink text-ink font-mono text-sm font-bold px-6 py-3.5 hover:bg-ink hover:text-bg ${i === 0 ? 'bg-lime' : 'bg-pink'}`}
              >
                {s.label} ↗
              </MagneticA>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
