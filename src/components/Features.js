import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Every feature you need to win</h2>
        <p className="mb-8">Try it for yourself.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Invest what you want</h3>
            <p>We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.</p>
          </div>
          {/* Add more feature cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Features;
