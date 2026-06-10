import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Fredoka, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script' // <-- Menggunakan script bawaan Next.js (Gratis & Tanpa Install)
import './globals.css'

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'AYYA Cake - Kue Custom Homemade Depok',
  description:
    'AYYA Cake adalah usaha kue rumahan dari Bojongsari, Depok. Bento cake, birthday cake & dessert — dipesan sesuai keinginanmu, siap pickup atau GoSend area Depok.',
  keywords: [
    'kue custom',
    'bento cake',
    'birthday cake',
    'kue ulang tahun',
    'depok',
    'bojongsari',
    'homemade cake',
  ],
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${fredoka.variable} ${plusJakartaSans.variable} bg-background`}
    >
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* --- KODE GOOGLE ANALYTICS BAWAAN --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YM79H9EGDH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YM79H9EGDH');
          `}
        </Script>
        {/* ------------------------------------ */}
      </body>
    </html>
  )
}
