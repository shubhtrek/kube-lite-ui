import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  
  // Logic to determine the page title
  const getPageTitle = () => {
    if (location.pathname === "/") return "Cluster Overview";
    if (location.pathname.includes("/pod/")) return "Pod Details";
    return "Kubernetes Dashboard";
  };

  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-lg font-semibold text-gray-800">
        {getPageTitle()}
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded border border-green-200 font-medium">
          Cluster: minikube
        </span>
        <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm transition-colors">
          Theme
        </button>
      </div>
    </div>
  );
}

export default Navbar;