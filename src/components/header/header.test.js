import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Header from './header.jsx';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

it(`Should render Header correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Header
            handleSignInLinkClick={() => {}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
