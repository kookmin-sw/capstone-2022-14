import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import * as Style from './styles';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
    },
  ],
};

function PriceChart() {
  return (
    <Style.PriceChartWrapper>
      <Style.ChartWrapper>
        <h1>Price Chart</h1>
        <Chart type="line" data={data} />
      </Style.ChartWrapper>
      <Style.PriceWrapper>
        <Style.PriceInfo>평균가 : </Style.PriceInfo>
        <Style.PriceInfo>최저가 : </Style.PriceInfo>
      </Style.PriceWrapper>
    </Style.PriceChartWrapper>
  );
}

export default PriceChart;
