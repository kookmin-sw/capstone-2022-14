import React, { useState, useEffect } from 'react';
import SearchAPI from '../../api/search';
import * as Style from './styles';
import PriceChart from '../../components/PriceChart';

function ProductPriceChart() {
  const products = [
    'AirPods 1Gen',
    'AirPods 2Gen',
    'AirPods 3Gen',
    'AirPods Pro',
    'AirPods Max',
    'AppleWatch Series 1',
    'AppleWatch Series 2',
    'AppleWatch Series 3',
    'AppleWatch Series 4',
    'AppleWatch Series 5',
    'AppleWatch Series 6',
    'AppleWatch Series 7',
    'AppleWatch SE',
    'iPad',
    'iPad Air',
    'iPad mini',
    'iPad Pro',
    'iPad Pro(12.9)',
    'iPhone 6',
    'iPhone 6+',
    'iPhone 6s',
    'iPhone 6s+',
    'iPhone 7',
    'iPhone 7+',
    'iPhone 8',
    'iPhone 8+',
    'iPhone X',
    'iPhone XR',
    'iPhone Xs',
    'iPhone Xs Max',
    'iPhone 11',
    'iPhone 11 Pro',
    'iPhone 11 Pro Max',
    'iPhone 12 mini',
    'iPhone 12',
    'iPhone 12 Pro',
    'iPhone 12 Pro Max',
    'iPhone 13 mini',
    'iPhone 13',
    'iPhone 13 Pro',
    'iPhone 13 Pro Max',
    'iPhone SE',
    'iPhone SE Gen2',
    'iPhone SE Gen3',
    'Mac mini',
    'Mac Studio',
    'Mac Pro',
    'iMac',
    'MacBook Air',
    'MacBook Pro',
  ];

  const [weeklyPrice, setWeeklyPrice] = useState(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    search(products[selected]);
  }, [selected]);

  const search = async query => {
    const response = await SearchAPI.searchWeeklyPriceQuery(query);
    setWeeklyPrice(response.data);
  };

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  return (
    <Style.Container>
      <Style.GuideText>
        상품을 선택하면, 해당 최근 한달의 가격 추이가 나타납니다.
      </Style.GuideText>
      <Style.SelectBox name="keyword" value={selected} onChange={handleSelect}>
        {products.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </Style.SelectBox>
      <PriceChart result={weeklyPrice}>ProductPriceChart</PriceChart>
    </Style.Container>
  );
}

export default ProductPriceChart;
