'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { Language } from '../translations'
import { translations } from '../translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, section?: string) => any
}

const LanguageContext = createContext<LanguageContextType | null>(null)

// Helper function to get a nested property from an object using a string path
function getNestedProperty(obj: any, path: string): any {
  return path.split('.').reduce((prev, curr) => {
    return prev && prev[curr] !== undefined ? prev[curr] : undefined
  }, obj)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to English, but try to get from localStorage on client
  const [language, setLanguage] = useState<Language>('en')

  // Update language from localStorage on mount (client-side only)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bg')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Translation function
  const t = (key: string, section?: string): any => {
    const path = section ? `${section}.${key}` : key
    const translated = getNestedProperty(translations[language], path)

    if (translated === undefined) {
      console.warn(`Translation missing for key: ${path} in language: ${language}`)
      return key // Fallback to the key itself
    }

    // Check if it's an array of strings
    if (Array.isArray(translated)) {
      if (translated.every(item => typeof item === 'string')) {
        return translated
      }
      console.warn(`Invalid array translation type for key: ${path} in language: ${language}`)
      return key
    }

    // Check if it's a string
    if (typeof translated === 'string') {
      return translated
    }

    // Check if it's an object (for nested translations like guitar data)
    if (typeof translated === 'object' && translated !== null) {
      return translated
    }

    console.warn(`Invalid translation type for key: ${path} in language: ${language}`)
    return key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}