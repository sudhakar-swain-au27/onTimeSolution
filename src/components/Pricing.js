import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRocket, FaChartLine, FaDollarSign } from 'react-icons/fa'; 

const Pricing = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    // Navigate to the payment page with the selected plan details
    navigate('/payment', {
      state: {
        plan: plan.name,
        amount: plan.amount
      }
    });
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Flat Pricing, No Management Fees</h2>
        <p className="text-center mb-12">Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Starter Plan */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-500 transition-colors duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaRocket className="text-blue-500 mr-3 text-3xl" />
              <h3 className="text-2xl font-semibold">Starter</h3>
            </div>
            <p className="text-4xl font-bold mb-4">$0</p>
            <p className="text-lg mb-4">You’re new to investing but want to do it right. Get started for free.</p>
            <button
              onClick={() => handleSubscribe({ name: 'Starter', amount: 0 })}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Subscribe
            </button>
            <ul className="mb-4 list-disc list-inside text-left">
              <li className="mb-2">Commission-free trading</li>
              <li className="mb-2">Multi-layered encryption</li>
              <li className="mb-2">One tip every day</li>
              <li className="mb-2">Invest up to $1,500 each month</li>
            </ul>
          </div>

          {/* Investor Plan */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-500 transition-colors duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-blue-500 mr-3 text-3xl" />
              <h3 className="text-2xl font-semibold">Investor</h3>
            </div>
            <p className="text-4xl font-bold mb-4">$7</p>
            <p className="text-lg mb-4">You’ve been investing for a while. Invest more and grow your wealth faster.</p>
            <button
              onClick={() => handleSubscribe({ name: 'Investor', amount: 7 })}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Subscribe
            </button>
            <ul className="mb-4 list-disc list-inside text-left">
              <li className="mb-2">Commission-free trading</li>
              <li className="mb-2">Multi-layered encryption</li>
              <li className="mb-2">One tip every hour</li>
              <li className="mb-2">Invest up to $15,000 each month</li>
              <li className="mb-2">Basic transaction anonymization</li>
            </ul>
          </div>

          {/* VIP Plan */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-500 transition-colors duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaDollarSign className="text-blue-500 mr-3 text-3xl" />
              <h3 className="text-2xl font-semibold">VIP</h3>
            </div>
            <p className="text-4xl font-bold mb-4">$199</p>
            <p className="text-lg mb-4">You’ve got a huge amount of assets but it’s not enough. To the moon.</p>
            <button
              onClick={() => handleSubscribe({ name: 'VIP', amount: 199 })}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Subscribe
            </button>
            <ul className="mb-4 list-disc list-inside text-left">
              <li className="mb-2">Commission-free trading</li>
              <li className="mb-2">Multi-layered encryption</li>
              <li className="mb-2">Real-time tip notifications</li>
              <li className="mb-2">No investment limits</li>
              <li className="mb-2">Advanced transaction anonymization</li>
              <li className="mb-2">Automated tax-loss harvesting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
