import React from 'react';
import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <section className="bg-gray-50 text-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img src={logo} alt="YourLogo" className="h-16 w-auto mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            If you have any questions or need assistance, feel free to reach out to us.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>    
    </section>
  );
};

export default Contact;
