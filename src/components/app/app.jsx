import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {offerTitles, placesToStayCount} = props;

  const placeCardNameHandler = () => {};

  return (
    <Main
      offerTitles={offerTitles}
      onPlaceCardNameClick={placeCardNameHandler}
      placesToStayCount={placesToStayCount}
    />
  );
};

App.propTypes = {
  offerTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  placesToStayCount: PropTypes.number.isRequired
};

export default App;
