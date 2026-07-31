import { useRef, useEffect } from 'react'
import { useScrollVelocity } from '../../hooks/useScrollVelocity.js'

// Infinite scrolling ticker. Uses a rAF loop instead of CSS animation so
// scroll-reactive speed changes never restart the loop. `velocity` is read
// from a ref (zero re-renders) and only subscribed when `reactToScroll` is true.
export default function Marquee({
  items = [],
  duration = 30,
  reverse = false,
  pauseOnHover = false,
  reactToScroll = false,
  className = '',
  itemClassName = '',
  separator = '/',
}) {
  const trackRef = useRef(null)
  const viewportRef = useRef(null)
  const pausedRef = useRef(false)
  const { velocity: velocityRef, direction: directionRef } = useScrollVelocity({ enabled: reactToScroll })
  const sequence = [...items, ...items]

  useEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track) return

    // Under reduced motion, just let the track sit at origin.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.style.transform = 'translate3d(0,0,0)'
      return undefined
    }

    let offset = 0
    let last = performance.now()
    let half = 0
    let raf = 0

    // Measure half-width (one full copy of items).
    const measure = () => {
      half = track.scrollWidth / 2
    }
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(track)

    const tick = (now) => {
      const dt = Math.min(64, now - last) / 1000
      last = now

      let dir = reverse ? -1 : 1
      let factor = 1

      if (reactToScroll) {
        const v = velocityRef.current
        factor = 1 + Math.abs(v) * 1.5
        // Use persisted direction: stays reversed after scroll-up
        // even after velocity has decayed to zero
        dir *= directionRef.current
      }

      if (!pausedRef.current && half > 0) {
        offset += dir * (half / duration) * factor * dt
        offset = ((offset % half) + half) % half
        track.style.transform = `translate3d(${-offset}px,0,0)`
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    // Pause on hover
    const onEnter = () => { pausedRef.current = true }
    const onLeave = () => { pausedRef.current = false }

    if (pauseOnHover && viewport) {
      viewport.addEventListener('mouseenter', onEnter)
      viewport.addEventListener('mouseleave', onLeave)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      if (pauseOnHover && viewport) {
        viewport.removeEventListener('mouseenter', onEnter)
        viewport.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [duration, reverse, reactToScroll, pauseOnHover])

  return (
    <div
      ref={viewportRef}
      className={`overflow-hidden whitespace-nowrap select-none ${className}`}
    >
      <div ref={trackRef} className="marquee-track">
        {sequence.map((item, i) => (
          <span key={i} className={`inline-flex items-center ${itemClassName}`}>
            {item}
            <span aria-hidden="true" className="mx-6 opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
