// Dependencies
import { Components } from '@mui/material';

// Override components
const components: Components = {
  MuiCheckbox: {
    defaultProps: {
      color: 'warning',
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      color: 'warning',
    },
    styleOverrides: {
      root: {
        borderRadius: 28,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      size: 'large',
      color: 'warning',
      variant: 'contained',
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0,
        borderTop: '20px solid rgb(237, 127, 61)',
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        ':nth-of-type(odd)': {
          backgroundColor: 'white',
        },
        ':nth-of-type(even)': {
          backgroundColor: 'rgb(232, 232, 232)',
        },
      },
    },
  },
  MuiPagination: {
    defaultProps: {
      shape: 'rounded',
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        borderBottom: '2px solid transparent',
        '&.Mui-selected': {
          backgroundColor: 'transparent',
          borderBottom: '2px solid rgb(237, 127, 61)',
        },
        '&.Mui-disabled': {
          visibility: 'hidden',
        },
      },
    },
  },
};

// Export components
export default components;
