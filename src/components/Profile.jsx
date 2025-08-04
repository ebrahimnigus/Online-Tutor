import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Jane Doe</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit Profile</button>
      </div>

      <div className="flex gap-12">
        <div>
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Jane Doe"
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="text-sm text-gray-600">Civil Engineering Specialist</p>
        </div>

        <div className="flex-1">
          <h2 className="font-semibold mb-2">About</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* These can be placeholder boxes or images representing project thumbnails */}
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="border rounded h-24 bg-gray-100 flex items-center justify-center text-gray-400">
                Diagram {i}
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-1">Portfolios</h3>
              <p className="text-gray-600">Multiple projects on structural design and analysis</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Read More</h3>
              <p className="text-gray-600">View detailed reports and blueprints</p>
            </div>
          </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
