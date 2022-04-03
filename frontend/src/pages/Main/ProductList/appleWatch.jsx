import React from 'react';
import * as Style from './styles';

function AppleWatch() {
  const productSub = [
    'Series 1',
    'Series 2',
    'Series 3',
    'Series 4',
    'Series 5',
    'Series 6',
    'SE',
    'Series 7',
  ];

  return (
    <Style.Container>
      {productSub.map(item => (
        <Style.ItemBtn key={item}>{item}</Style.ItemBtn>
      ))}
    </Style.Container>
  );
}

export default AppleWatch;
