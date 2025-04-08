'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Hammer, Wrench, Zap } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

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
  const { t, language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [isImageOpen, setIsImageOpen] = useState(false)
  
  // Close modal when clicking outside the content
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsImageOpen(false)
    }
  }
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isImageOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isImageOpen])
  
  // Handle keyboard navigation and escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isImageOpen) {
        if (e.key === 'Escape') {
          setIsImageOpen(false)
        } else if (e.key === 'ArrowRight') {
          const currentIndex = images.findIndex(img => img === selectedImage)
          const nextIndex = (currentIndex + 1) % images.length
          setSelectedImage(images[nextIndex])
        } else if (e.key === 'ArrowLeft') {
          const currentIndex = images.findIndex(img => img === selectedImage)
          const prevIndex = (currentIndex - 1 + images.length) % images.length
          setSelectedImage(images[prevIndex])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isImageOpen, selectedImage, images])

  const Icon = iconMap[iconName as keyof typeof iconMap]
  
  // Get service translations
  const serviceTranslationPath = `details.${id}`
  const serviceTranslation = t(serviceTranslationPath, 'services') as Record<string, any> || {}
  
  // Get translated values with fallbacks
  const translatedName = serviceTranslation.name || name
  const translatedLongDescription = serviceTranslation.longDescription || longDescription
  const translatedServicesList = serviceTranslation.servicesList || servicesList

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionReveal animation="slide-up">
        <Link 
          href="/#services" 
          className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300 transform hover:-translate-x-2 hover:shadow-lg"
        >
          {t('backToServices', 'services')}
        </Link>
      </SectionReveal>
      
      <SectionReveal animation="slide-right" delay={200} className="flex items-center mb-8">
        {Icon && (
          <div className="animate-bounce-in mr-4">
            <Icon className="w-12 h-12 text-primary animate-pulse-subtle" aria-hidden="true" />
          </div>
        )}
        <h1 className="text-4xl font-bold text-white transition-all duration-300 hover:text-blue-200">{translatedName}</h1>
      </SectionReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SectionReveal animation="fade-in" delay={400}>
          {images.length > 0 && (
            <>
              <div
                className="relative mb-4 cursor-pointer group w-full image-zoom"
                onClick={() => setIsImageOpen(true)}
              >
                <div className="relative w-full pt-[75%] rounded-lg overflow-hidden shadow-xl"> {/* 4:3 aspect ratio */}
                  <Image
                    src={selectedImage}
                    alt={translatedName}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-medium bg-black/60 px-4 py-2 rounded-lg transform transition-transform duration-300 group-hover:scale-110">
                    {t('clickToEnlarge', 'guitars')}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative pt-[75%] rounded-lg overflow-hidden transition-all duration-300 
                      ${selectedImage === image
                        ? 'ring-2 ring-blue-500 scale-105 z-10 shadow-md'
                        : 'ring-1 ring-gray-200 hover:ring-blue-300 hover:scale-105'
                      }`}
                  >
                    <Image
                      src={image}
                      alt={`${translatedName} - ${t('image', 'common')} ${index + 1}`}
                      fill
                      className="absolute inset-0 w-full h-full object-cover"
                      sizes="(max-width: 768px) 25vw, 12vw"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </SectionReveal>
        
        <SectionReveal animation="slide-left" delay={500}>
          <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-xl backdrop-blur-sm">
            <div>
              <SectionReveal animation="slide-up" delay={600}>
                <h2 className="text-2xl font-semibold text-white mb-4">{t('description', 'services')}</h2>
                <p className="text-white text-xl font-bold mb-8 leading-relaxed">{translatedLongDescription}</p>
              </SectionReveal>
              
              <SectionReveal animation="slide-up" delay={800}>
                <h2 className="text-2xl font-semibold text-white mb-4">{t('servicesInclude', 'services')}</h2>
                <ul className="list-disc list-inside space-y-2">
                  {translatedServicesList.map((item: string, index: number) => (
                    <li 
                      key={index} 
                      className="text-white transition-all duration-300 hover:translate-x-2 pl-2"
                      style={{ animationDelay: `${800 + (index * 100)}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 grid place-items-center w-full h-full"
          onClick={handleOverlayClick}
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)' /* For Safari */
          }}
        >
          <div 
            className="bg-black/90 rounded-lg overflow-auto w-[95%] sm:w-[90%] max-w-4xl max-h-[95vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsImageOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 text-white hover:bg-black/90 p-1.5 sm:p-2 rounded-full z-50"
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col">
              {/* Full image */}
              <div className="flex justify-center items-center p-2 sm:p-4" style={{ height: 'min(80vh, 80vw)' }}>
                <Image
                  src={selectedImage}
                  alt={translatedName}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full"
                  priority
                />
              </div>

              {/* Navigation buttons */}
              <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2">
                <button 
                  className="bg-black/70 text-white hover:bg-black/90 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = images.findIndex(img => img === selectedImage)
                    const prevIndex = (currentIndex - 1 + images.length) % images.length
                    setSelectedImage(images[prevIndex])
                  }}
                  aria-label="Previous image"
                >
                  <span className="text-xl sm:text-2xl">&larr;</span>
                </button>
              </div>
              
              <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
                <button 
                  className="bg-black/70 text-white hover:bg-black/90 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = images.findIndex(img => img === selectedImage)
                    const nextIndex = (currentIndex + 1) % images.length
                    setSelectedImage(images[nextIndex])
                  }}
                  aria-label="Next image"
                >
                  <span className="text-xl sm:text-2xl">&rarr;</span>
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-1 sm:gap-2 py-2 sm:py-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${selectedImage === img ? 'bg-white' : 'bg-gray-500'}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(img)
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}