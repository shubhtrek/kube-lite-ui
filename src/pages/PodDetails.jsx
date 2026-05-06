import { useParams, useNavigate } from "react-router-dom";
import { pods } from "../data/pods";
import { useEffect, useState } from "react";

function PodDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [pod, setPod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundPod = pods.find((p) => p.name === name);
      setPod(foundPod);
      setLoading(false);
    }, 1000);
  }, [name]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-700 mb-3"></div>
        <p>Loading pod details...</p>
      </div>
    );
  }

  if (!pod) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
        <p className="text-xl font-semibold">Pod not found</p>
        <p className="text-sm mt-2">
          The requested pod does not exist
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold text-gray-800">
        Pod Details
      </h1>

      <div className="mt-6 bg-white shadow-md rounded-xl p-6 grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <p className="font-medium text-gray-800">{pod.name}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Namespace</p>
          <p className="font-medium text-gray-800">{pod.namespace}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Status</p>
          <p
            className={`font-medium ${
              pod.status === "Running"
                ? "text-green-600"
                : pod.status === "Pending"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {pod.status}
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white shadow-md rounded-xl p-4">
        <h2 className="font-semibold mb-3 text-gray-700">
          Logs
        </h2>

        <pre className="bg-black text-green-400 p-4 rounded-md text-sm overflow-auto">
{`[INFO] Starting container...
[INFO] Loading configuration...
[SUCCESS] Pod is running successfully.`}
        </pre>
      </div>
    </div>
  );
}

export default PodDetails;