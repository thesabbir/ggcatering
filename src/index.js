import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './layouts/Admin';
import { auth, firebase, menu } from './store';
import './index.css';

render(
  <Provider auth={auth} firebase={firebase} menu={menu} >
    <App />
  </Provider>,
  document.getElementById('root'),
);
