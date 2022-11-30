import { NavBar } from './components/NavBar';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/global-styles';
import { RoutesApp } from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { AuthProvider } from 'context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavBar />
        <RoutesApp />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
