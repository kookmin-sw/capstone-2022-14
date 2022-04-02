import { Box, Grid, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  ListWrapper,
  ProductItem,
  ProductImg,
} from './styles';

const Main = () => {
  const [selected, setSelected] = useState('');
  const appleProducts = [
    {param: 'mac', name: 'Mac', src: `${process.env.PUBLIC_URL}/images/mac.png`, }, 
    {param: 'macbook', name: 'MacBook', src: `${process.env.PUBLIC_URL}/images/macbook.png`, }, 
    {param: 'iphone', name: 'iPhone', src: `${process.env.PUBLIC_URL}/images/iphone.png`, }, 
    {param: 'ipad', name: 'iPad', src: `${process.env.PUBLIC_URL}/images/ipad.png`, }, 
    {param: 'applewatch', name: 'Apple Watch', src: `${process.env.PUBLIC_URL}/images/applewatch.png`, }, 
    {param: 'airpods', name: 'AirPods', src: `${process.env.PUBLIC_URL}/images/airpods.png`, }, 
  ];

  const clickProduct = (e) => {
    setSelected(e.target.innerText);
  }

  return (
    <Container>
      <ListWrapper>
        {appleProducts.map(product => {
          return (
            <ProductItem key={product.param} to={`/${product.param}`} onClick={clickProduct}>
              <ProductImg
                src={`${process.env.PUBLIC_URL}/images/${product.param}.png`}
              />
              {product.name}
            </ProductItem>
          );
        })}
      </ListWrapper>
      <Outlet />
    </Container>
  );
};

export default Main;
