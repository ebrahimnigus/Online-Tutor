import React from 'react';

const How = () => {
  return (
    <section
      id="how"
      className="bg-white min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-32 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#054b47] mb-6">How</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our platform connects students with experienced civil engineering tutors in just a few easy steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-[#f4faf9] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-4 text-[#054b47] font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2 text-[#054b47]">Search for a Tutor</h3>
            <p className="text-gray-600">
              Use our search tools to find the perfect tutor by subject, software (ETABS, AutoCAD), or experience.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#f4faf9] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-4 text-[#054b47] font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2 text-[#054b47]">Check Profiles</h3>
            <p className="text-gray-600">
              View tutor profiles, past experience, and student reviews to choose your ideal tutor.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#f4faf9] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-4 text-[#054b47] font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2 text-[#054b47]">Start Learning</h3>
            <p className="text-gray-600">
              Schedule your first session and start learning with expert guidance tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
