import React from 'react';
import * as Style from './styles';

function Mac() {
  const productSub = ['Mac mini', 'Mac Studio', 'Mac Pro', 'iMac'];

  return (
    <Style.Container>
      {productSub.map(item => (
        <Style.ItemBtn key={item}>{item}</Style.ItemBtn>
      ))}
    </Style.Container>
  );
}

export default Mac;
