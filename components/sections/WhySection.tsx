import ScrollReveal from '@/components/ui/ScrollReveal'

export default function WhySection() {
  return (
    <section
      id="dlaczego1"
      className="relative bg-obsidian py-20 md:py-28 grain"
      aria-label="Dlaczego jesteśmy numerem jeden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="font-body text-xs text-amber uppercase tracking-[0.15em] mb-6">
              Goście mówią
            </p>
            <blockquote>
              <p
                lang="en"
                className="font-display font-medium text-dough-cream leading-snug mb-6"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                &ldquo;One of my favorite spots for pizza in Europe.&rdquo;
              </p>
              <footer className="font-body text-sm text-scorch">
                — Gość z zagranicy, Restaurant Guru ·{' '}
                <span className="text-muted font-mono text-xs">5.0 ★</span>
              </footer>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {[
                { value: '4.8', label: 'Google', sub: '962 opinii' },
                { value: '4.8', label: 'Restaurant Guru', sub: '1201 opinii' },
                { value: '5.0', label: 'TripAdvisor', sub: 'pełna piątka' },
                { value: '#1', label: 'Pizzeria', sub: 'w Przemyślu' },
              ].map((s, i) => (
                <div key={i} className="border-l border-[#3A2410] pl-5">
                  <p
                    className="font-mono font-bold text-amber leading-none mb-1"
                    style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
                    aria-label={`${s.value} ${s.label}`}
                  >
                    {s.value}
                  </p>
                  <p className="font-display font-bold text-signal-white text-sm">
                    {s.label}
                  </p>
                  <p className="font-mono text-xs text-muted mt-0.5">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
