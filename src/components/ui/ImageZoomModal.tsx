
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
            className="bg-black/90 px-2 py-2 flex items-center justify-center z-[80] max-w-none w-full h-full outline-none cursor-zoom-out animate-[scale-in_0.2s_ease-out] rounded-none"
            style={{ padding: 0 }}
          >
            <img
              src={src}
              alt={alt}
              className={`max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl select-none cursor-zoom-out animate-scale-in ${imgClassName || ""}`}
              style={{ userSelect: "none" }}
              draggable={false}
              onClick={() => setOpen(false)}
            />
            <span className="absolute bottom-7 left-0 right-0 mt-3 text-white text-base font-medium text-center backdrop-blur-sm bg-black/30 px-3 py-1 rounded max-w-[95vw] mx-auto">
              {alt}
            </span>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default ImageZoomModal;
