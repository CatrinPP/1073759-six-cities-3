import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should place card name be pressed`, () => {
  const onPlaceCardNameCLick = jest.fn();

  const main = mount(
      <Main
        placesToStayCount={312}
        offerTitles={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]}
        onPlaceCardNameClick={onPlaceCardNameCLick}
      />
  );

  const placeCardNames = main.find(`.place-card__name a`);

  placeCardNames.forEach((it) => it.props().onClick());

  expect(onPlaceCardNameCLick.mock.calls.length).toBe(5);
});
