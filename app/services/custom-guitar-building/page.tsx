import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailsWrapper from '../../components/ServiceDetailsWrapper'
import { services } from '../../data/services'
import { generateMetadata as baseGenerateMetadata } from '../../lib/metadata'

export const metadata: Metadata = baseGenerateMetadata('Custom Guitar Building', 'Design and build your dream guitar, tailored to your exact specifications and playing style.')

export default function CustomGuitarBuildingPage() {
  const service = services.find(s => s.id === 'custom-guitar-building')

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

