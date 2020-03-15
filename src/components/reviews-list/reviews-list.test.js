import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';
import {testComments} from '../../mocks/tests.js';

it(`Should render Reviews list correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      commentsList={testComments}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
