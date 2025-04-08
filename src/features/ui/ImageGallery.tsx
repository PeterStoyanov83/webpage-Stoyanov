'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../shared/hooks/useLanguage';
import Modal from './Modal';
import OptimizedImage from './OptimizedImage';

interface ImageGalleryProps {
  images: string[];
  alt: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Reusable image gallery component with:
 * - Thumbnail navigation
 * - Modal for full-size viewing
 * - Keyboard navigation support
 * - Touch swipe support on mobile
 * - Responsive design
 */
export default function ImageGallery({
  images,
  alt,
  aspectRatio = '4/3',
  className = '',
}: ImageGalleryProps) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  
  // Touch swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left, go to next image
      navigateGallery('next');
    } else if (touchStart - touchEnd < -100) {
      // Swipe right, go to previous image
      navigateGallery('prev');
    }
  };

  const openModal = (img: string) => {
    setModalImage(img);
    setModalOpen(true);
  };

  function navigateGallery(direction: 'next' | 'prev') {
    const currentIndex = images.findIndex((img) => img === (modalOpen ? modalImage : selectedImage));
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    if (modalOpen) {
      setModalImage(images[newIndex]);
    } else {
      setSelectedImage(images[newIndex]);
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main image display */}
      <div 
        className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
        onClick={() => openModal(selectedImage)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <OptimizedImage
          src={selectedImage}
          alt={`${alt} - ${t('image', 'common')}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          containerClassName="aspect-[4/3] w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
          <span className="text-white text-lg font-medium opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/70 px-4 py-2 rounded-lg z-10">
            {t('clickToEnlarge', 'guitars')}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`relative rounded-md overflow-hidden transition-all duration-300 ${
                selectedImage === img
                  ? 'ring-2 ring-blue-500 scale-105 z-10'
                  : 'opacity-80 hover:opacity-100 ring-1 ring-gray-700 hover:ring-blue-400'
              }`}
              aria-label={`Select image ${index + 1}`}
            >
              <OptimizedImage
                src={img}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 10vw"
                className="object-cover"
                containerClassName="aspect-square"
                blur={false}
              />
            </button>
          ))}
        </div>
      )}

      {/* Full-size image modal */}
      <Modal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        closeOnEsc
        closeOnOutsideClick
      >
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex justify-center items-center p-2 sm:p-4" style={{ height: 'min(80vh, 80vw)' }}>
            <OptimizedImage
              src={modalImage}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
              sizes="100vw"
              priority
            />
          </div>

          {/* Navigation buttons */}
          <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2">
            <button
              className="bg-black/70 text-white hover:bg-black/90 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                navigateGallery('prev');
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
            <button
              className="bg-black/70 text-white hover:bg-black/90 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                navigateGallery('next');
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-1 sm:gap-2 py-2 sm:py-4">
            {images.map((img, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  modalImage === img ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImage(img);
                }}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}