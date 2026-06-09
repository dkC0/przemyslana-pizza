'use client'
import { PizzaCategory, categoryLabels } from '@/data/menu'

interface Props {
  active: PizzaCategory
  onChange: (cat: PizzaCategory) => void
  counts: Record<PizzaCategory, number>
}

const categories: PizzaCategory[] = ['klasyczne', 'wegetarianskie', 'ostre', 'specjalne']

export default function FilterBar({ active, onChange, counts }: Props) {
  return (
    <div role="tablist" aria-label="Filtruj pizze według kategorii" className="flex flex-wrap gap-2">
      {categories.map(cat => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={`font-display flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
            active === cat
              ? 'bg-amber text-obsidian shadow-[0_0_20px_rgba(184,115,22,0.4)]'
              : 'bg-[#D4A830] bg-opacity-20 text-char hover:bg-[#C49820]'
          }`}
        >
          {categoryLabels[cat]}
          <span className={`font-mono text-xs ${active === cat ? 'text-white/80' : 'text-muted'}`}>
            {counts[cat]}
          </span>
        </button>
      ))}
    </div>
  )
}
