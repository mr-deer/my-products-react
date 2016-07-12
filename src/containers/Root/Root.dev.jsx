import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from './DevTools';
import routes from '../../routes';

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function Root({ store, history }) {
  return (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = propTypes;

export default Root;
