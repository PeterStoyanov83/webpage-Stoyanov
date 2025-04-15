import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import NewsDetail from '../../components/NewsDetail'
import { newsItems } from '../../data/news'
import { generateMetadata as createMetadata } from '../../lib/metadata'

// Generate static params at build time
export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }))
}

// Generate metadata for each news page
export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const newsItem = newsItems.find(item => item.id === params.id)
  
  if (!newsItem) {
    return createMetadata('News Not Found', 'The requested news article could not be found.')
  }
  
  return createMetadata(
    newsItem.title,
    newsItem.summary,
    [...newsItem.tags, 'news', 'guitar news', 'luthier news'],
    newsItem.imageUrl
  )
}

export default function NewsItemPage({ params }: { params: any }) {
  const newsItem = newsItems.find(item => item.id === params.id)
  
  if (!newsItem) {
    notFound()
  }
  
  return <NewsDetail newsItem={newsItem} />
}