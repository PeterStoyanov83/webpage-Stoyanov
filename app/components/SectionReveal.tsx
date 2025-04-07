'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  threshold?: number
  animation?: 'fade-in' | 'slide-up' | 'slide-right' | 'slide-left' | 'scale' | 'bounce'
  className?: string
}

export default function SectionReveal({
  children,
  delay = 0,
  threshold = 0.2,
  animation = 'slide-up',
  className = '',
}: SectionRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-right': 'animate-slide-in-right',
    'slide-left': 'animate-slide-in-left',
    'scale': 'animate-scale',
    'bounce': 'animate-bounce-in'
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If element is in viewport
        if (entry.isIntersecting) {
          // Add delay before showing the element
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          
          // Once the element is visible, stop observing it
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold, // Amount of element that needs to be visible
        rootMargin: '0px 0px -100px 0px' // Adjust when the element is considered visible
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  return (
    <div 
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}