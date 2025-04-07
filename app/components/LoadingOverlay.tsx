'use client'

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useLanguage } from '../contexts/LanguageContext'

export default function LoadingOverlay() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Create a custom loading state manager
    const handleLoadingStart = () => {
      setIsLoading(true)
    }

    const handleLoadingComplete = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 300) // Small delay to ensure smooth transition
    }

    // Listen for route changes to show loading state
    document.addEventListener('nextRouteChangeStart', handleLoadingStart)
    document.addEventListener('nextRouteChangeComplete', handleLoadingComplete)

    return () => {
      document.removeEventListener('nextRouteChangeStart', handleLoadingStart)
      document.removeEventListener('nextRouteChangeComplete', handleLoadingComplete)
    }
  }, [])

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mb-4"></div>
        <p className="text-white text-lg font-medium">{t('loading', 'common')}</p>
      </div>
    </div>
  )
}