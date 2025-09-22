'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function BackToTop() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // If user scrolls down more than 300px, show the button
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 p-2 bg-black text-white/60 border border-white/10 hover:text-white hover:border-white/20 focus:outline-none transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label={t('backToTop', 'nav')}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M5 15l7-7 7 7" 
        />
      </svg>
    </button>
  )
}