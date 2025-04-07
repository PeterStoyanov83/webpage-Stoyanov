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
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={closeModal}>
          <div className="relative max-w-7xl max-h-screen p-4">
            <button 
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
            >
              <X size={24} />
            </button>

            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <BlurImage 
                src={modalImage} 
                alt={guitar.name}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
                sizes="100vw"
              />

              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {guitar.images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${modalImage === img ? 'bg-white' : 'bg-gray-500'}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setModalImage(img)
                    }}
                  />
                ))}
              </div>
              
              <div className="absolute inset-y-0 left-4 flex items-center">
                <button 
                  className="bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = guitar.images.findIndex(img => img === modalImage)
                    const prevIndex = (currentIndex - 1 + guitar.images.length) % guitar.images.length
                    setModalImage(guitar.images[prevIndex])
                  }}
                >
                  &larr;
                </button>
              </div>
              
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button 
                  className="bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = guitar.images.findIndex(img => img === modalImage)
                    const nextIndex = (currentIndex + 1) % guitar.images.length
                    setModalImage(guitar.images[nextIndex])
                  }}
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal for video - positioned relative to viewport */}
      {videoModalOpen && guitar.video && (
        <div 
          className="fixed inset-0 z-[999] bg-black bg-opacity-90 flex items-center justify-center" 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={closeVideoModal}
        >
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000]">
            <button 
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-effect"
              onClick={(e) => {
                e.stopPropagation()
                closeVideoModal()
              }}
            >
              <X size={24} />
            </button>
            
            {/* Instagram video container */}
            <div 
              className="instagram-embed rounded-lg overflow-hidden shadow-xl" 
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '600px',
                height: '650px',
                maxWidth: 'calc(100vw - 40px)',
                maxHeight: 'calc(100vh - 80px)'
              }}
            >
              <iframe 
                src={guitar.video}
                className="w-full h-full"
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
      )}

    </div>
  )
}