import React from 'react';
import {
  Container,
  ListWrapper,
  ProductItem,
  ProductImg,
  ProductName,
} from './styles';
import { Link } from 'react-router-dom';

const Main = () => {
  const appleProducts = ['iphone', 'ipad'];

  return (
    <Container>
      <ListWrapper>
        {appleProducts.map(name => {
          return (
            <Link to={`/${name}`}>
              <ProductItem>
                <ProductImg
                  src={`${process.env.PUBLIC_URL}/images/${name}.png`}
                />
                <ProductName>{name}</ProductName>
              </ProductItem>
            </Link>
          );
        })}
      </ListWrapper>
    </Container>
  );
};

export default Main;
