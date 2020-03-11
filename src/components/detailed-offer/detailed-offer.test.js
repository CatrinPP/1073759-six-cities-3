import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import DetailedOffer from './detailed-offer.jsx';
import {testOffers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render DetailedOffer correctly`, () => {
  const store = mockStore();
  const tree = renderer
    .create(
        <Provider store={store}>
          <DetailedOffer
            offer={testOffers[0].offers[0]}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
