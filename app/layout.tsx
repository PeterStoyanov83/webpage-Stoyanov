import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stoyanov Guitars',
  description: 'Handcrafted guitars by a master luthier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-fixed bg-cover bg-center antialiased`} 
        style={{
          backgroundImage: "url('/images/BG1.png')"
        }}
      >
        <div className="bg-black/10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

