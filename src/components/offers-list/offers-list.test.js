import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import OffersList from './offers-list.jsx';
import {testOffers} from '../../test-mocks.js';
import {SortingType, PlaceCardType} from '../../const.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

it(`Should render Offers list correctly with cities class`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      sortType: SortingType.DEFAULT,
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <OffersList
              city={testOffers[0].city}
              isCitiesClass={true}
              offers={testOffers[0].offers}
              placeCardType={PlaceCardType.CITIES}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Offers list correctly with near-places class`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      sortType: SortingType.DEFAULT,
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <OffersList
              city={testOffers[0].city}
              isCitiesClass={true}
              offers={testOffers[0].offers}
              placeCardType={PlaceCardType.NEAR_PLACES}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
