import { Box, FormControl, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface Responsive {
  isMobile: boolean;
}
export const MainGrid = styled(Grid)(() => ({
  height: ' 100vh',
  '@media (max-width:960px)': {
    flexDirection: 'column-reverse',
    height: ' auto',
  },
}));
export const LoginWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));
export const BackgroundPaper = styled(Box)(() => ({
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '10px',
}));
export const SideWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  // backgroundRepeat: "no-repeat",
  height: ' 100vh',
}));
export const PasswordInputLabel = styled(FormControl)(() => ({
  width: '100%',
  '.MuiInputBase-root.MuiFilledInput-root ': {
    background: 'rgba(255,255,255,1)',
  },
}));

export const RightTitle = styled(Typography)(() => ({
  fontSize: '30px',
  margin: '9px 0px',
  fontWeight: 700,
  '@media (max-width:960px)': {
    fontSize: '23px',
    margin: '6.9px 0px',
  },
}));
export const RightSubTitle = styled(Typography)(() => ({
  fontSize: '20px',
  margin: '16.6px 0px',
  fontWeight: 400,
  '@media (max-width:960px)': {
    fontSize: '17px',
    margin: '14px 0px',
  },
}));
