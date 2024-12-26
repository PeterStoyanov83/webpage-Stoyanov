import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { guitars } from '../../data/guitars'
import GuitarDetails from '../../components/GuitarDetails'
import { generateMetadata as baseGenerateMetadata } from '../../lib/metadata'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
interface Props {
  params: {
    id: string
  }
}

// 1. Mark generateMetadata async
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params // Access params asynchronously
  const guitar = guitars.find((g) => g.id === id)

  if (!guitar) {
    // Return metadata for a 404 page
    return baseGenerateMetadata('Guitar Not Found', 'The requested guitar could not be found.')
  }
  return baseGenerateMetadata(guitar.name, guitar.description)
}

// 2. Mark default export async
export default async function GuitarPage({ params }: Props) {
  const { id } = params // Access params asynchronously
  const guitar = guitars.find((g) => g.id === id)

  if (!guitar) {
    // Show 404 page if guitar not found
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-[url('/images/BG1.jpg')] bg-cover bg-fixed text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <GuitarDetails guitar={guitar} />
      </main>
      <Footer />
    </div>
  );
}