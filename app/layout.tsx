import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './contexts/LanguageContext'
import LoadingOverlay from './components/LoadingOverlay'
import NavigationEvents from './lib/navigation-events'
import { Suspense } from 'react'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
import { generateMetadata as createMetadata, viewport as viewportConfig } from './lib/metadata'

// Export the viewport configuration for Next.js 15+
export const viewport: Viewport = viewportConfig

const inter = Inter({ subsets: ['latin', 'cyrillic'] }) // Added cyrillic subset for Bulgarian

export const metadata: Metadata = createMetadata(
  'Home', 
  'Premium custom-made electric and acoustic guitars handcrafted in Bulgaria. Expert repairs, restorations, and guitar modifications with meticulous attention to detail.',
  ['bespoke guitars', 'luxury guitars', 'custom guitar shop', 'handmade electric guitars', 'european luthier']
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#D4AF37" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      </head>
      <body className={`${inter.className} min-h-screen bg-fixed bg-cover bg-center antialiased`}
        style={{
          backgroundImage: "url('/images/BG1.png')"
        }}
      >
        <div className="bg-black/10 min-h-screen backdrop-blur-[2px]">
          <LanguageProvider>
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
            <Suspense fallback={null}>
              <LoadingOverlay />
            </Suspense>
            <Header />
            <div className="page-transition-enter page-transition-enter-active">
              {children}
            </div>
            <BackToTop />
          </LanguageProvider>
        </div>
      </body>
    </html>
  )
}