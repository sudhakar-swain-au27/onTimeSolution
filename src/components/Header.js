import React, { useState } from "react";
import profilecv from '../assets/sudhakar.swaiN.docx';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(false); 
    downloadCV();
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = profilecv;
    link.download = "sudhakar.swaiN.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-gray-50">
      <div className="text-2xl font-bold text-orange-500">
        <span className="text-black">S</span>s
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Hire Me
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Download Your CV</h2>
            <p className="text-center mb-4">Click the button below to download your CV.</p>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Download CV
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="ml-4 bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
