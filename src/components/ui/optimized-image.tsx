
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  webpSrc?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  webpSrc,
  width,
  height,
  loading = 'lazy',
  sizes
}) => {
  // Generate WebP source if not provided (assuming we have WebP versions)
  const webpSource = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpSource} type="image/webp" sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
      />
    </picture>
  );
};

export default OptimizedImage;
