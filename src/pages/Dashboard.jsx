import { useState } from "react";
import PodTable from "../components/PodTable";
import { pods } from "../data/pods";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // 🔍 Filter logic
  const filteredPods = pods.filter((pod) => {
    const matchesSearch = pod.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || pod.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // 📊 Stats
  const total = pods.length;
  const running = pods.filter((p) => p.status === "Running").length;
  const pending = pods.filter((p) => p.status === "Pending").length;
  const failed = pods.filter((p) => p.status === "Failed").length;

  return (
    <div className="animate-fadeIn p-8">
      
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Pods Overview
        </h1>
        <p className="text-gray-500 mt-1">
          Monitor all your Kubernetes pods in one place
        </p>
      </div>

      {/* 📊 STATS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500">Total Pods</p>
          <p className="text-xl font-bold text-gray-800">{total}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500">Running</p>
          <p className="text-xl font-bold text-green-600">{running}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-xl font-bold text-yellow-600">{pending}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500">Failed</p>
          <p className="text-xl font-bold text-red-600">{failed}</p>
        </div>

      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search pods by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* FILTER */}
      <div className="flex gap-2 mb-6">
        {["All", "Running", "Pending", "Failed"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              statusFilter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <PodTable pods={filteredPods} />

    </div>
  );
}

export default Dashboard;