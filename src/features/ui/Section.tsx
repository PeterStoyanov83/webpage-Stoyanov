'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in' | 'zoom-out' | 'none';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  once?: boolean;
  disabled?: boolean;
}

/**
 * Enhanced Section component with:
 * - Intersection Observer for better performance
 * - Animation options
 * - Configurable delay and threshold
 * - Device performance consideration (reduces animations on low-end devices)
 */
export default function Section({
  children,
  className,
  id,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  once = true,
  disabled = false,
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (disabled || shouldReduceMotion) {
      setIsVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(section);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px', // Start animation slightly before element is in view
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [threshold, once, disabled, shouldReduceMotion]);

  // Animation classes based on type
  const getAnimationClasses = () => {
    if (disabled || shouldReduceMotion) return '';
    
    if (!isVisible) {
      // Initial hidden state
      const baseClasses = 'opacity-0 transform';
      switch (animation) {
        case 'fade-in': return baseClasses;
        case 'slide-up': return `${baseClasses} translate-y-16`;
        case 'slide-down': return `${baseClasses} -translate-y-16`;
        case 'slide-left': return `${baseClasses} translate-x-16`;
        case 'slide-right': return `${baseClasses} -translate-x-16`;
        case 'zoom-in': return `${baseClasses} scale-90`;
        case 'zoom-out': return `${baseClasses} scale-110`;
        case 'none': return '';
        default: return baseClasses;
      }
    }
    
    return 'opacity-100 transform translate-x-0 translate-y-0 scale-100';
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      className={cn(
        getAnimationClasses(),
        'transition-all duration-700',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}