import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GuitarDetails from '../../components/GuitarDetails'
import { guitars } from '../../data/guitars'

export const metadata: Metadata = {
  title: 'Wednesday | Stoyanov Guitars',
  description: 'Modern super-strat with EMG pickups and carbon fiber accents.',
}

export default function WednesdayPage() {
  const guitar = guitars.find(g => g.id === 'wednesday')

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

