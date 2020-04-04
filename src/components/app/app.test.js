import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import App from './app.jsx';
import {testOffers, testComments} from '../../test-mocks.js';
import {SortingType, AuthorizationStatus} from '../../const.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const mockCity = {
  name: `Paris`,
};

it(`Render App for unauthorized user`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      serverError: false,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      commentsList: testComments,
      currentOffer: testOffers[0].offers[0],
      isLoaded: true,
      offersNearby: testOffers[0].offers,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isReviewFormBlocked: false,
      isSignInRequired: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render App for authorized user`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      serverError: false,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      commentsList: testComments,
      currentOffer: testOffers[0].offers[0],
      isLoaded: true,
      offersNearby: testOffers[0].offers,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      isReviewFormBlocked: false,
      isSignInRequired: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render App when data is not yet loaded`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      serverError: false,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      commentsList: testComments,
      currentOffer: testOffers[0].offers[0],
      isLoaded: false,
      offersNearby: testOffers[0].offers,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isReviewFormBlocked: false,
      isSignInRequired: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render App when server error`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      serverError: true,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      commentsList: testComments,
      currentOffer: testOffers[0].offers[0],
      isLoaded: false,
      offersNearby: testOffers[0].offers,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isReviewFormBlocked: false,
      isSignInRequired: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
