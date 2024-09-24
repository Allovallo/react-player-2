import React from 'react';
import ReactDOM from 'react-dom/client';
import { Example1 } from './component/Example1';
import videos from './videos.json';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Example1 url={videos} />
  </React.StrictMode>
);
