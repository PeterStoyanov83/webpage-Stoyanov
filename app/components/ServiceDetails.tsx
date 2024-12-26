'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTitle } from "../../components/ui/dialog"
import { X } from 'lucide-react'
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
        <h1 className="text-4xl font-bold text-white">{name}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {images.length > 0 && (
            <>
              <div
                className="relative mb-4 cursor-pointer group w-full"
                onClick={() => setIsImageOpen(true)}
              >
                <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
                  <Image
                    src={selectedImage}
                    alt={name}
                    fill
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">Click to enlarge</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative pt-[75%] rounded-lg overflow-hidden ${
                      selectedImage === image
                        ? 'ring-2 ring-blue-500'
                        : 'ring-1 ring-gray-200 hover:ring-blue-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${name} - Image ${index + 1}`}
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                      sizes="(max-width: 768px) 25vw, 12vw"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          <div className="bg-black bg-opacity-70 p-6 rounded-lg">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Description</h2>
              <p className="text-white text-xl font-bold mb-8">{longDescription}</p>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Services Include</h2>
              <ul className="list-disc list-inside space-y-2">
                {servicesList.map((item, index) => (
                  <li key={index} className="text-white">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
       <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogContent className="p-0 w-auto max-w-[95vw] max-h-[95vh] overflow-hidden rounded-lg">
                    <DialogTitle className="sr-only">{name}</DialogTitle>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src={selectedImage}
                            alt={name}
                            width={1200}
                            height={800}
                            className="w-full h-auto max-h-[95vh] object-contain rounded-lg"
                            priority
                        />
                        <button
                            onClick={() => setIsImageOpen(false)}
                            className="absolute top-2 right-2 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/50"
                            aria-label="Close"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
    </div>
  )
}

