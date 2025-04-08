'use client';

import { useLanguage } from '../shared/hooks/useLanguage';
import { useScroll } from './hooks/useScroll';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const { t } = useLanguage();
  const { isScrolled, scrollToTop } = useScroll({ threshold: 300 });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 p-3 rounded-full bg-blue-600 text-white shadow-lg 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition-all duration-300 transform hover:scale-110 z-50
        ${isScrolled 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label={t('backToTop', 'nav')}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}