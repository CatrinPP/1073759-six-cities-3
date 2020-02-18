import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offer from './offer';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  images: [`img/apartment-01.jpg`],
  isPremium: true,
  price: 200,
  title: `Amazing Apartment`,
  type: `Apartment`,
  rating: 92
};

it(`Get offer data on place card hover`, () => {
  const onMouseEnterMock = jest.fn();

  const placeCard = shallow(
      <Offer
        offer={mock}
        onMouseEnter={onMouseEnterMock}
      />
  );

  placeCard.simulate(`mouseEnter`);
  expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
});
