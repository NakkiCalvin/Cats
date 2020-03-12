import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import Login from '../modules/auth';
import Main from '../modules/main';

class AppRouter extends PureComponent {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Router basename="/" history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot" component={Login} />
          <PrivateRoute
            path="/"
            component={Main}
            authenticated={this.props.auth.authenticated}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});
export default connect(mapStateToProps)(AppRouter);
