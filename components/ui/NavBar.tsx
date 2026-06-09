'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-[#3A2410]'
          : 'bg-transparent border-b border-transparent'
      }`}
      aria-label="Główna nawigacja"
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link
          href="/"
          className="font-display font-bold text-base text-signal-white hover:text-amber transition-colors duration-200 tracking-[-0.01em]"
        >
          Przemyślana Pizza
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#menu"
            className="font-body text-sm text-warm-gray hover:text-signal-white transition-colors duration-200"
          >
            Menu
          </a>
          <a
            href="#dlaczego1"
            className="font-body text-sm text-warm-gray hover:text-signal-white transition-colors duration-200"
          >
            O nas
          </a>
          <a
            href="#zamow"
            className="font-body text-sm text-warm-gray hover:text-signal-white transition-colors duration-200"
          >
            Zamów
          </a>
          <a
            href="tel:+48790489090"
            className="font-mono text-sm text-amber hover:text-scorch transition-colors duration-200 ml-4"
            aria-label="Zadzwoń i zamów pizzę"
          >
            +48 790 489 090
          </a>
        </div>
        {/* Mobile phone link */}
        <a
          href="tel:+48790489090"
          className="md:hidden font-mono text-sm text-amber"
          aria-label="Zadzwoń"
        >
          Zamów →
        </a>
      </nav>
    </header>
  )
}
