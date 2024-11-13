import React, { useState } from 'react';

import { Box, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useMobileCheck } from '@utils/isMobile';
import { AuthData } from '@utils/types';

import authData from '../../JSON/authdata.json';
import data from '../../JSON/databaseselection.json';

function DataSource() {
  const [name, setName] = useState<any>({});
  const [authName, setAuthName] = useState<AuthData[] | undefined>(authData);

  const handleChange = (event: SelectChangeEvent<any>, key: string) => {
    setName({ ...name, [key]: event.target.value });
  };

  const handleChangeAuth = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, Password: any) => {
    setAuthName((prevData: any) => {
      const index = prevData?.findIndex(function (item: any) {
        return item?.key == Password;
      });
      if (index > -1) {
        prevData[index] = {
          key: Password,
          value: event?.target?.value,
        };
        return [...prevData];
      }
    });
  };
  const handleReset = (event: any) => {
    setName((event.target.value = {}));
    setAuthName(authData);
  };
  const isMobile = useMobileCheck();

  return (
    <>
      <Box>
        <Typography>Data Source: Connection & Authentication Information</Typography>
        <Box>
          <Typography>Connection Information</Typography>
          <Box>
            {data.map((dataSources, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Typography sx={{ flexBasis: isMobile ? '17%' : '20%' }}>{dataSources?.value}</Typography>
                <Select
                  key={dataSources.options[0]}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={name[dataSources?.value]}
                  label={dataSources.label}
                  placeholder={name[dataSources?.label]}
                  onChange={event => {
                    handleChange(event, dataSources?.value);
                  }}
                  sx={{
                    width: isMobile ? '75%' : '50%',
                    margin: isMobile ? '0px 0px 27px 27px' : '0px 0px 20px 0px',
                  }}>
                  {dataSources.options?.map((cItem, index) => (
                    <MenuItem value={cItem} key={index}>
                      {cItem}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            ))}
            {/* <Typography>Host Name : </Typography> */}
          </Box>
        </Box>
        <Box>
          <Typography>Authentication Information</Typography>
          <Box>
            {authName?.map((authDataSources: any, index: number) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Typography sx={{ flexBasis: isMobile ? '17%' : '20%' }}>{authDataSources?.key}</Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  key={authDataSources?.key}
                  value={authDataSources?.value}
                  sx={{
                    width: isMobile ? '75%' : '50%',
                    margin: isMobile ? '0px 0px 27px 27px' : '0px 0px 20px 0px',
                  }}
                  onChange={event => {
                    handleChangeAuth(event, authDataSources?.key);
                  }}
                />
              </Box>
            ))}
            <Button variant="contained">Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DataSource;
