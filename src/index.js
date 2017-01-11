import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './layouts/Admin';
import store from './store';
import './index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
