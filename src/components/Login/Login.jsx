import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
  const [formType, setFormType] = useState(null); // 'login', 'signup', or null

  return (
    <div className="min-h-screen bg-[#054b47] text-white flex flex-col">
      
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-10">
        <h1 className="text-white text-2xl font-bold">Tutorful</h1>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:underline">One-to-one tuition</a>
          <a href="#" className="hover:underline">How it works</a>
          <a href="#" className="hover:underline">Become a tutor</a>
          <button className="bg-white text-[#054b47] px-4 py-1 rounded hover:bg-gray-200">Find me a tutor</button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-center flex-grow px-10 py-5 ml-10 space-y-10 md:space-y-0 md:space-x-5">
        
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted tutors to <br />
            unlock your potential
          </h2>

          <p className="text-base md:text-lg mt-2 text-gray-200">
            Learn online from expert tutors anytime, anywhere — tailored to your needs.
          </p>

          {/* Login Button (hidden if login form is active) */}
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

          {/* Sign Up Text (hidden if signup form is active) */}
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

          {/* Trustpilot */}
          <div className="mt-6 text-sm text-white">
            4.6 out of 5 ★★★★★
            <span className="ml-1 text-green-400">Trustpilot</span>
          </div>
        </div>

        {/* Form or Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center"
        >
          {formType === 'login' && (
            <div className="bg-[#e6f4f3] text-[#054b47] rounded shadow-md p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Login</h3>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border px-4 py-1 rounded text-black"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border px-4 py-1 rounded text-black"
                />
                <button className="bg-[#054b47] text-white py-1 rounded hover:bg-[#06655f]">
                  Submit
                </button>
              </form>
            </div>
          )}

          {formType === 'signup' && (
            <div className="bg-[#e6f4f3] text-[#054b47] rounded shadow-md p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border px-4 py-1 rounded text-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border px-4 py-1 rounded text-black"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border px-4 py-1 rounded text-black"
                />
                <button className="bg-[#054b47] text-white py-1 rounded hover:bg-[#06655f]">
                  Register
                </button>
              </form>
            </div>
          )}

          {/* Default Image */}
          {!formType && <div className="home__img"></div>}
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
