import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import './index.css';

ReactDOM.render((
  <Provider store={Store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>), document.getElementById('root'));

serviceWorker.unregister();
