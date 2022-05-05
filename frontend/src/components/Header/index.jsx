import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Style from './styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <Style.HeaderWrapper onClick={() => navigate('/')}>
      헤더 사진 필요
    </Style.HeaderWrapper>
  );
};

export default Header;
