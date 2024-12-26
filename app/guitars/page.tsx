import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { guitars } from '../data/guitars' // Import the guitars data
import GuitarDetails from '../components/GuitarDetails' // Your GuitarDetails component
import { generateMetadata as baseGenerateMetadata } from '../lib/metadata'

interface Props {
  params: {
    id: string
  }
}

// Preload all guitar IDs for static generation
export function generateStaticParams() {
  return guitars.map((guitar) => ({
    id: guitar.id,
  }))
}

// Dynamically generate metadata for each guitar
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params
  const guitar = guitars.find((g) => g.id === id)

  if (!guitar) {
    return baseGenerateMetadata('Guitar Not Found', 'The requested guitar could not be found.')
  }
  return baseGenerateMetadata(guitar.name, guitar.description)
}

// Dynamic page component for individual guitars
export default function GuitarPage({ params }: Props) {
  const { id } = params
  const guitar = guitars.find((g) => g.id === id)

  if (!guitar) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1 className="text-4xl font-bold text-center my-8">{guitar.name}</h1>
      </header>
      <main>
        <GuitarDetails guitar={guitar} />
      </main>
    </div>
  )
}
