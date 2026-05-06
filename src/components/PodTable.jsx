import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function PodTable({ pods }) {
  const navigate = useNavigate();

  return (
    <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
      <table className="w-full text-left border-collapse">
        
        {/* Header */}
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Name
            </th>
            <th className="p-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Status
            </th>
            <th className="p-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
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
                className="border-b last:border-none hover:bg-gray-50 cursor-pointer transition-all duration-150"
              >
                <td className="p-4 text-gray-800 font-medium">
                  {pod.name}
                </td>

                <td className="p-4">
                  <StatusBadge status={pod.status} />
                </td>

                <td className="p-4 text-gray-600">
                  {pod.namespace}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-12 text-center">
                <div className="flex flex-col items-center text-gray-500">
                  <p className="text-lg font-medium">No pods found</p>
                  <p className="text-sm mt-1">
                    Try adjusting your search or filter
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default PodTable;