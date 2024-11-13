import { useState } from 'react';

import { DataTable } from '@components/index';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, TablePagination, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CollapsibleDataTableRow, CollapsibleDataTableTypes, Column, RowItemsProps } from '@utils/types';
import { useRouter } from 'next/router';

import NoRecordsFound from './NoRecordsFound';

function Row({
  data,
  columns,
  handleRouteNavigation,
  handleOnClick,
}: {
  data: CollapsibleDataTableRow;
  columns: readonly Column[];
  handleRouteNavigation: (e: RowItemsProps) => void;
  handleOnClick?: (e: RowItemsProps | null) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow>
        {columns?.map((column, index) => {
          const rowItem: RowItemsProps = data?.rowData[column?.id];
          const Component = rowItem?.Component;
          return (
            <TableCell
              key={index}
              align={column?.align ?? 'left'}
              sx={{
                color: rowItem?.isAction || rowItem?.type === 'component' ? 'blue' : '',
                cursor: rowItem?.isAction ? 'pointer' : '',
              }}>
              {rowItem?.isMainAttribute ? (
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                  <Typography
                    onClick={() => {
                      if (rowItem.isAction) {
                        handleRouteNavigation(rowItem);
                      }
                      handleOnClick && handleOnClick(rowItem);
                    }}>
                    {rowItem?.value}
                  </Typography>
                  <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </Box>
              ) : (
                <>{rowItem?.showDefaultRowValue ? rowItem?.value : Component}</>
              )}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <DataTable
                    columns={data?.rowData?.nestedColumns ?? []}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    rows={data?.rowData?.nestedRows ?? []}
                    isPaginationRequired={false}
                    isHeaderRequired={false}
                  />
                </TableRow>
              </TableHead>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const CollapsibleTable = ({
  isPaginationRequired,
  data,
  rowsPerPageOptions,
  columns,
  handleOnClick,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}: CollapsibleDataTableTypes) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage && setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage && setRowsPerPage(+event.target.value);
    setPage && setPage(1);
  };

  const router = useRouter();
  const handleRouteNavigation = (item: RowItemsProps) => {
    if (item.path) {
      router.push(`${item?.path}`);
    }
  };

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {columns?.map(columnData => (
                <>
                  <TableCell>{columnData.label}</TableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index: number) => (
              <Row
                data={item}
                key={index}
                columns={columns}
                handleRouteNavigation={handleRouteNavigation}
                handleOnClick={handleOnClick}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isPaginationRequired && data?.length > 0 && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage ?? 10}
          page={page ?? 1}
          onPageChange={() => handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
      {data?.length === 0 && <NoRecordsFound />}
    </Paper>
  );
};
export default CollapsibleTable;
