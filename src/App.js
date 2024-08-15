import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-[#dde7edd8] flex flex-col items-center min-h-screen">
        {/* Header */}
        <header className="w-full flex justify-between items-center px-10 py-6 bg-gray-100 shadow-md">
          <div className="text-3xl font-bold text-blue-800">On-Time</div>
          <nav className="space-x-6 text-lg font-medium text-gray-600">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#" className="hover:text-blue-700">Services</a>
            <a href="#" className="hover:text-blue-700">Contact</a>
            <a href="#" className="hover:text-blue-700">About</a>
          </nav>
        </header>

        {/* Main Section */}
        <main className="flex flex-col items-center justify-between px-10 py-20">
          {/* Left Section: Text */}
          <div className="text-center mb-10 lg:mb-0">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
              On-time
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Your reliable solution for punctual project management and tracking.
              Optimize your workflow with precise timing and efficiency.
            </p>
            <p className="text-gray-500 mb-6">
              Track your deadlines, stay ahead of schedule, and meet your goals without delays.
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
              Learn More
            </button>
          </div>
          {/* Coming Soon Section */}
          <div className="text-center mt-20 p-10 border-2 border-dashed border-gray-400 rounded-lg bg-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</h2>
            <p className="text-lg text-gray-600 mb-4">
              We're working hard to bring you something new and exciting. Stay tuned for updates!
            </p>
            <p className="text-gray-500">
              Sign up for our newsletter to be the first to know about our launch.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 bg-gray-100 text-center text-gray-600">
          © 2024 On-Time Solutions. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
