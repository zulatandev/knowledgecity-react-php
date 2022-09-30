// Dependencies
import { createTheme } from '@mui/material';

// Configs
import breakpoints from './breakpoints';
import components from './components';

// Create theme
const theme = createTheme({
  spacing: 1,
  breakpoints,
  components,
});

// Export theme
export default theme;
