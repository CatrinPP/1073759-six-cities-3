import {reducer, ActionType, ActionCreator} from './app';
import {testOffers} from '../../test-mocks.js';
import {cities, SortingType} from '../../const.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: cities[0],
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should change city name with given value`, () => {
  expect(reducer({
    city: cities[0],
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Berlin`,
  })).toEqual({
    city: `Berlin`,
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should return new offer by given value`, () => {
  expect(reducer({
    offerOnHover: null,
    city: cities[0],
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.CHANGE_CARD_ON_HOVER,
    payload: testOffers[1],
  })).toEqual({
    offerOnHover: testOffers[1],
    city: cities[0],
    sortType: SortingType.DEFAULT,
  });
});

it(`Reducer should change sorting type with given value`, () => {
  expect(reducer({
    city: cities[0],
    offerOnHover: null,
    sortType: SortingType.DEFAULT,
  }, {
    type: ActionType.SORT_OFFERS,
    payload: SortingType.PRICE_HIGH_TO_LOW,
  })).toEqual({
    city: cities[0],
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

  it(`Action creator for changing offer on card hover returns correct action`, () => {
    expect(ActionCreator.changeCardOnHover(testOffers[0].offers[0])).toEqual({
      type: ActionType.CHANGE_CARD_ON_HOVER,
      payload: testOffers[0].offers[0]
    });
  });

  it(`Action creator for sorting offers on click returns correct action`, () => {
    expect(ActionCreator.sortOffers(SortingType.TOP_RATED)).toEqual({
      type: ActionType.SORT_OFFERS,
      payload: SortingType.TOP_RATED
    });
  });
});

