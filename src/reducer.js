import {extend} from './utils.js';
import allOffers from './mocks/offers.js';

const initialState = {
  allOffers,
  city: allOffers[0].city,
  offers: allOffers[0].offers,
  currentOffer: null,
  offerOnHover: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_CARD_ON_HOVER: `CHANGE_CARD_ON_HOVER`,
  OPEN_DETAILED_OFFER: `OPEN_DETAILED_OFFER`
};

const ActionCreator = {
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
  changeCardOnHover: (offerOnHover) => ({
    type: ActionType.CHANGE_CARD_ON_HOVER,
    payload: offerOnHover
  }),
  openDetailedOffer: (offer) => ({
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: offer
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.CHANGE_CARD_ON_HOVER:
      return extend(state, {
        offerOnHover: action.payload,
      });

    case ActionType.OPEN_DETAILED_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
