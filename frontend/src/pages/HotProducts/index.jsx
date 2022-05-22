import React, { useEffect, useState } from 'react';
import * as Style from './styles';
import HotAPI from '../../api/hot';

function HotProducts() {
  const [hotProducts, setHotProducts] = useState([]);

  const search = async () => {
    const search_size = 5;
    const response = await HotAPI.getHotProducts(search_size);
    setHotProducts(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <Style.Container>
      <div>HotProducts</div>
      {Object.entries(hotProducts).map(([key, value]) => (
        <div>
          {key} - {value}회
        </div>
      ))}
    </Style.Container>
  );
}

export default HotProducts;
