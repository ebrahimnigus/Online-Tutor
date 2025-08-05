import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      
      {/* ✅ Navigation Bar */}
      <header className="flex justify-between items-center py-4 px-6 md:px-20 bg-[#054b47] text-white">
        <h1 className="text-2xl font-bold">Tutorful</h1>
        <nav className="flex items-center gap-6">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/tutors" className="hover:underline">Tutors</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
          <button className="bg-white text-[#054b47] px-4 py-1 rounded hover:bg-gray-200">
            Find me a tutor
          </button>
        </nav>
      </header>

      {/* ✅ Settings Page Content */}
      <div className="px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* Profile Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>

        {/* Account Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <button className="text-blue-600 hover:underline">
            Privacy & Security Settings
          </button>
        </section>

        {/* Notifications Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            Email Notifications
          </label>
          <label className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="accent-blue-500" />
            Push Notifications
          </label>
        </section>

        {/* Payment Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Manage Payment
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
