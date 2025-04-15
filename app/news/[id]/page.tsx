'use client'

import { useParams, notFound } from 'next/navigation'
import NewsDetail from '../../components/NewsDetail'
import { newsItems } from '../../data/news'

export default function NewsItemPage() {
  // Use the useParams hook in a client component
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id?.toString()
  
  const newsItem = newsItems.find(item => item.id === id)
  
  if (!newsItem) {
    notFound()
  }
  
  return <NewsDetail newsItem={newsItem} />
}