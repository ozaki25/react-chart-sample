import React from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';

const config = {
  type: 'bar',
  data: {
    labels: [
      '2018/4',
      '2018/5',
      '2018/6',
      '2018/7',
      '2018/8',
      '2018/9',
      '2018/10',
      '2018/11',
      '2018/12',
      '2019/1',
      '2019/2',
      '2019/3',
    ],
    datasets: [
      {
        label: '口座残高',
        data: [
          500000,
          600000,
          1250000,
          900000,
          500000,
          350000,
          600000,
          800000,
          1350000,
          1100000,
          1000000,
          1100000,
        ],
        backgroundColor: '#f49090',
        borderColor: '#d70000',
        borderWidth: 1,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      titleFontSize: 16,
      bodyFontSize: 16,
      displayColors: false,
      callbacks: {
        label: ({ yLabel }) =>
          `${yLabel.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} 円`,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            fontSize: 18,
          },
          ticks: {
            beginAtZero: true,
            callback: (label, index, labels) =>
              `${label
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} 円`,
          },
        },
      ],
    },
  },
};

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

function ChartSample() {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    new Chart(chartRef.current, config);
  }, []);

  return (
    <Container>
      <canvas width="400" height="300" ref={chartRef} />
    </Container>
  );
}

export default ChartSample;
