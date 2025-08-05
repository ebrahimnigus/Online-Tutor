import React from 'react';
import { Link } from 'react-router-dom';

const Tutors = () => {
  const tutors = [
    { id: 1, name: 'Junie Doe', specialty: 'Structural Engineering', rating: 4.8, sessions: 120 },
    { id: 2, name: 'Hack Smith', specialty: 'Geotechnical Engineering', rating: 4.2, sessions: 98 },
    { id: 3, name: 'Sarelt Bonan', specialty: 'Civil Engineering', rating: 4.6, sessions: 85 },
    { id: 4, name: 'Drozd Latt', specialty: 'Environmental Engineering', rating: 4.0, sessions: 73 },
  ];

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

      {/* ✅ Tutors Page Content */}
      <div className="px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Browse Tutors</h1>

        <input
          type="text"
          placeholder="Search tutors"
          className="w-full border px-4 py-2 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <ul>
          {tutors.map((tutor) => (
            <li key={tutor.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img
                  src={`https://randomuser.me/api/portraits/men/${tutor.id * 10}.jpg`}
                  alt={tutor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{tutor.name}</p>
                  <p className="text-sm text-gray-600">{tutor.specialty}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-yellow-500">⭐ {tutor.rating.toFixed(1)}</p>
                <p className="text-sm text-gray-500">{tutor.sessions} sessions</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tutors;
