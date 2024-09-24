import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Example1 } from './component/Example1';
// import videos from './videos.json';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './component/GlobalStyle';
import { Reader } from './component/Reader/Reader';
import publications from './publications.json';

import './index.css';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Example1 url={videos} /> */}
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>
);
