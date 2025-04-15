'use client'

import Image from 'next/image'
import Link from 'next/link'
import { guitars } from '../data/guitars'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

interface GuitarsProps {
  id?: string
}

export default function Guitars({ id }: GuitarsProps) {
  const { t, language } = useLanguage()

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-guitar-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
          
          <SectionReveal animation="slide-up" className="mb-14 relative z-10">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-light text-center mb-3 tracking-wide text-white">{t('title', 'guitars')}</h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-guitar-gold to-transparent"></div>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {guitars.map((guitar, index) => (
              <SectionReveal 
                key={guitar.id}
                animation="scale" 
                delay={150 * index}
                threshold={0.1}
              >
                <Link href={`/guitars/${guitar.id}`} className="block group">
                  <div className="bg-black/60 rounded-xl overflow-hidden shadow-xl border border-guitar-gold/10 group-hover:border-guitar-gold/30 transition-all duration-500 backdrop-blur-sm relative">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-guitar-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="image-zoom overflow-hidden rounded-t-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                      <Image 
                        src={guitar.image} 
                        alt={guitar.name} 
                        width={600} 
                        height={800} 
                        className="w-full transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-medium mb-3 text-white group-hover:text-guitar-gold transition-colors duration-300">
                        {(t(`${guitar.id}`, 'guitars_data') as any)?.name || guitar.name}
                      </h3>
                      <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                        {(t(`${guitar.id}`, 'guitars_data') as any)?.shortDescription || guitar.shortDescription}
                      </p>
                      
                      <div className="mt-6 flex justify-end">
                        <span className="px-4 py-1.5 rounded-full text-sm border border-guitar-gold/20 text-guitar-gold group-hover:bg-guitar-gold group-hover:text-black transition-all duration-300 inline-block">
                          {t('viewDetails', 'common')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}