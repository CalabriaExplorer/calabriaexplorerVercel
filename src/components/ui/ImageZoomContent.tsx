
import React from "react";
import { DialogContent } from "@/components/ui/dialog";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ImageZoomContentProps {
  src: string;
  alt: string;
  imgClassName?: string;
  onClose: () => void;
}

// Вспомогательная компонента, поддерживающая pinch-to-zoom через react-medium-image-zoom
const ZoomableImage: React.FC<{ src: string; alt: string; imgClassName?: string }> = ({
  src,
  alt,
  imgClassName,
}) => (
  <Zoom zoomMargin={20}>
    <img
      src={src}
      alt={alt}
      className={`max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl select-none cursor-zoom-in animate-scale-in ${imgClassName || ""}`}
      style={{ userSelect: "none", display: "block", touchAction: "manipulation" }}
      draggable={false}
    />
  </Zoom>
);

const ImageZoomContent: React.FC<ImageZoomContentProps> = ({
  src,
  alt,
  imgClassName,
  onClose,
}) => (
  <DialogContent
    className={`
      bg-black/90 px-2 py-2 z-[80] max-w-none w-full h-full outline-none
      cursor-zoom-out animate-[scale-in_0.2s_ease-out] rounded-none
      overflow-auto flex flex-col items-center justify-start
    `}
    style={{ padding: 0 }}
  >
    {/* Pinch-to-zoom на мобильных и zoom по клику на десктопе */}
    <ZoomableImage src={src} alt={alt} imgClassName={imgClassName} />
    <span className="mt-3 mb-6 text-white text-base font-medium text-center backdrop-blur-sm bg-black/30 px-3 py-1 rounded max-w-[95vw] mx-auto">
      {alt}
    </span>
    {/* Кнопка закрытия — по-прежнему можно закрыть по иконке/крестику/фон */}
    <button
      className="absolute top-4 right-4 z-50 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Закрыть"
      type="button"
      onClick={onClose}
    >
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11l4.89 4.89-4.89 4.89a1 1 0 101.41 1.41l4.89-4.89 4.89 4.89a1 1 0 001.41-1.41l-4.89-4.89 4.89-4.89a1 1 0 000-1.41z" />
      </svg>
    </button>
  </DialogContent>
);

export default ImageZoomContent;

