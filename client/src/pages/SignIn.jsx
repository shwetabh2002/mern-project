import React from 'react';

function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full px-8 py-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center mb-8">
          <img src="/path/to/logo.png" alt="Flabs Logo" className="h-12" />
        </div>
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-bold">flabs</h2>
        </div>
        <div className="flex justify-center mb-6">
          <div className="flex border-b border-gray-200">
            <button className="py-2 px-4 text-gray-500 hover:text-gray-700">User</button>
            <button className="py-2 px-4 text-gray-900 border-b-2 border-blue-600">Admin</button>
            <button className="py-2 px-4 text-gray-500 hover:text-gray-700">Organisation</button>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded mb-6">
          <select className="p-2 border-r border-gray-300 rounded-l">
            <option value="IN">IN +91</option>
            {/* Add other country codes here if needed */}
          </select>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="flex-1 p-2 border-none"
            required
          />
        </div>
        <button className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">Get OTP</button>
        <div className="text-center mt-6">
          <p className="text-gray-500">
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
      <footer className="mt-6 text-gray-500">
        <p>copyright@2024, Flabs</p>
      </footer>
    </div>
  );
}

export default SignIn;
