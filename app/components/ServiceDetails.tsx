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
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        
        <SectionReveal animation="slide-up" className="relative z-10">
          <Link 
            href="/#services" 
            className="inline-flex items-center mb-8 px-5 py-2 bg-black/40 text-guitar-gold rounded-full hover:bg-black/70 transition-all duration-300 transform hover:-translate-x-2 border border-guitar-gold/20 hover:border-guitar-gold/40 shadow-lg"
          >
            <span className="mr-2">&larr;</span> {t('backToServices', 'services')}
          </Link>
        </SectionReveal>
        
        <SectionReveal animation="slide-right" delay={200} className="flex items-center mb-10 relative z-10">
          {Icon && (
            <div className="mr-5">
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center border border-guitar-gold/20 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                <Icon className="w-8 h-8 text-guitar-gold animate-pulse-subtle" aria-hidden="true" />
              </div>
            </div>
          )}
          <div className="flex flex-col">
            <h1 className="text-4xl font-light tracking-wide text-white mb-2">{translatedName}</h1>
            <div className="h-[1px] w-40 bg-gradient-to-r from-guitar-gold/40 to-transparent"></div>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <SectionReveal animation="fade-in" delay={400}>
            {images.length > 0 && (
              <>
                <div
                  className="relative mb-6 cursor-pointer group w-full image-zoom"
                  onClick={() => setIsImageOpen(true)}
                >
                  <div className="relative w-full pt-[75%] rounded-xl overflow-hidden shadow-xl border border-guitar-gold/10"> {/* 4:3 aspect ratio */}
                    <Image
                      src={selectedImage}
                      alt={translatedName}
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl flex items-center justify-center">
                    <span className="text-white/90 text-lg font-light tracking-wide border border-guitar-gold/30 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                      {t('clickToEnlarge', 'guitars')}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`relative pt-[75%] rounded-xl overflow-hidden transition-all duration-300 
                        ${selectedImage === image
                          ? 'ring-2 ring-guitar-gold scale-105 z-10 shadow-[0_0_10px_rgba(212,175,55,0.3)]' 
                          : 'ring-1 ring-white/10 hover:ring-guitar-gold/30 hover:scale-105'
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
            <div className="bg-black/40 p-8 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/10">
              <div>
                <SectionReveal animation="slide-up" delay={600}>
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-light text-white tracking-wide">{t('description', 'services')}</h2>
                    <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-guitar-gold/30 to-transparent"></div>
                  </div>
                  <p className="text-white/90 text-lg mb-10 leading-relaxed">{translatedLongDescription}</p>
                </SectionReveal>
                
                <SectionReveal animation="slide-up" delay={800}>
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-light text-white tracking-wide">{t('servicesInclude', 'services')}</h2>
                    <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-guitar-gold/30 to-transparent"></div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {translatedServicesList.map((item: string, index: number) => (
                      <li 
                        key={index} 
                        className="flex items-start text-white/90 transition-all duration-300 hover:translate-x-1 group"
                        style={{ animationDelay: `${800 + (index * 100)}ms` }}
                      >
                        <span className="text-guitar-gold mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">&bull;</span>
                        <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionReveal>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 grid place-items-center w-full h-full"
          onClick={handleOverlayClick}
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)' /* For Safari */
          }}
        >
          <div 
            className="bg-black/70 rounded-xl overflow-auto w-[95%] sm:w-[90%] max-w-4xl max-h-[95vh] sm:max-h-[90vh] border border-guitar-gold/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsImageOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 text-guitar-gold hover:text-white hover:bg-black p-2 rounded-full z-50 backdrop-blur-sm border border-guitar-gold/20 transition-all duration-300"
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
                  className="bg-black/60 text-guitar-gold hover:text-white p-3 rounded-full shadow-lg backdrop-blur-sm w-12 h-12 flex items-center justify-center border border-guitar-gold/20 hover:border-guitar-gold/40 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = images.findIndex(img => img === selectedImage)
                    const prevIndex = (currentIndex - 1 + images.length) % images.length
                    setSelectedImage(images[prevIndex])
                  }}
                  aria-label="Previous image"
                >
                  <span className="text-xl">&larr;</span>
                </button>
              </div>
              
              <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
                <button 
                  className="bg-black/60 text-guitar-gold hover:text-white p-3 rounded-full shadow-lg backdrop-blur-sm w-12 h-12 flex items-center justify-center border border-guitar-gold/20 hover:border-guitar-gold/40 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = images.findIndex(img => img === selectedImage)
                    const nextIndex = (currentIndex + 1) % images.length
                    setSelectedImage(images[nextIndex])
                  }}
                  aria-label="Next image"
                >
                  <span className="text-xl">&rarr;</span>
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2 py-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                      selectedImage === img 
                        ? 'bg-guitar-gold border-guitar-gold scale-110' 
                        : 'bg-gray-500/40 border-gray-500/40 hover:bg-guitar-gold/50 hover:border-guitar-gold/50'
                    }`}
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