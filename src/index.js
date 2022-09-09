import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'

const root = ReactDOM.createRoot(document.querySelector('#content'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
