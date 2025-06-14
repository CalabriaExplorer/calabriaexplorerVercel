
import React from "react";
import PhotoCard from "./PhotoCard";
interface GalleryImage {
  src: string;
  alt: string;
}
interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  if (images.length < 4) {
    // Меньше 4 фото — стандартная адаптивная сетка
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
        {images.map((img, i) => (
          <PhotoCard
            key={img.src}
            src={img.src}
            alt={img.alt}
            figCaption={img.alt} // Для SEO-улучшения
            className={
              i === 0
                ? "sm:col-span-2 aspect-[3/2] max-h-[420px]"
                : "aspect-[5/4] max-h-[350px]"
            }
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    );
  }

  // 4+ фото, адаптивная сетка: 3 слева, 1 длинное справа (на мобильных все ниже друг друга)
  return (
    <div
      className="
        grid gap-4 md:gap-6 mb-10
        grid-cols-1 
        md:grid-cols-[minmax(200px,1fr)_minmax(350px,2fr)]
        md:grid-rows-3
      "
      style={{ minHeight: 0 }}
    >
      {/* Левая колонка для фото 2, 3, 4 */}
      <div className="flex flex-col gap-4 md:gap-6 md:row-span-3">
        {[1, 2, 3].map((i) => (
          <PhotoCard
            key={images[i].src}
            src={images[i].src}
            alt={images[i].alt}
            figCaption={images[i].alt}
            className="aspect-[5/4] max-h-[220px] md:max-h-none"
            loading="lazy"
          />
        ))}
      </div>
      {/* Правая колонка для длинного фото 1 */}
      <PhotoCard
        src={images[0].src}
        alt={images[0].alt}
        figCaption={images[0].alt}
        className="
          aspect-[3/2] md:row-span-3 md:aspect-[3/2] max-h-[420px] md:max-h-none
          order-first md:order-none
        "
        loading="eager"
      />
    </div>
  );
};

export default Gallery;
