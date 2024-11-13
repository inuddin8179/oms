import React, { useState } from 'react';

import { Modal } from '@components/index';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { MobileTableProps, RowItemsProps } from '@utils/types';
import { useRouter } from 'next/router';

const MobileTable = ({ mobileData, mobileColumn }: MobileTableProps) => {
  const [modal, setModal] = useState<{ open: boolean; Component: React.ReactNode }>({ open: false, Component: null });

  function handleModal(Component: React.ReactNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setModal((previousData: any) => ({
      ...previousData,
      open: !previousData.open,
      Component: Component,
    }));
  }

  const router = useRouter();
  const handleRouteNavigation = (item: RowItemsProps) => {
    if (item.path) {
      router.push(`${item?.path}`);
    }
  };
  return (
    <Paper sx={{ marginTop: '10px' }}>
      <Stack sx={{ flexDirection: 'row' }}>
        <Stack sx={{ width: '85%' }}>
          <Box
            sx={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '5px', columnGap: '20px', rowGap: '10px' }}>
            {mobileColumn?.slice(0, 4)?.map(data => {
              const rowItem: RowItemsProps = mobileData?.[data?.id];
              const Component = rowItem?.Component;
              return (
                <Stack key={data?.id} sx={{ alignItems: 'flex-start' }}>
                  <Typography sx={{ fontSize: '10px' }}>{data?.label}</Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: rowItem?.isAction || rowItem?.type === 'component' ? 'blue' : '',
                      cursor: rowItem?.isAction ? 'pointer' : '',
                    }}
                    onClick={() => {
                      if (rowItem.isAction) {
                        handleRouteNavigation(rowItem);
                      }
                      if (rowItem?.type === 'component' && !rowItem?.isIndependentComponent) {
                        Component && handleModal(Component);
                      }
                    }}>
                    {mobileData?.[data?.id]?.value}
                  </Typography>
                </Stack>
              );
            })}
          </Box>
        </Stack>
        <Stack sx={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ fontSize: '11px' }}>Flag</Typography>
        </Stack>
      </Stack>
      {modal?.open && <Modal open={modal.open} Component={modal.Component} handleClose={() => handleModal(null)} />}
    </Paper>
  );
};
export default MobileTable;
