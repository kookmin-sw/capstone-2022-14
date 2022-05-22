import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.HeaderWrapper>
        <Style.HeaderHome onClick={() => navigate('/')}>
          Eaten Apple
        </Style.HeaderHome>
        <Style.HeaderContents>
          <Style.HeaderContent onClick={() => navigate('/')}>
            매물 검색
          </Style.HeaderContent>
          <Style.HeaderContent>가격추이 확인</Style.HeaderContent>
          <Style.HeaderContent>인기매물 조회</Style.HeaderContent>
        </Style.HeaderContents>
      </Style.HeaderWrapper>
    </Style.Container>
  );
};

export default Header;
