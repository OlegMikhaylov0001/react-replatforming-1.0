import React from 'react';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import Router from './components/Router';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
