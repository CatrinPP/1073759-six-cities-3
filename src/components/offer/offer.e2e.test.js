import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import Offer from './offer';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  bedrooms: 1,
  coords: [11.11, 12.12],
  description: ``,
  features: [`Wifi`, `Washing machine`],
  guests: 3,
  host: {
    avatar: ``,
    name: `TestHost`,
    isStar: false
  },
  id: `offer.e2e.test`,
  images: [`img/apartment-01.jpg`],
  isPremium: true,
  price: 200,
  rating: 92,
  title: `Amazing Apartment`,
  type: `Apartment`,
};

const mockStore = configureStore([]);

describe(`Events`, () => {
  it(`Get function on card hover`, () => {
    const store = mockStore();
    store.dispatch = jest.fn();

    const placeCard = mount(
        <Provider store={store}>
          <Offer
            handlePlaceCardHover={store.dispatch}
            offer={mock}
          />
        </Provider>
    );

    placeCard.find(`.place-card`).simulate(`mouseEnter`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it(`Get function on card blur`, () => {
    const store = mockStore();
    store.dispatch = jest.fn();

    const placeCard = mount(
        <Provider store={store}>
          <Offer
            handlePlaceCardHover={store.dispatch}
            offer={mock}
          />
        </Provider>
    );

    placeCard.find(`.place-card`).simulate(`mouseLeave`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it(`Get function on title click`, () => {
    const store = mockStore();
    store.dispatch = jest.fn();

    const placeCard = mount(
        <Provider store={store}>
          <Offer
            handlePlaceCardNameClick={store.dispatch}
            offer={mock}
          />
        </Provider>
    );

    placeCard.find(`.place-card__name a`).simulate(`click`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
