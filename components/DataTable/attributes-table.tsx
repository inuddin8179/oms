import React from 'react';

import { theme } from '@lib/theme';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { TileAndValue } from '@utils/types';

import { AttributesKey, AttributesValue } from './datatable-styles';

interface AttributesTablePropsType extends React.ComponentProps<'div'> {
  isCustomComponent?: boolean;
  Component?: any;
  title: string;
  data: any;
}

const AttributesTable = (props: AttributesTablePropsType) => {
  const { data, title, style } = props;
  return (
    <Box sx={{ ...style, mt: 2 }}>
      <Paper sx={{ background: '#fff', marginLeft: '10px' }}>
        <Stack>
          <Box p={2}>
            <Typography
              fontSize={'25px'}
              textTransform={'uppercase'}
              color={theme?.palette?.text?.primary}
              fontWeight={'bold'}>
              {title}
            </Typography>
          </Box>
          {data && (
            <Stack p={1}>
              {data?.map((item: TileAndValue, index: number) => (
                <Stack direction={'row'} flexWrap={'wrap'} key={index} sx={{ padding: '5px 10px' }}>
                  <AttributesKey>{item.title}</AttributesKey>
                  <AttributesValue>{item.value}</AttributesValue>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default AttributesTable;
