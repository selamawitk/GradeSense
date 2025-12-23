import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const GpaTrendChart = () => {
  const data = {
    labels: ['Fall 2022', 'Spring 2023', 'Fall 2023', 'Spring 2024'],
    datasets: [
      {
        label: 'GPA',
        data: [3.2, 2.9, 3.6, 4.0],
        borderColor: '#00bfff',
        backgroundColor: '#00bfff',
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: 'white', font: { size: 12 } },
        grid: { color: 'rgba(255,255,255,0.1)' },
      },
      y: {
        min: 2.5,
        max: 4.0,
        ticks: { stepSize: 0.5, color: 'white', font: { size: 12 } },
        grid: { color: 'rgba(255,255,255,0.1)' },
      },
    },
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '400px',
        height: '250px',
        backgroundColor: 'rgba(255, 255, 255, 0.03)', 
        padding: '16px',
        borderRadius: '12px',
      }}
    >
      <div style={{ fontSize: '16px', color: 'white', marginBottom: '10px' }}>
        GPA Trend
      </div>
      <div style={{ width: '100%', height: '180px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GpaTrendChart;
