import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';

it(`Should render Offer correctly`, () => {
  const tree = renderer
    .create(<Offer
      title={`Wood and stone place`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
