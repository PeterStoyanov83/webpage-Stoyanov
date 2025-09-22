'use client'

import Link from 'next/link'
import { services } from '../data/services'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

export default function Services({ id }: { id?: string }) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionReveal animation="fade-in" className="mb-20">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-light text-center mb-8 tracking-[0.3em] uppercase text-white/90">{t('title', 'services')}</h2>
            <div className="h-[1px] w-10 bg-white/20"></div>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <SectionReveal 
              key={service.id}
              animation="fade-in" 
              delay={100 * index}
              threshold={0.1}
            >
              <Link href={`/services/${service.id}`} className="block group h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                    <service.icon className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-base uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors duration-300 mb-4">
                    {service.id === 'custom-guitar-building' && t('custom.title', 'services')}
                    {service.id === 'repairs-and-restorations' && t('repair.title', 'services')}
                    {service.id === 'upgrades-and-modifications' && t('upgrades.title', 'services')}
                  </h3>
                  
                  {/* Horizontal line separator */}
                  <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300 mb-4"></div>
                  
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed mb-6">
                    {service.id === 'custom-guitar-building' && t('custom.description', 'services')}
                    {service.id === 'repairs-and-restorations' && t('repair.description', 'services')}
                    {service.id === 'upgrades-and-modifications' && t('upgrades.description', 'services')}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="uppercase text-[10px] tracking-[0.2em] text-white/70 group-hover:text-white py-2 transition-colors duration-300">
                      {t('learnMore', 'common')} →
                    </button>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}