'use client'

import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import BlurImage from './BlurImage'

export default function Story({id}: { id?: string }) {
    const { t } = useLanguage()

    return (
        <section id={id} className="pt-24 py-16 relative text-white">
            <div className="container mx-auto px-4">
                <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-guitar-gold/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
                    
                    <SectionReveal animation="slide-up" className="mb-10">
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl font-light text-center mb-3 tracking-wide">{t('title', 'story')}</h2>
                            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-guitar-gold to-transparent"></div>
                        </div>
                    </SectionReveal>
                    
                    <div className="max-w-3xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                            <div className="md:w-1/2 text-left">
                                <SectionReveal animation="fade-in" delay={200}>
                                    <p className="text-white/90 text-lg leading-relaxed">
                                        {t('p1', 'story')}
                                    </p>
                                </SectionReveal>
                            </div>
                            <div className="md:w-1/2">
                                <SectionReveal animation="fade-in" delay={300}>
                                    <div className="rounded-xl overflow-hidden">
                                        <BlurImage 
                                            src="/images/news/BMW-image1.jpg" 
                                            alt="Българска Музикална Работилница"
                                            width={800}
                                            height={600}
                                            className="object-contain w-full h-auto"
                                        />
                                    </div>
                                </SectionReveal>
                            </div>
                        </div>
                        
                        <SectionReveal animation="fade-in" delay={400} className="text-center">
                            <p className="text-white/90 text-lg leading-relaxed">
                                {t('p2', 'story')}
                            </p>
                        </SectionReveal>
                        
                        <SectionReveal animation="slide-up" delay={600} className="mt-10 mx-auto max-w-2xl">
                            <div className="relative py-8 px-6">
                                {/* Quote decorations */}
                                <span className="absolute top-0 left-0 text-6xl text-guitar-gold/30 font-serif">"</span>
                                <span className="absolute bottom-0 right-0 text-6xl text-guitar-gold/30 font-serif">"</span>
                                
                                <p className="text-guitar-gold font-serif italic text-xl leading-relaxed">
                                    {t('quote', 'story')}
                                </p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

