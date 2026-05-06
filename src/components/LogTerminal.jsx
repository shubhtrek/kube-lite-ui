function LogTerminal({ podName }) {
  // We'll simulate different logs based on the pod name
  const getLogs = () => {
    if (podName.includes("nginx")) {
      return "[INFO]  Configuration complete. Listening on port 80\n[INFO]  GET / 200 OK\n[INFO]  GET /static/css/main.css 200 OK";
    }
    if (podName.includes("mongo")) {
      return "[ERROR] Connection failed at 10.244.1.5:27017\n[WARN]  Retrying connection in 5s...\n[ERROR] Network unreachable";
    }
    return "[INFO]  Starting container...\n[INFO]  Initializing system...\n[INFO]  Application ready.";
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        Pod Logs
      </h2>
      <div className="bg-gray-900 rounded-xl p-4 shadow-inner border border-gray-700">
        <div className="flex gap-2 mb-3 border-b border-gray-700 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <pre className="font-mono text-sm text-green-400 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {getLogs()}
        </pre>
      </div>
    </div>
  );
}

export default LogTerminal;