import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: 'white', cursor: 'pointer' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#0c0c0c', fontWeight: 900 }}
            onClick={() => {
              navigate('/');
            }}
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
            <Button
              sx={{ color: '#717171' }}
              color="inherit"
              onClick={handleSigninOpen}
            >
              로그인
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={signinOpen}
              onClose={handleSigninClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={signinOpen}>
                <Box omponent="form" sx={style} onSubmit={handleSigninSubmit}>
                  <Typography component="h1" variant="h5">
                    Sign In
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Fade>
            </Modal>
            <Button
              sx={{ color: '#717171' }}
              color="inherit"
              onClick={handleSignupOpen}
            >
              회원가입
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={signupOpen}
              onClose={handleSignupClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={signupOpen}>
                <Box omponent="form" sx={style} onSubmit={handleSignupSubmit}>
                  <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                    Sign Up
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    sx={{ mt: 2 }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Fade>
            </Modal>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
