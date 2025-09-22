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
    <section id={id} className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionReveal animation="fade-in" className="mb-20">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-light text-center mb-8 tracking-[0.3em] uppercase text-white/90">{t('title', 'guitars')}</h2>
            <div className="h-[1px] w-10 bg-white/20"></div>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative">
          {guitars.map((guitar, index) => (
            <SectionReveal 
              key={guitar.id}
              animation="fade-in" 
              delay={100 * index}
              threshold={0.1}
            >
              <Link href={`/guitars/${guitar.id}`} className="block group">
                <div className="overflow-hidden relative">
                  {/* Main content */}
                  <div className="mb-6 overflow-hidden relative">
                    <Image 
                      src={guitar.image} 
                      alt={guitar.name} 
                      width={600} 
                      height={800} 
                      className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-base uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors duration-300">
                      {(t(`${guitar.id}`, 'guitars_data') as any)?.name || guitar.name}
                    </h3>

                    {/* Horizontal line separator */}
                    <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider text-white/50">
                        {(t(`${guitar.id}`, 'guitars_data') as any)?.type || 'Custom'}
                      </span>
                      
                      <button className="uppercase text-[10px] tracking-[0.2em] text-white/70 group-hover:text-white py-2 transition-colors duration-300">
                        {t('viewDetails', 'common')}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
        
        <SectionReveal animation="fade-in" delay={300} className="mt-20">
          <div className="flex justify-center">
            <Link href="/guitars" className="px-8 py-3 uppercase text-[10px] tracking-[0.3em] border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300">
              {t('viewAllGuitars', 'common') || 'View All Models'}
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}