import React from 'react';
import renderer from 'react-test-renderer';
import Sorting from './sorting.jsx';

it(`Should render Reviews list correctly`, () => {
  const tree = renderer
    .create(<Sorting
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
