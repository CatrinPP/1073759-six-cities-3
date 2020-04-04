import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Favorites from './favorites.jsx';
import {testOffers} from '../../test-mocks.js';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

it(`Should render Favorites correctly for authorized user`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      favorites: testOffers,
    },
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Favorites
              authorizationStatus={AuthorizationStatus.AUTH}
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
      favorites: testOffers,
    },
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Favorites
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
