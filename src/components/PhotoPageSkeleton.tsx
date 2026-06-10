const PhotoPageSkeleton = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12">
        <div className="h-12 w-80 animate-pulse rounded bg-gray-200" />

        <div className="mt-4 h-6 w-120 animate-pulse rounded bg-gray-100" />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="
              aspect-square
              animate-pulse
              rounded-lg
              bg-gray-200
            "
          />
        ))}
      </div>
    </main>
  );
};

export default PhotoPageSkeleton;
