export default function Footer() {
  return (
    <footer
      className="bg-obsidian border-t border-[#3A2410] py-12 pb-20 md:pb-12"
      aria-label="Stopka strony"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Przemyśl skyline — references the mural on the restaurant wall */}
        <div className="mb-14 pb-10 border-b border-[#3A2410] overflow-hidden" aria-hidden="true">
          <svg
            viewBox="0 0 1200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ height: '80px' }}
            preserveAspectRatio="xMidYMax meet"
          >
            {/* Skyline fill — very subtle */}
            <path
              d="M0,100 L0,80 L40,80 L40,72 L65,72 L65,66 L85,66 L88,58 L91,46 L94,34 L96,20 L98,34 L101,46 L104,58 L108,66 L128,66 L138,72 L162,72 L166,63 L170,52 L173,40 L175,27 L177,40 L180,52 L183,63 L186,68 L202,68 L214,72 L238,72 L243,62 L248,50 L251,38 L253,22 L255,12 L257,22 L259,38 L262,50 L266,58 L266,52 L269,42 L271,30 L273,42 L276,52 L280,62 L294,68 L312,68 L318,74 L342,74 L348,66 L355,55 L359,45 L362,35 L364,48 L368,60 L376,68 L398,68 L408,74 L438,74 L443,66 L448,57 L451,47 L453,37 L455,47 L458,58 L463,66 L488,66 L498,74 L528,74 L536,66 L543,55 L547,45 L549,34 L551,24 L553,34 L556,46 L560,57 L570,66 L596,66 L612,74 L648,74 L656,66 L663,55 L667,45 L669,35 L671,46 L675,58 L681,66 L703,66 L718,72 L752,72 L757,66 L766,55 L770,45 L772,35 L774,25 L776,35 L779,47 L784,58 L794,66 L817,66 L828,72 L855,72 L860,65 L866,55 L870,46 L872,37 L874,46 L878,57 L886,65 L908,65 L918,72 L947,72 L956,65 L963,56 L967,48 L969,40 L971,48 L975,58 L986,65 L1008,65 L1022,72 L1058,72 L1068,68 L1088,65 L1098,68 L1128,68 L1138,72 L1172,72 L1200,72 L1200,100 Z"
              fill="white"
              opacity="0.05"
            />
            {/* Skyline stroke — line drawing like the restaurant mural */}
            <path
              d="M0,80 L40,80 L40,72 L65,72 L65,66 L85,66 L88,58 L91,46 L94,34 L96,20 L98,34 L101,46 L104,58 L108,66 L128,66 L138,72 L162,72 L166,63 L170,52 L173,40 L175,27 L177,40 L180,52 L183,63 L186,68 L202,68 L214,72 L238,72 L243,62 L248,50 L251,38 L253,22 L255,12 L257,22 L259,38 L262,50 L266,58 L266,52 L269,42 L271,30 L273,42 L276,52 L280,62 L294,68 L312,68 L318,74 L342,74 L348,66 L355,55 L359,45 L362,35 L364,48 L368,60 L376,68 L398,68 L408,74 L438,74 L443,66 L448,57 L451,47 L453,37 L455,47 L458,58 L463,66 L488,66 L498,74 L528,74 L536,66 L543,55 L547,45 L549,34 L551,24 L553,34 L556,46 L560,57 L570,66 L596,66 L612,74 L648,74 L656,66 L663,55 L667,45 L669,35 L671,46 L675,58 L681,66 L703,66 L718,72 L752,72 L757,66 L766,55 L770,45 L772,35 L774,25 L776,35 L779,47 L784,58 L794,66 L817,66 L828,72 L855,72 L860,65 L866,55 L870,46 L872,37 L874,46 L878,57 L886,65 L908,65 L918,72 L947,72 L956,65 L963,56 L967,48 L969,40 L971,48 L975,58 L986,65 L1008,65 L1022,72 L1058,72 L1068,68 L1088,65 L1098,68 L1128,68 L1138,72 L1172,72 L1200,72"
              stroke="white"
              strokeWidth="1"
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity="0.14"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display font-bold text-signal-white text-lg mb-2">
              Przemyślana Pizza
            </p>
            <p className="font-mono text-xs text-muted">
              Przemyślane. W obu sensach.
            </p>
          </div>

          <div>
            <p className="font-body text-xs text-muted uppercase tracking-wider mb-3">
              Kontakt
            </p>
            <a
              href="tel:+48790489090"
              className="font-mono text-sm text-amber hover:text-scorch transition-colors duration-200 block mb-1"
            >
              +48 790 489 090
            </a>
            <p className="font-body text-sm text-warm-gray">
              ul. Franciszkańska 23, Przemyśl
            </p>
            <p className="font-mono text-xs text-muted mt-1">
              Pon–Nd: 11:00–22:00
            </p>
          </div>

          <div>
            <p className="font-body text-xs text-muted uppercase tracking-wider mb-3">
              Śledź nas
            </p>
            <a
              href="https://www.facebook.com/PrzemyslanaPizza/"
              className="font-mono text-sm text-warm-gray hover:text-signal-white transition-colors duration-200 block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.tiktok.com/@przemyslana_pizza"
              className="font-mono text-sm text-warm-gray hover:text-signal-white transition-colors duration-200 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok ↗
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#3A2410] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-body text-xs text-muted">
            © 2026 Przemyślana Pizza. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
