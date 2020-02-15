import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {offers} from '../../mocks/tests.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should place card name be pressed`, () => {
  const onPlaceCardNameCLick = jest.fn();

  const main = mount(
      <Main
        offers={offers}
        onPlaceCardNameClick={onPlaceCardNameCLick}
        placesToStayCount={312}
      />
  );

  const placeCardNames = main.find(`.place-card__name a`);

  placeCardNames.forEach((it) => it.props().onClick());

  expect(onPlaceCardNameCLick.mock.calls.length).toBe(5);
});
