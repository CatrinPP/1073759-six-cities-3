import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Main from './main.jsx';
import {testOffers} from '../../test-mocks.js';
import {SortingType, AuthorizationStatus} from '../../const.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const mockCity = {
  name: `Paris`,
};

it(`Should render Main with not yet loaded offers correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      isLoaded: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
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

it(`Should render Main with offers correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      isLoaded: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
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

it(`Should render Main for authorized users correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      isLoaded: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
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
