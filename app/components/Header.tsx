'use client'

import { useState, useCallback } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from "../../components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const router = useRouter()

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
    { label: 'My Story', id: 'story' },
    { label: 'My Guitars', id: 'guitars' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-3 py-3 flex justify-between items-center text-white backdrop-filter backdrop-blur-sm">
        <Link href="/#" className="flex items-center">
          <Image
            src="/images/Stoyanov2.svg"
            alt="Stoyanov Guitars Logo"
            width={240}
            height={80}
            className="brightness-[0.9] invert opacity-80"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block relative">
          <Button
            variant="ghost"
            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            className="text-white"
          >
            Menu
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isDesktopMenuOpen ? 'rotate-180' : ''}`} />
          </Button>
          {isDesktopMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800/90 backdrop-filter backdrop-blur-sm rounded-md shadow-lg py-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-full mt-1 w-36 bg-gray-800/90 backdrop-filter backdrop-blur-sm rounded-md shadow-lg py-1 z-20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateToSection(item.id)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

