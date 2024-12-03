import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { formatmonth } from '../utils/utils';


// Register required Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

const labels = ['Jan', 'Feb', 'Ma', 'Apr', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [99,93,648,38,84,38,884,93],
      borderColor: '#C26EB4',
      backgroundColor: '#C26EB4',
      tension: 0.4, 
      cubicInterpolationMode: "monotone", 
    },
    {
      label: 'Dataset 2',
      data: [45,74,83,98,53,17,82,28],
      borderColor: '#7E6CAB',
      backgroundColor: '#7E6CAB',
      tension: 0.4, 
      cubicInterpolationMode: "monotone", 
    },
  ],
};

export function Chart({className,chartData}) {

  return <Line className={`${className}`} options={options} data={chartData} />;
}

export function processChartData(data) {
  console.log("Input data for chart processing:", data);
  // Extract labels (e.g., "March 2024", "February 2024")
  const labels = data.map((item) => `${formatmonth(item.month)} ${item.year}`);

  // Extract data for systolic blood pressure and heart rate
  const systolicData = data.map(
    (item) => item.blood_pressure.systolic.value
  );
  const heartRateData = data.map((item) => item.heart_rate.value);

  // Create datasets
  const datasets = [
    {
      label: "Systolic Blood Pressure",
      data: systolicData,
      borderColor: "#C26EB4",
      backgroundColor: "#C26EB4",
      tension: 0.4,
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Heart Rate",
      data: heartRateData,
      borderColor: "#7E6CAB",
      backgroundColor: "#7E6CAB",
      tension: 0.4,
      cubicInterpolationMode: "monotone",
    },
  ];

  return { labels, datasets };
}