
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
          className={
            "relative transition-transform duration-300 group rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center hover:scale-105 active:scale-98 " +
            (i === 0
              ? "sm:col-span-2 aspect-[3/2] max-h-[420px]"
              : "aspect-[5/4] max-h-[350px]")
          }
          tabIndex={0}
        >
          <OptimizedImage
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-contain bg-white"
            width={800}
            height={600}
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
