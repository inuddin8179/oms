import React from 'react';

import DataTable from '@components/DataTable/index';
import { Box, Typography } from '@mui/material';
import { Column } from '@utils/types';

interface DataTableWithTitleHeaderType extends React.ComponentProps<'div'> {
  headerTitle: string;
  rows: any[];
  columns: Column[];
}
function Header({ title }: { title: string }) {
  return (
    <Box p={2}>
      <Typography fontSize={'25px'} textTransform={'uppercase'} fontWeight={'bold'}>
        {title}
      </Typography>
    </Box>
  );
}
function DataTableWithTitleHeader({ style, headerTitle, rows, columns }: DataTableWithTitleHeaderType) {
  return (
    <Box sx={style}>
      <DataTable
        elevation={2}
        columns={columns}
        rows={rows}
        isPaginationRequired={false}
        isHeaderRequired={true}
        headerComponent={<Header title={headerTitle} />}
      />
    </Box>
  );
}

export default DataTableWithTitleHeader;
