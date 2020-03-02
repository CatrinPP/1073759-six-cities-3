import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {offerShape} from '../../const.js';

class App extends PureComponent {
  _renderApp() {
    const {
      offers,
      currentOffer,
    } = this.props;

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
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)),
  currentOffer: PropTypes.shape(offerShape),
  handlePlaceCardName: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentOffer: state.currentOffer,
});

export {App};
export default connect(mapStateToProps)(App);
