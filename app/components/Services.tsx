import Link from 'next/link'
import { services } from '../data/services'

export default function Services({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="section-bg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link href={`/services/${service.id}`} key={service.id} className="block">
                <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <service.icon className="w-16 h-16 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center text-white">{service.name}</h3>
                    <p className="text-gray-300 text-center">{service.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

