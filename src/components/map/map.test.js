import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Map from './map.jsx';
import {testOffers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render Map correctly`, () => {
  const store = mockStore({
    offers: testOffers[0].offers,
    city: testOffers[0].city
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Map />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
