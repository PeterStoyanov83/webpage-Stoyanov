'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Dispatch custom nextRouteChangeComplete event
    const event = new Event('nextRouteChangeComplete', { bubbles: true })
    document.dispatchEvent(event)
  }, [pathname, searchParams])

  useEffect(() => {
    // Track navigation start
    const handleNavigationStart = () => {
      const event = new Event('nextRouteChangeStart', { bubbles: true })
      document.dispatchEvent(event)
    }

    // Listen for link clicks as a proxy for navigation start
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && !link.target && link.href.startsWith(window.location.origin)) {
        handleNavigationStart()
      }
    })

    // Also capture form submissions
    document.addEventListener('submit', (e) => {
      handleNavigationStart()
    })

    // Add mouseover event listener to preload pages
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && !link.target && link.href.startsWith(window.location.origin)) {
        // Preload the page when hovering over internal links
        const url = new URL(link.href)
        const prefetchLink = document.createElement('link')
        prefetchLink.rel = 'prefetch'
        prefetchLink.href = url.pathname
        prefetchLink.as = 'document'
        document.head.appendChild(prefetchLink)
      }
    })

    return () => {
      // Cleanup would be complex for these listeners, omitted for brevity
    }
  }, [])

  return null
}

export default NavigationEvents