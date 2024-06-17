import { Route, Routes } from "react-router-dom";
import Dashboard from "modules/dashboard";
import Dashboard2 from "modules/dashboard2";
import Login from "modules/auth/login";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/2"
        element={
          <ProtectedRoute>
            <Dashboard2 />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
