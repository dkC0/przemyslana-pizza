import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    let raf: number

    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return count
}
