import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GuitarDetails from '../../components/GuitarDetails'
import { guitars } from '../../data/guitars'
import { generateMetadata as baseGenerateMetadata } from '../../lib/metadata'

export const metadata: Metadata = baseGenerateMetadata('Modern T', 'Contemporary twist on a legendary shape.')

export default function ModernTPage() {
  const guitar = guitars.find(g => g.id === 'modern-t')

  if (!guitar) {
    return <div>Guitar not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-grow">
        <GuitarDetails guitar={guitar} />
      </main>
      <Footer />
    </div>
  )
}

