import type { Photo } from "../types/photo";

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

export class PhotosApi {
  static async getPhotos(): Promise<Photo[]> {
    const response = await fetch(PHOTOS_URL);

    if (!response.ok) throw new Error("Failed to fetch photos");

    const photos: Photo[] = await response.json();

    return photos.slice(0, 25);
  }
}
