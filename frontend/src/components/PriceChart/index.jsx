import React, { useState } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Button from '@mui/material/Button';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import * as Style from './styles';
import AlarmModal from './AlarmModal';

function PriceChart({ result, query }) {
  const [modalOn, setModalOn] = useState(false);

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
    <Style.PriceChartWrapper>
      <Style.ChartWrapper>
        <h1>Price Chart</h1>
        <Chart type="line" data={data} />
      </Style.ChartWrapper>
      <Style.PriceWrapper>
        <Button
          size="Large"
          color="secondary"
          variant="contained"
          startIcon={<AddAlertIcon />}
          onClick={() => setModalOn(true)}
        >
          알림 등록
        </Button>
        <Style.PriceInfo>평균가 : {result?.avg_price}</Style.PriceInfo>
        <Style.PriceInfo>최저가 : {result?.min_price}</Style.PriceInfo>
      </Style.PriceWrapper>
      {modalOn && (
        <AlarmModal
          price={result?.avg_price}
          query={query}
          onClose={() => setModalOn(false)}
        />
      )}
    </Style.PriceChartWrapper>
  );
}

export default PriceChart;
