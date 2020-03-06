import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Map from './map.jsx';
import {offers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render Map correctly`, () => {
  const store = mockStore({
    offers: offers[0].offers,
    city: offers[0].city
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
