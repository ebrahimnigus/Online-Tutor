import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Find the right civil engineering tutor for you</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Search Specs</button>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-6">Tutors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white border rounded-lg p-4 shadow">
              <div className="flex items-center gap-4">
                <img src={`https://randomuser.me/api/portraits/women/${i * 10}.jpg`} alt="tutor" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">Ebrahim Ngus</h3>
                  <p className="text-sm text-gray-600">Structural Engineering</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700">Book Session</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
