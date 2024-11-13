import React, { useEffect, useState } from 'react';

import LoginIcon from '@mui/icons-material/Login';
import { Box, Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { backgroundImage, subTitle, Title } from '@utils/constants';
import { useMobileCheck } from '@utils/isMobile';

import data from '../../JSON/login.json';
import { BackgroundPaper, LoginWrapper, MainGrid, RightSubTitle, RightTitle, SideWrapper } from './LoginStyles';

function LoginComponent() {
  const isMobile = useMobileCheck();
  const [password, setPassword] = useState<any>();
  const [userName, setUserName] = useState<any>();
  const [apiData, setApiData] = useState<any>();

  useEffect(() => {
    // fetch("")
    // .then((response) => response.json());
    setApiData(data);
    
  }, []);

  const LoginAuthentication = () => {
    if (apiData?.loggedIn == true && password?.length > 3 && userName?.length > 3) {
      window.location.assign('/' + 'oms/dashboard');
      localStorage.setItem('login', 'true');
    }
  };

  return (
    <MainGrid container>
      {isMobile ? (
        <Box>
          <SideWrapper
            sx={{
              background: `url(${backgroundImage})`,
            }}>
            <Box
              sx={{
                color: 'white',
                display: 'flex',
                margin: 'auto 0px',
                flexDirection: 'column',
              }}>
              <RightTitle>{Title}</RightTitle>
              <RightSubTitle>{subTitle}</RightSubTitle>
              <BackgroundPaper>
                <Box>
                  <img src="" alt="" />
                  <Typography
                    sx={{
                      fontSize: '30px',
                      marginBottom: '16px',
                      color: '#552AA8',
                    }}>
                    Welcome Back
                  </Typography>
                </Box>
                <Box p={'16px 0px'}>
                  <TextField
                    sx={{ width: '100%' }}
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    onChange={event => setUserName(event?.target?.value)}
                  />
                </Box>
                <Box p={'16px 0px'}>
                  <TextField
                    sx={{ width: '100%' }}
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    onChange={event => setPassword(event?.target?.value)}
                  />
                </Box>

                <Button
                  variant="contained"
                  endIcon={<LoginIcon />}
                  sx={{ mt: 2.5, padding: '5px 100px', borderRadius: '0px' }}
                  onClick={LoginAuthentication}>
                  Login
                </Button>
              </BackgroundPaper>
            </Box>
          </SideWrapper>
        </Box>
      ) : (
        <>
          <Grid item mobile={12} tablet={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <LoginWrapper>
              <Box>
                <img src="" alt="" />
                <Typography
                  sx={{
                    fontSize: '30px',
                    marginBottom: '16px',
                    color: '#552AA8',
                  }}>
                  Welcome Back
                </Typography>
              </Box>
              <Box p={'16px 0px'}>
                <TextField
                  sx={{ width: '100%' }}
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                  onChange={event => setUserName(event?.target?.value)}
                />
              </Box>
              <Box p={'16px 0px'}>
                <TextField
                  sx={{ width: '100%' }}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  onChange={event => setPassword(event?.target?.value)}
                />
              </Box>
              <Button
                variant="contained"
                endIcon={<LoginIcon />}
                sx={{ mt: 2.5, padding: '5px 100px', borderRadius: '0px' }}
                onClick={LoginAuthentication}>
                Login
              </Button>
            </LoginWrapper>
          </Grid>
          <Grid item mobile={12} tablet={9}>
            <SideWrapper
              sx={{
                background: `url(${backgroundImage}})`,
              }}>
              <Box
                sx={{
                  color: 'white',
                  display: 'flex',
                  margin: 'auto 0px',
                  flexDirection: 'column',
                }}>
                <RightTitle>{Title}</RightTitle>
                <RightSubTitle>{subTitle}</RightSubTitle>
              </Box>
            </SideWrapper>
          </Grid>
        </>
      )}
    </MainGrid>
  );
}

export default LoginComponent;
