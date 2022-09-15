import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './styles/global.scss';

import globalStore from './stores/global.js';

const root = ReactDOM.createRoot(document.querySelector('#content'));
root.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
