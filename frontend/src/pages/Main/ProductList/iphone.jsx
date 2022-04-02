import React from 'react'
import * as Style from './styles'

function Iphone() {
  const productSub = [
    ['iPhone 6', 'iPhone 6+', 'iPhone 6s', 'iPhone 6s+', ],
    ['iPhone 7', 'iPhone 7+',],
    ['iPhone 8', 'iPhone 8+', 'iPhone X', ],
    ['iPhone XR', 'iPhone Xs', 'iPhone Xs Max' ],
    ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', ],
    ['iPhone 12 mini', 'iPhone 12', 'iPhone 12 Pro', 'iPhone 12 Pro Max', ],
    ['iPhone 13 mini', 'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', ],
    ['iPhone SE', 'iPhone SE Gen2', 'iPhone SE Gen3', ],
  ];

  return (
    <Style.IphoneWrapper>
      {productSub.map((gen, index) => {
        return (
          <Style.IphoneContainer key={index}>
            {gen.map((item, index) => (
              <Style.ItemBtn key={index}>{item}</Style.ItemBtn>
            ))}
          </Style.IphoneContainer>
        )
      })}
    </Style.IphoneWrapper>
  )
}

export default Iphone