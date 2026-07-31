import { useEffect, useRef, useState } from 'react'
import { usePointer } from '../../hooks/usePointer.js'

// Custom brutalist cursor: a coral square block that follows the pointer
// and grows when hovering interactive elements. Static color — coral
// passes WCAG AA on both light (#FFF) and dark (#0A0A0A) backgrounds.
// Desktop + fine pointer only.
export default function Cursor() {
  const fine = usePointer()
  const dotRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!fine) return
    const dot = dotRef.current
    if (!dot) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          dot.style.transform = `translate(${x}px, ${y}px)`
        })
      }
    }

    const interactiveSel = 'a, button, [data-cursor], input, textarea, select'
    const onOver = (e) => {
      if (e.target.closest(interactiveSel)) setHovering(true)
    }
    const onOut = (e) => {
      if (e.target.closest(interactiveSel)) setHovering(false)
    }

    document.body.classList.add('cursor-active')
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.body.classList.remove('cursor-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [fine])

  if (!fine) return null

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`cursor-dot ${hovering ? 'is-hovering' : ''}`}
    >
      <span className="cursor-dot-inner" />
    </div>
  )
}
