import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './contexts/LanguageContext'
import LoadingOverlay from './components/LoadingOverlay'
import NavigationEvents from './lib/navigation-events'
import { Suspense } from 'react'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
import { generateMetadata as createMetadata } from './lib/metadata'

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
    <html className="scroll-smooth">
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