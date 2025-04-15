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
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>
            
            {/* Animated strings */}
            <div className="absolute inset-0 z-0 opacity-20">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-[1px] h-[60vh] bg-guitar-gold"
                        style={{
                            left: `${10 + (i * 18)}%`,
                            top: '10%',
                            transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
                            opacity: 0.6 + (i * 0.05),
                            boxShadow: '0 0 15px rgba(212, 175, 55, 0.7)'
                        }}
                    ></div>
                ))}
            </div>
            
            <div className="container mx-auto px-4 z-10 relative">
                <div className="bg-black/40 p-10 rounded-xl backdrop-blur-md border border-guitar-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <SectionReveal 
                        animation="bounce" 
                        className="transition-all duration-700"
                    >
                        <Image
                            src="/images/Stoyanov2.svg"
                            alt="Stoyanov Guitars Logo"
                            width={600}
                            height={200}
                            className={`mx-auto mb-8 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${mounted ? 'animate-pulse-subtle' : ''}`}
                            priority
                        />
                    </SectionReveal>
                    
                    <div className="max-w-3xl mx-auto relative">
                        <div className="absolute h-[1px] w-1/3 bg-gradient-to-r from-transparent via-guitar-gold to-transparent top-0 left-1/3"></div>
                        
                        <SectionReveal 
                            animation="slide-up" 
                            delay={300}
                        >
                            <p className={cn("text-2xl my-10 font-light tracking-wide text-white text-center", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]")}>
                                {t('welcome', 'hero') as string}
                            </p>
                        </SectionReveal>
                        
                        <SectionReveal 
                            animation="slide-up" 
                            delay={600}
                        >
                            <p className={cn("text-xl mb-8 font-serif italic text-guitar-gold text-center", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]")}>
                                {t('madeby', 'hero') as string}
                            </p>
                        </SectionReveal>
                        
                        <div className="absolute h-[1px] w-1/3 bg-gradient-to-r from-transparent via-guitar-gold to-transparent bottom-0 left-1/3"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}