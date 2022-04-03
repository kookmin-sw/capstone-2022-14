import React from 'react';
import * as Style from './styles';
import { productSub } from './product';
import productRequest from '../../api/productRequest';

function ProductList({ keyword }) {
  const clickEvent = async e => {
    await productRequest
      .getResponse(e.target.innerText)
      .then(res => console.log(res));
  };

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
                  <Style.ItemBtn key={index} onClick={clickEvent}>
                    {item}
                  </Style.ItemBtn>
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
