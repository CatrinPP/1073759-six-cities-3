import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Offer from './offer.jsx';
import {testOffers} from '../../test-mocks.js';
import {PlaceCardType} from '../../const.js';

const mockStore = configureStore([]);

it(`Should render Offer correctly with class cities`, () => {
  const store = mockStore({});
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Offer
              offer={testOffers[0].offers[0]}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              handleBookmarkButtonClick={() => {}}
              handlePlaceCardHover={() => {}}
              handlePlaceCardNameClick={() => {}}
              placeCardType={PlaceCardType.CITIES}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Offer correctly with class near-places`, () => {
  const store = mockStore({});
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Offer
              offer={testOffers[0].offers[0]}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              handleBookmarkButtonClick={() => {}}
              handlePlaceCardHover={() => {}}
              handlePlaceCardNameClick={() => {}}
              placeCardType={PlaceCardType.NEAR_PLACES}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Offer correctly with class favorite`, () => {
  const store = mockStore({});
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Offer
              offer={testOffers[0].offers[0]}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              handleBookmarkButtonClick={() => {}}
              handlePlaceCardHover={() => {}}
              handlePlaceCardNameClick={() => {}}
              placeCardType={PlaceCardType.FAVORITES}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
