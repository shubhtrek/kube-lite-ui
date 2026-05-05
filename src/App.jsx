import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import PodDetails from "./pages/PodDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pod/:name" element={<PodDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;