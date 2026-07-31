import { useEffect } from 'react'

// Calls `onTrigger` when the Konami code is typed:
// ArrowUp x2, ArrowDown x2, ArrowLeft, ArrowRight, b, a
export function useKonami(onTrigger) {
  useEffect(() => {
    const sequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a',
    ]
    let position = 0

    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === sequence[position]) {
        position += 1
        if (position === sequence.length) {
          position = 0
          onTrigger()
        }
      } else {
        // Allow restarting if the key matches the first entry.
        position = key === sequence[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onTrigger])
}
