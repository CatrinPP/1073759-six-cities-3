import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  PLACES_TO_STAY_COUNT: 312
};

const TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

ReactDOM.render(
    <App
      placesToStayCount={Settings.PLACES_TO_STAY_COUNT}
      offerTitles={TITLES}
    />,
    document.querySelector(`#root`)
);
