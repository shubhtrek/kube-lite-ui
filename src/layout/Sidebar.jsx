function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-full p-4">
      <h2 className="text-2xl font-bold mb-8">KubeLite</h2>

      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-3 rounded cursor-pointer">
          Dashboard
        </li>
        <li className="hover:bg-gray-700 p-3 rounded cursor-pointer">
          Pods
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;