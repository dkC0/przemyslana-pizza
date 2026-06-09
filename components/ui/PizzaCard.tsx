'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pizza } from '@/data/menu'

export default function PizzaCard({ pizza, index }: { pizza: Pizza; index: number }) {
  const [size, setSize] = useState<32 | 45>(32)
  const price = size === 32 ? pizza.price32 : pizza.price45

  return (
    <motion.article
      className="group bg-obsidian-2 rounded-xl overflow-hidden border border-[#3A2410] hover:border-[#5A3A18] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.28), ease: [0.4, 0, 0.2, 1] }}
      aria-label={`Pizza ${pizza.name}, cena od ${pizza.price32} zł`}
    >
      <div className="relative h-44 bg-obsidian overflow-hidden flex flex-col justify-between p-5">
        {/* Background: pizza name as large texture */}
        <span
          className="font-display font-bold text-signal-white absolute -bottom-3 -right-2 leading-none tracking-[-0.04em] select-none pointer-events-none"
          style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', opacity: 0.04 }}
          aria-hidden="true"
        >
          {pizza.name}
        </span>

        {/* Top: category badges */}
        <div className="flex gap-1.5 flex-wrap">
          {pizza.category.filter(c => c !== 'wszystkie').map(cat => (
            <span
              key={cat}
              className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          {pizza.isPopular ? (
            <span className="font-mono text-xs text-pomidoro border border-pomidoro/40 px-2 py-0.5 rounded-full">
              Popularny
            </span>
          ) : (
            <span className="font-mono text-xs text-[#5A3E20]">
              {pizza.price32} — {pizza.price45} zł
            </span>
          )}
          <span className="font-mono text-xs text-[#5A3E20]">
            {pizza.category.includes('wegetarianskie') ? '✦ vege' : ''}
          </span>
        </div>

        {/* Hover accent line */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-pomidoro scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-signal-white mb-1.5 text-[1.125rem]">
          {pizza.name}
        </h3>
        <p className="font-body text-sm text-muted leading-relaxed mb-4 line-clamp-2">
          {pizza.ingredients}
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSize(prev => prev === 32 ? 45 : 32)}
            className="flex items-center gap-1.5 bg-obsidian rounded-lg px-3 py-2 border border-[#3A2410] hover:border-amber/40 transition-all duration-200 cursor-pointer"
            aria-label={`Zmień rozmiar z ${size} na ${size === 32 ? 45 : 32} cm`}
            aria-pressed={size === 45}
          >
            <span
              className={`font-mono text-xs transition-colors duration-150 ${size === 32 ? 'text-pomidoro' : 'text-muted'}`}
            >
              32cm
            </span>
            <span className="text-[#5A3E20] text-xs">/</span>
            <span
              className={`font-mono text-xs transition-colors duration-150 ${size === 45 ? 'text-pomidoro' : 'text-muted'}`}
            >
              45cm
            </span>
          </button>
          <AnimatePresence mode="wait">
            <motion.span
              key={`${pizza.id}-${size}`}
              className="font-mono text-lg text-signal-white"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              aria-live="polite"
              aria-label={`Cena: ${price} złotych za ${size} centymetrów`}
            >
              {price}&nbsp;zł
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  )
}
