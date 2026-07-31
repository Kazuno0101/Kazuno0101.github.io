import { useState, useEffect, useRef, useCallback } from 'react'

// Typewriter effect hook. Cycles through an array of words,
// typing each one character by character with a blinking caret.
// Returns the currently displayed text (with caret).
// Respects prefers-reduced-motion (shows full text immediately).
export function useTyping(words, { typeSpeed = 80, deleteSpeed = 50, pauseEnd = 2000 } = {}) {
  const [display, setDisplay] = useState('')
  const [caretVisible, setCaretVisible] = useState(true)
  const indexRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)
  const rafRef = useRef(0)

  // Blink caret every 530ms
  useEffect(() => {
    const id = setInterval(() => setCaretVisible((v) => !v), 530)
    return () => clearInterval(id)
  }, [])

  // Typing loop
  const tick = useCallback(() => {
    const word = words[indexRef.current % words.length]
    if (!word) return

    if (!deletingRef.current) {
      // Typing forward
      if (charRef.current < word.length) {
        charRef.current++
        setDisplay(word.slice(0, charRef.current))
      } else {
        // Pause at end of word, then start deleting
        deletingRef.current = true
        rafRef.current = setTimeout(tick, pauseEnd)
        return
      }
      rafRef.current = setTimeout(tick, typeSpeed + Math.random() * 40)
    } else {
      // Deleting
      if (charRef.current > 0) {
        charRef.current--
        setDisplay(word.slice(0, charRef.current))
        rafRef.current = setTimeout(tick, deleteSpeed)
      } else {
        // Move to next word
        deletingRef.current = false
        indexRef.current++
        charRef.current = 0
        rafRef.current = setTimeout(tick, 400)
      }
    }
  }, [words, typeSpeed, deleteSpeed, pauseEnd])

  useEffect(() => {
    // Reduced motion: show first word fully, no animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(words[0] || '')
      return
    }

    rafRef.current = setTimeout(tick, 600)
    return () => clearTimeout(rafRef.current)
  }, [tick])

  const caret = caretVisible ? '|' : '\u00A0'
  return { display, caret }
}
