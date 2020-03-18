import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import OffersList from './offers-list.jsx';
import {testOffers} from '../../mocks/tests.js';
import {SortingType} from '../../const.js';

const mockStore = configureStore([]);

it(`Should render Offers list correctly`, () => {
  const store = mockStore({
    sortType: SortingType.DEFAULT,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <OffersList
            city={testOffers[0].city}
            isCitiesClass={true}
            offers={testOffers[0].offers}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
