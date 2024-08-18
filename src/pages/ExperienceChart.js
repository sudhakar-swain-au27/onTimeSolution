// ExperienceChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExperienceChart = () => {
  const data = {
    labels: [
      'JavaScript', 'React', 'AWS', 'Express.js', 'Node.js', 'Docker',
      'HTML & CSS', 'Next.js', 'Python', 'Ag-Grid', 'MongoDB', 'MySQL',
      'HTTP', 'REST API'
    ],
    datasets: [
      {
        label: 'Experience Level (%)',
        data: [90, 85, 70, 80, 75, 60, 90, 70, 40, 60, 75, 70, 80, 85],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // JavaScript
          'rgba(54, 162, 235, 0.6)', // React
          'rgba(255, 206, 86, 0.6)', // AWS
          'rgba(75, 192, 192, 0.6)', // Express.js
          'rgba(153, 102, 255, 0.6)', // Node.js
          'rgba(255, 159, 64, 0.6)', // Docker
          'rgba(255, 99, 132, 0.6)', // HTML & CSS
          'rgba(54, 162, 235, 0.6)', // Next.js
          'rgba(255, 206, 86, 0.6)', // Python
          'rgba(75, 192, 192, 0.6)', // Ag-Grid
          'rgba(153, 102, 255, 0.6)', // MongoDB
          'rgba(255, 159, 64, 0.6)', // MySQL
          'rgba(255, 99, 132, 0.6)', // HTTP
          'rgba(54, 162, 235, 0.6)', // REST API
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // JavaScript
          'rgba(54, 162, 235, 1)', // React
          'rgba(255, 206, 86, 1)', // AWS
          'rgba(75, 192, 192, 1)', // Express.js
          'rgba(153, 102, 255, 1)', // Node.js
          'rgba(255, 159, 64, 1)', // Docker
          'rgba(255, 99, 132, 1)', // HTML & CSS
          'rgba(54, 162, 235, 1)', // Next.js
          'rgba(255, 206, 86, 1)', // Python
          'rgba(75, 192, 192, 1)', // Ag-Grid
          'rgba(153, 102, 255, 1)', // MongoDB
          'rgba(255, 159, 64, 1)', // MySQL
          'rgba(255, 99, 132, 1)', // HTTP
          'rgba(54, 162, 235, 1)', // REST API
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className='chart-container flex justify-center' >
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExperienceChart;
