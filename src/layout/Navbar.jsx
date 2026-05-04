function Navbar() {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-1g font-semibold text-gray-700">Dashboard</h1>

      <button className="bg-gray-200 hover:bg-grey-300 px-4 py-2 rounded">
        Toggle Theme
      </button>
    </div>
  );
}

export default Navbar;