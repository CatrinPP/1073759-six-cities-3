import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offer from './offer';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  image: `img/apartment-01.jpg`,
  isPremium: true,
  price: 200,
  title: `Amazing Apartment`,
  type: `Apartment`,
  rating: 92
};

it(`Get offer data on place card hover`, () => {
  let data;

  const writeData = (it) => {
    data = Object.assign({}, it);
  };

  const placeCard = shallow(
      <Offer
        offer={mock}
        onMouseEnter={writeData(mock)}
      />
  );

  placeCard.simulate(`mousenter`);
  expect(data.title).toBe(`Amazing Apartment`);
  expect(data.isPremium).toBe(true);
  expect(data.type).toBe(`Apartment`);
  expect(data.rating).toBe(92);
});
