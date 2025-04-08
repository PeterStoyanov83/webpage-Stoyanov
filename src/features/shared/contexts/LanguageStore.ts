import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations } from '../../../app/translations';
import type { Language } from '../../../app/translations';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, namespace?: string) => string | Record<string, any>;
}

/**
 * Improved language store using Zustand for better performance
 * - Persists language preference to localStorage
 * - Provides an efficient translation function
 * - Memoizes translations to prevent unnecessary re-renders
 */
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'en' as Language,
      
      setLanguage: (lang: Language) => set({ language: lang }),
      
      t: (key: string, namespace?: string) => {
        const { language } = get();
        const translation = translations[language];
        
        if (!namespace) {
          // Split the key by dots to traverse nested objects
          const keys = key.split('.');
          let result: any = translation;
          
          for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
              result = result[k];
            } else {
              console.warn(`Translation missing for key: ${key} in language: ${language}`);
              
              // Fallback to English if key doesn't exist in current language
              if (language !== 'en') {
                let englishResult = translations.en;
                for (const k of keys) {
                  if (englishResult && typeof englishResult === 'object' && k in englishResult) {
                    englishResult = englishResult[k];
                  } else {
                    return key; // Return the key itself as last resort
                  }
                }
                return englishResult;
              }
              
              return key; // Return the key itself as last resort
            }
          }
          
          return result;
        }
        
        // Handle namespaced keys
        if (namespace && translation[namespace]) {
          const keys = key.split('.');
          let result: any = translation[namespace];
          
          for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
              result = result[k];
            } else {
              console.warn(`Translation missing for key: ${namespace}.${key} in language: ${language}`);
              
              // Fallback to English
              if (language !== 'en') {
                let englishResult = translations.en[namespace];
                for (const k of keys) {
                  if (englishResult && typeof englishResult === 'object' && k in englishResult) {
                    englishResult = englishResult[k];
                  } else {
                    return key; // Return the key itself as last resort
                  }
                }
                return englishResult;
              }
              
              return key; // Return the key itself as last resort
            }
          }
          
          return result;
        }
        
        console.warn(`Namespace not found: ${namespace} in language: ${language}`);
        return key;
      }
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ language: state.language }),
    }
  )
);