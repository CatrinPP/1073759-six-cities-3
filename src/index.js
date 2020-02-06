import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  PLACES_TO_STAY_COUNT: 312
};

ReactDOM.render(
    <App
      placesToStayCount={Settings.PLACES_TO_STAY_COUNT}
    />,
    document.querySelector(`#root`)
);
