import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const PortfolioFooter = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-amber-500">Sudhakar Swain</h1>
            <p className="text-gray-400">Fullstack Developer</p>
          </div>

          {/* Navigation */}
          <div className="mb-4 md:mb-0">
            <nav className="flex space-x-6">
              <a href="#about" className="text-gray-400 hover:text-amber-500">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-amber-500">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-amber-500">
                Skills
              </a>
              <a href="#contact" className="text-gray-400 hover:text-amber-500">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400"
            >
              <FaLinkedin className="fa-2x" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400"
            >
              <FaGithub className="fa-2x" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400"
            >
              <FaInstagram className="fa-2x" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-gray-400">Interested in working together? Drop me a line at:</p>
          <a
            href="sudhakar.swain27@gmail.com"
            className="text-amber-500 text-lg font-semibold"
          >
            sudhakar.swain27@gmail.com
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        <p>© 2024 Sudhakar Swain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
