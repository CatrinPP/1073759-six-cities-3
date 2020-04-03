import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {AppRoute} from '../../const.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation} from '../../reducer/user/user.js';
import SignIn from '../sign-in/sign-in.jsx';
import {getServerError} from '../../reducer/app/selectors.js';
import Error from '../error/error.jsx';
import history from '../../history.js';
import Favorites from '../favorites/favorites.jsx';
import PrivateRoute from '../private-route/private-route.jsx';

class App extends PureComponent {
  _renderApp() {
    const {
      serverError,
    } = this.props;

    if (serverError) {
      return (
        <Error />
      );
    }
    return (
      <Main />
    );
  }

  render() {
    const {authorizationStatus, login} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderApp()}
          </Route>
          <Route exact path={`${AppRoute.OFFER}/:id`} component={DetailedOffer} />
          <Route exact path={AppRoute.LOGIN}
            render={() => {
              return (
                <SignIn
                  authorizationStatus={authorizationStatus}
                  handleFormSubmit={login}
                />
              );
            }} />
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            render={() => {
              return (
                <Favorites />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  serverError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  serverError: getServerError(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
