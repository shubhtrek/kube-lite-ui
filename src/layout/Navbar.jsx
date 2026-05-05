function Navbar() {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">
        Kubernetes Dashboard
      </h1>

      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm">
        Toggle Theme
      </button>
    </div>
  );
}

export default Navbar;