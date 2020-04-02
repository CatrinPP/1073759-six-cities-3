import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
// import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {AppRoute, offerShape} from '../../const.js';
// import {offerShape, AuthorizationStatus} from '../../const.js';
import {getCurrentOffer} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus, getIsSignInRequired} from '../../reducer/user/selectors.js';
import {Operation} from '../../reducer/user/user.js';
import SignIn from '../sign-in/sign-in.jsx';
import {getServerError} from '../../reducer/app/selectors.js';
// import Error from '../error/error.jsx';
import history from '../../history.js';
import Favorites from '../favorites/favorites.jsx';

class App extends PureComponent {
  // _renderApp() {
  //   const {
  //     authorizationStatus,
  //     currentOffer,
  //     isSignInRequired,
  //     login,
  //     offers,
  //     serverError,
  //   } = this.props;

  //   if (isSignInRequired && authorizationStatus === AuthorizationStatus.NO_AUTH) {
  //     return (
  //       <SignIn
  //         handleFormSubmit={login}
  //       />
  //     );
  //   }

  //   if (serverError) {
  //     return (
  //       <Error />
  //     );
  //   }

  //   if (currentOffer === null) {
  //     return (
  //       <Main
  //         offers={offers}
  //       />
  //     );
  //   } else {
  //     return (
  //       <DetailedOffer
  //         offer={currentOffer}
  //       />
  //     );
  //   }
  // }

  render() {
    const {authorizationStatus, login} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main />
          </Route>
          <Route exact path="/dev-favorites">
            <Favorites />
          </Route>
          {/* <Route exact path="/dev-offer">
            <DetailedOffer
              offer={currentOffer}
            />
          </Route> */}
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              authorizationStatus={authorizationStatus}
              handleFormSubmit={login}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentOffer: PropTypes.shape(offerShape),
  isSignInRequired: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  serverError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  currentOffer: getCurrentOffer(state),
  isSignInRequired: getIsSignInRequired(state),
  serverError: getServerError(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
