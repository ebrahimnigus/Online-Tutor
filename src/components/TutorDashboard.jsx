import React from 'react';

const TutorDashboard = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tutor Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Your Sessions</h2>
        <div className="bg-gray-100 p-4 rounded-md flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/40.jpg"
            alt="Jane Doe"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="font-semibold">Jane Doe</p>
            <p className="text-gray-600">Mechanical Engineering</p>
          </div>
          <div className="ml-auto text-right">
            <p className="font-semibold">3:20 PM</p>
            <p className="text-sm text-gray-500">March 15</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Materials</h2>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded shadow cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
            </svg>
            <span>Crossfold Analysis</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded shadow cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
            </svg>
            <span>No-neretation Programming</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        <div className="flex gap-8">
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Jole Doe"
              className="w-12 h-12 rounded-full"
            />
            <p>Jole Doe</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Entry Auirsont"
              className="w-12 h-12 rounded-full"
            />
            <p>Entry Auirsont</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorDashboard;
