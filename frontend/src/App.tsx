// Dependencies
import React from 'react';
import { ThemeProvider } from '@mui/material';

// App routes
import AppRouter from './router';

// Theme
import theme from './theme';
import AppProvider from './context';

// Create app
const App = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </ThemeProvider>
);

// Export app
export default App;
