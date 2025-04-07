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
    { id: 'contact', label: t('contact', 'nav') as string },
  ]

  return (
    <header className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-10 transition-all duration-300 hover:bg-opacity-80">
      <div className="container mx-auto px-3 py-3 flex justify-between items-center text-white backdrop-filter backdrop-blur-sm">
        <Link href="/#" className="flex items-center transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/Stoyanov2.svg"
            alt="Stoyanov Guitars Logo"
            width={240}
            height={80}
            className="brightness-[0.9] invert opacity-80 transition-all duration-500 hover:opacity-100 hover:brightness-100"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="text-gray-200 hover:text-white font-medium transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(!isOpen)}
            className="transition-all duration-300 hover:bg-gray-700/50"
          >
            {isOpen 
              ? <X className="h-6 w-6 transition-transform duration-300 rotate-90" /> 
              : <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
            }
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Accordion Style */}
      <div 
        className={`md:hidden w-full bg-gray-800/90 backdrop-filter backdrop-blur-sm shadow-lg z-20 
          transition-all duration-300
          ${isOpen ? 'max-h-64 py-2' : 'max-h-0 overflow-hidden'}`}
      >
        {navItems.map((item, index) => (
          <div 
            key={item.id}
            className={`transition-all duration-300 border-b border-gray-700 last:border-none
              ${isOpen ? 'animate-fade-in py-3' : ''}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <button
              onClick={() => navigateToSection(item.id)}
              className="block w-full text-center px-4 text-gray-200 hover:text-white transition-all duration-300"
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </header>
  )
}