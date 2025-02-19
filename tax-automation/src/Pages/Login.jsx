import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Input Validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to log in.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Sign up here
          </span>
        </p>
        <p className="text-center mt-4">
          <span
            onClick={() => navigate("/reset-password")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Forgot Password?
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
