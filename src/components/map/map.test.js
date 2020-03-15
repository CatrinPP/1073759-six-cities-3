import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import {testOffers} from '../../mocks/tests.js';

it(`Should render Map correctly`, () => {
  const tree = renderer
    .create(
        <Map
          city={testOffers[0].city}
          isBlockedZoom={false}
          mapWidth={`100%`}
          offers={testOffers[0].offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
