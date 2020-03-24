import {extend, sortOffersByCity, transformOfferShape, transformCommentShape} from './utils.js';
import {cities, SortingType} from './const.js';
import axios from 'axios';

const initialState = {
  allOffers: [],
  city: cities[0],
  commentsList: [],
  currentOffer: null,
  offerOnHover: null,
  offers: [],
  offersNearby: [],
  sortType: SortingType.DEFAULT,
};

const ActionType = {
  CHANGE_CARD_ON_HOVER: `CHANGE_CARD_ON_HOVER`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFERS_NEARBY: `GET_OFFERS_NEARBY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
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
  getComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  }),
  getOffers: (newCity) => {
    return ({
      type: ActionType.GET_OFFERS,
      payload: newCity
    });
  },
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  getOffersNearby: (offers) => ({
    type: ActionType.GET_OFFERS_NEARBY,
    payload: offers
  }),
  openDetailedOffer: (offer) => ({
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: offer
  }),
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`hotels`)
    .then((response) => {
      return sortOffersByCity(response.data);
    })
    .then((offersSortedArray) => {
      dispatch(ActionCreator.loadOffers(offersSortedArray));
    });
  },

  openDetailedOffer: (offer) => (dispatch, getState, api) => {
    axios.all([api.get(`comments/${offer.id}`),
      api.get(`hotels/${offer.id}/nearby`)])
    .then(axios.spread((firstResponse, secondResponse) => {
      const transformedComments = firstResponse.data.map((it) => transformCommentShape(it));
      dispatch(ActionCreator.getComments(transformedComments));
      const transformedOffers = secondResponse.data.map((it) => transformOfferShape(it));
      dispatch(ActionCreator.getOffersNearby(transformedOffers));
      dispatch(ActionCreator.openDetailedOffer(offer));
    }));
  }
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

    case ActionType.GET_COMMENTS:
      return extend(state, {
        commentsList: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: state.allOffers.filter((it) => it.city.name === action.payload.name)[0].offers,
      });

    case ActionType.GET_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload,
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: action.payload,
        offers: action.payload[0].offers
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

export {reducer, ActionType, ActionCreator, Operation};
