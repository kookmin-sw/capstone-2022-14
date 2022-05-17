import React, { useState } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Button from '@mui/material/Button';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import * as Style from './styles';
import AlarmModal from './AlarmModal';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
    },
  ],
};

function PriceChart({ result, query }) {
  const [modalOn, setModalOn] = useState(false);

  const isExist = () => {
    return result?.avg_price > 0 && result?.min_price > 0 ? true : false;
  };

  if (isExist()) {
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
  } else {
    return <div></div>;
  }
}

export default PriceChart;
