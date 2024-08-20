import React from 'react';
import logo from "../assets/logo.png";
import { FaGoogle, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; // Importing icons for third-party sign-in options

const SignUp = () => {
  return (
    <section className="text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="YourLogo" 
            className="h-16 w-auto mx-auto mb-4 rounded-full border-2 border-gray-300" // Added rounded-full and border
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign Up</h2>
          <p className="text-lg text-gray-600 mb-4">
            Create an account to get started.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-gray-600">Or sign up with</p>
          <div className="flex space-x-4 mt-4">
            <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              <FaGoogle size={20} />
            </button>
            <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
              <FaLinkedin size={20} />
            </button>
            <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800">
              <FaGithub size={20} />
            </button>
            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <FaFacebook size={20} />
            </button>
          </div>

          <p className="mt-6 text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
