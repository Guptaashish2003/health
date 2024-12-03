import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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

export function Chart() {
  return <Line className='w-full h-full' options={options} data={data} />;
}
