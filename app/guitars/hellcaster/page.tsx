import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GuitarDetails from '../../components/GuitarDetails'
import { guitars } from '../../data/guitars'
import { generateMetadata as baseGenerateMetadata } from '../../lib/metadata'

export const metadata: Metadata = baseGenerateMetadata('Hellcaster', 'Custom-built with a unique distressed finish and Bigsby tremolo.')

export default function HellcasterPage() {
  const guitar = guitars.find(g => g.id === 'hellcaster')

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

