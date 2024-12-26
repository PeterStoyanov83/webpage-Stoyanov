import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GuitarDetails from '../../components/GuitarDetails'
import { guitars } from '../../data/guitars'

export const metadata: Metadata = {
  title: 'Fretless Bass | Stoyanov Guitars',
  description: 'Custom fretless-bass bass guitar currently in development.',
}

export default function FretlessBassPage() {
  const guitar = guitars.find(g => g.id === 'fretless-bass-bass')

  if (!guitar) {
    return <div>Guitar not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <GuitarDetails guitar={guitar} />
      </main>
      <Footer />
    </div>
  )
}

