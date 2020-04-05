import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import DetailedOffer from './detailed-offer.jsx';
import {testOffers, testComments, testOffersServerShape} from '../../test-mocks.js';
import {SortingType, AuthorizationStatus} from '../../const.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const mockCity = {
  name: `Paris`,
};

it(`Should render DetailedOffer for authorized user correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffersServerShape,
      commentsList: testComments,
      offersNearby: testOffers[0].offers,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      isReviewFormBlocked: false,
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <DetailedOffer
              id={1}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render DetailedOffer for unauthorized user correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffersServerShape,
      commentsList: testComments,
      offersNearby: testOffers[1].offers,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isReviewFormBlocked: false,
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <DetailedOffer
              id={1}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
