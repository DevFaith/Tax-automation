import React from "react";
import { useAuth } from "../context/AuthContext"; // assuming AuthContext is in the context folder
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // Calls the logout function from AuthContext
      navigate("/"); // Redirect to home or login page after logout
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
