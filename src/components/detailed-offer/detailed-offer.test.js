import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import DetailedOffer from './detailed-offer.jsx';
import {testOffers, testComments} from '../../test-mocks.js';
import {SortingType, AuthorizationStatus} from '../../const.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const mockCity = {
  name: `Paris`,
};

it(`Should render DetailedOffer correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      city: mockCity,
      sortType: SortingType.DEFAULT,
    },
    [NameSpace.DATA]: {
      commentsList: testComments,
      offersNearby: testOffers[0].offers,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <DetailedOffer
            offer={testOffers[0].offers[0]}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
