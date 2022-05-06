import React, { useState } from 'react';
import * as Style from './styles';
import { productSub } from './product';

import SearchAPI from '../../api/search';
import SearchResult from '../SearchResult';
import PriceChart from '../PriceChart';

function ProductList({ keyword }) {
  const [products, setProducts] = useState(null);
  const [curQuery, setCurQuery] = useState('');

  const search = async query => {
    const response = await SearchAPI.searchQuery(query);
    setProducts(response.data);
    setCurQuery(query);
    if (response.data.length === 0) alert('매물이 없습니다.');
  };

  return (
    <>
      <Style.Container>
        {keyword !== 'iphone' ? (
          <>
            {productSub[keyword].map((item, i) => (
              <Style.ItemBtn
                key={i}
                onClick={() => {
                  search(item);
                }}
              >
                {item}
              </Style.ItemBtn>
            ))}
          </>
        ) : (
          <>
            {productSub[keyword].map((gen, i) => {
              return (
                <Style.IphoneContainer key={i}>
                  {gen.map((item, index) => (
                    <Style.ItemBtn
                      key={index}
                      onClick={() => {
                        search(item);
                      }}
                    >
                      {item}
                    </Style.ItemBtn>
                  ))}
                </Style.IphoneContainer>
              );
            })}
          </>
        )}
      </Style.Container>
      {productSub[keyword].includes(curQuery) && products.length !== 0 ? (
        <>
          <PriceChart result={products} />
          <SearchResult result={products} />
        </>
      ) : null}
    </>
  );
}

export default ProductList;
