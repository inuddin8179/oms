import { default as styled, default as styledComponent } from '@emotion/styled';
import { Box, TableCell, tableCellClasses } from '@mui/material';

export const ConsoleBox = styledComponent(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'grey',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
