
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
  if (images.length < 4) {
    // fallback на стандартную сетку
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
              <span className="text-white text-xs font-semibold drop-shadow">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Кастомная раскладка: фото 2,3,4 слева вертикально, фото 1 длинное справа (во всю высоту)
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 md:gap-6 mb-10 h-[720px] max-h-[80vw]">
      {/* Левая колонка: фото 2, 3, 4 (индексы 1, 2, 3) */}
      {[1, 2, 3].map((i) => (
        <div
          key={images[i].src}
          className="relative rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center hover:scale-105 active:scale-98 transition-transform duration-300 aspect-[5/4] max-h-[220px] row-span-1 col-span-1"
          tabIndex={0}
          style={{ minHeight: 0 }}
        >
          <OptimizedImage
            src={images[i].src}
            alt={images[i].alt}
            className="w-full h-full object-contain bg-white"
            width={800}
            height={600}
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 pointer-events-none">
            <span className="text-white text-xs font-semibold drop-shadow">
              {images[i].alt}
            </span>
          </div>
        </div>
      ))}
      {/* Правая колонка: фото 1 (индекс 0), на всю высоту */}
      <div
        className="relative rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center hover:scale-105 active:scale-98 transition-transform duration-300 aspect-[3/2] row-span-3 col-span-1"
        tabIndex={0}
        style={{ gridRow: "1 / span 3", gridColumn: "2 / 3", minHeight: 0 }}
      >
        <OptimizedImage
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-full object-contain bg-white"
          width={800}
          height={600}
          loading="eager"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 pointer-events-none">
          <span className="text-white text-xs font-semibold drop-shadow">
            {images[0].alt}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
