import {notFound} from 'next/navigation'
import {Metadata} from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailsWrapper from '../../components/ServiceDetailsWrapper'
import {services} from '../../data/services'
import {generateMetadata as baseGenerateMetadata} from '../../lib/metadata'

export function generateStaticParams() {
    return services.map((service) => ({
        id: service.id,
    }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params
  const service = services.find(s => s.id === id)
  if (!service) {
    return baseGenerateMetadata('Service Not Found', 'The requested service could not be found.')
  }
  return baseGenerateMetadata(service.name, service.shortDescription)
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const { id } = params
  const service = services.find(s => s.id === id)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServiceDetailsWrapper
          service={service}
          iconName={service.icon.name}
        />
      </main>
      <Footer />
    </div>
  )
}
