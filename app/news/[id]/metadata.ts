import type { Metadata } from 'next';
import { newsItems } from '../../data/news';
 
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const newsItem = newsItems.find(item => item.id === params.id);
  
  if (!newsItem) {
    return {
      title: 'News Not Found | Stoyanov Guitars',
      description: 'The requested news article could not be found.',
    };
  }
  
  return {
    title: `${newsItem.title} | Stoyanov Guitars News`,
    description: newsItem.summary,
    openGraph: {
      title: newsItem.title,
      description: newsItem.summary,
      type: 'article',
      publishedTime: newsItem.date,
      authors: ['Stoyanov Guitars'],
      images: [newsItem.imageUrl],
    },
  };
}