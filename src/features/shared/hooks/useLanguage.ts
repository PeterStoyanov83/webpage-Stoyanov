import { useCallback } from 'react';
import { useLanguageStore } from '../contexts/LanguageStore';
import type { Language } from '../../../app/translations';

/**
 * Custom hook for using language throughout the application
 * Provides memoized functions to prevent unnecessary re-renders
 */
export function useLanguage() {
  const language = useLanguageStore(state => state.language);
  const setLanguage = useLanguageStore(state => state.setLanguage);
  const t = useLanguageStore(state => state.t);
  
  // Memoize the toggleLanguage function to prevent unnecessary re-renders
  const toggleLanguage = useCallback(() => {
    const newLanguage = language === 'en' ? 'bg' : 'en';
    setLanguage(newLanguage);
  }, [language, setLanguage]);
  
  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isEnglish: language === 'en',
    isBulgarian: language === 'bg'
  };
}

/**
 * Helper function to get translations in non-React contexts
 * (e.g., in utility functions)
 */
export function getTranslation(key: string, namespace?: string): string {
  const t = useLanguageStore.getState().t;
  const result = t(key, namespace);
  return typeof result === 'string' ? result : key;
}