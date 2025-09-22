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
    <section id={id} className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionReveal animation="fade-in" className="mb-20">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-light text-center mb-8 tracking-[0.3em] uppercase text-white/90">
              {t('news', 'nav') || 'News & Events'}
            </h2>
            <div className="h-[1px] w-10 bg-white/20"></div>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {recentNews.map((item, index) => (
            <SectionReveal 
              key={item.id}
              animation="fade-in" 
              delay={100 * index}
              threshold={0.1}
            >
              <Link 
                href={`/news/${item.id}`} 
                className="block group" 
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <article className="flex flex-col h-full">
                  {/* Image section */}
                  <div className="mb-6 overflow-hidden relative">
                    {item.imageUrl ? (
                      <Image 
                        src={item.imageUrl} 
                        alt={language === 'bg' && item.titleBg ? item.titleBg : item.title}
                        width={600}
                        height={450}
                        className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] bg-black/20 flex items-center justify-center">
                        <span className="text-white/30 text-xs uppercase tracking-widest">No image</span>
                      </div>
                    )}
                    
                    {/* Date badge */}
                    <div className="absolute bottom-4 left-4 text-xs text-white/60 uppercase tracking-wider">
                      {format(new Date(item.date), 'dd.MM.yyyy')}
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-base uppercase tracking-[0.15em] text-white/80 group-hover:text-white transition-colors duration-300">
                      {language === 'bg' && item.titleBg ? item.titleBg : item.title}
                    </h3>
                    
                    {/* Horizontal line separator */}
                    <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                    
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 line-clamp-3 leading-relaxed">
                      {language === 'bg' && item.summaryBg ? item.summaryBg : item.summary}
                    </p>
                    
                    <div className="mt-auto pt-4 flex justify-between items-center">
                      {/* Tags */}
                      <div className="flex space-x-2">
                        {item.tags.slice(0, 1).map(tag => (
                          <span 
                            key={tag} 
                            className="text-[10px] uppercase tracking-wider text-white/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="uppercase text-[10px] tracking-[0.2em] text-white/70 group-hover:text-white py-2 transition-colors duration-300 flex items-center">
                        <span>{t('readMore', 'common') || 'Read'}</span>
                        <ArrowRight className={`ml-1 w-3 h-3 transition-transform duration-500 ${
                          hoveredItem === item.id ? 'translate-x-1' : ''
                        }`} />
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
        
        <SectionReveal animation="fade-in" delay={300} className="mt-20">
          <div className="flex justify-center">
            <Link 
              href="/news" 
              className="px-8 py-3 uppercase text-[10px] tracking-[0.3em] border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              {t('viewAllNews', 'common') || 'View All News'}
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}