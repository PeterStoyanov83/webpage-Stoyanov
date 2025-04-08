import { useState, useEffect, useCallback } from 'react';

interface ScrollOptions {
  threshold?: number;
  scrollUp?: boolean;
  scrollDown?: boolean;
}

/**
 * Custom hook to track scroll position and provide scroll-related utilities
 */
export function useScroll({
  threshold = 300,
  scrollUp = true,
  scrollDown = false,
}: ScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Check if user has scrolled past threshold
    if (currentScrollY > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    
    // Determine scroll direction
    if (currentScrollY > prevScrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < prevScrollY) {
      setScrollDirection('up');
    }
    
    setScrollY(currentScrollY);
    setPrevScrollY(currentScrollY);
  }, [prevScrollY, threshold]);

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Scroll to element by ID
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  useEffect(() => {
    // Only add scroll listener if we need scroll direction or threshold checking
    if (scrollUp || scrollDown || threshold !== undefined) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Initialize with current scroll position
      handleScroll();
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, scrollDown, scrollUp, threshold]);

  return {
    isScrolled,
    scrollDirection,
    scrollY,
    scrollToTop,
    scrollToElement,
    isScrollingUp: scrollDirection === 'up',
    isScrollingDown: scrollDirection === 'down'
  };
}