import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {offersListShape} from '../../const.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePlaceCardName = this.handlePlaceCardName.bind(this);

    this.state = {
      currentOffer: null,
    };
  }

  handlePlaceCardName(value) {
    this.setState({
      currentOffer: value
    });
  }

  _renderApp() {
    const {offers} = this.props;
    const {currentOffer} = this.state;

    if (currentOffer === null) {
      return (
        <Main
          offers={offers}
          onPlaceCardNameClick={this.handlePlaceCardName}
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
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <DetailedOffer
              offer={offers[0].offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersListShape)).isRequired,
};

export default App;
