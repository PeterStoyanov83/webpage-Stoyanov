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
        className="flex rounded-full bg-black/30 backdrop-blur-sm p-1 cursor-pointer border border-guitar-gold/20 hover:border-guitar-gold/40 transition-all duration-300 relative"
        onClick={toggleLanguage}
      >
        {/* Moving background bubble */}
        <div 
          className={`absolute top-1 bottom-1 w-[calc(50%-2px)] rounded-full bg-black/50 border border-guitar-gold/30 transition-all duration-500 ease-in-out shadow-[0_0_5px_rgba(212,175,55,0.15)] z-0 
            ${language === 'en' ? 'left-1 translate-x-0' : 'left-1 translate-x-[100%]'}`}
        />
        
        {/* English option */}
        <div 
          className={`relative z-10 flex items-center justify-center rounded-full px-3 py-1 text-xs tracking-wider font-light transition-colors duration-300 min-w-[32px] ${
            language === 'en' 
              ? 'text-guitar-gold' 
              : 'text-white/70 hover:text-white'
          }`}
        >
          EN
        </div>
        
        {/* Bulgarian option */}
        <div 
          className={`relative z-10 flex items-center justify-center rounded-full px-3 py-1 text-xs tracking-wider font-light transition-colors duration-300 min-w-[32px] ${
            language === 'bg' 
              ? 'text-guitar-gold' 
              : 'text-white/70 hover:text-white'
          }`}
        >
          BG
        </div>
      </div>
    </div>
  )
}