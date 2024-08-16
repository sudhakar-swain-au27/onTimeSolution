// About.js
import React from 'react';

const About = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-grey-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We are dedicated to providing solutions for efficient project management and timely tracking.
          Our mission is to help you stay organized and meet your deadlines with ease.
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Our mission is to deliver top-notch solutions that streamline your project management process,
              ensuring that your team remains productive and your projects are completed on time.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Team
            </h3>
            <p className="text-gray-600">
              Our team consists of experienced professionals who are passionate about helping businesses succeed.
              With a diverse set of skills and expertise, we are committed to providing personalized support and
              innovative solutions tailored to your needs.
            </p>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Approach
          </h3>
          <p className="text-gray-600">
            We believe in a customer-centric approach, where your needs and goals guide our solutions.
            Our process involves understanding your unique challenges and collaborating with you to create
            effective strategies that drive success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
