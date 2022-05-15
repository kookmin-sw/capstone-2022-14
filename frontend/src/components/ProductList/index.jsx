import React, { useState } from 'react';
import * as Style from './styles';
import { productSub } from './product';

import SearchAPI from '../../api/search';
import SearchResult from '../SearchResult';
import PriceChart from '../PriceChart';

function ProductList({ keyword }) {
  const [products, setProducts] = useState(null);
  const [curQuery, setCurQuery] = useState('');
  const [isClicked, setIsClicked] = useState('');

  const search = async query => {
    const response = await SearchAPI.searchQuery(query);
    setProducts(response.data);
    setCurQuery(query);
    if (response.data.length === 0) alert('매물이 없습니다.');
  };

  return (
    <>
      <Style.Container>
        <>
          {productSub[keyword].map((item, i) => (
            <Style.ItemBtn
              isClicked={isClicked === item ? true : false}
              key={i}
              onClick={() => {
                search(item);
                setIsClicked(item);
              }}
            >
              {item}
            </Style.ItemBtn>
          ))}
        </>
      </Style.Container>
      {productSub[keyword].includes(curQuery) && products.length !== 0 ? (
        <>
          <PriceChart result={products} query={curQuery} />
          <SearchResult result={products} />
        </>
      ) : null}
    </>
  );
}

export default ProductList;
