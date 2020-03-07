import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Main from './main.jsx';
import {testOffers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render Main correctly`, () => {
  const store = mockStore({
    allOffers: testOffers,
    offers: testOffers[0].offers,
    city: testOffers[0].city
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
