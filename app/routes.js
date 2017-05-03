/**
 * Created by sandeepkumar on 20/04/17.
 */
/* eslint-disable jsx-no-bind */
import React, { Component, PropTypes } from 'react';
import { applyRouterMiddleware, browserHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import _ from 'lodash';
import { useScroll } from 'react-router-scroll';

import auth from './api/auth';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ObjectSelector from './containers/ObjectSelector';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './containers/NotFoundPage';

class Routes extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.logout === true) {
      browserHistory.push('/login');
    }
  }

  requireAuth(nextState, replace) {
    if (nextState.location.search) {
      auth.parseTokenFromQueryString(nextState.location.search);
      replace({ pathname: '/' });
    }
    else if (!auth.loggedIn()) {
      auth.clearTokens();
      const query = nextState.location.pathname !== '/' ? { query: { return_to: nextState.location.pathname } } : {};
      replace({
        pathname: '/login',
        ...query,
      });
    }
  }

  parseAuthHash(nextState, replace, callback) {
    if (auth.loggedIn()) {
      replace({ pathname: '/' });
    }
    callback();
  }

  render() {
    return (
      <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        <Route path="login" component={LoginPage} onEnter={this.parseAuthHash}/>
        <Route path="/" component={App} onEnter={this.requireAuth}>
          <IndexRoute component={HomePage} />

          <Route path="/ObjectSelector" component={ObjectSelector} />

          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
