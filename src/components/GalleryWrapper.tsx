// First, create a new file: src/components/GalleryWrapper.tsx
import React, { useState } from "react";
import ImageLightbox from "@components/ImageLightbox";

const GalleryWrapper = ({ images, bucketUrl }: any) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  // Transform the image objects into full URLs
  const imageUrls =
    images?.map((img: { url: any }) => `${bucketUrl}/${img.url}`) || [];

  const handleImageClick = (index: any) => {
    setInitialIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 ">
      <div className="lg:col-span-2">
        <img
          src={imageUrls[0]}
          alt="Main gallery image"
          className="w-full h-96 object-cover rounded-lg cursor-pointer"
          onClick={() => handleImageClick(0)}
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-scroll">
        {imageUrls.map((url: any, index: any) => (
          <img
            key={index}
            src={url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-28 object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(index)}
            loading="lazy"
          />
        ))}
      </div>

      {isLightboxOpen && (
        <ImageLightbox
          images={imageUrls}
          initialIndex={initialIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default GalleryWrapper;
