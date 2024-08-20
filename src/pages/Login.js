import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; // Importing icons for third-party login
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Directly navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <section className="text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="YourLogo" 
            className="h-16 w-auto mx-auto mb-4 rounded-full border-2 border-gray-300" 
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
          <p className="text-lg text-gray-600 mb-4">
            Please enter your credentials to access your account.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-gray-600">Or login with</p>
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
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
