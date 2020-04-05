import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from "redux-mock-store";
import PrivateRoute from './private-route.jsx';
import {AuthorizationStatus, AppRoute} from '../../const.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

it(`Should render Private Route component correctly (authorized user)`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <PrivateRoute
              exact={true}
              path={AppRoute.FAVORITES}
              render={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Private Route component correctly (unauthorized user)`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });
  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <PrivateRoute
              exact={true}
              path={AppRoute.FAVORITES}
              render={() => {}}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
