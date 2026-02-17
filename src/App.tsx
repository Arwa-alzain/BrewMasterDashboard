// @ts-nocheck
import DashboardLayouts from "./layout/DashboardLayouts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
          path="/login"
        />
        <Route
          element={
            isLoggedIn ? (
              <DashboardLayouts setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/login" />
            )
          }
          path="/dashboard"
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
