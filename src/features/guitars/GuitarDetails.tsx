'use client';

import { useState } from 'react';
import { useLanguage } from '../shared/hooks/useLanguage';
import type { Guitar } from '../data/guitars';
import { Grid, Info } from 'lucide-react';
import Section from '../ui/Section';
import ImageGallery from '../ui/ImageGallery';
import Modal from '../ui/Modal';
import OptimizedImage from '../ui/OptimizedImage';

interface GuitarDetailsProps {
  guitar: Guitar;
}

/**
 * Improved guitar details component with:
 * - Better performance through optimized images
 * - Improved modal for both images and videos
 * - Better mobile experience with touch support
 * - Better keyboard accessibility
 * - More appealing animations and transitions
 */
export default function GuitarDetails({ guitar }: GuitarDetailsProps) {
  const { t, language } = useLanguage();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  // Get guitar translations
  let guitarTranslations: Record<string, any> = {};
  try {
    const translationResult = t(`${guitar.id}`, 'guitars_data');
    if (translationResult && translationResult.startsWith('{') && translationResult.endsWith('}')) {
      guitarTranslations = JSON.parse(translationResult);
    }
  } catch (e) {
    console.warn('Failed to parse guitar translations', e);
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-32 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 guitar-content">
        <Section animation="slide-left">
          {/* Use the new ImageGallery component */}
          <ImageGallery 
            images={guitar.images} 
            alt={guitarTranslations.name || guitar.name}
          />
        </Section>
        
        <div>
          <Section animation="slide-right" delay={100}>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 transition-effect hover:text-blue-900">
              {guitarTranslations.name || guitar.name}
            </h1>
            <p className="text-xl text-gray-700 mb-8 transition-effect leading-relaxed">
              {guitarTranslations.shortDescription || guitar.shortDescription}
            </p>
          </Section>
          
          <Section animation="fade-in" delay={300} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              {t('description', 'guitarDetails')}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {guitarTranslations.description || guitar.description}
            </p>
          </Section>
          
          {guitar.video && (
            <Section animation="fade-in" delay={400} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('video', 'guitarDetails')}
              </h2>
              <div 
                className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer hover-card"
                style={{ paddingBottom: "56.25%" }}
                onClick={() => setVideoModalOpen(true)}
              >
                {/* Video thumbnail with play button overlay */}
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-700 hover:scale-110">
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
            </Section>
          )}
          
          <Section animation="slide-up" delay={600}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <Grid className="w-5 h-5 text-green-600" />
              {t('specifications', 'guitarDetails')}
            </h2>
            <div className="bg-gray-100 bg-opacity-55 p-5 rounded-lg shadow-md">
              {Object.entries(guitar.specifications).map(([key, value], index) => (
                <div 
                  key={key} 
                  className={`grid grid-cols-2 mb-2 last:mb-0 py-2 transition-all duration-200
                    hover:bg-blue-50 rounded-md ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
                >
                  <span className="font-medium pl-3 text-gray-800">{key}:</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
      
      {/* Video Modal */}
      <Modal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        closeOnEsc
        closeOnOutsideClick
      >
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
      </Modal>
    </div>
  );
}