import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';

export default
  <Route>
    <Route path="/" component={App} >
      <IndexRedirect to="index" />

      <Route path="index" component={App} />
    </Route>
  </Route>;
