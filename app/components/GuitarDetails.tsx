'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Guitar {
  id: string
  name: string
  images: string[]
  video?: string
  description: string
  specifications: Record<string, string>
}

interface GuitarDetailsProps {
  guitar: Guitar
}

export default function GuitarDetails({ guitar }: GuitarDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(guitar.images[0])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isImageOpen, setIsImageOpen] = useState(false)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <div className="text-center py-16">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/guitars"
        className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
      >
        ← Back to Guitars
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-gray-200">{guitar.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Images & Video */}
        <div>
          {/* Main Image */}
          <div
            className="mb-4 aspect-[3/2] relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIsImageOpen(true)}
          >
            <Image
              src={selectedImage}
              alt={guitar.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-4">
            {guitar.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-[3/2] relative cursor-pointer rounded-lg overflow-hidden ${
                  selectedImage === image
                    ? 'ring-2 ring-blue-500'
                    : 'ring-1 ring-gray-200'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${guitar.name} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:opacity-75 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Optional Video */}
          {guitar.video && (
            <div className="mt-8 w-full">
              <h2 className="text-2xl font-semibold mb-4">Demo Video</h2>
              <div className="w-full h-[600px] relative rounded-lg shadow-lg overflow-hidden bg-black">
                <iframe
                  src={guitar.video}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  style={{
                    minWidth: '100%',
                    minHeight: '100%',
                    verticalAlign: 'middle',
                    border: 'none',
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Description & Specs */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Description</h2>
          <p className="text-white mb-8">{guitar.description}</p>

          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Specifications</h2>
          <ul className="space-y-2">
            {Object.entries(guitar.specifications).map(([key, value]) => (
              <li key={key} className="flex text-gray-200">
                <span className="font-semibold w-1/3">{key}</span>
                <span className="w-2/3">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Simple Custom Modal for Enlarged Image */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative w-11/12 md:w-3/4 h-3/4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={guitar.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
