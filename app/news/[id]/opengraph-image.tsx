import { ImageResponse } from 'next/og';
import { newsItems } from '../../data/news';
 
export const runtime = 'edge';
 
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image({ params }: { params: { id: string } }) {
  const newsItem = newsItems.find(item => item.id === params.id);
  
  if (!newsItem) {
    // Fallback image for not found cases
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            fontSize: 48,
            color: 'white',
            background: 'black',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Stoyanov Guitars News
        </div>
      ),
      {
        ...size,
      }
    );
  }
  
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))',
          color: 'white',
          padding: 40,
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          {newsItem.title}
        </div>
        <div style={{ fontSize: 24, textAlign: 'center', color: '#d4af37' }}>
          Stoyanov Guitars
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}