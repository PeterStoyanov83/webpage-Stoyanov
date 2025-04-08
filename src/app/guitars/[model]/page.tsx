import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '../../../features/ui/Footer'
import { guitars } from '../../../features/data/guitars'
import { generateMetadata as baseGenerateMetadata } from '../../../features/lib/metadata'
import GuitarDetails from '../../../features/guitars/GuitarDetails'

interface GuitarPageProps {
  params: {
    model: string
  }
}

export async function generateStaticParams() {
  return guitars.map(guitar => ({
    model: guitar.id
  }))
}

export async function generateMetadata({ params }: GuitarPageProps): Promise<Metadata> {
  const guitar = guitars.find(g => g.id === params.model)
  
  if (!guitar) {
    return baseGenerateMetadata('Guitar Not Found', 'This guitar could not be found.')
  }
  
  return baseGenerateMetadata(guitar.name, guitar.shortDescription)
}

export default function GuitarPage({ params }: GuitarPageProps) {
  const guitar = guitars.find(g => g.id === params.model)

  if (!guitar) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <GuitarDetails guitar={guitar} />
      </main>
      <Footer />
    </div>
  )
}