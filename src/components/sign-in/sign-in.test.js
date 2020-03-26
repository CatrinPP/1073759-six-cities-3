import React from 'react';
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
      <Provider store={store}>
        <SignIn
          onSubmit={() => {}}
        />
      </Provider>
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
