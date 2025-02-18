import React from "react";
import { useAuth } from "../context/AuthContext"; // assuming AuthContext is in the context folder

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Calls the logout function from AuthContext
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default LogoutButton;
