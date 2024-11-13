import AddIcon from '@mui/icons-material/Add';
import { Button, Toolbar } from '@mui/material';

const FilterHeader = () => (
  <Toolbar sx={{ borderBottom: '1px solid #DCDCDC' }}>
    <Button variant="outlined" startIcon={<AddIcon />}>
      Add a filter
    </Button>
  </Toolbar>
);

export default FilterHeader;
