import React, { useState } from 'react';
import * as Style from './styles';
import { productSub } from './product';
import SearchAPI from '../../api/search';
import SearchResult from '../SearchResult';

function ProductList({ keyword }) {
  const [products, setProducts] = useState([]);

  const search = async query => {
    const response = await SearchAPI.searchQuery(query);
    setProducts(response.data);
  };

  return (
    <>
      <Style.Container>
        {keyword !== 'iphone' ? (
          <>
            {productSub[keyword].map(item => (
              <Style.ItemBtn
                key={item}
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
            {productSub[keyword].map((gen, index) => {
              return (
                <Style.IphoneContainer key={index}>
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
      <SearchResult result={products} />
    </>
  );
}

export default ProductList;
