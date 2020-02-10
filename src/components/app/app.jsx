import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {offerTitles, placesToStayCount} = props;

  const placeCardNameHandler = () => {};

  return (
    <Main
      offerTitles={offerTitles}
      placesToStayCount={placesToStayCount}
      onPlaceCardNameClick={placeCardNameHandler}
    />
  );
};

App.propTypes = {
  placesToStayCount: PropTypes.number.isRequired,
  offerTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
