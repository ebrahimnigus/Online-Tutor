import React from 'react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Account</h2>
        <button className="text-blue-600 hover:underline">Privacy & Security Settings</button>
      </section>

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

      <section>
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Manage Payment</button>
      </section>
    </div>
  );
};

export default Settings;
