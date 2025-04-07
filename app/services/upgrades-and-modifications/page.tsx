'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailsWrapper from '../../components/ServiceDetailsWrapper'
import { services } from '../../data/services'
import { useLanguage } from '../../contexts/LanguageContext'

export default function UpgradesAndModificationsPage() {
  const { t } = useLanguage()
  const service = services.find(s => s.id === 'upgrades-and-modifications')

  if (!service) {
    return <div className="container mx-auto px-4 py-16 text-center text-white">{t('serviceNotFound', 'services')}</div>
  }

  const serviceData = {
    id: service.id,
    name: service.name,
    images: service.images,
    shortDescription: service.shortDescription,
    longDescription: service.longDescription,
    servicesList: service.servicesList
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServiceDetailsWrapper 
          service={serviceData} 
          iconName={service.icon.name} 
        />
      </main>
      <Footer />
    </div>
  )
}

