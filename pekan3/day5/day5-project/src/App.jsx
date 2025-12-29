import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/ImplementasiProtectedRoutes(RouteGuards)/context/AuthContext";
import PrivateRoute from "./component/ImplementasiProtectedRoutes(RouteGuards)/routers/PrivateRoute";
import Login from "./component/ImplementasiProtectedRoutes(RouteGuards)/pages/Login";
import Dashboard from "./component/ImplementasiProtectedRoutes(RouteGuards)/pages/Dashboard";
import Settings from "./component/ImplementasiProtectedRoutes(RouteGuards)/pages/Settings";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
