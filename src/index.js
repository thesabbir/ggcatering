import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './layouts/Admin';
import { auth, firebase } from './store';
import './index.css';

render(
  <Provider auth={auth} firebase={firebase}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
