import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

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
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Bungalow`, `House`, `Room`, `Studio`, `Villa`]).isRequired,
  })).isRequired,
  placesToStayCount: PropTypes.number.isRequired
};

export default App;
