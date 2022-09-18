import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'src/App';
import 'src/styles/global.scss';
import globalStore from 'src/stores/global';

const root = createRoot(document.querySelector('#content') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
