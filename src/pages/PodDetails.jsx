import { useParams, useNavigate } from "react-router-dom";
import { pods } from "../data/pods";
import LogTerminal from "../components/LogTerminal";

function PodDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  // Find the specific pod data using the URL parameter
  const pod = pods.find((p) => p.name === name);

  // Safety check if the pod doesn't exist
  if (!pod) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">Pod not found</h2>
        <button 
          onClick={() => navigate("/")} 
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl">
      {/* 1. Header & Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate("/")}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          title="Back to Pods"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{pod.name}</h1>
          <p className="text-sm text-gray-500">Namespace: {pod.namespace}</p>
        </div>
        <div className="ml-auto">
          <span className={`px-4 py-1 rounded-full text-sm font-bold ${
            pod.status === "Running" ? "bg-green-100 text-green-700" : 
            pod.status === "Pending" ? "bg-yellow-100 text-yellow-700" : 
            "bg-red-100 text-red-700"
          }`}>
            {pod.status}
          </span>
        </div>
      </div>

      {/* 2. Metadata Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="border-r border-gray-100 last:border-0 pr-4">
          <p className="text-xs text-gray-400 uppercase font-semibold">Image</p>
          <p className="font-mono text-xs bg-gray-100 p-1 mt-1 rounded text-gray-700 break-all">
            {pod.image}
          </p>
        </div>
        <div className="border-r border-gray-100 last:border-0 px-4">
          <p className="text-xs text-gray-400 uppercase font-semibold">Node</p>
          <p className="font-medium text-gray-800">{pod.node}</p>
        </div>
        <div className="border-r border-gray-100 last:border-0 px-4">
          <p className="text-xs text-gray-400 uppercase font-semibold">IP Address</p>
          <p className="font-medium text-gray-800 font-mono text-sm">{pod.ip}</p>
        </div>
        <div className="px-4">
          <p className="text-xs text-gray-400 uppercase font-semibold">Start Time</p>
          <p className="font-medium text-gray-800 text-sm">
            {pod.startTime !== "N/A" ? new Date(pod.startTime).toLocaleString() : "N/A"}
          </p>
        </div>
      </div>

      {/* 3. Interactive Log Terminal */}
      <LogTerminal podName={pod.name} />
    </div>
  );
}

export default PodDetails;