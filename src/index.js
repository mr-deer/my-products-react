import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import throttle from 'lodash/throttle';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { loadState, saveState } from './utilities/local-storage';

import './styles/main.scss';

const persistedState = loadState();
const store = configureStore(persistedState);

const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(throttle(() => {
  saveState(
    store.getState()
  );
}, 1000));

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
