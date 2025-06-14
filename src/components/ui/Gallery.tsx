
import React, { useState } from "react";
import OptimizedImage from "./optimized-image";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={
              "relative transition-transform duration-300 group rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center focus:outline-none active:scale-95 " +
              (i === 0
                ? "sm:col-span-2 aspect-[3/2] max-h-[420px]"
                : "aspect-[5/4] max-h-[350px]")
            }
            onClick={() => setOpenIndex(i)}
            aria-label={img.alt}
            tabIndex={0}
          >
            <span className="block w-full h-full group-hover:scale-105 focus:scale-105 transition-transform duration-300">
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain bg-white"
                width={800}
                height={600}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </span>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 pointer-events-none">
              <span className="text-white text-xs font-semibold drop-shadow">{img.alt}</span>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogOverlay className="bg-black/80 transition-opacity duration-200 z-50" />
        {openIndex !== null && (
          <DialogContent className="sm:rounded-none bg-black/90 px-2 py-2 flex items-center justify-center z-[80] max-w-none w-full h-full outline-none cursor-zoom-out animate-[scale-in_0.2s_ease-out]">
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-4 right-4 z-50 bg-black/60 rounded-full p-2 text-white hover:bg-black/90 transition focus:outline-none"
              aria-label="Закрыть фото / Close photo"
              tabIndex={0}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl select-none cursor-zoom-out animate-scale-in"
                onClick={() => setOpenIndex(null)}
                style={{ userSelect: 'none' }}
                draggable={false}
              />
              <span className="mt-3 text-white text-base font-medium text-center backdrop-blur-sm bg-black/30 px-3 py-1 rounded max-w-[95vw]">{images[openIndex].alt}</span>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default Gallery;
