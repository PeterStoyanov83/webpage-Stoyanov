'use client'

import Link from 'next/link'
import { services } from '../data/services'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

export default function Services({ id }: { id?: string }) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-guitar-gold/5 rounded-full blur-3xl"></div>
          
          <SectionReveal animation="slide-up" className="mb-14">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-light text-center mb-3 tracking-wide text-white">{t('title', 'services')}</h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-guitar-gold to-transparent"></div>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <SectionReveal 
                key={service.id}
                animation="slide-up" 
                delay={200 * index}
                threshold={0.1}
              >
                <Link href={`/services/${service.id}`} className="block group">
                  <div className="bg-black/60 rounded-xl overflow-hidden shadow-lg border border-guitar-gold/10 group-hover:border-guitar-gold/30 transition-all duration-500 h-full backdrop-blur-sm relative z-10">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-guitar-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="p-8 flex flex-col h-full relative z-10">
                      <div className="bg-gradient-to-b from-guitar-gold/5 to-transparent rounded-full p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                        <SectionReveal 
                          animation="bounce"
                          delay={300 + (100 * index)}
                          className="flex justify-center"
                        >
                          <service.icon className="w-14 h-14 text-guitar-gold group-hover:text-white transition-colors duration-500" aria-hidden="true" />
                        </SectionReveal>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4 text-center text-white group-hover:text-guitar-gold transition-colors duration-300">
                        {service.id === 'custom-guitar-building' && t('custom.title', 'services')}
                        {service.id === 'repairs-and-restorations' && t('repair.title', 'services')}
                        {service.id === 'upgrades-and-modifications' && t('upgrades.title', 'services')}
                      </h3>
                      
                      <p className="text-white/80 text-center mt-auto group-hover:text-white transition-colors duration-300">
                        {service.id === 'custom-guitar-building' && t('custom.description', 'services')}
                        {service.id === 'repairs-and-restorations' && t('repair.description', 'services')}
                        {service.id === 'upgrades-and-modifications' && t('upgrades.description', 'services')}
                      </p>
                      
                      <div className="mt-6 mx-auto">
                        <span className="px-5 py-2 rounded-full text-sm border border-guitar-gold/20 text-guitar-gold group-hover:bg-guitar-gold group-hover:text-black transition-all duration-300 inline-block">
                          {t('learnMore', 'common')}
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