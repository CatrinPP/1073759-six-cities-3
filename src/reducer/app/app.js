import {extend} from '../../utils.js';
import {cities, SortingType} from '../../const.js';

const initialState = {
  city: cities[0],
  offerOnHover: null,
  serverError: false,
  sortType: SortingType.DEFAULT,
};

const ActionType = {
  CHANGE_CARD_ON_HOVER: `CHANGE_CARD_ON_HOVER`,
  CHANGE_CITY: `CHANGE_CITY`,
  SHOW_ERROR: `SHOW_ERROR`,
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
  showError: () => ({
    type: ActionType.SHOW_ERROR
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

    case ActionType.SHOW_ERROR:
      return extend(state, {
        serverError: true,
      });

    case ActionType.SORT_OFFERS:
      return extend(state, {
        sortType: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
