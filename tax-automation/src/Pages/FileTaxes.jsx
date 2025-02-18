// src/Pages/FileTaxes.jsx
import React from "react";

const FileTaxes = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">File Taxes</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="amount" className="block text-lg font-medium">Tax Amount</label>
            <input
              type="number"
              id="amount"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Enter tax amount"
            />
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition">
            Submit Filing
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileTaxes;
