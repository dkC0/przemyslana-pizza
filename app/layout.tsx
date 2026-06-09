import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/ui/NavBar'
import StickyOrderCTA from '@/components/ui/StickyOrderCTA'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Przemyślana Pizza — #1 Pizzeria w Przemyślu | ul. Franciszkańska 23',
  description:
    '40 rodzajów cienkiej pizzy w 2 rozmiarach. 4.8★ z ponad 1200 opinii. Zamów z dostawą lub odbierz osobiście. Pon–Nd 11:00–22:00.',
  keywords: ['pizzeria Przemyśl', 'pizza Przemyśl dostawa', 'przemyślana pizza'],
  openGraph: {
    title: 'Przemyślana Pizza — #1 Pizzeria w Przemyślu',
    description: '40 rodzajów cienkiej pizzy. 4.8★ z ponad 1200 opinii.',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Przemyślana Pizza — Pizzeria w Przemyślu',
      },
    ],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Przemyślana Pizza',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Franciszkańska 23',
    addressLocality: 'Przemyśl',
    postalCode: '37-700',
    addressCountry: 'PL',
  },
  telephone: '+48790489090',
  openingHours: 'Mo-Su 11:00-22:00',
  servesCuisine: 'Pizza',
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1201',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Przejdź do treści
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyOrderCTA />
      </body>
    </html>
  )
}
