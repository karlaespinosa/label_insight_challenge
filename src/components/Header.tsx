const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold">Photo Gallery</h1>
        <span className="text-sm text-gray-500">25 Photos</span>
      </div>
    </header>
  );
};

export default Header;
