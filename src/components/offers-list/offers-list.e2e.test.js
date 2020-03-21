import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import OffersList from './offers-list';
import {testOffers} from '../../mocks/tests.js';
import {SortingType} from '../../const';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Events`, () => {
  it(`Get function on card hover`, () => {
    const store = mockStore({
      sortType: SortingType.DEFAULT
    });
    store.dispatch = jest.fn();

    const placeCard = mount(
        <Provider store={store}>
          <OffersList
            city={testOffers[0].city}
            handlePlaceCardHover={store.dispatch}
            handlePlaceCardNameClick={store.dispatch}
            handleSortTypeClick={store.dispatch}
            isCitiesClass={true}
            offers={testOffers[0].offers}
          />
        </Provider>
    );

    placeCard.find(`.place-card`).first().simulate(`mouseEnter`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it(`Get function on card blur`, () => {
    const store = mockStore({
      sortType: SortingType.DEFAULT
    });
    store.dispatch = jest.fn();

    const placeCard = mount(
        <Provider store={store}>
          <OffersList
            city={testOffers[0].city}
            handlePlaceCardHover={store.dispatch}
            handlePlaceCardNameClick={store.dispatch}
            handleSortTypeClick={store.dispatch}
            isCitiesClass={true}
            offers={testOffers[0].offers}
          />
        </Provider>
    );

    placeCard.find(`.place-card`).first().simulate(`mouseLeave`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it(`Get function on title click`, () => {
    const store = mockStore({
      sortType: SortingType.DEFAULT
    });
    store.dispatch = jest.fn();

    const placeCard = mount(
        <Provider store={store}>
          <OffersList
            city={testOffers[0].city}
            handlePlaceCardHover={store.dispatch}
            handlePlaceCardNameClick={store.dispatch}
            handleSortTypeClick={store.dispatch}
            isCitiesClass={true}
            offers={testOffers[0].offers}
          />
        </Provider>
    );

    placeCard.find(`.place-card__name a`).first().simulate(`click`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
