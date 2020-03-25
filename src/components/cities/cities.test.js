import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Cities from './cities.jsx';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const mockCity = {
  name: `Paris`,
};

it(`Should render Cities correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Cities />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
