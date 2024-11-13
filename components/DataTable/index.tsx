import { useState } from 'react';

import { Checkbox } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { DataTableProps, RowItemsProps } from '@utils/types';
import dynamic from 'next/dynamic';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const NoRecordsFound = dynamic(() => import('./NoRecordsFound'));

const DataTable = <T,>({
  columns,
  rows,
  rowsPerPageOptions,
  isPaginationRequired = false,
  style,
  elevation = 0,
  isHeaderRequired = false,
  headerComponent,
  handleOnClick,
  handleCheckboxChange,
  showCheckBox = false,
}: DataTableProps<T>) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [checkAll, setCheckAll] = useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const router = useRouter();
  const handleRouteNavigation = (rowItem: RowItemsProps) => {
    if (rowItem.path) {
      router.push(`${rowItem?.path}`);
    }
  };
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: '100%',
        ...style,
      }}>
      {isHeaderRequired && headerComponent}
      <TableContainer
        sx={{
          maxHeight: typeof window !== 'undefined' ? 0.63 * window.innerHeight : 440,
        }}>
        <Table aria-label="table" stickyHeader>
          <TableHead>
            <TableRow sx={{ borderBottom: '3.2px solid #4E4C4C' }}>
              {columns?.map((column: any, index: number) => (
                <>
                  <TableCell>
                    {index === 0 && showCheckBox && (
                      <Checkbox
                        color="primary"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          handleCheckboxChange?.({
                            data: column,
                            isChecked: event?.target?.checked ?? false,
                          });
                          setCheckAll(!checkAll);
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell
                    key={column?.id}
                    align={column?.align}
                    sx={{ minWidth: column?.minWidth, fontWeight: 'bold' }}>
                    {column?.label}
                  </TableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflow: 'scroll !important' }}>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns?.map((column, index) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    const rowItem: RowItemsProps = row[column?.id];
                    const Component = rowItem?.Component;
                    return (
                      <>
                        <TableCell>
                          {index === 0 && showCheckBox && (
                            <Checkbox
                              checked={checkAll}
                              color="primary"
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                handleCheckboxChange?.({
                                  data: row,
                                  isChecked: event?.target?.checked ?? false,
                                });
                              }}
                            />
                          )}
                        </TableCell>
                        {rowItem?.showDefaultRowValue ? (
                          <TableCell
                            key={index}
                            align={column?.align ?? 'left'}
                            sx={{
                              color: rowItem?.isAction || rowItem?.type === 'component' ? 'blue' : '',
                              cursor: rowItem?.isAction ? 'pointer' : '',
                            }}
                            onClick={() => {
                              if (rowItem.isAction) {
                                handleRouteNavigation(rowItem);
                              }
                              handleOnClick && handleOnClick(rowItem);
                            }}>
                            {rowItem?.value}
                          </TableCell>
                        ) : (
                          rowItem?.type === 'component' && <TableCell key={index}>{Component}</TableCell>
                        )}
                      </>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {isPaginationRequired && rows && rows?.length != 0 && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
      {(rows?.length === 0 || rows == undefined) && <NoRecordsFound />}
    </Paper>
  );
};

export default DataTable;
