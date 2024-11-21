import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'macro-css'
//https://www.figma.com/design/fw0toTyXMwM1y4WIe0YFrJ/React-Sneakers?node-id=60-2&node-type=frame&t=ESHPLIFYBk1TLv40-0

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
