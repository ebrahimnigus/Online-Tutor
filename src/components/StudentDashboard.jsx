import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Your Sessions</h2>
        <div className="bg-gray-100 p-4 rounded-md flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Junie Doe"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="font-semibold">Junie Doe</p>
            <p className="text-gray-600">Structural Engineering</p>
          </div>
          <div className="ml-auto text-right">
            <p className="font-semibold">$350 PM</p>
            <p className="text-sm text-gray-500">3:30 PM</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Your Modules</h2>
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
            <span>Consistent Programming</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Messages</h2>
        <div className="border rounded-md overflow-hidden">
          <video controls className="w-full max-h-64 bg-black">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="p-4 flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Junie Doe"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">Junie Doe</p>
              <p className="text-gray-600">Looking forward to our next session!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
