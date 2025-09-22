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
        className="flex cursor-pointer transition-all duration-300 relative"
        onClick={toggleLanguage}
      >
        {/* English option */}
        <div 
          className={`relative flex items-center justify-center px-2 text-[10px] tracking-widest uppercase transition-colors duration-300 ${
            language === 'en' 
              ? 'text-white' 
              : 'text-white/40 hover:text-white/60'
          }`}
        >
          En
        </div>
        
        <div className="text-white/20">/</div>
        
        {/* Bulgarian option */}
        <div 
          className={`relative flex items-center justify-center px-2 text-[10px] tracking-widest uppercase transition-colors duration-300 ${
            language === 'bg' 
              ? 'text-white' 
              : 'text-white/40 hover:text-white/60'
          }`}
        >
          Bg
        </div>
      </div>
    </div>
  )
}