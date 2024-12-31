import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HeartRateChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    // Simulated heart rate data
    const times = Array.from({length: 24}, (_, i) => `${i}:00`);
    const data = Array.from({length: 24}, () => Math.floor(Math.random() * (100 - 60) + 60));

    setChartData({
      labels: times,
      datasets: [
        {
          label: 'Heart Rate (BPM)',
          data: data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '24-Hour Heart Rate Monitoring'
      }
    },
    scales: {
      y: {
        min: 40,
        max: 120
      }
    }
  };

  return (
    <div className="w-full h-[400px]">
      <Line options={options} data={chartData} />
    </div>
  );
}