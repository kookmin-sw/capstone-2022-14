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
  const [signinOpen, setSigninOpen] = useState(false);
  const handleSigninOpen = () => setSigninOpen(true);
  const handleSigninClose = () => setSigninOpen(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  const handleSigninSubmit = e => {
    console.log(e);
  };
  const handleSignupSubmit = e => {
    console.log(e);
  };

  return <Style.HeaderWrapper>hello</Style.HeaderWrapper>;
};

export default Header;
