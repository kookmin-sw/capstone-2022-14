import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList';
import {
  Container,
  ListWrapper,
  ProductItem,
  ProductImg,
  ScrollToTop,
} from './styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Introduction from '../../components/Introduction';

const Main = () => {
  const { keyword } = useParams();
  const appleProducts = [
    {
      param: 'mac',
      name: 'Mac',
      src: `${process.env.PUBLIC_URL}/images/mac.png`,
    },
    {
      param: 'macbook',
      name: 'MacBook',
      src: `${process.env.PUBLIC_URL}/images/macbook.png`,
    },
    {
      param: 'iphone',
      name: 'iPhone',
      src: `${process.env.PUBLIC_URL}/images/iphone.png`,
    },
    {
      param: 'ipad',
      name: 'iPad',
      src: `${process.env.PUBLIC_URL}/images/ipad.png`,
    },
    {
      param: 'applewatch',
      name: 'Apple Watch',
      src: `${process.env.PUBLIC_URL}/images/applewatch.png`,
    },
    {
      param: 'airpods',
      name: 'AirPods',
      src: `${process.env.PUBLIC_URL}/images/airpods.png`,
    },
  ];

  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <Container>
      {BtnStatus ? (
        <ScrollToTop
          onClick={handleTop} // 버튼 클릭시 함수 호출
        >
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </ScrollToTop>
      ) : null}
      <Introduction />
      <ListWrapper>
        {appleProducts.map(product => {
          return (
            <ProductItem key={product.param} to={`/${product.param}`}>
              <ProductImg
                src={`${process.env.PUBLIC_URL}/images/${product.param}.png`}
              />
              {product.name}
            </ProductItem>
          );
        })}
      </ListWrapper>
      {keyword ? (
        <>
          <ProductList keyword={keyword} />
        </>
      ) : null}
    </Container>
  );
};

export default Main;
