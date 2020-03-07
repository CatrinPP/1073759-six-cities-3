import {reducer, ActionType, ActionCreator} from './reducer.js';
import allOffers from './mocks/offers.js';
import {testOffers} from './mocks/tests.js';

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
    city: testOffers[0].city,
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
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    currentOffer: null,
    offerOnHover: null,
  }, {
    type: ActionType.GET_OFFERS,
    payload: testOffers[1].offers,
  })).toEqual({
    allOffers,
    offers: testOffers[1].offers,
    city: testOffers[0].city,
    currentOffer: null,
    offerOnHover: null,
  });
});

it(`Reducer should return new offer by given value`, () => {
  expect(reducer({
    allOffers,
    offerOnHover: null,
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    currentOffer: null,
  }, {
    type: ActionType.CHANGE_CARD_ON_HOVER,
    payload: testOffers[1],
  })).toEqual({
    allOffers,
    offerOnHover: testOffers[1],
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    currentOffer: null,
  });
});

it(`Reducer should return new offer object by given value`, () => {
  expect(reducer({
    allOffers,
    currentOffer: null,
    offerOnHover: null,
    offers: testOffers[0].offers,
    city: testOffers[0].city,
  }, {
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: testOffers[1],
  })).toEqual({
    allOffers,
    currentOffer: testOffers[1],
    offerOnHover: null,
    offers: testOffers[0].offers,
    city: testOffers[0].city,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for city change returns correct action`, () => {
    expect(ActionCreator.changeCity(testOffers[0].city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: testOffers[0].city
    });
  });

  it(`Action creator for getting offers list returns correct action`, () => {
    expect(ActionCreator.getOffers(allOffers[0].city)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: allOffers[0].offers
    });
  });

  it(`Action creator for changing offer on card hover returns correct action`, () => {
    expect(ActionCreator.changeCardOnHover(testOffers[0].offers[0])).toEqual({
      type: ActionType.CHANGE_CARD_ON_HOVER,
      payload: testOffers[0].offers[0]
    });
  });

  it(`Action creator for getting offer on click returns correct action`, () => {
    expect(ActionCreator.openDetailedOffer(testOffers[1].offers[1])).toEqual({
      type: ActionType.OPEN_DETAILED_OFFER,
      payload: testOffers[1].offers[1]
    });
  });
});

