import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: 'white' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#0c0c0c', fontWeight: 900 }}
          >
            애플나라
          </Typography>
          <Box sx={{ flexGrow: 15, display: 'flex' }}>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Button sx={{ color: '#0a0a0a', display: 'block' }}>Home</Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="#">
              <Button sx={{ color: '#0a0a0a', display: 'block' }}>
                Market
              </Button>
            </Link>
          </Box>
          <ButtonGroup>
            <Button sx={{ color: '#717171' }} color="inherit">
              로그인
            </Button>
            <Button sx={{ color: '#717171' }} color="inherit">
              회원가입
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
