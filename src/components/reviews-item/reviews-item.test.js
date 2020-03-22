import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item.jsx';
import {testComments} from '../../test-mocks.js';

it(`Should render each Review correctly`, () => {
  const tree = renderer
    .create(<ReviewsItem
      comment={testComments[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
