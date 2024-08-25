import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const postalCodeFormats = {
  US: /^\d{5}(-\d{4})?$/,
  CA: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
  IN: /^\d{6}$/, // Format for India: 6-digit postal code
  // Add more countries and formats as needed
};

const Payment = () => {
  const location = useLocation();
  const [subscription, setSubscription] = useState((location.state && location.state.subscription) || { plan: 'Monthly', amount: 7 });
  const [selectedCountry, setSelectedCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [countryDetails, setCountryDetails] = useState(null);
  const [error, setError] = useState('');

  // Handle country change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setCountryDetails(null); // Reset country details on country change
    setPostalCode(''); // Clear postal code on country change
    setError(''); // Reset error message
  };

  // Handle postal code change and fetch details
  const handlePostalCodeChange = async (e) => {
    const value = e.target.value;
    setPostalCode(value);

    const format = postalCodeFormats[selectedCountry];
    if (format && !format.test(value)) {
      setError('Invalid postal code format for the selected country.');
      setCountryDetails(null);
      return;
    }

    if (value.length >= 6) { // Example: fetch details when postal code length is sufficient
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/{pincode}
        `);
        setCountryDetails(response.data);
        setError(''); // Clear error message on successful fetch
      } catch (error) {
        console.error('Error fetching postal code details:', error);
        setCountryDetails(null);
        setError('Failed to fetch postal code details.');
      }
    } else {
      setCountryDetails(null); // Clear details if postal code is too short
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Payment Details</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Subscription</h3>
          <p className="text-lg mb-2 text-gray-600">Plan: <span className="font-medium">{subscription.plan}</span></p>
          <p className="text-lg mb-4 text-gray-600">Amount: <span className="font-medium">${subscription.amount}</span></p>
        </div>

        <form className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="First name" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Last name" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Company" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Address" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Apartment, suite, etc." className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="City" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              {/* Add other countries as needed */}
            </select>
            <input
              type="text"
              placeholder="State / Province"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Postal code"
              value={postalCode}
              onChange={handlePostalCodeChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input type="tel" placeholder="Phone" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {countryDetails && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-300 mt-4">
              <h4 className="text-lg font-semibold">Country Details:</h4>
              <p><strong>City:</strong> {countryDetails.city}</p>
              <p><strong>State:</strong> {countryDetails.state}</p>
              <p><strong>Country:</strong> {countryDetails.country}</p>
            </div>
          )}

          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Delivery Method</h3>
          <div className="flex flex-col mb-6 space-y-4">
            <label className="flex items-center text-gray-600">
              <input type="radio" name="delivery" value="standard" className="mr-3" />
              Standard (4–10 business days) - $5.00
            </label>
            <label className="flex items-center text-gray-600">
              <input type="radio" name="delivery" value="express" className="mr-3" />
              Express (2–5 business days) - $16.00
            </label>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Payment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <select className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="etransfer">eTransfer</option>
            </select>
            <input type="text" placeholder="Card number" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Name on card" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Expiration date (MM/YY)" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="CVC" className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Submit Payment</button>
        </form>
      </div>
    </section>
  );
};

export default Payment;
