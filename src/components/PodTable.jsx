import { useNavigate } from "react-router-dom";

function PodTable({ pods }) {
  const navigate = useNavigate();

  return (
    <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden">
      <table className="w-full text-left">
        
        {/* Header */}
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="p-4 text-sm font-semibold text-gray-600">
              Status
            </th>
            <th className="p-4 text-sm font-semibold text-gray-600">
              Namespace
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {pods.length > 0 ? (
            pods.map((pod, index) => (
              <tr
                key={index}
                onClick={() => navigate(`/pod/${pod.name}`)}
                className="border-t hover:bg-gray-50 cursor-pointer transition duration-150"
              >
                <td className="p-4 text-gray-800 font-medium">
                  {pod.name}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pod.status === "Running"
                        ? "bg-green-100 text-green-700"
                        : pod.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {pod.status}
                  </span>
                </td>

                <td className="p-4 text-gray-700">
                  {pod.namespace}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-6 text-gray-500">
                No pods found
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default PodTable;