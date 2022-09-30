// Dependencies
import { Components } from '@mui/material';

// Override components
const components: Components = {
  MuiOutlinedInput: {
    defaultProps: {
      color: 'warning'
    },
    styleOverrides: {
      root: {
        borderRadius: 28
      }
    }
  },
  MuiButton: {
    defaultProps: {
      color: 'warning',
      variant: 'contained'
    },
    styleOverrides: {
      sizeMedium: {
        borderRadius: 18
      }
    }
  }
};

// Export components
export default components;
