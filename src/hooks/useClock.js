import { useState, useEffect } from 'react'

// Live clock for a given IANA timezone. Updates every second.
// Returns a formatted `HH:MM:SS` string.
export function useClock(timeZone = 'Asia/Jakarta') {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}
