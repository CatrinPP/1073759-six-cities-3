import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {AppRoute} from '../../const.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import SignIn from '../sign-in/sign-in.jsx';
import {getServerError} from '../../reducer/app/selectors.js';
import Error from '../error/error.jsx';
import history from '../../history.js';
import Favorites from '../favorites/favorites.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import {getLoadedState} from '../../reducer/data/selectors.js';
import EmptyContainer from '../../components/empty-container/empty-container.jsx';

class App extends PureComponent {
  render() {
    const {authorizationStatus, isLoaded, loadCardDetailedData, login, serverError} = this.props;

    if (!isLoaded && serverError) {
      return (
        <Error />
      );
    } else if (!isLoaded) {
      return (
        <EmptyContainer />
      );
    }

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT} component={Main} />
          <Route exact path={`${AppRoute.OFFER}/:id`}
            render={({match}) => {
              loadCardDetailedData(+match.params.id);
              return (
                <DetailedOffer
                  id={+match.params.id}/>
              );
            }}
          />
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
  isLoaded: PropTypes.bool.isRequired,
  loadCardDetailedData: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  serverError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isLoaded: getLoadedState(state),
  serverError: getServerError(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  loadCardDetailedData(id) {
    dispatch(DataOperation.getDetailedData(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
