import { useState, useCallback } from 'react'
import { projectAccent } from '../../data/portfolio.js'
import Reveal from '../ui/Reveal.jsx'

// Per-card detail overlay: toggled on click, slides in from right.
function CardDetail({ project, isOpen }) {
  return (
    <div
      className={`absolute inset-0 z-10 flex flex-col justify-between p-6 transition-all duration-150 ${
        isOpen
          ? 'opacity-100 translate-x-0 pointer-events-auto'
          : 'opacity-0 translate-x-full pointer-events-none'
      }`}
      style={{ backgroundColor: 'inherit' }}
    >
      <div className="flex flex-col gap-4 flex-1">
        <button
          type="button"
          className="self-end font-mono text-xs font-bold border-2 border-current px-2 py-1 opacity-70 hover:opacity-100 transition-opacity duration-120"
          aria-label="Close detail"
          tabIndex={isOpen ? 0 : -1}
        >
          ESC / click back
        </button>

        <span className="font-mono text-xs opacity-80 font-bold">
          {project.id} / detail
        </span>

        <h3 className="font-display font-bold text-2xl leading-tight">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-1 border-2 border-ink bg-ink text-bg dark:bg-bg dark:text-ink font-bold"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 font-mono text-xs flex-wrap">
            <span className="font-bold">links:</span>
            {project.demo && project.demo !== '#' ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop border-2 border-ink bg-amber text-ink px-3 py-1.5 font-bold hover:bg-ink hover:text-bg"
              >
                demo ↗
              </a>
            ) : (
              <span className="opacity-50">demo —</span>
            )}
            {project.repo && project.repo !== '#' ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop border-2 border-ink bg-blue text-ink px-3 py-1.5 font-bold hover:bg-ink hover:text-bg"
              >
                repo ↗
              </a>
            ) : (
              <span className="opacity-50">repo —</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  const accent = projectAccent[project.category] || projectAccent.tool
  const [expanded, setExpanded] = useState(false)

  const toggle = useCallback(() => setExpanded((v) => !v), [])
  const close = useCallback(() => setExpanded(false), [])

  return (
    <Reveal
      delay={index * 80}
      className="border-b-3 sm:border-r-3 last:border-r-0 border-ink dark:border-bg"
    >
      <article
        className={`card-shift relative flex flex-col gap-4 p-6 h-full border-3 border-ink dark:border-bg ${accent} overflow-hidden`}
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-label={`${project.title}${expanded ? ' (detail view)' : ''}`}
        onKeyDown={(e) => { if (e.key === 'Escape') close(); if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } }}
      >
        {/* Front face */}
        <div className={`flex flex-col gap-4 flex-1 transition-all duration-150 ${expanded ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs opacity-80 font-bold">
              {project.id} / project
            </span>
            <span className="font-mono text-xs opacity-80 uppercase border-2 border-current px-2 py-0.5">
              {project.category}
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl leading-tight">
            {project.title}
          </h3>

          <p className="text-sm opacity-90 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-1 border-2 border-current opacity-90 transition-colors duration-120 hover:bg-ink hover:text-bg"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Quick links */}
          <div className="flex gap-4 mt-2 font-mono text-xs">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline opacity-90 hover:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                demo ↗
              </a>
            )}
            {project.repo && project.repo !== '#' && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline opacity-90 hover:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                repo ↗
              </a>
            )}
          </div>

          {/* Expand hint */}
          <div className="flex items-center gap-2 mt-1 font-mono text-[10px] text-muted dark:text-bg/50">
            <span className="border border-current px-1.5 py-0.5">click to expand</span>
          </div>
        </div>

        {/* Expanded detail overlay */}
        <CardDetail project={project} isOpen={expanded} />
      </article>
    </Reveal>
  )
}
