import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ZamowSection() {
  return (
    <section id="zamow" className="bg-dough-cream py-20 md:py-28" aria-label="Zamów pizzę">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <p className="font-body font-medium text-xs text-amber uppercase tracking-[0.15em] mb-4">
              Zamów teraz
            </p>
            <h2
              className="font-display font-bold text-char leading-none tracking-[-0.025em] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Zamów.
            </h2>
            <div className="space-y-3 mb-8">
              {['Dostępna dostawa do domu', 'Odbiór osobisty na miejscu', 'Stolik na miejscu'].map(
                opt => (
                  <div key={opt} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber shrink-0" aria-hidden="true" />
                    <span className="font-body text-char">{opt}</span>
                  </div>
                )
              )}
            </div>
            <a
              href="tel:+48790489090"
              className="inline-flex items-baseline gap-3 group"
              aria-label="Zadzwoń pod numer plus 48 790 489 090"
            >
              <span
                className="font-mono text-amber group-hover:text-scorch transition-colors duration-200"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
              >
                +48 790 489 090
              </span>
              <span className="font-body text-muted text-sm group-hover:text-char transition-colors duration-200">
                →
              </span>
            </a>
            <p className="font-mono text-xs text-muted mt-3">
              Pon–Nd: 11:00 – 22:00
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div
              className="rounded-xl overflow-hidden bg-obsidian-2 border border-[#3A2410]"
              style={{ height: '400px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.5!2d22.7726!3d49.7844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c42ee4e5f3e4f%3A0x1!2zUHJ6ZW15xZtsYW5h!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="400"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa: Przemyślana Pizza, ul. Franciszkańska 23, Przemyśl"
                aria-label="Mapa lokalizacji Przemyślana Pizza"
              />
            </div>
            <p className="font-body text-sm text-muted mt-3">
              ul. Franciszkańska 23, Przemyśl
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
