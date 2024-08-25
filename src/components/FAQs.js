import React from 'react';

const FAQs = () => {
  return (
    <section id="faqs" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">How do I know the tips are good?</h3>
            <p>Our whole business depends on our tips being good, so it’s in our best interest that they are. The results of our customers speak for themselves, just trust us.</p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
