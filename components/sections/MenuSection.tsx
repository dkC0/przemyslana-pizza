'use client'
import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import { pizzas, PizzaCategory, categoryLabels } from '@/data/menu'
import PizzaCard from '@/components/ui/PizzaCard'
import FilterBar from '@/components/ui/FilterBar'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<PizzaCategory>('klasyczne')

  const filtered = useMemo(
    () => pizzas.filter(p => p.category.includes(activeCategory)),
    [activeCategory]
  )

  const counts = useMemo(() => {
    const c: Record<PizzaCategory, number> = {
      wszystkie: pizzas.length,
      klasyczne: 0,
      wegetarianskie: 0,
      ostre: 0,
      specjalne: 0,
    }
    pizzas.forEach(p =>
      p.category.forEach(cat => {
        if (cat !== 'wszystkie') c[cat]++
      })
    )
    return c
  }, [])

  return (
    <section id="menu" className="bg-dough-cream py-20 md:py-28" aria-label="Menu pizzy">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-body font-medium text-xs text-amber uppercase tracking-[0.15em] mb-3">
                Co podajemy
              </p>
              <h2
                className="font-display font-bold text-char leading-none tracking-[-0.025em]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                40 rodzajów pizzy.
              </h2>
            </div>
            <div className="font-mono text-sm text-muted shrink-0">
              <span className="text-char font-medium">{filtered.length}</span> z {pizzas.length} rodzajów
            </div>
          </div>
          <FilterBar active={activeCategory} onChange={setActiveCategory} counts={counts} />
        </ScrollReveal>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[400px]"
          role="tabpanel"
          aria-label={`Pizze: ${categoryLabels[activeCategory]}`}
        >
          <AnimatePresence mode="wait">
            {filtered.map((pizza, i) => (
              <PizzaCard key={pizza.id} pizza={pizza} index={i} />
            ))}
          </AnimatePresence>
        </div>

        <ScrollReveal className="mt-12" delay={0.1}>
          <div className="border-t border-[#C8A030] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { size: '32 cm', label: 'Mała', sub: 'Dla jednej osoby', color: 'text-amber' },
              { size: '45 cm', label: 'Duża', sub: 'Dla dwojga', color: 'text-scorch' },
              { size: '24–65 zł', label: 'Ceny', sub: 'W zależności od składników', color: 'text-char' },
              { size: '40', label: 'Rodzajów', sub: 'Klasyczne, vege, ostre, specjalne', color: 'text-char' },
            ].map(item => (
              <div key={item.size}>
                <p className={`font-mono text-2xl font-bold leading-none mb-1 ${item.color}`}>
                  {item.size}
                </p>
                <p className="font-display font-bold text-char text-sm mb-0.5">{item.label}</p>
                <p className="font-body text-xs text-muted">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="font-body text-xs text-muted">Dostawa i odbiór osobisty dostępne codziennie</p>
            <a
              href="tel:+48790489090"
              className="font-mono text-sm text-amber hover:text-scorch transition-colors duration-200"
            >
              +48 790 489 090 →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
