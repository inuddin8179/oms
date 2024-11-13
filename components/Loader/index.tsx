import React from 'react';

import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        zIndex: 9999,
        position: 'fixed',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        background: 'rgba(0, 0, 0, 0.5)',
        // background: 'rgba(220, 208, 208, 0.9)',
      }}>
      <CircularProgress sx={{ color: 'white' }} />
    </Box>
  );
}

export default Loader;
