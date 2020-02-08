import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesToStayCount, offersTitles} = props;

  return (
    <Main
      placesToStayCount={placesToStayCount}
      offersTitles={offersTitles}
    />
  );
};

export default App;
