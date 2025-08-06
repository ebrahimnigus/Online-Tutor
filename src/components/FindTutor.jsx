import React, { useState } from 'react';

const tutorData = {
  'Structural Design': [
    {
      name: 'Eng. Meron Bekele',
      title: 'Structural Engineer & ETABS Instructor',
      bio: 'Expert in RC & Steel design using ETABS and SAFE.',
    },
    {
      name: 'Eng. Yosef Alemu',
      title: 'Senior Lecturer | Addis Ababa University',
      bio: 'Focuses on earthquake-resistant design & load path analysis.',
    },
  ],
  Transportation: [
    {
      name: 'Eng. Lidya Hailu',
      title: 'Transportation Systems Analyst',
      bio: 'Specialist in highway geometric design & SUMO software.',
    },
  ],
  Geotechnical: [
    {
      name: 'Eng. Samuel Kassa',
      title: 'Geotechnical Consultant',
      bio: 'Foundation and soil-structure interaction expert.',
    },
  ],
  'Water Resources': [
    {
      name: 'Eng. Selam Tadesse',
      title: 'Hydraulic Engineer',
      bio: 'Water supply and drainage system design trainer.',
    },
  ],
  'Construction Management': [
    {
      name: 'Eng. Eyob Mekuria',
      title: 'Project Manager | PMP Certified',
      bio: 'Specialized in project planning, MS Project, and safety.',
    },
  ],
};

const FindTutor = () => {
  const [selectedCategory, setSelectedCategory] = useState('Structural Design');

  return (
    <section className="bg-[#f4faf9] min-h-screen py-16 px-6" id='find-tutor'>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#054b47] mb-4 text-center">
          Find the Right Civil Engineering Tutor for You
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-10">
          {Object.keys(tutorData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border shadow ${
                selectedCategory === category
                  ? 'bg-[#054b47] text-white'
                  : 'bg-white text-[#054b47] border-gray-300'
              } hover:shadow-md`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Lecture Preview */}
        <div className="bg-white p-6 rounded shadow-md mb-10">
          <h3 className="text-2xl font-semibold text-[#054b47] mb-2">
            {selectedCategory} Lectures
          </h3>
          <p className="text-gray-700">
            Enhance your understanding of {selectedCategory.toLowerCase()} through in-depth tutoring and live practical demonstrations using the latest software and standards. All tutors are vetted and experienced in their field.
          </p>
        </div>

        {/* Tutor Profiles */}
        <div className="grid md:grid-cols-2 gap-6">
          {tutorData[selectedCategory].map((tutor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-2xl hover:shadow-3xl transition duration-300"
            >
              <h4 className="text-xl font-bold text-[#054b47]">{tutor.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{tutor.title}</p>
              <p className="text-gray-700 mt-3">{tutor.bio}</p>
              <button className="mt-4 px-4 py-2 bg-[#054b47] text-white rounded hover:bg-[#06655f]">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindTutor;
