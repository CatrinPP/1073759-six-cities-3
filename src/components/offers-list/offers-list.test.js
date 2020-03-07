import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import OffersList from './offers-list.jsx';
import {testOffers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render Offers list correctly`, () => {
  const store = mockStore({
    offers: testOffers[0].offers,
    city: testOffers[0].city
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <OffersList
            onPlaceCardNameClick={() => {}}
            handlePlaceCardHover={() => {}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
