'use client'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import { useState, useEffect } from 'react'

export default function Hero({id}: { id?: string }) {
    const { t } = useLanguage()
    const [mounted, setMounted] = useState(false)

    // Wait for component to mount for client-side animations
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section id={id} className="pt-24 py-16 relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto">
                    <SectionReveal 
                        animation="fade-in" 
                        className="transition-all duration-700"
                    >
                        <Image
                            src="/images/Stoyanov-logo-1.svg"
                            alt="Stoyanov Guitars Logo"
                            width={240}
                            height={60}
                            className={`mx-auto mb-24 invert opacity-90 ${mounted ? 'animate-pulse-subtle' : ''}`}
                            priority
                        />
                    </SectionReveal>
                    
                    <div className="max-w-2xl mx-auto relative">
                        <SectionReveal 
                            animation="fade-in" 
                            delay={200}
                        >
                            <p className={cn("text-2xl mb-12 font-light tracking-[0.4em] uppercase text-white/90 text-center")}>
                                {t('welcome', 'hero') as string}
                            </p>
                        </SectionReveal>
                        
                        <SectionReveal 
                            animation="fade-in" 
                            delay={400}
                        >
                            <p className={cn("text-sm mb-16 tracking-[0.2em] uppercase text-white/60 text-center leading-relaxed")}>
                                {t('madeby', 'hero') as string}
                            </p>
                        </SectionReveal>
                        
                        <div className="flex justify-center mt-12">
                            <button 
                                onClick={() => document.getElementById('guitars')?.scrollIntoView({behavior: 'smooth'})}
                                className="px-8 py-3 uppercase text-[10px] tracking-[0.3em] border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
                            >
                                {t('exploreGuitars', 'nav') || 'Explore Collection'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}