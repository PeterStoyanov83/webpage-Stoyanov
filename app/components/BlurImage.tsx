'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

interface BlurImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  className?: string
}

export default function BlurImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  ...rest
}: BlurImageProps) {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative overflow-hidden h-full w-full">
      <Image
        src={src}
        alt={alt || t('image', 'common')}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0'}
          ${className}
        `}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        sizes={fill ? "100vw" : undefined}
        {...rest}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200/20 backdrop-blur-sm">
          <div className="animate-pulse flex flex-col items-center justify-center">
            <div className="rounded-full h-8 w-8 bg-gray-400/50 mb-2"></div>
            <div className="h-2 w-16 bg-gray-400/50 rounded"></div>
          </div>
        </div>
      )}
    </div>
  )
}