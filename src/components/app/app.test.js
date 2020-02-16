import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {offers} from '../../mocks/tests.js';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offers={offers}
      placesToStayCount={312}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
