import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {placesToStayCount, offerTitles} = props;

  return (
    <Main
      placesToStayCount={placesToStayCount}
      offerTitles={offerTitles}
    />
  );
};

App.propTypes = {
  placesToStayCount: PropTypes.number.isRequired,
  offerTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
