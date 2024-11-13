import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AttributesKey = styled(Typography)(() => ({
  flex: '1 1 40%',
  fontSize: '17px',
  lineHeight: '16px',
  fontWeight: 400,
  color: '#4E4C4C',
  opacity: '55%',
}));
export const AttributesValue = styled(Typography)(() => ({
  flex: '1 1 60%',
  fontSize: '14px',
  fontWeight: 500,
}));
