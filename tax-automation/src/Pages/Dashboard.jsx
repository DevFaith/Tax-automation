// src/Pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl">Welcome, [Business Name]</h1>
        <button className="bg-red-500 p-2 rounded" onClick={() => {/* Add logout functionality */}}>
          Logout
        </button>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tax Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Tax Summary</h2>
            <ul className="mt-4">
              <li>Total Tax Owed: $500</li>
              <li>Tax Paid: $300</li>
              <li>Pending Tax: $200</li>
            </ul>
            <button className="mt-4 text-blue-500">View Detailed Report</button>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Upcoming Deadlines</h2>
            <ul className="mt-4">
              <li>Quarterly Tax Filing - Due: March 31</li>
              <li>Annual Tax Filing - Due: December 15</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><button className="text-blue-500">Calculate Taxes</button></li>
              <li><button className="text-blue-500">Generate Report</button></li>
              <li><button className="text-blue-500">Track Expenses</button></li>
              <li><button className="text-blue-500">Generate Invoice</button></li>
            </ul>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <table className="mt-4 w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Feb 15, 2025</td>
                <td className="border px-4 py-2">Business Revenue</td>
                <td className="border px-4 py-2">$1,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Feb 14, 2025</td>
                <td className="border px-4 py-2">Office Supplies</td>
                <td className="border px-4 py-2">-$100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
