import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 overflow-auto flex-1 text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </div>

    </div>
  );
}

export default Layout;