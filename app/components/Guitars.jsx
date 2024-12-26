import Image from 'next/image'
import Link from 'next/link'

const guitars = [
  { 
    id: 'hellcaster',
    name: 'Hellcaster', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/146740466_345012396620991_2020572833056794891_n.jpg-W7WnBPEhq3oSUDBnld4vU1gfi4kvmj.jpeg',
    shortDescription: 'Custom-built with a unique distressed finish and Bigsby tremolo.'
  },
  { 
    id: 'palemoon',
    name: 'Palemoon', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/239366727_489466145726600_7016010519739881532_n.jpg-qwmcmBvWS7VVBwdr5tXTWtrHv2V1Lw.jpeg',
    shortDescription: 'Extended baritone neck with stunning spalted maple construction.'
  },
  { 
    id: 'modern-t',
    name: 'Modern T', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/148696195_342734487066434_2238087484679029112_n.jpg-Up3xXyHPDe4i8SADLjcmHK9k1aU0iT.jpeg',
    shortDescription: 'Contemporary twist on a legendary shape.'
  }
]

export default function Guitars({ id }) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My Guitars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guitars.map((guitar) => (
            <Link href={`/guitars/${guitar.id}`} key={guitar.id} className="block">
              <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                <Image src={guitar.image} alt={guitar.name} width={300} height={400} className="w-full" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{guitar.name}</h3>
                  <p className="text-gray-300">{guitar.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

