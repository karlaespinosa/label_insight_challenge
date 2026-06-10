import { useQuery } from "@tanstack/react-query";
import { PhotosApi } from "../services/photosApi";

const PHOTOS_KEY = "photos";

export const usePhotos = () => {
  return useQuery({
    queryKey: [PHOTOS_KEY],
    queryFn: PhotosApi.getPhotos,
  });
};
