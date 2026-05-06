import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Pods", path: "/" }, // For now, both point to our main view
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-full p-6">
      <h2 className="text-2xl font-bold mb-10 text-blue-400">KubeLite</h2>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`block p-3 rounded-md transition-colors ${
                location.pathname === link.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;