// src/Pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Assuming you have AuthContext
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { fetchTaxStatus } from "../services/taxService"; // Custom service to fetch data

const Dashboard = () => {
  const { currentUser } = useAuth(); 
  const navigate = useNavigate();
  const [taxStatus, setTaxStatus] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      // Fetch tax status based on the current user
      fetchTaxStatus(currentUser.uid)
        .then((status) => setTaxStatus(status))
        .catch((error) => console.error("Error fetching tax status:", error));
    }
  }, [currentUser, navigate]);

  if (!taxStatus) {
    return <div>Loading tax status...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Dashboard Header */}
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl">Welcome, {currentUser.email}</h1>
        <LogoutButton />
      </header>

      {/* Tax Status */}
      <div className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Tax Summary</h2>
          <ul className="mt-4">
            <li>Total Tax Owed: ${taxStatus.totalOwed}</li>
            <li>Tax Paid: ${taxStatus.taxPaid}</li>
            <li>Pending Tax: ${taxStatus.pendingTax}</li>
          </ul>
          <button className="mt-4 text-blue-500">View Detailed Report</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
