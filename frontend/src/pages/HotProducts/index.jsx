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

  const conversion = key => {
    let retKeyword = '';
    if (key.includes('MacBook')) {
      retKeyword = 'macbook';
    } else if (key.includes('iPhone')) {
      retKeyword = 'iphone';
    } else if (key.includes('iPad')) {
      retKeyword = 'ipad';
    } else if (key.includes('Series')) {
      retKeyword = 'applewatch';
    } else if (key.includes('AirPods')) {
      retKeyword = 'airpods';
    } else if (key.includes('Mac')) {
      retKeyword = 'mac';
    }
    return retKeyword;
  };

  return (
    <Style.Container>
      <Style.HotHeader>Hot Search</Style.HotHeader>
      <Style.HotsWrapper>
        {Object.entries(hotProducts).map(([key, value], index) => {
          return (
            <Style.HotWrapper key={index}>
              <Style.HotImg
                src={`${process.env.PUBLIC_URL}/images/${conversion(key)}.png`}
              />
              <Style.HotKeyword>
                {index + 1}. {key}
              </Style.HotKeyword>
            </Style.HotWrapper>
          );
        })}
      </Style.HotsWrapper>
    </Style.Container>
  );
}

export default HotProducts;
