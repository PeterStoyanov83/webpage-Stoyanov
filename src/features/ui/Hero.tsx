'use client'
import Image from 'next/image'
import { cn } from "../../lib/utils"
import { useLanguage } from '../shared/hooks/useLanguage'
import Section from './Section'
import { useState, useEffect } from 'react'

export default function Hero({id}: { id?: string }) {
    const { t } = useLanguage()
    const [mounted, setMounted] = useState(false)

    // Wait for component to mount for client-side animations
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section id={id} className="pt-24 py-16 relative min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
                    <Section 
                        animation="zoom-in" 
                        className="transition-all duration-700"
                    >
                        <Image
                            src="/images/Stoyanov2.svg"
                            alt="Stoyanov Guitars Logo"
                            width={600}
                            height={200}
                            className={`mx-auto mb-4 invert ${mounted ? 'animate-pulse-subtle' : ''}`}
                            priority
                        />
                    </Section>
                    
                    <Section 
                        animation="slide-up" 
                        delay={300}
                    >
                        <p className={cn("text-xl mb-10 font-semibold invert text-center", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]")}>
                            {t('welcome', 'hero') as string}
                        </p>
                    </Section>
                    
                    <Section 
                        animation="slide-up" 
                        delay={600}
                    >
                        <p className={cn("text-xl mb-8 font-semibold invert text-center", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]")}>
                            {t('madeby', 'hero') as string}
                        </p>
                    </Section>
                </div>
            </div>
        </section>
    )
}