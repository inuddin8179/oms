import * as React from 'react';

import { theme } from '@lib/theme';
import { Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//   event.preventDefault();
//   // alert('Hi');
// };

export default function BasicBreadcrumbs(props: any) {
  const breadCrumbData = props;
  
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '10px',
        backgroundColor: '#fff',
        border: '1px solid whitesmoke',
        '.MuiBreadcrumbs-ol': {
          '.MuiBreadcrumbs-separator': {
            color: 'blue',
            margin: '0px',
          },
        },
      }}
      role="presentation"
      // onClick={handleClick}
    >
      <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '22px', fontWeight: '900' }}>
        <Link underline="hover" color={theme?.palette?.colors?.hexTwo} href="/oms/fulfillments">
          Back to Orders
        </Link>
        {/* <Link underline="hover" color={theme?.palette?.colors?.hexTwo} href="/oms/order">
          View Customers
        </Link> */}
        <Typography sx={{ fontSize: '22px', fontWeight: '900' }} color={theme?.palette?.primary?.main}>
          {breadCrumbData?.data?.summaryInfo?.orderRef} {breadCrumbData?.data?.summaryInfo?.orderStatus}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
