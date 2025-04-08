'use client'

import Link from 'next/link'
import { services } from '../../data/services'
import { useLanguage } from '../../shared/hooks/useLanguage'
import Section from '../../ui/Section'

export default function ServicesList({ id }: { id?: string }) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <Section animation="slide-up" className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white">{t('title', 'services')}</h2>
          </Section>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Section 
                key={service.id}
                animation="slide-up" 
                delay={200 * index}
                threshold={0.1}
              >
                <Link href={`/services/${service.id}`} className="block">
                  <div className="bg-gray-800 bg-opacity-90 rounded-lg overflow-hidden shadow-lg hover-card border border-gray-700 h-full">
                    <div className="p-6 flex flex-col h-full">
                      <Section 
                        animation="zoom-in"
                        delay={300 + (100 * index)}
                        className="flex justify-center mb-4"
                      >
                        <service.icon className="w-16 h-16 text-white" aria-hidden="true" />
                      </Section>
                      
                      <h3 className="text-xl font-semibold mb-2 text-center text-white">
                        {service.id === 'custom-guitar-building' && t('custom.title', 'services')}
                        {service.id === 'repairs-and-restorations' && t('repair.title', 'services')}
                        {service.id === 'upgrades-and-modifications' && t('upgrades.title', 'services')}
                      </h3>
                      
                      <p className="text-white text-center mt-auto">
                        {service.id === 'custom-guitar-building' && t('custom.description', 'services')}
                        {service.id === 'repairs-and-restorations' && t('repair.description', 'services')}
                        {service.id === 'upgrades-and-modifications' && t('upgrades.description', 'services')}
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