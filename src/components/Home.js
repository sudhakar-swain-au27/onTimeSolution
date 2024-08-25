import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-dark-blue text-white px-6 md:px-20">

      <main className="flex-grow flex flex-col justify-center text-center md:text-left">
        <p className="text-orange-500 text-sm md:text-lg">Hi, my name is</p>
        <h1 className="text-4xl md:text-7xl font-bold mt-4 text-gray-700">Sudhakar Swain.</h1>
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-400 mt-2">I build things for the web.</h2>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto md:mx-0">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products at 
          <a href="#header" className="text-orange-500 hover:underline"> Xinthesys LLC</a>.
        </p>
        <div className="mt-8">
          <a 
            href="#projects" 
            className="inline-block border border-green-500 text-green-500 py-3 px-6 rounded-lg hover:bg-zinc-100 hover:text-dark-blue"
          >
            Check out my projects!
          </a>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
