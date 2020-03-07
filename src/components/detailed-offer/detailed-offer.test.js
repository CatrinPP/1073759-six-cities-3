import React from 'react';
import renderer from 'react-test-renderer';
import DetailedOffer from './detailed-offer.jsx';
import {testOffers} from '../../mocks/tests.js';

it(`Should render DetailedOffer correctly`, () => {
  const tree = renderer
    .create(<DetailedOffer
      offer={testOffers[0].offers[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
