import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';
import {offerShape} from '../../const.js';

const App = (props) => {
  const {offers, placesToStayCount} = props;

  const placeCardNameHandler = () => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offers={offers}
            onPlaceCardNameClick={placeCardNameHandler}
            placesToStayCount={placesToStayCount}
          />
        </Route>
        <Route exact path="/dev-offer">
          <DetailedOffer
            offer={offers[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  placesToStayCount: PropTypes.number.isRequired
};

export default App;
