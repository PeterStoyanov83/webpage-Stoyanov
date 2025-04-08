'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../shared/hooks/useLanguage';
import { useScroll } from './hooks/useScroll';

/**
 * Improved Header with:
 * - Better mobile navigation
 * - Scroll detection for compact header on scroll
 * - Smoother animations
 * - Better accessibility
 */
export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScroll({ threshold: 50 });
  
  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/#story', label: t('story', 'nav') },
    { href: '/#guitars', label: t('guitars', 'nav') },
    { href: '/#services', label: t('services', 'nav') },
    { href: '/#contact', label: t('contact', 'nav') },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Stoyanov Guitars</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-blue-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher (this will be imported from its own component) */}
            <div className="language-switcher"></div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="text-2xl font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Stoyanov Guitars
            </Link>
            
            <button
              onClick={toggleMenu}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-xl hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher (mobile) */}
            <div className="language-switcher mt-4"></div>
          </nav>
        </div>
      </div>
    </header>
  );
}