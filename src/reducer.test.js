import {reducer, ActionType, ActionCreator} from './reducer.js';
import allOffers from './mocks/offers.js';
import {offers} from './mocks/tests.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    allOffers,
    city: allOffers[0].city,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
  });
});

it(`Reducer should change city name with given value`, () => {
  expect(reducer({
    allOffers,
    city: offers[0].city,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Berlin`,
  })).toEqual({
    allOffers,
    city: `Berlin`,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
  });
});

it(`Reducer should return offers array by given value`, () => {
  expect(reducer({
    allOffers,
    offers: offers[0].offers,
    city: offers[0].city,
    currentOffer: null,
    offerOnHover: null,
  }, {
    type: ActionType.GET_OFFERS,
    payload: offers[1].offers,
  })).toEqual({
    allOffers,
    offers: offers[1].offers,
    city: offers[0].city,
    currentOffer: null,
    offerOnHover: null,
  });
});

it(`Reducer should return new offer by given value`, () => {
  expect(reducer({
    allOffers,
    offerOnHover: null,
    offers: offers[0].offers,
    city: offers[0].city,
    currentOffer: null,
  }, {
    type: ActionType.CHANGE_CARD_ON_HOVER,
    payload: offers[1],
  })).toEqual({
    allOffers,
    offerOnHover: offers[1],
    offers: offers[0].offers,
    city: offers[0].city,
    currentOffer: null,
  });
});

it(`Reducer should return new offer object by given value`, () => {
  expect(reducer({
    allOffers,
    currentOffer: null,
    offerOnHover: null,
    offers: offers[0].offers,
    city: offers[0].city,
  }, {
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: offers[1],
  })).toEqual({
    allOffers,
    currentOffer: offers[1],
    offerOnHover: null,
    offers: offers[0].offers,
    city: offers[0].city,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for city change returns correct action`, () => {
    expect(ActionCreator.changeCity(offers[0].city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: offers[0].city
    });
  });

  it(`Action creator for getting offers list returns correct action`, () => {
    expect(ActionCreator.getOffers(allOffers[0].city)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: allOffers[0].offers
    });
  });

  it(`Action creator for changing offer on card hover returns correct action`, () => {
    expect(ActionCreator.changeCardOnHover(offers[0].offers[0])).toEqual({
      type: ActionType.CHANGE_CARD_ON_HOVER,
      payload: offers[0].offers[0]
    });
  });

  it(`Action creator for getting offer on click returns correct action`, () => {
    expect(ActionCreator.openDetailedOffer(offers[1].offers[1])).toEqual({
      type: ActionType.OPEN_DETAILED_OFFER,
      payload: offers[1].offers[1]
    });
  });
});

