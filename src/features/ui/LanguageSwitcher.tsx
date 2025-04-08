'use client';

import { useLanguage } from '../shared/hooks/useLanguage';

export default function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300"
      aria-label={`Switch to ${language === 'en' ? 'Bulgarian' : 'English'}`}
    >
      <span className="font-medium text-sm">
        {language === 'en' ? 'BG' : 'EN'}
      </span>
    </button>
  );
}