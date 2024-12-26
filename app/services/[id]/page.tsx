import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailsWrapper from '../../components/ServiceDetailsWrapper'
import { services } from '../../data/services'
import { generateMetadata as baseGenerateMetadata } from '../../lib/metadata'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find(s => s.id === params.id)
  if (!service) {
    return baseGenerateMetadata('Service Not Found', 'The requested service could not be found.')
  }
  return baseGenerateMetadata(service.name, service.shortDescription)
}

export default function ServicePage({ params }: Props) {
  const service = services.find(s => s.id === params.id)

  if (!service) {
    notFound()
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

