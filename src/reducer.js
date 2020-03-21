import {extend} from './utils.js';
import allOffers from './mocks/offers.js';
import {SortingType} from './const.js';

const initialState = {
  city: allOffers[0].city,
  currentOffer: null,
  offerOnHover: null,
  offers: allOffers[0].offers,
  sortType: SortingType.DEFAULT,
};

const ActionType = {
  CHANGE_CARD_ON_HOVER: `CHANGE_CARD_ON_HOVER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  OPEN_DETAILED_OFFER: `OPEN_DETAILED_OFFER`,
  SORT_OFFERS: `SORT_OFFERS`,
};

const ActionCreator = {
  changeCardOnHover: (offerOnHover) => ({
    type: ActionType.CHANGE_CARD_ON_HOVER,
    payload: offerOnHover
  }),
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity
  }),
  getOffers: (newCity) => {
    const cityOffers = allOffers.filter((it) => it.city.name === newCity.name);
    return ({
      type: ActionType.GET_OFFERS,
      payload: cityOffers[0].offers
    });
  },
  openDetailedOffer: (offer) => ({
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: offer
  }),
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CARD_ON_HOVER:
      return extend(state, {
        offerOnHover: action.payload,
      });

    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.OPEN_DETAILED_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });

    case ActionType.SORT_OFFERS:
      return extend(state, {
        sortType: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
