'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { NewsItem } from '../data/news'

interface NewsDetailProps {
  newsItem: NewsItem
}

export default function NewsDetail({ newsItem }: NewsDetailProps) {
  const { language, t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(newsItem.imageUrl)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  
  // Get available images (use imageUrl if images array is not provided)
  const images = newsItem.images || [newsItem.imageUrl]
  
  const title = language === 'bg' && newsItem.titleBg ? newsItem.titleBg : newsItem.title
  const content = language === 'bg' && newsItem.contentBg ? newsItem.contentBg : newsItem.content
  const backToNewsText = t('backToNews', 'common') || (language === 'bg' ? 'Обратно към Новини' : 'Back to News')
  
  const openModal = (img: string) => {
    setModalImage(img)
    setModalOpen(true)
  }
  
  const navigateGallery = (direction: 'next' | 'prev') => {
    const currentIndex = images.findIndex(img => img === modalImage)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }
    
    setModalImage(images[newIndex])
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        
        <SectionReveal animation="slide-up" className="relative z-10">
          <Link 
            href="/news" 
            className="inline-flex items-center mb-8 px-5 py-2 bg-black/40 text-guitar-gold rounded-full hover:bg-black/70 transition-all duration-300 transform hover:-translate-x-2 border border-guitar-gold/20 hover:border-guitar-gold/40 shadow-lg"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            <span>{backToNewsText}</span>
          </Link>
        </SectionReveal>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionReveal animation="slide-up" delay={200}>
            <div className="mb-8">
              <h1 className="text-4xl font-light tracking-wide text-white mb-4">{title}</h1>
              <div className="flex items-center space-x-4 text-white/70 text-sm mb-6">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span>{format(new Date(newsItem.date), 'MMMM dd, yyyy')}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {newsItem.tags.map(tag => (
                      <span key={tag} className="text-xs bg-black/40 text-white/70 px-2 py-1 rounded-full border border-guitar-gold/10">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
          
          <SectionReveal animation="fade-in" delay={300}>
            <div className="flex flex-col gap-8 mb-10">
              {/* Image Gallery section */}
              <div className="w-full space-y-4">
                {/* Main image display */}
                <div 
                  className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl border border-guitar-gold/10"
                  onClick={() => openModal(selectedImage)}
                >
                  <div className="relative aspect-[16/9] w-full max-h-[500px]">
                    <Image 
                      src={selectedImage} 
                      alt={title}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
                    <span className="text-white text-lg font-medium opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/70 px-4 py-2 rounded-lg z-10">
                      {t('clickToEnlarge', 'guitars') || 'Click to enlarge'}
                    </span>
                  </div>
                </div>
                
                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`relative rounded-md overflow-hidden transition-all duration-300 ${
                          selectedImage === img
                            ? 'ring-2 ring-guitar-gold scale-105 z-10'
                            : 'opacity-70 hover:opacity-100 ring-1 ring-gray-700 hover:ring-guitar-gold/60'
                        }`}
                        aria-label={`Select image ${index + 1}`}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={img}
                            alt={`${title} thumbnail ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 25vw, 10vw"
                            className="object-cover"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Content section */}
              <div className="w-full prose prose-lg text-white/90">
                {content.split('\n').map((paragraph, index) => (
                  <p key={index} className={`mb-6 ${index === 0 ? 'text-xl font-medium' : ''}`}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </SectionReveal>
          
          {/* Full-size image modal */}
          {modalOpen && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setModalOpen(false)}>
              <div className="absolute top-4 right-4 z-10">
                <button 
                  className="bg-black/70 text-white hover:bg-black/90 p-2 rounded-full shadow-lg backdrop-blur-sm"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="relative max-w-4xl max-h-[80vh] w-full p-4" onClick={(e) => e.stopPropagation()}>
                <div className="relative h-full flex items-center justify-center">
                  <Image
                    src={modalImage}
                    alt={title}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[70vh] w-auto max-w-full mx-auto"
                    priority
                  />
                </div>
                
                {/* Navigation buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white hover:bg-black/90 p-3 rounded-full shadow-lg backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateGallery('prev');
                      }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white hover:bg-black/90 p-3 rounded-full shadow-lg backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateGallery('next');
                      }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Pagination dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 py-2">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            modalImage === img ? 'bg-guitar-gold' : 'bg-gray-500'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalImage(img);
                          }}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}