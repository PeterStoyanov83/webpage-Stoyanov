'use client';

import Link from 'next/link';
import { useLanguage } from '../shared/hooks/useLanguage';
import Section from './Section';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <Section animation="fade-in" delay={100}>
          <p className="text-lg">{t('copyright', 'footer')}</p>
        </Section>
        
        <Section animation="slide-up" delay={200}>
          <div className="mt-4 space-x-4">
            <Link 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-white mx-2 hover:underline transform hover:scale-105 inline-block"
            >
              {t('privacyPolicy', 'footer')}
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-gray-400 hover:text-white mx-2 hover:underline transform hover:scale-105 inline-block"
            >
              {t('termsOfService', 'footer')}
            </Link>
          </div>
        </Section>
      </div>
    </footer>
  );
}