'use client'

import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

interface ContactFormProps {
  id?: string
}

export default function ContactForm({ id }: ContactFormProps) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden max-w-2xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-guitar-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-guitar-gold/5 rounded-full blur-3xl"></div>
          
          <SectionReveal animation="slide-up" className="mb-10">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-light text-center mb-3 tracking-wide text-white">{t('contactUs', 'contactForm')}</h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-guitar-gold to-transparent"></div>
            </div>
          </SectionReveal>
          
          <div className="space-y-6 relative z-10">
        <SectionReveal animation="slide-up" delay={200}>
          <div className="flex items-center p-5 rounded-xl border border-guitar-gold/20 hover:border-guitar-gold/50 transition-all backdrop-blur-sm bg-black/30 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/40 text-[#1877F2] mr-5 shadow-[0_0_10px_rgba(24,119,242,0.2)]">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Facebook</h3>
              <a href="https://www.facebook.com/Stoyanoffguitars/" target="_blank" rel="noopener noreferrer" className="text-guitar-gold hover:underline">
                facebook.com/Stoyanoffguitars
              </a>
            </div>
          </div>
        </SectionReveal>
        
        <SectionReveal animation="slide-up" delay={300}>
          <div className="flex items-center p-5 rounded-xl border border-guitar-gold/20 hover:border-guitar-gold/50 transition-all backdrop-blur-sm bg-black/30 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/40 text-[#E4405F] mr-5 shadow-[0_0_10px_rgba(228,64,95,0.2)]">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.231.585 1.786 1.14.568.568.902 1.132 1.152 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.153 1.8c-.568.568-1.132.902-1.8 1.152-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.8-1.153 4.903 4.903 0 01-1.152-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.903 4.903 0 011.153-1.8A4.903 4.903 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Instagram</h3>
              <a href="https://www.instagram.com/stoyanovguitars/" target="_blank" rel="noopener noreferrer" className="text-guitar-gold hover:underline">
                instagram.com/stoyanovguitars
              </a>
            </div>
          </div>
        </SectionReveal>
        
        <SectionReveal animation="slide-up" delay={400}>
          <div className="flex items-center p-5 rounded-xl border border-guitar-gold/20 hover:border-guitar-gold/50 transition-all backdrop-blur-sm bg-black/30 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/40 text-[#D14836] mr-5 shadow-[0_0_10px_rgba(209,72,54,0.2)]">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <a href="mailto:peterstoyanov83@gmail.com" className="text-guitar-gold hover:underline">
                peterstoyanov83@gmail.com
              </a>
            </div>
          </div>
        </SectionReveal>
        
        <SectionReveal animation="slide-up" delay={500}>
          <div className="flex items-center p-5 rounded-xl border border-guitar-gold/20 hover:border-guitar-gold/50 transition-all backdrop-blur-sm bg-black/30 transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/40 text-[#25D366] mr-5 shadow-[0_0_10px_rgba(37,211,102,0.2)]">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Phone</h3>
              <a href="tel:+359877150945" className="text-guitar-gold hover:underline block">
                +359 877 15 09 45
              </a>
              <span className="text-sm text-white/70">Available on Viber, Telegram, and WhatsApp</span>
            </div>
          </div>
        </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}