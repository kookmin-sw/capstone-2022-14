import React from 'react';
import * as Style from './styles';

function Ipad() {
  const productSub = [
    'iPad',
    'iPad Air',
    'iPad mini',
    'iPad Pro',
    'iPad Pro(12.9)',
  ];

  return (
    <Style.Container>
      {productSub.map(item => (
        <Style.ItemBtn key={item}>{item}</Style.ItemBtn>
      ))}
    </Style.Container>
  );
}

export default Ipad;
