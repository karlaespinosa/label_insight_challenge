import { useState } from "react";
import { usePhotos } from "./hooks/usePhotos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PhotoGrid from "./components/PhotoGrid";
import PhotoModal from "./components/PhotoModal";
import PhotoPageSkeleton from "./components/PhotoPageSkeleton";
import PhotoPageError from "./components/PhotoPageError";
import type { Photo } from "./types/photo";
import { DescriptionStorage } from "./helpers/descriptionStorage";

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [description, setDescription] = useState("");
  const { data, isLoading, error } = usePhotos();

  if (isLoading) {
    return <PhotoPageSkeleton />;
  }

  if (error) {
    return <PhotoPageError />;
  }

  const onPhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    const photoDescription = DescriptionStorage.getDescription(photo.id);
    setDescription(photoDescription);
  };

  const onDescriptionChange = (description: string) => {
    setDescription(description);
  };

  const onSaveDescription = () => {
    if (!selectedPhoto) return;

    DescriptionStorage.saveDescription(selectedPhoto.id, description);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto p-8">
        <Hero />
        <PhotoGrid photos={data ?? []} onPhotoClick={onPhotoClick} />
      </main>

      <Footer />

      <PhotoModal
        photo={selectedPhoto}
        description={description}
        onDescriptionChange={onDescriptionChange}
        onSave={onSaveDescription}
        onClose={() => {
          setSelectedPhoto(null);
          setDescription("");
        }}
      />
    </div>
  );
}

export default App;
