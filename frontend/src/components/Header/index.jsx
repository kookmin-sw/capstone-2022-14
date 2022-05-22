import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './styles';

const Header = () => {
  const navigate = useNavigate();

  const clickHome = () => {
    navigate('/');
  };

  return (
    <Style.Container>
      <Style.HeaderWrapper>
        <Style.HeaderHome onClick={clickHome}>Eaten Apple</Style.HeaderHome>
        <Style.HeaderContents>
          <Style.HeaderContent onClick={clickHome}>home</Style.HeaderContent>
          <Style.HeaderContent>contact</Style.HeaderContent>
        </Style.HeaderContents>
      </Style.HeaderWrapper>
    </Style.Container>
  );
};

export default Header;
