import React from 'react'
import * as Style from './styles';

function AirPods() {

  const productSub = ['AirPods 1Gen', 'AirPods 2Gen', 'AirPods 3Gen', 'AirPods Pro', 'AirPods Max', ];

  return (
    <Style.Container>
      {productSub.map(item => (
        <Style.ItemBtn key={item}>{item}</Style.ItemBtn>
      ))}
    </Style.Container>
  )
}

export default AirPods