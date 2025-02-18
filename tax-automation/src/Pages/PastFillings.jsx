// src/Pages/PastFilings.jsx
import React from "react";

const PastFilings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Past Filings</h2>
        <table className="mt-4 w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Filing Type</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Jan 15, 2025</td>
              <td className="border px-4 py-2">Quarterly Filing</td>
              <td className="border px-4 py-2">$500</td>
              <td className="border px-4 py-2">Completed</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Oct 10, 2024</td>
              <td className="border px-4 py-2">Annual Filing</td>
              <td className="border px-4 py-2">$1200</td>
              <td className="border px-4 py-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastFilings;
