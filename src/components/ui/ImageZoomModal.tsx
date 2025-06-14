
import React, { useState } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
} from "@/components/ui/dialog";

interface ImageZoomModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  imgClassName?: string;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  src,
  alt,
  children,
  className,
  imgClassName,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className={className}
        style={{ cursor: "zoom-in", display: "block" }}
        onClick={() => setOpen(true)}
        tabIndex={0}
        aria-label={alt}
      >
        {children}
      </span>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="bg-black/80 z-50 transition-opacity duration-200" />
        {open && (
          <DialogContent
            className={`
              bg-black/90 px-2 py-2 z-[80] max-w-none w-full h-full outline-none
              cursor-zoom-out animate-[scale-in_0.2s_ease-out] rounded-none
              overflow-auto flex flex-col items-center justify-start
            `}
            // Обеспечиваем вертикальный скролл, если фото больше экрана
            style={{ padding: 0 }}
          >
            <img
              src={src}
              alt={alt}
              className={`max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl select-none cursor-zoom-out animate-scale-in ${imgClassName || ""}`}
              style={{ userSelect: "none", display: "block" }}
              draggable={false}
              onClick={() => setOpen(false)}
            />
            <span className="mt-3 mb-6 text-white text-base font-medium text-center backdrop-blur-sm bg-black/30 px-3 py-1 rounded max-w-[95vw] mx-auto">
              {alt}
            </span>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default ImageZoomModal;
