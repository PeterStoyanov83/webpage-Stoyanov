import { notFound } from 'next/navigation'
import NewsDetail from '../../components/NewsDetail'
import { newsItems } from '../../data/news'

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }))
}

export default async function NewsItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const newsItem = newsItems.find(item => item.id === id)

  if (!newsItem) {
    notFound()
  }

  return <NewsDetail newsItem={newsItem} />
}