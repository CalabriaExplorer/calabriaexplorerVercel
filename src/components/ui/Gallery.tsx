
import React from "react";
import OptimizedImage from "./optimized-image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`relative transition-transform duration-300 group rounded-lg shadow-lg overflow-hidden bg-white ${
            i === 0 ? "sm:col-span-2 h-64" : "h-56"
          }`}
        >
          <OptimizedImage
            src={img.src}
            alt={img.alt}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            width={700}
            height={500}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 pointer-events-none">
            <span className="text-white text-xs font-semibold drop-shadow">{img.alt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
