import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import * as Style from './styles';

function PriceChart({ result }) {
  const data = {
    labels: ['4주 전', '3주 전', '2주 전', '1주 전'],
    datasets: [
      {
        data: [
          result?.weekly_price[3] !== 'None' ? result?.weekly_price[3] : 0,
          result?.weekly_price[2] !== 'None'
            ? result?.weekly_price[2]
            : result?.weekly_price[3],
          result?.weekly_price[1] !== 'None'
            ? result?.weekly_price[1]
            : result?.weekly_price[2],
          result?.weekly_price[0] !== 'None'
            ? result?.weekly_price[0]
            : result?.weekly_price[1],
        ],
      },
    ],
  };

  return (
    <Style.ChartWrapper>
      <Chart type="line" data={data} />
    </Style.ChartWrapper>
  );
}

export default PriceChart;
