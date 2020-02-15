import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const Settings = {
  PLACES_TO_STAY_COUNT: 312
};

ReactDOM.render(
    <App
      offers={offers}
      placesToStayCount={Settings.PLACES_TO_STAY_COUNT}
    />,
    document.querySelector(`#root`)
);
