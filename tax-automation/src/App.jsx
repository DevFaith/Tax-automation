import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import LogOut from "./Pages/LogOut";
import { useAuth } from "./context/AuthContext"; // assuming AuthContext is in the context folder

function App() {
  const { user } = useAuth(); // Fetch user state from the context

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <SignUp />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
