import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GuitarDetails from '../components/GuitarDetails'
import { guitars } from '../data/guitars'
import { generateMetadata as baseGenerateMetadata } from '../lib/metadata'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return guitars.map((guitar) => ({
    id: guitar.id,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const guitar = guitars.find(g => g.id === params.id)
  if (!guitar) {
    return baseGenerateMetadata('Guitar Not Found', 'The requested guitar could not be found.')
  }
  return baseGenerateMetadata(guitar.name, guitar.shortDescription)
}

export default function GuitarPage({ params }: Props) {
  const guitar = guitars.find(g => g.id === params.id)

  if (!guitar) {
    notFound()
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

