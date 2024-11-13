import React from 'react';

import {
  Box,
  Button,
  Grid,
  Paper,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

import rowData from '../../JSON/entry.json';
import { ConsoleBox, StyledTableCell } from './ModelComponentStyles';

function ModelComponent() {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <>
      <Grid container>
        <Grid item mobile={8} laptop={12}>
          <ConsoleBox>
            <Typography>Meta Model Console</Typography>
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <TextField id="outlined-search" label="Search field" type="search" />
              <Button variant="contained" onClick={() => window.location.replace('/adminportal/modelfields')}>
                New
              </Button>
            </Box>
          </ConsoleBox>
          <Box mt="10px">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>
                      {/* {rowData.map((rows) => (
                        <StyledTableCell key={rows.calories}>
                          {rows.headerName}
                        </StyledTableCell>
                      ))} */}
                      Name
                    </StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rowData.length > 0
                    ? rowData.map(row => (
                        // <Box>
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.calories}</StyledTableCell>
                        </StyledTableRow>
                        // </Box>
                      ))
                    : 'No records found'}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ModelComponent;
