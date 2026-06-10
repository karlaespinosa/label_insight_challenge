import type { Photo } from "../types/photo";
import PhotoCard from "./PhotoCard";

interface Props {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const PhotoGrid = ({ photos, onPhotoClick }: Props) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4  
        xl:grid-cols-5
        gap-4
      "
    >
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onClick={() => onPhotoClick(photo)}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
