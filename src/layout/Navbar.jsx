import { useEffect, useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-slate-800 border-b px-6 py-4 flex justify-between items-center">

      <div>
        <h2 className="font-semibold text-gray-800 dark:text-white">
          Cluster Overview
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Real-time status of your containerized workloads
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
          Cluster: minikube
        </span>

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 bg-gray-200 dark:bg-slate-700 rounded text-sm text-black dark:text-white"
        >
          Toggle Theme
        </button>
      </div>

    </div>
  );
}

export default Navbar;