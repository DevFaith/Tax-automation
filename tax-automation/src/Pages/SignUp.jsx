import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input Validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await signup(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to create an account.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-indigo-500 p-6">
      
      {/* Centered Welcome Text */}
      <h1 className="text-white text-2xl md:text-3xl italic font-semibold text-center mb-6">
        Welcome to Tax Automation
      </h1>

      {/* Mobile-Shaped Signup Box */}
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-sm sm:max-w-md h-[550px] flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Sign Up</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-teal-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>

        <p className="text-center mt-2">
          <span
            onClick={() => navigate("/reset-password")}
            className="text-teal-500 cursor-pointer hover:underline"
          >
            Forgot Password?
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
