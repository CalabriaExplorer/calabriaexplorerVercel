import React from "react";
import OptimizedImage from "./optimized-image";

interface PhotoCardProps {
  src: string;
  alt: string;
  figCaption?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

/**
 * Универсальная карточка для вывода фото, alt и подписи (для SEO).
 */
const PhotoCard: React.FC<PhotoCardProps> = ({
  src,
  alt,
  figCaption,
  className = "",
  width = 800,
  height = 600,
  loading = "lazy",
}) => (
  <figure
    className={
      "relative rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center hover:scale-105 active:scale-98 transition-transform duration-300 " +
      className
    }
    tabIndex={0}
    style={{ minHeight: 0 }}
  >
    <OptimizedImage
      src={src}
      alt={figCaption ? figCaption : alt}
      className="w-full h-full object-contain bg-white"
      width={width}
      height={height}
      loading={loading}
    />
    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 pointer-events-none">
      <span className="text-white text-xs font-semibold drop-shadow">
        {figCaption || alt}
      </span>
    </figcaption>
  </figure>
);

export default PhotoCard;
