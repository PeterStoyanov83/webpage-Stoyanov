'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../shared/hooks/useLanguage';

/**
 * Improved LoadingOverlay with:
 * - Smoother transitions
 * - Better accessibility
 * - Optional progress indication
 */
export default function LoadingOverlay() {
  const { t } = useLanguage();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startNavigation = () => {
      setIsNavigating(true);
      setProgress(0);
      
      // Simulate progress for better UX
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 15;
          return newProgress > 90 ? 90 : newProgress; // Max at 90% until actual completion
        });
      }, 300);
      
      return interval;
    };

    const endNavigation = (interval: NodeJS.Timeout) => {
      setProgress(100);
      
      // Give time for the progress bar to reach 100%
      setTimeout(() => {
        clearInterval(interval);
        
        // Keep the loader visible briefly before hiding
        setTimeout(() => {
          setIsNavigating(false);
          setProgress(0);
        }, 300);
      }, 200);
    };

    // Subscribe to navigation events
    const handleStart = () => {
      const interval = startNavigation();
      
      const handleComplete = () => endNavigation(interval);
      
      document.addEventListener('navigationComplete', handleComplete as EventListener);
      
      return () => {
        document.removeEventListener('navigationComplete', handleComplete as EventListener);
        clearInterval(interval);
      };
    };

    document.addEventListener('navigationStart', handleStart as EventListener);
    
    return () => {
      document.removeEventListener('navigationStart', handleStart as EventListener);
    };
  }, []);

  if (!isNavigating) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex flex-col items-center">
        {/* Guitar logo or spinner */}
        <div className="w-20 h-20 mb-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse">
            <path d="M19.8,16.7c-0.7-0.9-1.3-2-1.5-3.2c-0.2-1.2-1.2-2-2.3-2.1c-1.5-0.1-3-0.5-4.4-1.1c-1.4-0.6-2.6-1.5-3.6-2.6c-1-1.1-0.9-2.8,0.1-3.9l0.1-0.1c1-1,2.7-1.1,3.7-0.1c1.1,1,2,2.3,2.6,3.6c0.6,1.4,1,2.9,1.1,4.4c0.1,1.1,0.9,2.1,2.1,2.3c1.2,0.2,2.3,0.7,3.2,1.5L19.8,16.7z" />
            <path d="M4.4,7.6c0.7,0.9,1.3,2,1.5,3.2c0.2,1.2,1.2,2,2.3,2.1c1.5,0.1,3,0.5,4.4,1.1c1.4,0.6,2.6,1.5,3.6,2.6c1,1.1,0.9,2.8-0.1,3.9l-0.1,0.1c-1,1-2.7,1.1-3.7,0.1c-1.1-1-2-2.3-2.6-3.6c-0.6-1.4-1-2.9-1.1-4.4c-0.1-1.1-0.9-2.1-2.1-2.3c-1.2-0.2-2.3-0.7-3.2-1.5" />
          </svg>
        </div>
        
        <p className="text-white text-xl font-medium mb-4">
          {t('loading', 'common')}
        </p>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}