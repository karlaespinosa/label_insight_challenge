import { useState } from "react";
import type { Photo } from "../types/photo";

interface Props {
  photo: Photo;
  onClick: () => void;
}

const PhotoCard = ({ photo, onClick }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <button
      className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {!isImageLoaded && (
        <div
          className="
            absolute inset-0
            animate-pulse
            bg-gray-200
          "
        />
      )}

      <img
        className={`
          h-full
          w-full
          object-cover
          transition-all
          duration-300
          group-hover:scale-105
          ${isImageLoaded ? "opacity-100" : "opacity-0"}
        `}
        src={photo.thumbnailUrl}
        alt={photo.title}
        onLoad={() => setIsImageLoaded(true)}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/150x150?text=No+Image";
          setIsImageLoaded(true);
        }}
      />

      <div
        className="
          absolute inset-0
          flex items-center justify-center
          bg-black/60
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        <span className="text-sm font-medium text-white">
          Click to see details
        </span>
      </div>
    </button>
  );
};

export default PhotoCard;
