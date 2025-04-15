import type { Metadata } from 'next'

const defaultKeywords = [
  'custom guitars', 'handcrafted guitars', 'luthier', 'boutique guitars', 
  'guitar repair', 'guitar restoration', 'guitar upgrades', 'guitar modifications',
  'custom guitar builder', 'handmade guitars', 'premium guitars', 'boutique luthier',
  'artisan guitars', 'high-end guitars', 'bulgaria guitar maker', 'european guitars',
  'unique guitars', 'custom electric guitars', 'custom acoustic guitars', 'bespoke guitars'
]

const defaultImage = 'https://www.stoyanoffguitars.com/images/og-image.jpg' // Update with actual image path

// Viewport export for Next.js 15
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export function generateMetadata(
  title: string, 
  description: string, 
  keywords: string[] = [], 
  image?: string
): Metadata {
  const fullTitle = `${title} | Stoyanov Guitars - Boutique Handcrafted Guitars from Bulgaria`
  const fullDescription = `${description} | Stoyanov Guitars crafts high-end, unique custom guitars and offers expert repair services in Bulgaria. Each instrument represents exceptional craftsmanship and tonal perfection.`
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ')
  const ogImage = image || defaultImage

  return {
    metadataBase: new URL('https://www.stoyanoffguitars.com'), // Update with actual domain
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    
    // Standard SEO metadata
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'bg-BG': '/bg',
      },
    },
    
    // Open Graph metadata (for social sharing)
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'bg_BG',
      siteName: 'Stoyanov Guitars',
      url: 'https://www.stoyanoffguitars.com',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Stoyanov Guitars - Boutique Custom Guitars from Bulgaria',
        },
      ],
    },
    
    // Twitter metadata
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: '@stoyanoffguitars',
    },
    
    // Schema.org structured data
    other: {
      // Add Schema.org JSON-LD
      'application-name': 'Stoyanov Guitars',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Stoyanov Guitars',
      'format-detection': 'telephone=no',
      'msapplication-TileColor': '#000000',
      'msapplication-config': '/icons/browserconfig.xml',
      'theme-color': '#000000',
      
      // AEO Optimizations
      'google-site-verification': 'your-verification-code', // Add your verification code
      'og:phone_number': '+359877150945',
      'og:street-address': 'Sofia, Bulgaria', // Add actual address
      'og:locality': 'Sofia',
      'og:region': 'Sofia',
      'og:postal-code': '1000', // Add actual postal code
      'og:country-name': 'Bulgaria',
      
      // Structured data for rich snippets (as a stringified JSON object)
      'structured-data': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Stoyanov Guitars',
        url: 'https://www.stoyanoffguitars.com',
        logo: 'https://www.stoyanoffguitars.com/images/logo.png', // Update with actual logo path
        description: 'Boutique handcrafted custom guitars and repair services from Bulgaria',
        telephone: '+359877150945',
        email: 'peterstoyanov83@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sofia', // Add actual street address
          addressLocality: 'Sofia',
          addressRegion: 'Sofia',
          postalCode: '1000', // Add actual postal code
          addressCountry: 'BG'
        },
        sameAs: [
          'https://www.facebook.com/Stoyanoffguitars/',
          'https://www.instagram.com/stoyanovguitars/'
        ],
        offers: {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Custom Handcrafted Guitars',
            description: 'High-end bespoke guitars made to order with premium materials and exceptional craftsmanship.'
          }
        }
      })
    },
    
    // Robots directives
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    
    // Viewport settings removed - now handled by separate export
    
    // Icons
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/icons/apple-touch-icon.png',
      other: [
        {
          rel: 'apple-touch-icon',
          url: '/icons/apple-touch-icon.png',
        },
        {
          rel: 'mask-icon',
          url: '/icons/safari-pinned-tab.svg',
          color: '#000000',
        },
      ],
    },
    
    // Verification
    verification: {
      google: 'your-google-verification',
      yandex: 'your-yandex-verification',
      other: {
        msvalidate: 'your-bing-verification',
        yahoo: 'your-yahoo-verification',
      }
    },
    
    // App links
    appleWebApp: {
      title: 'Stoyanov Guitars',
      statusBarStyle: 'black-translucent',
      capable: true,
    },
  }
}

