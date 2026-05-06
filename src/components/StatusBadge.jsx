function StatusBadge({ status }) {
  const styles =
    status === "Running"
      ? "bg-green-100 text-green-700"
      : status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${styles}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;