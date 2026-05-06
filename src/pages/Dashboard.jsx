import { useState } from "react";
import PodTable from "../components/PodTable";
import { pods } from "../data/pods";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  // Calculate dynamic stats
  const totalPods = pods.length;
  const runningPods = pods.filter(p => p.status === "Running").length;
  const failedPods = pods.filter(p => p.status === "Failed").length;

  const filteredPods = pods.filter((pod) => {
    const matchesSearch = pod.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All" || pod.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Cluster Overview</h1>
        <p className="text-gray-500 mt-1">Real-time status of your containerized workloads</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 font-medium">Total Pods</p>
          <p className="text-2xl font-bold text-gray-800">{totalPods}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-green-500">
          <p className="text-sm text-gray-500 font-medium">Healthy</p>
          <p className="text-2xl font-bold text-green-600">{runningPods}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-red-500">
          <p className="text-sm text-gray-500 font-medium">Failed</p>
          <p className="text-2xl font-bold text-red-600">{failedPods}</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search pods..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 pl-4 rounded-lg w-72 transition-all shadow-sm"
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 px-3 rounded-lg bg-white shadow-sm transition-all"
        >
          <option>All</option>
          <option>Running</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      <PodTable pods={filteredPods} />
    </div>
  );
}

export default Dashboard;