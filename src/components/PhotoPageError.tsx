const PhotoPageError = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-lg border border-red-200 bg-red-50 p-6">
        <h2 className="text-lg font-semibold text-red-800">
          Unable to load photos
        </h2>

        <p className="mt-2 text-red-600">
          Something went wrong while fetching the photo gallery.
        </p>
      </div>
    </main>
  );
};

export default PhotoPageError;
