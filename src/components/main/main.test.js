import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Main from './main.jsx';
import {offers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render Main correctly`, () => {
  const store = mockStore({
    allOffers: offers,
    offers: offers[0].offers,
    city: offers[0].city
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
