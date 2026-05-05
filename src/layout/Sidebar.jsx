function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-full p-6">
      <h2 className="text-2xl font-bold mb-10">KubeLite</h2>

      <ul className="space-y-3 text-sm">
        <li className="hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          Dashboard
        </li>
        <li className="hover:bg-gray-700 p-3 rounded-md cursor-pointer">
          Pods
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;