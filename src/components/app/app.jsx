import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {placesToStayCount, offersTitles} = props;

  return (
    <Main
      placesToStayCount={placesToStayCount}
      offersTitles={offersTitles}
    />
  );
};

App.propTypes = {
  placesToStayCount: PropTypes.number.isRequired,
  offersTitles: PropTypes.array.isRequired
};

export default App;
