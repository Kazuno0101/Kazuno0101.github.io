import { useState, useMemo, useRef, useEffect } from 'react'
import { projects } from '../../data/portfolio.js'
import Reveal from '../ui/Reveal.jsx'
import SegmentedToggle from '../ui/SegmentedToggle.jsx'
import ProjectCard from './ProjectCard.jsx'

const TYPE_OPTIONS = [
  { value: 'all', label: 'all' },
  { value: 'client', label: 'client work' },
  { value: 'personal', label: 'personal' },
]

function countByType(type) {
  return projects.filter((p) => p.type === type).length
}

// Animated count-up hook.
function useCountUp(target, visible) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) { setCount(0); return }
    let current = 0
    const step = Math.max(1, Math.ceil(target / 12))
    const id = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(id)
    }, 50)
    return () => clearInterval(id)
  }, [target, visible])

  return count
}

const INITIAL_SHOW = 6

export default function Projects() {
  const [projectType, setProjectType] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const [sectionVisible, setSectionVisible] = useState(false)

  const filtered = useMemo(() => {
    if (projectType === 'all') return projects
    return projects.filter((p) => p.type === projectType)
  }, [projectType])

  const displayed = expanded ? filtered : filtered.slice(0, INITIAL_SHOW)
  const hasMore = filtered.length > INITIAL_SHOW

  const projectCount = useCountUp(filtered.length, sectionVisible)

  const sectionRef = useRef(null)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true) },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Reset expanded when type changes
  useEffect(() => { setExpanded(false) }, [projectType])

  return (
    <section id="work" className="border-b-3 border-ink dark:border-bg" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-10">
        {/* Header row with animated count */}
        <Reveal className="flex items-baseline gap-4 flex-wrap">
          <span className="font-mono text-sm text-muted dark:text-bg/70">
            // work
          </span>
          <h2 className="font-display font-extrabold text-ink dark:text-bg text-3xl sm:text-4xl tracking-tight">
            proyek terpilih
          </h2>
          <span className="font-mono text-sm font-bold bg-amber text-ink border-2 border-ink px-3 py-1">
            {String(projectCount).padStart(2, '0')}
          </span>
        </Reveal>

        <Reveal className="flex items-center justify-between flex-wrap gap-4">
          <SegmentedToggle
            options={TYPE_OPTIONS.map((opt) => ({
              ...opt,
              count: opt.value === 'all' ? projects.length : countByType(opt.value),
            }))}
            value={projectType}
            onChange={setProjectType}
          />
          {hasMore && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="btn-pop border-3 border-ink dark:border-bg bg-bg text-ink dark:bg-ink dark:text-bg font-mono text-sm font-bold px-6 py-2.5 hover:bg-ink hover:text-bg dark:hover:bg-bg dark:hover:text-ink transition-colors duration-120"
            >
              {expanded ? 'tutup' : `lihat semua (${filtered.length})`}
            </button>
          )}
        </Reveal>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 border-3 border-ink dark:border-bg auto-rows-fr">
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
