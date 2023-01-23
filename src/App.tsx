import React from 'react';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>Barev</div>
    </ThemeProvider>
  );
};

export default App;
