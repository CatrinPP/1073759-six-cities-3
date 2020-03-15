import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Cities from './cities.jsx';
import {testOffers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render Cities correctly`, () => {
  const store = mockStore({
    allOffers: testOffers,
    city: testOffers[0].city
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Cities />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
