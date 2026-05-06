export const pods = [
  {
    name: "nginx-pod",
    status: "Running",
    namespace: "default",
    image: "nginx:latest",
    node: "minikube-m01",
    ip: "10.244.0.12",
    startTime: "2026-05-06T10:00:00Z"
  },
  {
    name: "redis-pod",
    status: "Pending",
    namespace: "cache",
    image: "redis:6.2",
    node: "minikube-m01",
    ip: "Pending",
    startTime: "N/A"
  },
  {
    name: "mongo-pod",
    status: "Failed",
    namespace: "database",
    image: "mongo:4.4",
    node: "minikube-m02",
    ip: "10.244.1.5",
    startTime: "2026-05-06T09:30:00Z"
  },
];