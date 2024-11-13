import React from 'react';

import { EXPORT_DATA_TYPES } from '@lib/content/fulfillmentsContent';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function ExportData() {
  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ my: 2, width: '100%' }}>
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ background: 'none' }}>
          {EXPORT_DATA_TYPES.map((item: { title: string; value: string }, index: number) => {
            return (
              <MenuItem value={item.value} key={index} sx={{ background: 'white' }}>
                <em>{item.value}</em>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default ExportData;
