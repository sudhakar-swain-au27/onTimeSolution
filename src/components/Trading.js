import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TradingPage = () => {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [tradeAction, setTradeAction] = useState('');
  const [tradeAmount, setTradeAmount] = useState(0);
  const [tradeHistory, setTradeHistory] = useState([]);

  // Fetch asset data from a dummy or financial API
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get('https://api.mockaroo.com/api/your-api-key?count=10&key=your-api-key'); // Replace with your actual API
        setAssets(response.data);
      } catch (error) {
        console.error('Error fetching asset data:', error);
      }
    };
    fetchAssets();
  }, []);

  const handleTrade = () => {
    if (!selectedAsset || !tradeAction || tradeAmount <= 0) {
      alert('Please select an asset, trade action, and enter a valid amount.');
      return;
    }

    const trade = {
      asset: selectedAsset.name,
      action: tradeAction,
      amount: tradeAmount,
      price: selectedAsset.price,
      time: new Date().toLocaleTimeString(),
    };

    setTradeHistory([...tradeHistory, trade]);
    setTradeAction('');
    setTradeAmount(0);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Trade Assets</h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className={`p-4 rounded-lg shadow-lg cursor-pointer ${selectedAsset && selectedAsset.id === asset.id ? 'bg-blue-100' : 'bg-white'}`}
            onClick={() => setSelectedAsset(asset)}
          >
            <h2 className="text-xl font-semibold">{asset.name}</h2>
            <p className="text-lg">Price: ${asset.price}</p>
            <p className={`text-md ${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              Change: {asset.change}%
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center mb-6">
        <button
          className={`px-4 py-2 rounded-lg mr-4 ${tradeAction === 'buy' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setTradeAction('buy')}
        >
          Buy
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${tradeAction === 'sell' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setTradeAction('sell')}
        >
          Sell
        </button>
      </div>

      <div className="mb-6">
        <input
          type="number"
          value={tradeAmount}
          onChange={(e) => setTradeAmount(e.target.value)}
          placeholder="Enter trade amount"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      <button
        onClick={handleTrade}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
      >
        Confirm Trade
      </button>

      <h2 className="text-2xl font-bold mt-8 mb-4">Trade History</h2>
      <ul className="bg-white p-4 rounded-lg shadow-lg">
        {tradeHistory.map((trade, index) => (
          <li key={index} className="mb-4">
            <p className="text-lg">
              {trade.time}: {trade.action.toUpperCase()} {trade.amount} units of {trade.asset} at ${trade.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradingPage;
