import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart = null;
    const ctx = chartRef.current;

    if (ctx) {
      if (chart !== null) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Mobile apps',
              tension: 0.4,
              pointRadius: 0,
              borderColor: '#11CDEF',
              backgroundColor: 'rgb(17, 205, 239, 0.01)', // Adjust the color and transparency as needed
              borderWidth: 2,
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              maxBarThickness: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              min: 0,
              max: 500,
              ticks: {
                stepSize: 100,
              },
              grid: {
                borderDash: [10], // or [1] for a solid line
              },
            },
          },
        },
      });
    }

    return () => {
      if (chart !== null) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div style={{ height: '300px', marginLeft: '20px' }}>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export default ChartComponent;
