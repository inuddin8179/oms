import React from 'react';

import { Toolbar, Typography } from '@mui/material';

export default function NoRecordsFound() {
  return (
    <Toolbar sx={{ borderTop: '1px solid #DCDCDC', display: 'flex', justifyContent: 'center' }}>
      <Typography>No records found</Typography>
    </Toolbar>
  );
}
