import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello, React</h1>
    </ThemeProvider>
  </React.StrictMode>
);
