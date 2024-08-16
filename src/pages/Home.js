import React from 'react';

const Home = () => {
  return (
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
      <a href="/services" className="inline-block">
  <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
    Learn More
  </button>
</a>
    </div>
  );
};

export default Home;
