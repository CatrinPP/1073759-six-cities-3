import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Header from './header.jsx';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

it(`Should render Header for authorized user correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Header
              handleSignInLinkClick={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Header for unauthorized user correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <Header
              handleSignInLinkClick={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
