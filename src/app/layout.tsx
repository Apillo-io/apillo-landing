import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apillo — KOBİ\'lerin Dijital Gücü',
  description: 'Türkiye\'nin KOBİ\'lere güç veren teknoloji şirketi. Dijital operasyonlar, veri ekosistemleri ve inovasyon.',
  keywords: 'Apillo, KOBİ, SaaS, Türkiye, teknoloji, dijital dönüşüm, startup',
  authors: [{ name: 'Apillo' }],
  openGraph: {
    title: 'Apillo — KOBİ\'lerin Dijital Gücü',
    description: 'Türkiye\'nin KOBİ\'lere güç veren teknoloji şirketi.',
    url: 'https://apillo.io',
    siteName: 'Apillo',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apillo — KOBİ\'lerin Dijital Gücü',
    description: 'Türkiye\'nin KOBİ\'lere güç veren teknoloji şirketi.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0f] text-gray-100">
        {children}
      </body>
    </html>
  )
}