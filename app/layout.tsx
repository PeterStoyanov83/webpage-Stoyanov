import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './contexts/LanguageContext'
import LoadingOverlay from './components/LoadingOverlay'
import NavigationEvents from './lib/navigation-events'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin', 'cyrillic'] }) // Added cyrillic subset for Bulgarian

export const metadata: Metadata = {
  title: 'Stoyanov Guitars',
  description: 'Handcrafted guitars by Peter Stoyanov',
  icons: {
    icon: '/favicon.ico',
  },
}

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
            <div className="page-transition-enter page-transition-enter-active">
              {children}
            </div>
          </LanguageProvider>
        </div>
      </body>
    </html>
  )
}