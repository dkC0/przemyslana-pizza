'use client'
import { motion } from 'framer-motion'

export default function NazwaSection() {
  return (
    <section
      id="nazwie"
      className="bg-signal-white py-20 md:py-32 overflow-hidden"
      aria-label="O nazwie Przemyślana Pizza"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <motion.p
          className="font-mono text-xs text-muted uppercase tracking-[0.15em] mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          O nazwie
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#C8A030]">

          <motion.div
            className="pb-12 md:pb-0 md:pr-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="font-mono text-xs text-amber uppercase tracking-[0.12em] mb-6">
              01 — Przymiotnik
            </p>
            <h2
              className="font-display font-bold text-char leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
            >
              Przemyślana.
            </h2>
            <p className="font-body text-base text-muted leading-relaxed max-w-sm">
              Dobrze przemyślana — staranna, świadoma. Pizza, której każdy składnik
              był decyzją, a nie przypadkiem. 40 rodzajów to nie przypadek. To praca.
            </p>
          </motion.div>

          <motion.div
            className="pt-12 md:pt-0 md:pl-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="font-mono text-xs text-scorch uppercase tracking-[0.12em] mb-6">
              02 — Miasto
            </p>
            <h2
              className="font-display font-bold text-char leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
            >
              Przemyśl.
            </h2>
            <p className="font-body text-base text-muted leading-relaxed max-w-sm">
              Nasze miasto. Pizza stąd, gdzie wiedzą, czym jest dobra pizza.
              Nie wyjaśniamy. Serwujemy.
            </p>
          </motion.div>

        </div>

        <motion.p
          className="font-mono text-sm text-amber mt-16 text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Przemyślane. W obu sensach.
        </motion.p>

      </div>
    </section>
  )
}
