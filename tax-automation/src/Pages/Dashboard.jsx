import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('monthly');

  // Sample data
  const data = {
    monthly: [
      { name: 'Jan', income: 4000, expenses: 2400, tax: 500 },
      { name: 'Feb', income: 3000, expenses: 1398, tax: 400 },
      { name: 'Mar', income: 5000, expenses: 2800, tax: 700 },
    ],
    quarterly: [
      { name: 'Q1', income: 12000, expenses: 6600, tax: 1600 },
      { name: 'Q2', income: 15000, expenses: 7400, tax: 2000 },
    ],
    yearly: [
      { name: '2024', income: 60000, expenses: 30000, tax: 10000 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl">Welcome, [Business Name]</h1>
        <button className="bg-red-500 p-2 rounded">Logout</button>
      </header>
      
      <div className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
          <select
            className="p-2 border rounded"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Income & Expenses Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data[timeframe]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#4CAF50" name="Income" />
              <Line type="monotone" dataKey="expenses" stroke="#F44336" name="Expenses" />
              <Line type="monotone" dataKey="tax" stroke="#FFC107" name="Tax Paid" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
