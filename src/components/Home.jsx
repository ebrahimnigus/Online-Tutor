import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/explain.webp';

const Home = () => {
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

      {/* ✅ Page Content */}
      <div className="px-6 md:px-20 py-12">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Find the right civil engineering tutor for you
            </h1>
            <p className="text-gray-600 mb-4">
              Browse top-rated tutors and connect for 1-on-1 sessions. Personalized help in structural analysis, materials, and more.
            </p>
            <Link
              to="/tutors"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-2"
            >
              Browse Tutors
            </Link>
          </div>
          <div>
            {/* Hero Image Placeholder */}
            <div className="w-full max-w-md h-56 bg-gray-200 rounded-md flex items-center justify-center">
            <img
            src={image}
            alt="Explanation"
            className="w-full max-w-lg h-60 object-cover rounded-1xl shadow-2xl border-2 border-gray-300 hover:scale-105 transition-transform duration-1000 ease-in-out"
            />

            </div>
          </div>
        </section>

        {/* Tutors Section */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Top Tutors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tutor 1 */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-semibold">Jech Yow</h3>
              <p className="text-sm text-gray-600">Structural Engineering</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-yellow-500 font-bold">⭐ 4.9</span>
                <button className="text-blue-600 underline text-sm">View Profile</button>
              </div>
            </div>

            {/* Tutor 2 */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-semibold">Saceh Amon</h3>
              <p className="text-sm text-gray-600">Materials & Mechanics</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-yellow-500 font-bold">⭐ 4.8</span>
                <button className="text-blue-600 underline text-sm">View Profile</button>
              </div>
            </div>

            {/* Tutor 3 */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-semibold">Sund Yone</h3>
              <p className="text-sm text-gray-600">Geotechnical Engineering</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-yellow-500 font-bold">⭐ 4.7</span>
                <button className="text-blue-600 underline text-sm">View Profile</button>
              </div>
            </div>

            {/* Tutor 4 – Jibril */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-semibold">Jibril</h3>
              <p className="text-sm text-gray-600">Transportation Engineering</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-yellow-500 font-bold">⭐ 4.6</span>
                <button className="text-blue-600 underline text-sm">View Profile</button>
              </div>
            </div>

            {/* Tutor 5 – Abebe */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-semibold">Abebe</h3>
              <p className="text-sm text-gray-600">Water Engineering</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-yellow-500 font-bold">⭐ 4.5</span>
                <button className="text-blue-600 underline text-sm">View Profile</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
