import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import {Favorites} from './favorites.jsx';
import {testFavorites} from '../../test-mocks.js';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

it(`Should render Favorites correctly for authorized user`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Favorites
              favorites={testFavorites}
              getFavoriteOffers={() => {}}
              handleBookmarkButtonClick={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Favorites correctly for unauthorized user`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Favorites
              favorites={testFavorites}
              getFavoriteOffers={() => {}}
              handleBookmarkButtonClick={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
