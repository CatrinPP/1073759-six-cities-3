import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {offerShape} from '../../const.js';

const App = (props) => {
  const {offers, placesToStayCount} = props;

  const placeCardNameHandler = () => {};

  return (
    <Main
      offers={offers}
      onPlaceCardNameClick={placeCardNameHandler}
      placesToStayCount={placesToStayCount}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  placesToStayCount: PropTypes.number.isRequired
};

export default App;
