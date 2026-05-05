import { useParams } from "react-router-dom";

function PodDetails() {
  const { name } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Pod Details
      </h1>

      <p className="mt-4 text-gray-600">
        Pod Name: <span className="font-semibold">{name}</span>
      </p>

      <div className="mt-6 bg-white shadow rounded-lg p-4">
        <h2 className="font-semibold mb-2">Logs</h2>
        <pre className="bg-black text-green-400 p-3 rounded text-sm">
{`Starting container...
Loading config...
Pod running successfully.`}
        </pre>
      </div>
    </div>
  );
}

export default PodDetails;