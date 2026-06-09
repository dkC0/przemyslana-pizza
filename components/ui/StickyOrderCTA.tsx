'use client'
import { useState, useEffect } from 'react'

export default function StickyOrderCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-label="Zamów pizzę"
    >
      <a
        href="tel:+48790489090"
        className="font-display flex items-center justify-center w-full h-14 bg-pomidoro text-signal-white font-bold text-base hover:bg-pomidoro-dark active:bg-pomidoro-dark transition-colors duration-200 animate-[pulseCTA_2s_ease-out_3]"
        aria-label="Zadzwoń i zamów pizzę"
      >
        +48 790 489 090 &nbsp;·&nbsp; Zamów
      </a>
    </div>
  )
}
