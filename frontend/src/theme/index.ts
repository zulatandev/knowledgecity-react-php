// Dependencies
import { createTheme } from '@mui/material';

// Configs
import breakpoints from './breakpoints';
import components from './components';
import typography from './typography';

// Create theme
const theme = createTheme({
  spacing: 1,
  breakpoints,
  components,
  typography
});

// Export theme
export default theme;
