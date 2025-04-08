import type { Metadata } from 'next'

export function generateMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | Stoyanoff Guitars`,
    description,
    openGraph: {
      title: `${title} | Stoyanoff Guitars`,
      description,
      type: 'website',
      locale: 'en_US',
      siteName: 'Stoyanoff Guitars',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Stoyanoff Guitars`,
      description,
    },
  }
}