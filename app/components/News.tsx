'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import { newsItems } from '../data/news'
import { format } from 'date-fns'
import { ArrowRight } from 'lucide-react'

interface NewsProps {
  id?: string
}

export default function News({ id }: NewsProps) {
  const { t, language } = useLanguage()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  
  // Display only the most recent 3 news items
  const recentNews = [...newsItems].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3)

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-guitar-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
          
          <SectionReveal animation="slide-up" className="mb-12 relative z-10">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-light text-center mb-3 tracking-wide text-white">
                {t('news', 'nav') || 'News & Events'}
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-guitar-gold to-transparent"></div>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {recentNews.map((item, index) => (
              <SectionReveal 
                key={item.id}
                animation="slide-up" 
                delay={150 * index}
                threshold={0.1}
              >
                <Link 
                  href={`/news/${item.id}`} 
                  className="block group" 
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="bg-black/60 rounded-xl overflow-hidden shadow-xl border border-guitar-gold/10 group-hover:border-guitar-gold/30 transition-all duration-500 h-full backdrop-blur-sm relative">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-guitar-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={item.imageUrl} 
                        alt={language === 'bg' && item.titleBg ? item.titleBg : item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                      
                      {/* Date badge */}
                      <div className="absolute top-3 right-3 bg-black/60 px-3 py-1 rounded-full text-xs text-guitar-gold border border-guitar-gold/20 backdrop-blur-sm">
                        {format(new Date(item.date), 'dd.MM.yyyy')}
                      </div>
                    </div>
                    
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-medium mb-3 text-white group-hover:text-guitar-gold transition-colors duration-300">
                        {language === 'bg' && item.titleBg ? item.titleBg : item.title}
                      </h3>
                      <p className="text-white/80 group-hover:text-white text-sm transition-colors duration-300 line-clamp-3">
                        {language === 'bg' && item.summaryBg ? item.summaryBg : item.summary}
                      </p>
                      
                      <div className="mt-6 flex">
                        <div className="px-4 py-1.5 rounded-full text-sm text-guitar-gold group-hover:text-white transition-all duration-300 flex items-center">
                          <span>{t('readMore', 'common') || 'Read More'}</span>
                          <ArrowRight className={`ml-1 w-4 h-4 transition-transform duration-500 ${
                            hoveredItem === item.id ? 'translate-x-1' : ''
                          }`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="px-6 pb-4 flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs bg-black/40 text-white/70 px-2 py-1 rounded-full border border-guitar-gold/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          
          <SectionReveal animation="slide-up" delay={600} className="mt-10 text-center relative z-10">
            <Link 
              href="/news" 
              className="inline-flex items-center px-6 py-3 bg-black/40 text-guitar-gold rounded-full border border-guitar-gold/20 hover:bg-black/70 hover:border-guitar-gold/40 transition-all duration-300 group"
            >
              <span>{t('viewAllNews', 'common') || 'View All News'}</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}