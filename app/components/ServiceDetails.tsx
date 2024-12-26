'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogContent } from "../../components/ui/dialog"
import { Hammer, Wrench, Zap } from 'lucide-react'

interface ServiceDetailsProps {
  id: string;
  name: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  servicesList: string[];
  iconName: string;
}

const iconMap = {
  Hammer,
  Wrench,
  Zap
}

export default function ServiceDetails({ id, name, images, shortDescription, longDescription, servicesList, iconName }: ServiceDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [isImageOpen, setIsImageOpen] = useState(false)

  const Icon = iconMap[iconName as keyof typeof iconMap]

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/#services" className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
        ← Back to Services
      </Link>
      <div className="flex items-center mb-8">
        {Icon && <Icon className="w-12 h-12 text-primary mr-4" aria-hidden="true" />}
        <h1 className="text-4xl font-bold text-gray-200">{name}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {images.length > 0 && (
            <>
              <div
                className="mb-4 relative rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setIsImageOpen(true)}
              >
                <div className="relative" style={{ width: '100%', paddingTop: '66.66%' }}>
                  <Image
                    src={selectedImage}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative rounded-lg overflow-hidden ${
                      selectedImage === image ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'
                    }`}
                    style={{ paddingTop: '100%' }}
                  >
                    <Image
                      src={image}
                      alt={`${name} - Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Description</h2>
          <p className="text-gray-200 mb-8">{longDescription}</p>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Our Services Include</h2>
          <ul className="list-disc list-inside space-y-2">
            {servicesList.map((item, index) => (
              <li key={index} className="text-gray-200">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <div className="relative w-full h-[90vh]">
            <Image
              src={selectedImage}
              alt={name}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

