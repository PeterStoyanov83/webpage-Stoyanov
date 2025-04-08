import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '../../../features/ui/Footer'
import { services } from '../../../features/data/services'
import { generateMetadata as baseGenerateMetadata } from '../../../features/lib/metadata'
import ServiceDetails from '../../../features/services/ServiceDetails'

interface ServicePageProps {
  params: {
    service: string
  }
}

export async function generateStaticParams() {
  return services.map(service => ({
    service: service.id
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.id === params.service)
  
  if (!service) {
    return baseGenerateMetadata('Service Not Found', 'This service could not be found.')
  }
  
  return baseGenerateMetadata(service.name, service.shortDescription)
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.service)

  if (!service) {
    notFound()
  }

  // Get the icon name from the icon component
  const iconName = service.icon.displayName || service.icon.name || 'Hammer';

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ServiceDetails
          id={service.id}
          name={service.name}
          images={service.images}
          shortDescription={service.shortDescription}
          longDescription={service.longDescription}
          servicesList={service.servicesList}
          iconName={iconName}
        />
      </main>
      <Footer />
    </div>
  )
}