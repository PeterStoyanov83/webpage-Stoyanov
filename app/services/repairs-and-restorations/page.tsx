import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailsWrapper from '../../components/ServiceDetailsWrapper'
import { services } from '../../data/services'
import { generateMetadata as baseGenerateMetadata } from '../../lib/metadata'

export const metadata: Metadata = baseGenerateMetadata('Repairs and Restorations', 'Bring your beloved instruments back to life with expert repair and restoration services.')

export default function RepairsAndRestorationsPage() {
  const service = services.find(s => s.id === 'repairs-and-restorations')

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

