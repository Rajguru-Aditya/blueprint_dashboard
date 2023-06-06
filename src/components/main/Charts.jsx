import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Charts = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: [
            'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'
          ],
          datasets: [
            {
              label: data.label,
              data: data.values,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: 'x',
          responsive: true,
          barThickness: 35,
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                autoSkip: false,
                maxRotation: 0,
                padding: 1,
              },
            },
            y: {
              beginAtZero: false, // Update to false
              min: 1, // Set minimum value to 1
              max: 4, // Set maximum value to 4
              ticks: {
                stepSize: 1,
                padding: 2,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Charts;
