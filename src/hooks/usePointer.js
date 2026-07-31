import { useEffect, useState } from 'react'

// Detects whether the current device can hover and has a fine pointer
// (i.e. a real mouse). Used to gate the custom cursor and tilt effects
// so they never run on touchscreens.
export function usePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return fine
}
