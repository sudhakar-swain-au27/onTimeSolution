import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profile from "../assets/profile.jpg"
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-dark-blue via-blue-900 to-dark-blue text-white px-6 md:px-20">
      {/* Left Content */}
      <main className="flex-grow flex flex-col justify-center text-center md:text-left">
        <p className="text-orange-400 text-3xl md:text-lg">Hi, my name is</p>
        <h1 className="text-4xl md:text-xl font-bold mt-4 text-blue-600">Sudhakar Swain.</h1>
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-400 mt-2">I build things for the web.</h2>
        <p className="text-gray-500 mt-6 max-w-xl mx-auto md:mx-0">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products at 
          <a href="https://www.xinthesys.com/" className="text-orange-400 hover:underline"> Xinthesys LLC</a>.
        </p>
        <div className="mt-8">
          <a 
            href="#projects" 
            className="inline-block border border-green-500 text-red-500 py-3 px-6 rounded-lg hover:bg-green-500 hover:text-dark-blue transition-all duration-300"
          >
            Check out my projects!
          </a>
        </div>
      </main>

      {/* Right Content - Profile Card */}
      <aside className="mt-10 md:mt-0 md:ml-16 flex justify-center">
        <div className="bg-zinc-50 p-8 rounded-2xl shadow-2xl text-center w-72 h-72 md:w-96 md:h-96 flex flex-col items-center justify-center">
          <img 
            src={profile}
            alt="Sudhakar Swain" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-lg border-4 border-blue-700"
          />
          <h3 className="mt-4 text-2xl md:text-3xl font-semibold text- text-orange-300">Sudhakar Swain</h3>
          <p className="text-gray-500 mt-2 md:text-lg">Full-Stack Developer</p>
          <p className="text-gray-500 md:text-lg">Bhubaneswar, India</p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://github.com/sudhakar-swain-au27" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/fullstacksudhakar-swain-7110b1171/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.instagram.com/realsudhakarswain?igsh=eWRrdm1ha21tYnM1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default HomePage;
