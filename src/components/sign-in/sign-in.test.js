import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import SignIn from './sign-in.jsx';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

it(`Should render SignIn page correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
  });
  const tree = renderer
  .create(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onSubmit={() => {}}
          />
        </Provider>
      </BrowserRouter>
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render SignIn page correctly for authorized user`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
  });
  const tree = renderer
  .create(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn
            authorizationStatus={AuthorizationStatus.AUTH}
            onSubmit={() => {}}
          />
        </Provider>
      </BrowserRouter>
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
