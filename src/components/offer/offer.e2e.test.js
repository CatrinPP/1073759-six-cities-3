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

describe(`Events`, () => {
  it(`Get function on card hover`, () => {
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

  it(`Get function on title click`, () => {
    const onPlaceCardNameClickMock = jest.fn();

    const placeCard = shallow(
        <Offer
          offer={mock}
          onPlaceCardNameClick={onPlaceCardNameClickMock}
        />
    );

    placeCard.find(`.place-card__name a`).simulate(`click`);
    expect(onPlaceCardNameClickMock).toHaveBeenCalledTimes(1);
  });
});
