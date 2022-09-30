// Dependencies
import React from 'react';
import { ThemeProvider } from '@mui/material';

// App routes
import AppRouter from './router';

// Theme
import theme from './theme';

// Create app
const App = () => (
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
);

// Export app
export default App;
