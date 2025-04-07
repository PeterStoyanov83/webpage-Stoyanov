'use client'

import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'

export default function Story({id}: { id?: string }) {
    const { t } = useLanguage()

    return (
        <section id={id} className="pt-24 py-16 relative text-white">
            <div className="container mx-auto px-4">
                <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-xl backdrop-blur-sm">
                    <SectionReveal animation="slide-up" className="mb-8">
                        <h2 className="text-3xl font-bold text-center">{t('title', 'story')}</h2>
                    </SectionReveal>
                    
                    <div className="max-w-3xl mx-auto text-center">
                        <SectionReveal animation="fade-in" delay={200}>
                            <p className="text-white font-bold mb-6 text-xl">
                                {t('p1', 'story')}
                            </p>
                        </SectionReveal>
                        
                        <SectionReveal animation="fade-in" delay={400}>
                            <p className="text-white font-bold text-xl">
                                {t('p2', 'story')}
                            </p>
                        </SectionReveal>
                        
                        <SectionReveal animation="slide-up" delay={600} className="mt-6">
                            <p className="text-white font-bold italic text-xl animate-pulse-subtle">
                                {t('quote', 'story')}
                            </p>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

