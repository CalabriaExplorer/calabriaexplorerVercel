
import React from "react";
import { DialogContent } from "@/components/ui/dialog";

interface ImageZoomContentProps {
  src: string;
  alt: string;
  imgClassName?: string;
  onClose: () => void;
}

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
    <img
      src={src}
      alt={alt}
      className={`max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl select-none cursor-zoom-out animate-scale-in ${imgClassName || ""}`}
      style={{ userSelect: "none", display: "block" }}
      draggable={false}
      onClick={onClose}
    />
    <span className="mt-3 mb-6 text-white text-base font-medium text-center backdrop-blur-sm bg-black/30 px-3 py-1 rounded max-w-[95vw] mx-auto">
      {alt}
    </span>
  </DialogContent>
);

export default ImageZoomContent;
