import { Profile } from '@components/index';
import { Help } from '@mui/icons-material';
import { Box } from '@mui/material';

import { HeaderBox } from './HeaderStyle';

const HeaderComponent = () => {
  return (
    <HeaderBox>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img alt="" src="/icons/logo.svg" style={{ padding: '4px' }} />
      </Box>
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        Help
        <Help></Help>
      </Box>
      <Box>
        <Profile />
      </Box>
    </HeaderBox>
  );
};
export default HeaderComponent;
