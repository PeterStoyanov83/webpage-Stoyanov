'use client'

import { useLanguage } from '../shared/hooks/useLanguage'
import Section from './Section'

export default function Story({id}: { id?: string }) {
    const { t } = useLanguage()

    return (
        <section id={id} className="pt-24 py-16 relative text-white">
            <div className="container mx-auto px-4">
                <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-xl backdrop-blur-sm">
                    <Section animation="slide-up" className="mb-8">
                        <h2 className="text-3xl font-bold text-center">{t('title', 'story')}</h2>
                    </Section>
                    
                    <div className="max-w-3xl mx-auto text-center">
                        <Section animation="fade-in" delay={200}>
                            <p className="text-white font-bold mb-6 text-xl">
                                {t('p1', 'story')}
                            </p>
                        </Section>
                        
                        <Section animation="fade-in" delay={400}>
                            <p className="text-white font-bold text-xl">
                                {t('p2', 'story')}
                            </p>
                        </Section>
                        
                        <Section animation="slide-up" delay={600} className="mt-6">
                            <p className="text-white font-bold italic text-xl animate-pulse-subtle">
                                {t('quote', 'story')}
                            </p>
                        </Section>
                    </div>
                </div>
            </div>
        </section>
    )
}