'use client'

import { useState, useCallback } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from "../../components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  const navigateToSection = useCallback((sectionId: string) => {
    setIsOpen(false)
    setIsDesktopMenuOpen(false)
    router.push(`/#${sectionId}`)

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [router])

  const navItems = [
    { id: 'story', label: t('story', 'nav') as string },
    { id: 'guitars', label: t('guitars', 'nav') as string },
    { id: 'services', label: t('services', 'nav') as string },
    { id: 'news', label: t('news', 'nav') as string || 'News' },
    { id: 'contact', label: t('contact', 'nav') as string },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-10 transition-all duration-500">
      {/* Gradient background with blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 backdrop-blur-md z-0"></div>
      
      {/* Golden border line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-guitar-gold/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white relative z-10">
        <Link href="/#" className="flex items-center transition-transform duration-500 hover:scale-105 group">
          <div className="overflow-hidden">
            <Image
              src="/images/Stoyanov2.svg"
              alt="Stoyanov Guitars Logo"
              width={200}
              height={70}
              className="invert drop-shadow-[0_0_3px_rgba(255,255,255,0.3)] transition-all duration-500 transform group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="relative px-2 py-1 text-white/90 hover:text-guitar-gold font-light tracking-wider transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Bottom border that animates on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-guitar-gold group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </button>
            ))}
          </nav>
          
          <div className="border-l border-white/10 h-8 pl-6">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="border-r border-white/10 h-8 pr-4">
            <LanguageSwitcher />
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-white hover:text-guitar-gold transition-all duration-300 focus:outline-none"
          >
            {isOpen 
              ? <X className="h-6 w-6 transition-transform duration-300 rotate-90" /> 
              : <Menu className="h-6 w-6 transition-transform duration-300" />
            }
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden w-full backdrop-blur-md bg-black/70 shadow-[0_8px_16px_rgba(0,0,0,0.3)] z-20 
          transition-all duration-500 overflow-hidden
          ${isOpen ? 'max-h-[280px] border-t border-b border-guitar-gold/20' : 'max-h-0'}`}
      >
        <div className="container mx-auto py-2">
          {navItems.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-300 py-4 border-b border-guitar-gold/10 last:border-none
                ${isOpen ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => navigateToSection(item.id)}
                className="block w-full text-center text-white/90 hover:text-guitar-gold transition-all duration-300 tracking-wider"
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}