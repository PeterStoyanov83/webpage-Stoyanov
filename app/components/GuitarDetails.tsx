'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import type { Guitar } from '../data/guitars'
import { X } from 'lucide-react'
import SectionReveal from './SectionReveal'
import BlurImage from './BlurImage'

interface GuitarDetailsProps {
  guitar: Guitar
}

export default function GuitarDetails({ guitar }: GuitarDetailsProps) {
  const { t, language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(guitar.images[0])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  
  // Get guitar translations
  const guitarTranslations = t(`${guitar.id}`, 'guitars_data') as Record<string, any> || {}

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (modalOpen || videoModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen, videoModalOpen])

  const openModal = (img: string) => {
    setModalImage(img)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  
  const openVideoModal = () => {
    setVideoModalOpen(true)
  }
  
  const closeVideoModal = () => {
    setVideoModalOpen(false)
  }
  
  // Close modal when clicking outside the content
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }
  
  // Close video modal when clicking outside the content
  const handleVideoOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeVideoModal()
    }
  }

  // Handle keyboard navigation and escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) {
        if (e.key === 'Escape') {
          closeModal()
        } else if (e.key === 'ArrowRight') {
          const currentIndex = guitar.images.findIndex(img => img === modalImage)
          const nextIndex = (currentIndex + 1) % guitar.images.length
          setModalImage(guitar.images[nextIndex])
        } else if (e.key === 'ArrowLeft') {
          const currentIndex = guitar.images.findIndex(img => img === modalImage)
          const prevIndex = (currentIndex - 1 + guitar.images.length) % guitar.images.length
          setModalImage(guitar.images[prevIndex])
        }
      } else if (videoModalOpen) {
        if (e.key === 'Escape') {
          closeVideoModal()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen, videoModalOpen, modalImage, guitar.images])

  return (
    <div className="container mx-auto px-4 py-16 pt-32 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 guitar-content">
        <SectionReveal animation="slide-left">
          <div 
            className="relative h-[500px] w-full mb-4 rounded-lg overflow-hidden shadow-lg cursor-pointer image-zoom"
            onClick={() => openModal(selectedImage)}
          >
            <BlurImage 
              src={selectedImage} 
              alt={guitar.name} 
              fill={true}
              style={{ objectFit: 'cover' }}
              className="transition-effect"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-effect">
              <span className="text-white text-lg font-medium opacity-0 hover:opacity-100 transition-effect bg-black bg-opacity-70 px-4 py-2 rounded-lg">
                {t('clickToEnlarge', 'guitars')}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {guitar.images.map((img, index) => (
              <div 
                key={index} 
                className={`relative h-24 cursor-pointer rounded-md overflow-hidden transition-effect
                  ${selectedImage === img 
                    ? 'ring-2 ring-blue-500 scale-105 z-10' 
                    : 'opacity-80 hover:opacity-100 hover:scale-105'}`}
                onClick={() => setSelectedImage(img)}
              >
                <BlurImage 
                  src={img} 
                  alt={`${guitar.name} ${index + 1}`} 
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 25vw, 10vw"
                />
              </div>
            ))}
          </div>
        </SectionReveal>
        
        <div>
          <SectionReveal animation="slide-right" delay={100}>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 transition-effect hover:text-blue-900">
              {guitarTranslations.name || guitar.name}
            </h1>
            <p className="text-xl text-gray-700 mb-8 transition-effect leading-relaxed">
              {guitarTranslations.shortDescription || guitar.shortDescription}
            </p>
          </SectionReveal>
          
          <SectionReveal animation="fade-in" delay={300} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('description', 'guitarDetails')}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {guitarTranslations.description || guitar.description}
            </p>
          </SectionReveal>
          
          {guitar.video && (
            <SectionReveal animation="scale" delay={400} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('video', 'guitarDetails')}</h2>
              <div 
                className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer hover-card"
                style={{ paddingBottom: "56.25%" }}
                onClick={openVideoModal}
              >
                {/* Video thumbnail with play button overlay */}
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transition-effect hover:bg-red-700 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center text-white font-medium">
                  {t('clickToPlayVideo', 'guitars') || "Click to play video"}
                </p>
              </div>
            </SectionReveal>
          )}
          
          <SectionReveal animation="slide-up" delay={600}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('specifications', 'guitarDetails')}</h2>
            <div className="bg-gray-100  bg-opacity-55 p-5 rounded-lg shadow-md">
              {Object.entries(guitar.specifications).map(([key, value], index) => (
                <div 
                  key={key} 
                  className={`grid grid-cols-2 mb-2 last:mb-0 py-2 transition-effect
                    hover:bg-blue-50 rounded-md ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
                >
                  <span className="font-medium pl-3 text-gray-800">{key}:</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Modal for full-size images */}
      {modalOpen && (
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
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 text-white hover:bg-black/90 p-1.5 sm:p-2 rounded-full z-50"
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col">
              {/* Full image */}
              <div className="flex justify-center items-center p-2 sm:p-4" style={{ height: 'min(80vh, 80vw)' }}>
                <BlurImage 
                  src={modalImage} 
                  alt={guitar.name}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full"
                  sizes="100vw"
                />
              </div>

              {/* Navigation buttons */}
              <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2">
                <button 
                  className="bg-black/70 text-white hover:bg-black/90 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = guitar.images.findIndex(img => img === modalImage)
                    const prevIndex = (currentIndex - 1 + guitar.images.length) % guitar.images.length
                    setModalImage(guitar.images[prevIndex])
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
                    const currentIndex = guitar.images.findIndex(img => img === modalImage)
                    const nextIndex = (currentIndex + 1) % guitar.images.length
                    setModalImage(guitar.images[nextIndex])
                  }}
                  aria-label="Next image"
                >
                  <span className="text-xl sm:text-2xl">&rarr;</span>
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-1 sm:gap-2 py-2 sm:py-4">
                {guitar.images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${modalImage === img ? 'bg-white' : 'bg-gray-500'}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setModalImage(img)
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal for video */}
      {videoModalOpen && guitar.video && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 grid place-items-center w-full h-full"
          onClick={handleVideoOverlayClick}
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
              onClick={closeVideoModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 text-white hover:bg-black/90 p-1.5 sm:p-2 rounded-full z-50"
              aria-label="Close video"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Video container */}
            <div className="w-full p-2 sm:p-4 flex items-center justify-center">
              <div className="w-full aspect-video" style={{ maxHeight: 'calc(95vh - 100px)' }}>
                <iframe 
                  src={guitar.video}
                  className="w-full h-full rounded-md"
                  title={`${guitar.name} video`}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}