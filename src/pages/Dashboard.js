// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-1 p-6 bg-gray-100">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>Welcome to your dashboard! Here you can see an overview of your data and activities.</p>
          {/* Add more content and widgets as needed */}
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p>Here's a summary of your recent activity.</p>
          {/* Add content such as activity logs, notifications, etc. */}
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p>Manage your settings and preferences here.</p>
          {/* Add content related to user settings */}
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 onTime Solution</p>
      </footer>
    </div>
  );
};

export default Dashboard;
