import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App from './App';
import NotFound from './NotFound';
import Posts from './Posts';
import React from 'react';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={Posts} />
        <Route component={Posts} path="topics/:topic" />
        <Route component={NotFound} path="*" />
      </Route>
    </Router>;
  }
});

export default Routes;
