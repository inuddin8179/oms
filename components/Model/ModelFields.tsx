import { useState } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material';

const currencies = [
  {
    value: 'String',
    label: 'string',
  },
  {
    value: 'Integer',
    label: 'int',
  },
  {
    value: 'Byte',
    label: 'byte',
  },
  {
    value: 'Short',
    label: 'short',
  },
  {
    value: 'Char',
    label: 'char',
  },
  {
    value: 'Boolean',
    label: 'boolean',
  },
  {
    value: 'Float',
    label: 'float',
  },
  {
    value: 'Double',
    label: 'double',
  },
  {
    value: 'Long',
    label: 'long',
  },
];

const ModelFiledActions = () => {
  const [createModel, setCreateModel] = useState(false);
  const [modelFields, setModelFields] = useState<any>([]);
  const [fieldName, setFieldName] = useState('');
  const [fieldDataType, setFieldDataType] = useState('String');
  const [editFields, setEditFields] = useState(false);
  const [editName, setEditName] = useState('');
  const addFields = () => {
    setModelFields((preData: any) => [...preData, { fieldName: fieldName, fieldDataType: fieldDataType }]);
    setCreateModel(false);
    setFieldName('');
    setFieldDataType('');
  };
  const updateFields = () => {
    setModelFields((modelFields: any) => {
      const index = modelFields.findIndex(function (item: any) {
        return item.fieldName === editName;
      });
      if (index > -1) {
        modelFields[index] = {
          fieldName: fieldName,
          fieldDataType: fieldDataType,
        };
        return [...modelFields];
      } else {
        return [
          ...modelFields,
          {
            fieldName: fieldName,
            fieldDataType: fieldDataType,
          },
        ];
      }
    });
    setCreateModel(false);
    setEditName('');
    setFieldName('');
    setFieldDataType('');
  };
  const updateField = (index: any, dataType: string) => {
    setCreateModel(true);
    setFieldName(index);
    setFieldDataType(dataType);
  };
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextField id="outlined-search" label="Name*" type="name" sx={{ marginBottom: '10px' }} />
        <Button>Create</Button>
      </Box>
      <Grid container gap={'10px'}>
        <Grid item mobile={12} tablet={4}>
          <Typography sx={{ background: '#e6e6e6', padding: '6px 10px' }}>Fields</Typography>
          {modelFields?.length > 0 ? (
            <>
              {modelFields?.map((item: any, index: number) => (
                <Grid container key={index} sx={{ padding: '10px' }}>
                  <Grid
                    item
                    mobile={6}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Typography sx={{}}>{item?.fieldName}</Typography>
                  </Grid>
                  <Grid
                    item
                    mobile={6}
                    sx={{
                      gap: '10px',
                      display: 'flex',
                    }}>
                    <EditOutlinedIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        setEditFields(true);
                        updateField(item?.fieldName, item?.fieldDataType);
                        setEditName(item?.fieldName);
                      }}
                    />
                    <DeleteOutlineOutlinedIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        const data = [...modelFields];
                        data.splice(index, 1);
                        setModelFields(data);
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </>
          ) : (
            <Typography sx={{ padding: '10px' }}>No records found</Typography>
          )}
        </Grid>
        <Grid item mobile={12} laptop={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#e6e6e6',
              padding: '0px 10px',
            }}>
            <Typography>Details</Typography>
            <Button
              onClick={() => {
                setCreateModel(true);
              }}>
              New
            </Button>
          </Box>
          {createModel && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={fieldName}
                  sx={{ width: '47%' }}
                  onChange={(e: any) => setFieldName(e.target.value)}
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Data Type "
                  variant="outlined"
                  defaultValue="String"
                  value={fieldDataType}
                  sx={{ width: '47%' }}
                  onChange={e => {
                    setFieldDataType(e.target.value);
                  }}>
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              {editFields ? (
                <Button sx={{ display: 'flex', margin: '20px auto' }} onClick={updateFields}>
                  Update
                </Button>
              ) : (
                <Button sx={{ display: 'flex', margin: '20px auto' }} onClick={addFields}>
                  Save
                </Button>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default ModelFiledActions;
