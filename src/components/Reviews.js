import React from 'react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What our users say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
            <p className="mb-4">“I downloaded Pocket today and turned $5000 into $25,000 in half an hour.”</p>
            <p className="font-semibold">CrazyInvestor</p>
          </div>
          {/* Add more review cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
