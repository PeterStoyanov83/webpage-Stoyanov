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
      <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <SectionReveal animation="slide-left">
            <div 
              className="relative h-[500px] w-full mb-6 rounded-xl overflow-hidden shadow-xl cursor-pointer image-zoom group"
              onClick={() => openModal(selectedImage)}
            >
              <BlurImage 
                src={selectedImage} 
                alt={guitar.name} 
                fill={true}
                style={{ objectFit: 'cover' }}
                className="transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="text-white/90 text-lg font-light tracking-wide border border-guitar-gold/30 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  {t('clickToEnlarge', 'guitars')}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {guitar.images.map((img, index) => (
                <div 
                  key={index} 
                  className={`relative h-24 cursor-pointer rounded-xl overflow-hidden transition-all duration-300
                    ${selectedImage === img 
                      ? 'ring-2 ring-guitar-gold scale-105 z-10 shadow-[0_0_10px_rgba(212,175,55,0.3)]' 
                      : 'opacity-80 hover:opacity-100 hover:scale-105 ring-1 ring-white/10'}`}
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
              <div className="mb-8 pb-6 border-b border-guitar-gold/20">
                <h1 className="text-4xl font-light mb-6 text-white tracking-wide">
                  {guitarTranslations.name || guitar.name}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed font-light">
                  {guitarTranslations.shortDescription || guitar.shortDescription}
                </p>
              </div>
            </SectionReveal>
            
            <SectionReveal animation="fade-in" delay={300} className="mb-10">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-light text-white tracking-wide">{t('description', 'guitarDetails')}</h2>
                  <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-guitar-gold/30 to-transparent"></div>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  {guitarTranslations.description || guitar.description}
                </p>
              </div>
            </SectionReveal>
            
            {guitar.video && (
              <SectionReveal animation="scale" delay={400} className="mb-12">
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-light text-white tracking-wide">{t('video', 'guitarDetails')}</h2>
                  <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-guitar-gold/30 to-transparent"></div>
                </div>
                <div 
                  className="relative w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group border border-guitar-gold/10"
                  style={{ paddingBottom: "56.25%" }}
                  onClick={openVideoModal}
                >
                  {/* Video thumbnail with play button overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-guitar-gold to-guitar-amber/70 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="absolute bottom-4 left-0 right-0 text-center text-white/90 font-light tracking-wide">
                    {t('clickToPlayVideo', 'guitars') || "Click to play video"}
                  </p>
                </div>
              </SectionReveal>
            )}
            
            <SectionReveal animation="slide-up" delay={600}>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-light text-white tracking-wide">{t('specifications', 'guitarDetails')}</h2>
                <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-guitar-gold/30 to-transparent"></div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-guitar-gold/10">
                {Object.entries(guitar.specifications).map(([key, value], index) => (
                  <div 
                    key={key} 
                    className={`grid grid-cols-2 py-3 transition-all duration-300 hover:bg-black/20
                      ${index !== Object.entries(guitar.specifications).length - 1 ? 'border-b border-guitar-gold/10' : ''}`}
                  >
                    <span className="font-medium text-guitar-gold pl-2">{key}:</span>
                    <span className="text-white/80">{value}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* Modal for full-size images */}
      {modalOpen && (
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
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 text-guitar-gold hover:text-white hover:bg-black p-2 rounded-full z-50 backdrop-blur-sm border border-guitar-gold/20 transition-all duration-300"
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
                  className="bg-black/60 text-guitar-gold hover:text-white p-3 rounded-full shadow-lg backdrop-blur-sm w-12 h-12 flex items-center justify-center border border-guitar-gold/20 hover:border-guitar-gold/40 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = guitar.images.findIndex(img => img === modalImage)
                    const prevIndex = (currentIndex - 1 + guitar.images.length) % guitar.images.length
                    setModalImage(guitar.images[prevIndex])
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
                    const currentIndex = guitar.images.findIndex(img => img === modalImage)
                    const nextIndex = (currentIndex + 1) % guitar.images.length
                    setModalImage(guitar.images[nextIndex])
                  }}
                  aria-label="Next image"
                >
                  <span className="text-xl">&rarr;</span>
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2 py-4">
                {guitar.images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                      modalImage === img 
                        ? 'bg-guitar-gold border-guitar-gold scale-110' 
                        : 'bg-gray-500/40 border-gray-500/40 hover:bg-guitar-gold/50 hover:border-guitar-gold/50'
                    }`}
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
              onClick={closeVideoModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 text-guitar-gold hover:text-white hover:bg-black p-2 rounded-full z-50 backdrop-blur-sm border border-guitar-gold/20 transition-all duration-300"
              aria-label="Close video"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Video container */}
            <div className="w-full p-4 flex items-center justify-center">
              <div className="w-full aspect-video" style={{ maxHeight: 'calc(95vh - 100px)' }}>
                <iframe 
                  src={guitar.video}
                  className="w-full h-full rounded-xl border border-guitar-gold/10"
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