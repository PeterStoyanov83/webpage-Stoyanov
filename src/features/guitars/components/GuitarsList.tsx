'use client'

import Image from 'next/image'
import Link from 'next/link'
import { guitars } from '../../data/guitars'
import { useLanguage } from '../../shared/hooks/useLanguage'
import Section from '../../ui/Section'

interface GuitarsListProps {
  id?: string
}

export default function GuitarsList({ id }: GuitarsListProps) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <Section animation="slide-up" className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white">{typeof t('title', 'guitars') === 'string' ? t('title', 'guitars') : 'Guitars'}</h2>
          </Section>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guitars.map((guitar, index) => (
              <Section 
                key={guitar.id}
                animation="zoom-in" 
                delay={150 * index}
                threshold={0.1}
              >
                <Link href={`/guitars/${guitar.id}`} className="block">
                  <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover-card border border-gray-700">
                    <div className="image-zoom">
                      <Image 
                        src={guitar.image} 
                        alt={guitar.name} 
                        width={300} 
                        height={400} 
                        className="w-full" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {guitar.name}
                      </h3>
                      <p className="text-white">
                        {guitar.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}