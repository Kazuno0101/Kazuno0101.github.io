import { useRef, useEffect } from 'react'

// Tracks scroll velocity as a REF (no re-renders). Consumers read
// velocity.current on demand (e.g. inside a rAF loop). Also exposes
// direction.current which persists the last non-zero scroll direction
// (+1 down, -1 up) so consumers can hold a reversed state even after
// velocity has decayed to zero. Disabled under reduced motion.
export function useScrollVelocity({ enabled = true } = {}) {
  const velocity = useRef(0)
  const direction = useRef(1) // +1 = scroll down, -1 = scroll up
  const lastScroll = useRef(0)
  const lastTime = useRef(0)
  const raf = useRef(0)

  useEffect(() => {
    if (!enabled) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const decay = () => {
      const next = velocity.current * 0.9
      if (Math.abs(next) < 0.01) {
        velocity.current = 0
        raf.current = 0
        return
      }
      velocity.current = next
      raf.current = requestAnimationFrame(decay)
    }

    const onScroll = () => {
      const now = performance.now()
      const dy = window.scrollY - lastScroll.current
      const dt = Math.max(1, now - lastTime.current)
      lastScroll.current = window.scrollY
      lastTime.current = now
      // Normalize: px per ms, clamped to a sane range.
      const v = Math.max(-3, Math.min(3, dy / dt))
      velocity.current = v
      // Persist direction while velocity is non-trivial
      if (Math.abs(v) > 0.05) direction.current = v > 0 ? 1 : -1
      if (!raf.current) raf.current = requestAnimationFrame(decay)
    }

    lastScroll.current = window.scrollY
    lastTime.current = performance.now()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
      velocity.current = 0
      direction.current = 1
    }
  }, [enabled])

  return { velocity, direction }
}
