import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Premium from "./Premium"; // ✅ import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/premium" element={<Premium />} /> {/* ✅ add this */}
    </Routes>
  );
}

export default App;