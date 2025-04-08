'use client';

import Link from 'next/link';
import { Hammer, Wrench, Zap, ArrowLeft, Check, Info, CheckCircle } from 'lucide-react';
import { useLanguage } from '../shared/hooks/useLanguage';
import type { Service } from '../data/services';
import Section from '../ui/Section';
import ImageGallery from '../ui/ImageGallery';

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
};

/**
 * Improved service details component with:
 * - Better performance through optimized images
 * - Consistent UI with other pages
 * - Better animations and transitions
 * - Improved accessibility
 */
export default function ServiceDetails({ 
  id, 
  name, 
  images, 
  shortDescription, 
  longDescription, 
  servicesList, 
  iconName 
}: ServiceDetailsProps) {
  const { t } = useLanguage();
  
  const Icon = iconMap[iconName as keyof typeof iconMap];
  
  // Get service translations
  const serviceTranslationPath = `details.${id}`;
  let serviceTranslation: Record<string, any> = {};
  try {
    const translationResult = t(serviceTranslationPath, 'services');
    if (translationResult && translationResult.startsWith('{') && translationResult.endsWith('}')) {
      serviceTranslation = JSON.parse(translationResult);
    }
  } catch (e) {
    console.warn('Failed to parse service translations', e);
  }
  
  // Get translated values with fallbacks
  const translatedName = serviceTranslation.name || name;
  const translatedLongDescription = serviceTranslation.longDescription || longDescription;
  const translatedServicesList = serviceTranslation.servicesList || servicesList;

  return (
    <div className="container mx-auto px-4 py-16">
      <Section animation="slide-up">
        <Link 
          href="/#services" 
          className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300 transform hover:-translate-x-2 hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToServices', 'services')}
        </Link>
      </Section>
      
      <Section animation="slide-right" delay={200} className="flex items-center mb-8">
        {Icon && (
          <div className="animate-bounce-in mr-4">
            <Icon className="w-12 h-12 text-primary animate-pulse-subtle" aria-hidden="true" />
          </div>
        )}
        <h1 className="text-4xl font-bold text-white transition-all duration-300 hover:text-blue-200">{translatedName}</h1>
      </Section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section animation="fade-in" delay={400}>
          {images.length > 0 && (
            <ImageGallery 
              images={images} 
              alt={translatedName}
            />
          )}
        </Section>
        
        <Section animation="slide-left" delay={500}>
          <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-xl backdrop-blur-sm">
            <div>
              <Section animation="slide-up" delay={600}>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-400" />
                  {t('description', 'services')}
                </h2>
                <p className="text-white text-xl font-bold mb-8 leading-relaxed">{translatedLongDescription}</p>
              </Section>
              
              <Section animation="slide-up" delay={800}>
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  {t('servicesInclude', 'services')}
                </h2>
                <ul className="space-y-3">
                  {translatedServicesList.map((item: string, index: number) => (
                    <li 
                      key={index} 
                      className="text-white flex items-start gap-2 group transition-all duration-300 hover:translate-x-2 pl-2"
                      style={{ animationDelay: `${800 + (index * 100)}ms` }}
                    >
                      <Check className="w-5 h-5 mt-1 text-green-400 flex-shrink-0 group-hover:text-green-300 transition-colors" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}