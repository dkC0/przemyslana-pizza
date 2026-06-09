'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-obsidian overflow-hidden grain"
      aria-label="Sekcja główna"
    >
      {/* Background gradient — warm dark */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian to-[#0F0800]"
        aria-hidden="true"
      />

      {/* Edison lamp glow — main, top right */}
      <div
        className="absolute top-0 right-0 w-[70vw] h-[70vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 72% 18%, rgba(184,115,22,0.32) 0%, rgba(184,115,22,0.12) 40%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Edison lamp glow — secondary, center right */}
      <div
        className="absolute top-1/4 right-1/3 w-[50vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(184,115,22,0.18) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      {/* Floor reflection — warm amber low */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35vh] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(184,115,22,0.08) 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Pizza illustration */}
      <motion.div
        className="absolute right-[-18vw] top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 0.88, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <svg
            viewBox="0 0 400 400"
            style={{ width: 'clamp(420px, 52vw, 780px)', height: 'clamp(420px, 52vw, 780px)' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="crust-g" cx="50%" cy="50%" r="50%">
                <stop offset="78%" stopColor="#7A5228" />
                <stop offset="100%" stopColor="#3D2610" />
              </radialGradient>
              <radialGradient id="sauce-g" cx="42%" cy="38%" r="58%">
                <stop offset="0%" stopColor="#9E1B32" />
                <stop offset="100%" stopColor="#5A0E1C" />
              </radialGradient>
              <radialGradient id="cheese-g" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#EEE0A8" />
                <stop offset="100%" stopColor="#C8B06A" />
              </radialGradient>
              <radialGradient id="glow-g" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#9E1B32" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#9E1B32" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Outer glow */}
            <circle cx="200" cy="200" r="200" fill="url(#glow-g)" />

            {/* Crust */}
            <circle cx="200" cy="200" r="190" fill="url(#crust-g)" />

            {/* Crust bake spots */}
            <circle cx="145" cy="52"  r="7"  fill="#2E1A06" opacity="0.5" />
            <circle cx="258" cy="72"  r="5"  fill="#2E1A06" opacity="0.4" />
            <circle cx="330" cy="158" r="8"  fill="#2E1A06" opacity="0.45" />
            <circle cx="348" cy="258" r="5"  fill="#2E1A06" opacity="0.4" />
            <circle cx="270" cy="345" r="7"  fill="#2E1A06" opacity="0.5" />
            <circle cx="155" cy="348" r="5"  fill="#2E1A06" opacity="0.4" />
            <circle cx="60"  cy="272" r="8"  fill="#2E1A06" opacity="0.45" />
            <circle cx="48"  cy="152" r="6"  fill="#2E1A06" opacity="0.4" />

            {/* Crust highlight arc (top-left) */}
            <path
              d="M 80 95 A 152 152 0 0 1 210 13"
              fill="none"
              stroke="rgba(240,190,90,0.18)"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Sauce */}
            <circle cx="200" cy="200" r="168" fill="url(#sauce-g)" />

            {/* Cheese base */}
            <circle cx="200" cy="200" r="150" fill="url(#cheese-g)" />

            {/* Slice cut lines — 8 slices */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((angle) => {
              const rad = (angle * Math.PI) / 180
              const cos = Math.cos(rad)
              const sin = Math.sin(rad)
              return (
                <line
                  key={angle}
                  x1={200 + 190 * cos} y1={200 + 190 * sin}
                  x2={200 - 190 * cos} y2={200 - 190 * sin}
                  stroke="rgba(40,20,8,0.35)"
                  strokeWidth="1.5"
                />
              )
            })}

            {/* Mozzarella chunks */}
            <ellipse cx="152" cy="143" rx="19" ry="14" fill="#F6F0DC" opacity="0.92" transform="rotate(-25 152 143)" />
            <ellipse cx="238" cy="128" rx="16" ry="21" fill="#F6F0DC" opacity="0.90" transform="rotate(18 238 128)" />
            <ellipse cx="272" cy="205" rx="17" ry="13" fill="#F6F0DC" opacity="0.92" transform="rotate(38 272 205)" />
            <ellipse cx="243" cy="268" rx="21" ry="15" fill="#F6F0DC" opacity="0.90" transform="rotate(-12 243 268)" />
            <ellipse cx="158" cy="260" rx="15" ry="19" fill="#F6F0DC" opacity="0.92" transform="rotate(28 158 260)" />
            <ellipse cx="193" cy="188" rx="13" ry="17" fill="#F6F0DC" opacity="0.88" transform="rotate(-8 193 188)" />
            <ellipse cx="200" cy="248" rx="10" ry="14" fill="#F6F0DC" opacity="0.85" transform="rotate(5 200 248)" />

            {/* Basil leaves */}
            <ellipse cx="172" cy="167" rx="9" ry="15" fill="#2D5C27" transform="rotate(-35 172 167)" />
            <ellipse cx="172" cy="167" rx="5" ry="12" fill="#3A7A33" opacity="0.6" transform="rotate(-35 172 167)" />

            <ellipse cx="228" cy="238" rx="11" ry="17" fill="#2D5C27" transform="rotate(22 228 238)" />
            <ellipse cx="228" cy="238" rx="6" ry="13" fill="#3A7A33" opacity="0.6" transform="rotate(22 228 238)" />

            <ellipse cx="208" cy="152" rx="8" ry="14" fill="#2D5C27" transform="rotate(12 208 152)" />
            <ellipse cx="208" cy="152" rx="4" ry="10" fill="#3A7A33" opacity="0.6" transform="rotate(12 208 152)" />

            {/* Sauce visible dots (bubbled) */}
            <circle cx="142" cy="198" r="9"  fill="#8B1628" opacity="0.75" />
            <circle cx="217" cy="163" r="7"  fill="#8B1628" opacity="0.70" />
            <circle cx="258" cy="238" r="8"  fill="#8B1628" opacity="0.72" />
            <circle cx="178" cy="232" r="10" fill="#8B1628" opacity="0.70" />
            <circle cx="192" cy="133" r="6"  fill="#8B1628" opacity="0.65" />

            {/* Crust inner rim */}
            <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(20,10,4,0.3)" strokeWidth="2" />
            <circle cx="200" cy="200" r="189" fill="none" stroke="rgba(240,180,80,0.12)" strokeWidth="5" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.p
            className="font-body font-medium text-xs text-amber uppercase tracking-[0.15em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Franciszkańska 23, Przemyśl
          </motion.p>

          <motion.h1
            className="font-display font-bold text-signal-white leading-[0.92] tracking-[-0.03em] mb-4"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            }}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
          >
            Przemyślana.
          </motion.h1>

          <motion.p
            className="font-display font-medium text-scorch mb-8"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.4, 0, 0.2, 1] }}
          >
            Pizza z głową.
          </motion.p>

          <motion.p
            className="font-mono text-xs text-muted mb-8 tracking-[0.08em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
          >
            4.8★ z 1200+ opinii · #1 w Przemyślu · Orły Gastronomii
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.32 }}
          >
            <a
              href="#zamow"
              className="font-display inline-flex items-center justify-center px-8 py-4 bg-amber text-obsidian font-bold text-base rounded-lg hover:bg-amber-light active:scale-[0.98] transition-all duration-200"
            >
              Zamów pizzę
            </a>
            <a
              href="#menu"
              className="font-body inline-flex items-center justify-center px-8 py-4 border border-[#4A2E10] text-dough-cream text-base rounded-lg hover:border-amber hover:text-signal-white transition-all duration-200"
            >
              Sprawdź 40 rodzajów →
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
