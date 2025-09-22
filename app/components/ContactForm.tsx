'use client'

import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

interface ContactFormProps {
  id?: string
}

export default function ContactForm({ id }: ContactFormProps) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionReveal animation="fade-in" className="mb-20">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-light text-center mb-8 tracking-[0.3em] uppercase text-white/90">{t('contactUs', 'contactForm')}</h2>
            <div className="h-[1px] w-10 bg-white/20"></div>
          </div>
        </SectionReveal>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <SectionReveal animation="fade-in" delay={100} className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Facebook</h3>
                <a href="https://www.facebook.com/Stoyanoffguitars/" target="_blank" rel="noopener noreferrer" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-300">
                  facebook.com/Stoyanoffguitars
                </a>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Instagram</h3>
                <a href="https://www.instagram.com/stoyanovguitars/" target="_blank" rel="noopener noreferrer" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-300">
                  instagram.com/stoyanovguitars
                </a>
              </div>
            </SectionReveal>
            
            <SectionReveal animation="fade-in" delay={200} className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Email</h3>
                <a href="mailto:peterstoyanov83@gmail.com" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-300">
                  peterstoyanov83@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Phone</h3>
                <a href="tel:+359877150945" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-300">
                  +359 877 15 09 45
                </a>
                <p className="mt-2 text-xs tracking-wide text-white/40">
                  Available on Viber, Telegram, and WhatsApp
                </p>
              </div>
            </SectionReveal>
          </div>
          
          <SectionReveal animation="fade-in" delay={300} className="mt-16">
            <div className="flex justify-center">
              <a href="mailto:peterstoyanov83@gmail.com" className="px-8 py-3 uppercase text-[10px] tracking-[0.3em] border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300">
                {t('sendMessage', 'contactForm') || 'Send Message'}
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}