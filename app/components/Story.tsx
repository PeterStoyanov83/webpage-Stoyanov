'use client'

import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import BlurImage from './BlurImage'

export default function Story({id}: { id?: string }) {
    const { t } = useLanguage()

    return (
        <section id={id} className="py-32 relative text-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <SectionReveal animation="fade-in" className="mb-20">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-light text-center mb-8 tracking-[0.3em] uppercase text-white/90">{t('title', 'story')}</h2>
                        <div className="h-[1px] w-10 bg-white/20"></div>
                    </div>
                </SectionReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                    <SectionReveal animation="fade-in" delay={100}>
                        <div className="aspect-[4/3] w-full">
                            <BlurImage 
                                src="/images/news/BMW-image1.jpg" 
                                alt="Българска Музикална Работилница"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SectionReveal>
                    
                    <SectionReveal animation="fade-in" delay={200} className="flex flex-col justify-center">
                        <p className="text-white/80 text-base leading-relaxed mb-6">
                            {t('p1', 'story')}
                        </p>
                        <p className="text-white/70 text-base leading-relaxed">
                            {t('p2', 'story')}
                        </p>
                    </SectionReveal>
                </div>
                
                <SectionReveal animation="fade-in" delay={300} className="max-w-3xl mx-auto">
                    <div className="relative py-12 px-4 md:px-0">
                        <div className="h-[1px] w-10 bg-white/20 mb-12 mx-auto"></div>
                        
                        <p className="text-white/70 text-sm tracking-wider uppercase text-center leading-relaxed">
                            {t('quote', 'story')}
                        </p>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}

