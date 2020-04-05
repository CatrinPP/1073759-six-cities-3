import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import OffersList from './offers-list';
import {testOffers} from '../../test-mocks.js';
import {SortingType, PlaceCardType} from '../../const';
import NameSpace from '../../reducer/name-space.js';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Events`, () => {
  it(`Get function on card hover`, () => {
    const store = mockStore({
      [NameSpace.APP]: {
        sortType: SortingType.DEFAULT,
      },
    });
    store.dispatch = jest.fn();

    const offersList = mount(
        <BrowserRouter>
          <Provider store={store}>
            <OffersList
              city={testOffers[0].city}
              handleBookmarkButtonClick={store.dispatch}
              handlePlaceCardHover={store.dispatch}
              handleSortTypeClick={store.dispatch}
              isCitiesClass={true}
              offers={testOffers[0].offers}
              placeCardType={PlaceCardType.CITIES}
            />
          </Provider>
        </BrowserRouter>
    );

    offersList.find(`.place-card`).first().simulate(`mouseEnter`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it(`Get function on card blur`, () => {
    const store = mockStore({
      [NameSpace.APP]: {
        sortType: SortingType.DEFAULT,
      },
    });
    store.dispatch = jest.fn();

    const offersList = mount(
        <BrowserRouter>
          <Provider store={store}>
            <OffersList
              city={testOffers[0].city}
              handleBookmarkButtonClick={store.dispatch}
              handlePlaceCardHover={store.dispatch}
              handleSortTypeClick={store.dispatch}
              isCitiesClass={true}
              offers={testOffers[0].offers}
              placeCardType={PlaceCardType.CITIES}
            />
          </Provider>
        </BrowserRouter>
    );

    offersList.find(`.place-card`).first().simulate(`mouseLeave`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it(`Get function on bookmark click`, () => {
    const store = mockStore({
      [NameSpace.APP]: {
        sortType: SortingType.DEFAULT,
      },
    });
    store.dispatch = jest.fn();

    const offersList = mount(
        <BrowserRouter>
          <Provider store={store}>
            <OffersList
              city={testOffers[0].city}
              handleBookmarkButtonClick={store.dispatch}
              handlePlaceCardHover={store.dispatch}
              handlePlaceCardNameClick={store.dispatch}
              handleSortTypeClick={store.dispatch}
              isCitiesClass={true}
              offers={testOffers[0].offers}
              placeCardType={PlaceCardType.CITIES}
            />
          </Provider>
        </BrowserRouter>
    );

    offersList.find(`.place-card__bookmark-button`).first().simulate(`click`);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
