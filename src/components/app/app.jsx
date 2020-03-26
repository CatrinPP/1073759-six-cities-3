import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {offerShape, AuthorizationStatus} from '../../const.js';
import {getCurrentOffer, getOffers} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus, getIsSignInRequired} from '../../reducer/user/selectors.js';
import {Operation} from '../../reducer/user/user.js';
import SignIn from '../sign-in/sign-in.jsx';

class App extends PureComponent {
  _renderApp() {
    const {
      authorizationStatus,
      currentOffer,
      isSignInRequired,
      login,
      offers,
    } = this.props;

    if (isSignInRequired && authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignIn
          onSubmit={login}
        />
      );
    }

    if (currentOffer === null) {
      return (
        <Main
          offers={offers}
        />
      );
    } else {
      return (
        <DetailedOffer
          offer={currentOffer}
        />
      );
    }
  }

  render() {
    const {currentOffer} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <DetailedOffer
              offer={currentOffer}
            />
          </Route>
          <Route exact path="/dev-auth">
            <SignIn
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentOffer: PropTypes.shape(offerShape),
  isSignInRequired: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  currentOffer: getCurrentOffer(state),
  isSignInRequired: getIsSignInRequired(state),
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
