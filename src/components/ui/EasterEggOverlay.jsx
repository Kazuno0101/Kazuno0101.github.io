import { useState, useCallback } from 'react'
import { useKonami } from '../../hooks/useKonami.js'

// Listens for the Konami code and spawns a brief brutalist confetti burst
// of bordered shapes across the screen, plus a 1-frame color flash.
// Auto-dismisses. No-op under reduced motion (hook still runs harmlessly,
// but visuals are skipped).
export default function EasterEggOverlay() {
  const [active, setActive] = useState(false)

  const trigger = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setActive(false)
    // Defer to next frame so re-mount of burst runs even on rapid re-trigger.
    requestAnimationFrame(() => setActive(true))
    window.setTimeout(() => setActive(false), 2600)
  }, [])

  useKonami(trigger)

  if (!active) return null

  const shapes = Array.from({ length: 26 })
  const palette = ['bg-amber', 'bg-coral', 'bg-blue', 'bg-pink', 'bg-lime', 'bg-ink']
  const geometries = ['square', 'circle', 'triangle', 'cross', 'ring', 'plus']

  return (
    <div className="easter-egg-overlay" aria-hidden="true">
      <div className="easter-egg-flash" />
      {shapes.map((_, i) => {
        const left = Math.random() * 100
        const delay = Math.random() * 0.25
        const duration = 1.8 + Math.random() * 0.8
        const rotate = Math.random() * 360
        const color = palette[i % palette.length]
        const shape = geometries[i % geometries.length]
        return (
          <span
            key={i}
            className={`ee-shape ee-${shape} ${color}`}
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              '--ee-rotate': `${rotate}deg`,
            }}
          />
        )
      })}
    </div>
  )
}
