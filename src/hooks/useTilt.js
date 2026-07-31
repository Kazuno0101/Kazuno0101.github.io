import { useRef, useEffect } from 'react'

// 3D tilt effect: element rotates on X/Y axes following the pointer.
// Relies on the parent having `perspective` set (see .tilt-stage in CSS).
// No-op on touch devices and under reduced motion.
export function useTilt(max = 8) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotX = (0.5 - py) * max * 2
      const rotY = (px - 0.5) * max * 2
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
      })
    }
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ''
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [max])

  return ref
}
