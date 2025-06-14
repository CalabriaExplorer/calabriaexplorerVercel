import React, { useState } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
} from "@/components/ui/dialog";
import ImageZoomContent from "./ImageZoomContent";

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
  const [open, setOpen] = React.useState(false);

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
          <ImageZoomContent
            src={src}
            alt={alt}
            imgClassName={imgClassName}
            onClose={() => setOpen(false)}
          />
        )}
      </Dialog>
    </>
  );
};

export default ImageZoomModal;
