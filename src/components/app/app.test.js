import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import App from './app.jsx';
import {testOffers, testComments} from '../../test-mocks.js';
import {SortingType} from '../../const.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const mockCity = {
  name: `Paris`,
};

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      allOffers: testOffers,
      commentsList: testComments,
      currentOffer: testOffers[0].offers[0],
      offersNearby: testOffers[0].offers,
    },
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
