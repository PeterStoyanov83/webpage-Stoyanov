'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTitle } from "../../components/ui/dialog"
import { X } from 'lucide-react'

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
                href="/#guitars"
                className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
                ← Back to Guitars
            </Link>

            <h1 className="text-4xl font-bold mb-8 text-gray-200">{guitar.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Images & Video */}
                <div>
                    {/* Main Image */}
                    <div className="relative mb-4 cursor-pointer group" onClick={() => setIsImageOpen(true)}>
                        <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
                            <Image
                                src={selectedImage}
                                alt={guitar.name}
                                fill
                                className="absolute inset-0 w-full h-full object-contain bg-black/50 rounded-lg"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">Click to enlarge</span>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-2">
                        {guitar.images.map((image, index) => (
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
                                    alt={`${guitar.name} - Image ${index + 1}`}
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover"
                                    sizes="(max-width: 768px) 25vw, 12vw"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Optional Video */}
                    {guitar.video && (
                        <div className="mt-8 w-full">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Demo Video</h2>
                            <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black"> {/* 16:9 aspect ratio */}
                                <iframe
                                    src={guitar.video}
                                    className="absolute inset-0 w-full h-full"
                                    allowFullScreen
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Description & Specs */}
                <div>
                    <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Description</h2>
                        <p className="text-white text-lg mb-8">{guitar.description}</p>

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
            </div>

            {/* Image Modal */}
            <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogContent className="p-0 w-auto max-w-[95vw] max-h-[95vh] overflow-hidden rounded-lg">
                    <DialogTitle className="sr-only">{guitar.name}</DialogTitle>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src={selectedImage}
                            alt={guitar.name}
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

