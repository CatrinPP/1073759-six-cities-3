import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Offer from './offer.jsx';
import {testOffers} from '../../mocks/tests.js';

const mockStore = configureStore([]);

it(`Should render Offer correctly`, () => {
  const store = mockStore({});
  const tree = renderer
    .create(
        <Provider store={store}>
          <Offer
            offer={testOffers[0].offers[0]}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            handlePlaceCardHover={() => {}}
            handlePlaceCardNameClick={() => {}}
            isCitiesClass={true}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
