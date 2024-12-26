import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailsWrapper from '../../components/ServiceDetailsWrapper'
import { services } from '../../data/services'
import { generateMetadata as baseGenerateMetadata } from '../../lib/metadata'

export const metadata: Metadata = baseGenerateMetadata('Upgrades and Modifications', 'Enhance and customize your existing instruments with expert upgrades and modifications.')

export default function UpgradesAndModificationsPage() {
  const service = services.find(s => s.id === 'upgrades-and-modifications')

  if (!service) {
    return <div>Service not found</div>
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

