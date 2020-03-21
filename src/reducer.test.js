import {reducer, ActionType, ActionCreator} from './reducer.js';
import allOffers from './mocks/offers.js';
import {testOffers} from './mocks/tests.js';
import {SortingType} from './const.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: allOffers[0].city,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should change city name with given value`, () => {
  expect(reducer({
    city: testOffers[0].city,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Berlin`,
  })).toEqual({
    city: `Berlin`,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should return offers array by given value`, () => {
  expect(reducer({
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    currentOffer: null,
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.GET_OFFERS,
    payload: testOffers[1].offers,
  })).toEqual({
    offers: testOffers[1].offers,
    city: testOffers[0].city,
    currentOffer: null,
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should return new offer by given value`, () => {
  expect(reducer({
    offerOnHover: null,
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    currentOffer: null,
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.CHANGE_CARD_ON_HOVER,
    payload: testOffers[1],
  })).toEqual({
    offerOnHover: testOffers[1],
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    currentOffer: null,
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should return new offer object by given value`, () => {
  expect(reducer({
    currentOffer: null,
    offerOnHover: null,
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: testOffers[1],
  })).toEqual({
    currentOffer: testOffers[1],
    offerOnHover: null,
    offers: testOffers[0].offers,
    city: testOffers[0].city,
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should change sorting type with given value`, () => {
  expect(reducer({
    city: testOffers[0].city,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.SORT_OFFERS,
    payload: SortingType.PRICE_HIGH_TO_LOW,
  })).toEqual({
    city: testOffers[0].city,
    offers: allOffers[0].offers,
    currentOffer: null,
    offerOnHover: null,
    sortType: SortingType.PRICE_HIGH_TO_LOW,
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

  it(`Action creator for sorting offers on click returns correct action`, () => {
    expect(ActionCreator.sortOffers(SortingType.TOP_RATED)).toEqual({
      type: ActionType.SORT_OFFERS,
      payload: SortingType.TOP_RATED
    });
  });
});

