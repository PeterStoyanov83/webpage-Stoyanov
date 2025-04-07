'use client'

import { useLanguage } from '../contexts/LanguageContext'
import type { Language } from '../translations'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bg' : 'en')
  }

  return (
    <div className="relative">
      <div 
        className="flex rounded-full bg-gray-800/90 backdrop-filter backdrop-blur-sm p-1 cursor-pointer border border-gray-700"
        onClick={toggleLanguage}
      >
        <div 
          className={`flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 ${
            language === 'en' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300'
          }`}
        >
          EN
        </div>
        <div 
          className={`flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 ${
            language === 'bg' 
              ? 'bg-red-600 text-white' 
              : 'text-gray-300'
          }`}
        >
          BG
        </div>
      </div>
    </div>
  )
}