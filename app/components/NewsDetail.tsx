'use client'

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from './SectionReveal'
import { ArrowLeft } from 'lucide-react'
import { NewsItem } from '../data/news'

interface NewsDetailProps {
  newsItem: NewsItem
}

export default function NewsDetail({ newsItem }: NewsDetailProps) {
  const { language, t } = useLanguage()
  
  const title = language === 'bg' && newsItem.titleBg ? newsItem.titleBg : newsItem.title
  const content = language === 'bg' && newsItem.contentBg ? newsItem.contentBg : newsItem.content
  const backToNewsText = t('backToNews', 'common') || (language === 'bg' ? 'Обратно към Новини' : 'Back to News')

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        
        <SectionReveal animation="slide-up" className="relative z-10">
          <Link 
            href="/news" 
            className="inline-flex items-center mb-8 px-5 py-2 bg-black/40 text-guitar-gold rounded-full hover:bg-black/70 transition-all duration-300 transform hover:-translate-x-2 border border-guitar-gold/20 hover:border-guitar-gold/40 shadow-lg"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            <span>{backToNewsText}</span>
          </Link>
        </SectionReveal>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionReveal animation="slide-up" delay={200}>
            <div className="mb-8">
              <h1 className="text-4xl font-light tracking-wide text-white mb-4">{title}</h1>
              <div className="flex items-center space-x-4 text-white/70 text-sm mb-6">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span>{format(new Date(newsItem.date), 'MMMM dd, yyyy')}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {newsItem.tags.map(tag => (
                      <span key={tag} className="text-xs bg-black/40 text-white/70 px-2 py-1 rounded-full border border-guitar-gold/10">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
          
          <SectionReveal animation="fade-in" delay={300}>
            <div className="flex flex-col lg:flex-row gap-8 mb-10">
              {/* Image section */}
              {newsItem.imageUrl && (
                <div className="lg:w-2/5 flex-shrink-0">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl border border-guitar-gold/10">
                    <Image 
                      src={newsItem.imageUrl} 
                      alt={title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>
              )}
              
              {/* Content section */}
              <div className={`${newsItem.imageUrl ? 'lg:w-3/5' : 'w-full'} prose prose-lg text-white/90`}>
                {content.split('\n').map((paragraph, index) => (
                  <p key={index} className={`mb-6 ${index === 0 ? 'text-xl font-medium' : ''}`}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  )
}