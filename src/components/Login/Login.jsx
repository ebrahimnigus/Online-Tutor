import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import FindTutor from '../FindTutor.jsx';
import Contact from '../contact.jsx';
import How from '../How.jsx';



const Login = () => {
  const [formType, setFormType] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen bg-[#054b47] text-white flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-10">
          <h1 className="text-white text-2xl font-bold">Tutorful</h1>
          <nav className="flex items-center space-x-6">
            <a href="#find-tutor" className="hover:underline" title="Browse expert tutors">Find Tutors</a>
            <a href="#how" className="hover:underline" title="How Tutorful helps you succeed">How it works</a>
            <a href="#contact" className="hover:underline" title="Talk to our support team">Contact</a>
            <button className="bg-white text-[#054b47] px-4 py-1 rounded hover:bg-gray-200" onClick={(e) => {
                    e.preventDefault();
                    navigate('/register');
                  }}>Find me a tutor</button>
          </nav>
        </header>

        {/* Hero + Forms */}
        <main className="flex flex-col-reverse md:flex-row items-center justify-center flex-grow px-10 py-5 ml-10 mt-10 space-y-10 md:space-y-0 md:space-x-5">
          {/* Hero Text */}
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Trusted tutors to <br /> unlock your potential
            </h2>

            <p className="text-base md:text-lg mt-3 text-gray-200">
              Learn from experienced tutors with flexible schedules tailored to your needs.
            </p>

            <ul className="mt-6 space-y-2 text-left text-sm text-gray-200">
              <li>✔ One-on-one personalized tutoring</li>
              <li>✔ Available 24/7 for instant sessions</li>
              <li>✔ Safe, verified, and reviewed tutors</li>
            </ul>

            {/* Buttons */}
            {formType !== 'login' && (
              <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <button
                  onClick={() => setFormType('login')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 rounded"
                >
                  Login
                </button>
              </div>
            )}

            {formType !== 'signup' && (
              <div className="mt-4">
                Create account?
                <span
                  className="text-blue-400 underline ml-2 cursor-pointer"
                  onClick={() => setFormType('signup')}
                >
                  Sign Up
                </span>
              </div>
            )}

            <div className="mt-6 text-sm text-white">
              4.6 out of 5 ★★★★★
              <span className="ml-1 text-green-400">on Trustpilot</span>
            </div>
          </div>

          {/* Forms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="w-full md:w-1/2 flex justify-center"
          >
            {/* Login */}
            {formType === 'login' && (
              <div className="text-[#e6f4f3] rounded shadow-md p-6 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Login</h3>
                <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/home');
            }}
            className="space-y-4 bg-[#054b47]"
          >
              <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none"
              />
              <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-lg font-semibold text-lg"
            > Login
            </button>
          </form>
              </div>
            )}

            {/* Signup */}
            {formType === 'signup' && (
              <div className="text-[#e6f4f3] rounded shadow-md p-6 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
                <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/home');
            }}
            className="space-y-4 bg-[#054b47]"
          >
          
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none"
              />
              <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none"
              />
              <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-lg font-semibold text-lg"
            > Register
            </button>
          </form>
              </div>
            )}
            {/* Empty Placeholder */}
            {!formType && <div className="home__img"></div>}
          </motion.div>
        </main>
      </div>
      <FindTutor />
      <How />
      <Contact />

    </div>
  );
};

export default Login;
