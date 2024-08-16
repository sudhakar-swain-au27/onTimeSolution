import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center px-10 py-6 ">
      <div className="text-3xl font-bold text-blue-800">On-Time</div>
      <nav className="space-x-6 text-lg font-medium text-blue-800">
        <Link to="/" className="hover:text-rose-700">Home</Link>
        <Link to="/services" className="hover:text-rose-700">Services</Link>
        <Link to="/contact" className="hover:text-rose-700">Contact</Link>
        <Link to="/about" className="hover:text-rose-700">About</Link>
        <Link to="/login" className="hover:text-rose-700">Log In</Link>
      
        
      </nav>
    </header>
  );
};

export default Navbar;
