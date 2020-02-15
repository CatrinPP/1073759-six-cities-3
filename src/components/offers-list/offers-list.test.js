import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';
import {offers} from '../../mocks/tests.js';

it(`Should render Offers list correctly`, () => {
  const tree = renderer
    .create(<OffersList
      offers={offers}
      onPlaceCardNameClick={() => {}}
      placesToStayCount={312}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
