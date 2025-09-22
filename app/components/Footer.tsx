'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative text-white py-20 overflow-hidden">
      {/* Minimal background with thin border */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Social and contact links in minimal style */}
          <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
            <SectionReveal animation="fade-in" delay={100} className="flex flex-col items-center">
              <div className="mb-2 text-white/50 uppercase tracking-widest text-xs">Social</div>
              <div className="flex space-x-8">
                <a href="https://www.facebook.com/Stoyanoffguitars/" target="_blank" rel="noopener noreferrer" 
                  className="p-2 text-white/60 hover:text-white transition-all duration-300">
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/stoyanovguitars/" target="_blank" rel="noopener noreferrer" 
                  className="p-2 text-white/60 hover:text-white transition-all duration-300">
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </SectionReveal>
            
            <SectionReveal animation="fade-in" delay={150} className="flex flex-col items-center">
              <div className="mb-2 text-white/50 uppercase tracking-widest text-xs">Contact</div>
              <div className="flex space-x-8">
                <a href="mailto:peterstoyanov83@gmail.com" 
                  className="p-2 text-white/60 hover:text-white transition-all duration-300">
                  <Mail size={18} />
                  <span className="sr-only">Email</span>
                </a>
                <a href="tel:+359877150945" 
                  className="p-2 text-white/60 hover:text-white transition-all duration-300">
                  <Phone size={18} />
                  <span className="sr-only">Phone</span>
                </a>
              </div>
            </SectionReveal>
          </div>
          
          {/* Brand name in minimal style */}
          <SectionReveal animation="fade-in" delay={200} className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-xl font-light tracking-[0.3em] text-white/80 uppercase">Stoyanov Guitars</h2>
            </div>
          </SectionReveal>
          
          {/* Links section in minimal design */}
          <SectionReveal animation="fade-in" delay={250} className="mb-8 text-center">
            <div className="flex justify-center space-x-12 mb-8">
              <Link 
                href="/privacy-policy" 
                className="text-white/40 hover:text-white transition-all duration-300 text-xs uppercase tracking-widest"
              >
                {t('privacyPolicy', 'footer')}
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-white/40 hover:text-white transition-all duration-300 text-xs uppercase tracking-widest"
              >
                {t('termsOfService', 'footer')}
              </Link>
            </div>
          </SectionReveal>
          
          {/* Copyright section in minimal style */}
          <SectionReveal animation="fade-in" delay={300} className="text-center">
            <p className="text-white/30 text-xs tracking-wider">{t('copyright', 'footer')}</p>
          </SectionReveal>
        </div>
      </div>
    </footer>
  )
}