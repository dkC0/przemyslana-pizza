'use client'
import { motion } from 'framer-motion'

export default function EditorialQuoteSection() {
  return (
    <section
      id="opinia"
      className="relative bg-char overflow-hidden grain py-24 md:py-36"
      aria-label="Opinia gościa"
    >
      {/* Faint background number */}
      <span
        className="font-display font-bold text-signal-white absolute right-[-2rem] bottom-[-1rem] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(10rem, 25vw, 20rem)', opacity: 0.03 }}
        aria-hidden="true"
      >
        4.8
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs text-amber uppercase tracking-[0.15em] mb-10">
            Goście mówią
          </p>

          <blockquote>
            <p
              lang="en"
              className="font-display font-bold text-signal-white leading-[0.9] tracking-[-0.04em] mb-10"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              &ldquo;One of my favorite<br />
              spots for pizza<br />
              in Europe.&rdquo;
            </p>

            <footer className="flex items-center gap-6">
              <div className="w-8 h-px bg-pomidoro" aria-hidden="true" />
              <div>
                <p className="font-body text-sm text-warm-gray">
                  Gość z zagranicy
                </p>
                <p className="font-mono text-xs text-muted mt-0.5">
                  Restaurant Guru · 5.0 ★ · ponad 1200 opinii
                </p>
              </div>
            </footer>
          </blockquote>
        </motion.div>

        {/* Three inline ratings — no cards, just data */}
        <motion.div
          className="mt-20 pt-10 border-t border-[#3A2410] grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { score: '4.8', platform: 'Google', detail: '962 opinii' },
            { score: '4.8', platform: 'Restaurant Guru', detail: '1201 opinii' },
            { score: '5.0', platform: 'TripAdvisor', detail: 'Pełna piątka' },
          ].map((r) => (
            <div key={r.platform} className="flex items-baseline gap-4">
              <span className="font-mono font-bold text-amber" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {r.score}
              </span>
              <div>
                <p className="font-display font-bold text-signal-white text-sm">{r.platform}</p>
                <p className="font-mono text-xs text-muted">{r.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
