import { useEffect, useState } from 'react'

// Returns the id of the section currently in view.
// `ids` = ordered list of section element ids to track.
export function useScrollSpy(ids = [], options = {}) {
  const { rootMargin = '-40% 0px -55% 0px' } = options
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    if (!ids.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin, threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids.join(','), rootMargin])

  return activeId
}
