'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative text-white py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-guitar-gold/30 to-transparent"></div>
      
      {/* Guitar string decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-[1px] h-full"
            style={{
              left: `${25 + (i * 25)}%`,
              backgroundColor: '#D4AF37',
              opacity: 0.5,
              boxShadow: '0 0 8px rgba(212, 175, 55, 0.5)'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top section with social links */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <SectionReveal animation="fade-in" delay={100} className="flex flex-col items-center">
              <div className="mb-2 text-guitar-gold font-light uppercase tracking-widest text-sm">Social</div>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/Stoyanoffguitars/" target="_blank" rel="noopener noreferrer" 
                  className="p-2 text-white/80 hover:text-[#1877F2] transition-all duration-300 hover:scale-110 transform">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/stoyanovguitars/" target="_blank" rel="noopener noreferrer" 
                  className="p-2 text-white/80 hover:text-[#E4405F] transition-all duration-300 hover:scale-110 transform">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </SectionReveal>
            
            <SectionReveal animation="fade-in" delay={200} className="flex flex-col items-center">
              <div className="mb-2 text-guitar-gold font-light uppercase tracking-widest text-sm">Contact</div>
              <div className="flex space-x-6">
                <a href="mailto:peterstoyanov83@gmail.com" 
                  className="p-2 text-white/80 hover:text-[#D14836] transition-all duration-300 hover:scale-110 transform">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
                <a href="tel:+359877150945" 
                  className="p-2 text-white/80 hover:text-[#25D366] transition-all duration-300 hover:scale-110 transform">
                  <Phone size={20} />
                  <span className="sr-only">Phone</span>
                </a>
              </div>
            </SectionReveal>
          </div>
          
          {/* Center section with logo or brand */}
          <SectionReveal animation="fade-in" delay={150} className="text-center mb-8">
            <div className="inline-block relative">
              <h2 className="text-2xl font-light tracking-widest text-white/90 mb-2">STOYANOV GUITARS</h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-guitar-gold/60 to-transparent"></div>
            </div>
          </SectionReveal>
          
          {/* Copyright section */}
          <SectionReveal animation="fade-in" delay={250} className="text-center">
            <p className="text-white/70 font-light">{t('copyright', 'footer')}</p>
          </SectionReveal>
          
          {/* Links section */}
          <SectionReveal animation="slide-up" delay={300} className="mt-6 text-center">
            <div className="flex justify-center space-x-8">
              <Link 
                href="/privacy-policy" 
                className="text-white/50 hover:text-guitar-gold transition-all duration-300 text-sm font-light tracking-wide"
              >
                {t('privacyPolicy', 'footer')}
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-white/50 hover:text-guitar-gold transition-all duration-300 text-sm font-light tracking-wide"
              >
                {t('termsOfService', 'footer')}
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </footer>
  )
}