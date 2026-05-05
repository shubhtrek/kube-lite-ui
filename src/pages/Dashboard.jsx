import { useState } from "react";
import PodTable from "../components/PodTable";
import { pods } from "../data/pods";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredPods = pods.filter((pod) => {
    const matchesSearch = pod.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || pod.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Pods
        </h1>
        <p className="text-gray-500 mt-1">
          Manage and monitor your Kubernetes pods
        </p>
      </div>

      {/* Search + Filter */}
      <div className="mt-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search pods..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 px-3 rounded w-64"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 px-3 rounded"
        >
          <option>All</option>
          <option>Running</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      {/* Table */}
      <PodTable pods={filteredPods} />
    </div>
  );
}

export default Dashboard;