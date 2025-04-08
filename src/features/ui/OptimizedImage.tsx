'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '../../lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  blur?: boolean;
  fallbackSrc?: string;
  aspectRatio?: string;
  imageClassName?: string;
  containerClassName?: string;
}

/**
 * OptimizedImage component with:
 * - Progressive loading with blur effect
 * - Fallback image support
 * - Aspect ratio preservation
 * - Error handling
 * - Accessibility improvements
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  blur = true,
  fallbackSrc = '/images/placeholder.jpg',
  aspectRatio,
  priority = false,
  imageClassName,
  containerClassName,
  fill,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Reset states when src changes
  useEffect(() => {
    setImgSrc(src);
    setError(false);
    setIsLoading(true);
  }, [src]);

  return (
    <div
      className={cn(
        'overflow-hidden relative',
        isLoading && blur ? 'blur-[2px]' : 'blur-0',
        containerClassName
      )}
      style={
        aspectRatio
          ? {
              aspectRatio,
              width: '100%',
            }
          : undefined
      }
    >
      <Image
        src={error ? fallbackSrc : imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        fill={fill}
        className={cn(
          'transition-all duration-300',
          isLoading ? 'scale-110 opacity-70' : 'scale-100 opacity-100',
          imageClassName
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
}