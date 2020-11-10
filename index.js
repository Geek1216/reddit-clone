import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import MainRoute from './routes';
import store from './store';
import './styles/index.less';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainRoute />
    </Router>
  </Provider>,
  document.getElementById('root')
);
