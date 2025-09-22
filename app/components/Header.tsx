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
      {/* Minimal dark background with thin border */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white relative z-10">
        <Link href="/#" className="flex items-center transition-opacity duration-300 hover:opacity-80">
          <div>
            <Image
              src="/images/Stoyanov-logo-1.svg"
              alt="Stoyanov Guitars Logo"
              width={80}
              height={60}
              className="invert opacity-90"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="relative px-1 py-1 text-white/70 hover:text-white text-sm uppercase tracking-widest transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </button>
            ))}
          </nav>
          
          <div className="border-l border-white/10 h-5 pl-6">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="border-r border-white/10 h-5 pr-4">
            <LanguageSwitcher />
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-white/70 hover:text-white transition-all duration-300 focus:outline-none"
          >
            {isOpen 
              ? <X className="h-5 w-5 transition-transform duration-300" /> 
              : <Menu className="h-5 w-5 transition-transform duration-300" />
            }
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden w-full backdrop-blur-md bg-black/95 z-20 
          transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-[280px] border-b border-white/10' : 'max-h-0'}`}
      >
        <div className="container mx-auto py-2">
          {navItems.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-300 py-3 last:border-none
                ${isOpen ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-2'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => navigateToSection(item.id)}
                className="block w-full text-center text-white/60 hover:text-white text-sm uppercase tracking-widest transition-all duration-300"
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