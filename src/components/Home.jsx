import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen px-6 md:px-20 py-12">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find the right civil engineering tutor for you
          </h1>
          <p className="text-gray-600 mb-6">
            Browse top-rated tutors and connect for 1-on-1 sessions. Personalized help in structural analysis, materials, and more.
          </p>
          <Link
            to="/tutors"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Browse Tutors
          </Link>
        </div>
        <div>
          {/* Placeholder for hero image */}
          <div className="w-full max-w-md h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Hero Image</span>
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Top Tutors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tutor Card 1 */}
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

          {/* Tutor Card 2 */}
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

          {/* Tutor Card 3 */}
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
        </div>
      </section>
    </div>
  );
};

export default Home;
