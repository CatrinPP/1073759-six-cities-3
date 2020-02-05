import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesToStayCount} = props;

  return (
    <Main placesToStayCount={placesToStayCount}/>
  );
};

export default App;
