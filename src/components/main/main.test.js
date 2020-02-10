import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Should render Main correctly`, () => {
  const tree = renderer
    .create(<Main
      offerTitles={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]}
      onPlaceCardNameClick={() => {}}
      placesToStayCount={312}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
