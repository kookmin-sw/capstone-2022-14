import React from 'react';
import * as Style from './styles';
import { productSub } from './product';

function ProductList({ keyword }) {
  return (
    <Style.Container>
      {keyword !== 'iphone' ? (
        <>
          {productSub[keyword].map(item => (
            <Style.ItemBtn key={item}>{item}</Style.ItemBtn>
          ))}
        </>
      ) : (
        <>
          {productSub[keyword].map((gen, index) => {
            return (
              <Style.IphoneContainer key={index}>
                {gen.map((item, index) => (
                  <Style.ItemBtn key={index}>{item}</Style.ItemBtn>
                ))}
              </Style.IphoneContainer>
            );
          })}
        </>
      )}
    </Style.Container>
  );
}

export default ProductList;
