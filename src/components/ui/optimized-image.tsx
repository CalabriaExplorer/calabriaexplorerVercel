import React, { useState } from 'react';
import ImageZoomModal from "./ImageZoomModal";

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
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fixImagePath = (imageSrc: string) => {
    if (imageSrc.startsWith('//')) {
      return 'https:' + imageSrc;
    }
    return imageSrc;
  };
  const fixedSrc = fixImagePath(src);
  const fixedWebpSrc = webpSrc ? fixImagePath(webpSrc) : undefined;

  const handleImageError = () => {
    console.error('Image failed to load:', fixedSrc);
    setImageError(true);
  };
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs text-gray-500">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <ImageZoomModal src={fixedSrc} alt={alt} className={`relative ${className}`}>
      <div className={`relative ${className}`}>
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full animate-spin border-2 border-gray-400 border-t-transparent"></div>
          </div>
        )}

        <picture>
          {/* WebP source for browsers that support it */}
          {fixedWebpSrc && <source srcSet={fixedWebpSrc} type="image/webp" sizes={sizes} />}
          <img
            src={fixedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            sizes={sizes}
            className={`object-cover w-full h-full ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            decoding="async"
            style={{ display: 'block' }}
            draggable={false}
          />
        </picture>
      </div>
    </ImageZoomModal>
  );
};
export default OptimizedImage;
