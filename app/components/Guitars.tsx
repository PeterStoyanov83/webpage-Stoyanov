import Image from 'next/image'
import Link from 'next/link'
import { guitars } from '../data/guitars'

interface GuitarsProps {
  id?: string
}

export default function Guitars({ id }: GuitarsProps) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4 ">
        <div className="section-bg p-8 rounded-lg">
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
      </div>
    </section>
  )
}

