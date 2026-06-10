/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import type { Photo } from "../types/photo";

interface DescriptionModeProps {
  description: string | null;
  onEdit: () => void;
}

const DescriptionMode = ({ description, onEdit }: DescriptionModeProps) => {
  if (!description) {
    return (
      <button
        onClick={onEdit}
        className="
          w-full
          rounded-lg
          bg-black
          px-4
          py-4
          text-white
          transition
          hover:bg-gray-800
          cursor-pointer
        "
      >
        Add Description
      </button>
    );
  }

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3 className="mb-2 text-sm font-medium text-gray-900">Description</h3>

        <p className="text-gray-600">{description}</p>
      </div>

      <button
        onClick={onEdit}
        className="
          mt-4
          w-full
          rounded-lg
          bg-black
          px-4
          py-4
          text-white
          transition
          hover:bg-gray-800
          cursor-pointer
        "
      >
        Edit Description
      </button>
    </>
  );
};

interface EditingModeProps {
  description: string | null;
  onChange: (value: string) => void;
  onSave: () => void;
}

const EditingMode = ({ description, onChange, onSave }: EditingModeProps) => {
  return (
    <>
      <textarea
        value={description ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a description..."
        className="
          min-h-45
          w-full
          rounded-lg
          border
          border-gray-200
          p-4
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-gray-300
        "
      />

      <button
        onClick={onSave}
        className="
          mt-4
          w-full
          rounded-lg
          bg-black
          px-4
          py-4
          text-white
          transition
          hover:bg-gray-800
          cursor-pointer
        "
      >
        Save Description
      </button>
    </>
  );
};

interface Props {
  photo: Photo | null;
  description: string | null;
  onClose: () => void;
  onDescriptionChange: (description: string) => void;
  onSave: () => void;
}

const PhotoModal = ({
  photo,
  description,
  onDescriptionChange,
  onSave,
  onClose,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [photo?.id]);

  if (!photo) return null;

  const handleSave = () => {
    onSave();
    setIsEditing(false);
  };

  const onEdit = () => setIsEditing(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-8">
      <div
        className="
          flex
          flex-col
          md:flex-row
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          rounded-xl
          bg-white
          shadow-xl
        "
      >
        <div
          className="
            relative
            h-75
            sm:h-100
            md:flex-1
            md:min-h-150
          "
        >
          {!isImageLoaded && (
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                animate-pulse
                bg-gray-200
              "
            >
              <span className="text-gray-500">Loading image...</span>
            </div>
          )}

          <img
            className={`
              h-full
              w-full
              object-cover
              transition-opacity
              duration-300
              ${isImageLoaded ? "opacity-100" : "opacity-0"}
            `}
            src={photo.url}
            alt={photo.title}
            onLoad={() => setIsImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x600?text=No+Image";

              setIsImageLoaded(true);
            }}
          />
        </div>

        <div
          className="
            w-full
            md:w-100
            shrink-0
            p-5
            md:p-8
          "
        >
          <button
            onClick={() => {
              onClose();
              setIsEditing(false);
            }}
            className="mb-8 ml-auto block text-2xl text-gray-400 hover:text-black cursor-pointer"
          >
            ×
          </button>

          <h2 className="text-2xl md:text-3xl font-bold">{photo.title}</h2>

          <div className="mt-10">
            {!isEditing ? (
              <DescriptionMode description={description} onEdit={onEdit} />
            ) : (
              <EditingMode
                description={description}
                onChange={onDescriptionChange}
                onSave={handleSave}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
