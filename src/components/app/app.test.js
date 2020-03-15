import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import App from './app.jsx';
import {testOffers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

const mockCity = {
  name: `Paris`,
};

it(`Render App`, () => {
  const store = mockStore({
    city: mockCity,
    currentOffer: testOffers[0].offers[0],
    offers: testOffers[0].offers,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
