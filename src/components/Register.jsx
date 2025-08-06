import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import civilImage from '../assets/explain.webp'; // Adjust path if needed

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#054b47] text-white flex flex-col">

      {/* Header */}
      <header className="flex justify-between items-center py-4 px-10">
        <h1 className="text-white text-2xl font-bold">Tutorful</h1>
        <nav className="flex items-center space-x-6">
          <a href="#find-tutor" className="hover:underline" title="Browse expert tutors">
            Find Tutors
          </a>
          <a href="#how" className="hover:underline" title="How Tutorful helps you succeed">
            How it works
          </a>
          <a href="#contact" className="hover:underline" title="Talk to our support team">
            Contact
          </a>
          
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-10 py-10 md:py-20 space-y-10 md:space-y-0 md:space-x-10">

        {/* Left - Form Section */}
        <div className="w-full md:w-1/2 max-w-md space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {isLogin ? 'Welcome Back' : 'Create your Account'}
            </h1>
            <p className="text-gray-300 mt-2">
              {isLogin
                ? 'Log in to access top civil engineering tutors.'
                : 'Sign up to start learning with the best civil tutors.'}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/home');
            }}
            className="space-y-4"
          >
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none"
              />
            )}

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
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="text-sm text-gray-300">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              className="text-blue-300 underline cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>

        {/* Right - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={civilImage}
            alt="Civil Engineering Tutor"
            className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover shadow-2xl border-4 border-white"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Register;
