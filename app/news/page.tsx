'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { useLanguage } from '../contexts/LanguageContext'
import SectionReveal from '../components/SectionReveal'
import { newsItems } from '../data/news'
import { ArrowRight, Search } from 'lucide-react'

export default function NewsPage() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  // Get all unique tags
  const allTags = [...new Set(newsItems.flatMap(item => item.tags))]
  
  // Sort news by date (newest first)
  const sortedNews = [...newsItems].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  // Filter news based on search term and selected tag
  const filteredNews = sortedNews.filter(item => {
    const title = language === 'bg' && item.titleBg ? item.titleBg : item.title
    const summary = language === 'bg' && item.summaryBg ? item.summaryBg : item.summary
    const content = language === 'bg' && item.contentBg ? item.contentBg : item.content
    
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Filter by tag
    const matchesTag = selectedTag === null || item.tags.includes(selectedTag)
    
    return matchesSearch && matchesTag
  })

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="bg-black/50 p-10 rounded-xl shadow-xl backdrop-blur-md border border-guitar-gold/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-guitar-gold/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <SectionReveal animation="slide-up" className="mb-10">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-light mb-3 tracking-wide text-white text-center">
                {t('news', 'nav') || 'News & Events'}
              </h1>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-guitar-gold to-transparent"></div>
            </div>
          </SectionReveal>
          
          {/* Search and filters */}
          <SectionReveal animation="fade-in" delay={200} className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Search bar */}
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder={t('searchNews', 'common') || "Search news..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-black/40 border border-guitar-gold/20 rounded-full text-white focus:outline-none focus:border-guitar-gold/50 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
              </div>
              
              {/* Tags filter */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    selectedTag === null 
                      ? 'bg-guitar-gold text-black font-medium' 
                      : 'bg-black/40 text-white/70 hover:bg-black/60 border border-guitar-gold/20'
                  }`}
                >
                  All
                </button>
                
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                      selectedTag === tag 
                        ? 'bg-guitar-gold text-black font-medium' 
                        : 'bg-black/40 text-white/70 hover:bg-black/60 border border-guitar-gold/20'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>
          
          {/* News grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <SectionReveal 
                  key={item.id}
                  animation="slide-up" 
                  delay={100 * index}
                  threshold={0.1}
                >
                  <Link href={`/news/${item.id}`} className="block group">
                    <div className="bg-black/60 rounded-xl overflow-hidden shadow-xl border border-guitar-gold/10 group-hover:border-guitar-gold/30 transition-all duration-500 h-full backdrop-blur-sm relative">
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-guitar-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                      
                      <div className="flex flex-col md:flex-row">
                        {/* Image section */}
                        <div className="relative md:w-2/5 h-48 md:h-full overflow-hidden">
                          {item.imageUrl ? (
                            <>
                              <Image 
                                src={item.imageUrl} 
                                alt={language === 'bg' && item.titleBg ? item.titleBg : item.title}
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 200px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                            </>
                          ) : (
                            <div className="w-full h-full bg-black/50 flex items-center justify-center">
                              <span className="text-white/50">No image</span>
                            </div>
                          )}
                          
                          {/* Date badge */}
                          <div className="absolute top-3 right-3 bg-black/60 px-3 py-1 rounded-full text-xs text-guitar-gold border border-guitar-gold/20 backdrop-blur-sm">
                            {format(new Date(item.date), 'dd.MM.yyyy')}
                          </div>
                        </div>
                        
                        {/* Content section */}
                        <div className="md:w-3/5 p-6 relative z-10">
                          <h3 className="text-xl font-medium mb-3 text-white group-hover:text-guitar-gold transition-colors duration-300">
                            {language === 'bg' && item.titleBg ? item.titleBg : item.title}
                          </h3>
                          <p className="text-white/80 group-hover:text-white text-sm transition-colors duration-300 line-clamp-3">
                            {language === 'bg' && item.summaryBg ? item.summaryBg : item.summary}
                          </p>
                          
                          <div className="mt-6 flex">
                            <div className="px-4 py-1.5 rounded-full text-sm text-guitar-gold group-hover:text-white transition-all duration-300 flex items-center">
                              <span>{t('readMore', 'common') || 'Read More'}</span>
                              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                          
                          {/* Tags */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <span 
                                key={tag} 
                                className={`text-xs px-2 py-1 rounded-full border transition-colors duration-300 ${
                                  selectedTag === tag
                                    ? 'bg-guitar-gold/20 text-white border-guitar-gold/30'
                                    : 'bg-black/40 text-white/70 border-guitar-gold/10'
                                }`}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <SectionReveal animation="fade-in" className="text-center py-16">
              <div className="bg-black/30 p-8 rounded-xl border border-guitar-gold/10 inline-block">
                <p className="text-xl text-white/80 mb-4">No news items found matching your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedTag(null)
                  }}
                  className="px-6 py-2 bg-black/50 text-guitar-gold rounded-full border border-guitar-gold/20 hover:bg-black/70 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </SectionReveal>
          )}
        </div>
      </div>
    </div>
  )
}