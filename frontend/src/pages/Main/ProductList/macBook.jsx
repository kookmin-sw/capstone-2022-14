import React from 'react';
import * as Style from './styles';

function MacBook() {
  const productSub = ['MacBook Air', 'MacBook Pro'];

  return (
    <Style.Container>
      {productSub.map(item => (
        <Style.ItemBtn key={item}>{item}</Style.ItemBtn>
      ))}
    </Style.Container>
  );
}

export default MacBook;
