import React from 'react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="h-16 w-16 rounded-full mb-4 object-cover" 
            />
            <p className="text-gray-700">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-x"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

        
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-white">Marketing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Analytics</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Commerce</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Insights</a></li>
            </ul>
          </div>

         
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Guides</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">API Status</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Jobs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Press</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Partners</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white">Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-gray-900 text-sm">
          <p>&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
