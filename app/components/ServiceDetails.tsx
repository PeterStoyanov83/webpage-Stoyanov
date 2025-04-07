'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTitle } from "../../components/ui/dialog"
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
       <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogContent className="p-0 w-auto max-w-[95vw] max-h-[95vh] overflow-hidden rounded-lg">
                    <DialogTitle className="sr-only">{translatedName}</DialogTitle>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src={selectedImage}
                            alt={translatedName}
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