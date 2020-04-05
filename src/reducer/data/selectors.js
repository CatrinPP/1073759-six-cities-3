import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {transformOfferShape} from '../../utils.js';

const getAllOffers = (state) => {
  return state[NameSpace.DATA].allOffers;
};

const getCommentsList = (state) => {
  return state[NameSpace.DATA].commentsList;
};

const getCurrentId = (state) => {
  return state[NameSpace.DATA].currentId;
};

const getCurrentCity = (state) => {
  return state[NameSpace.APP].city;
};

const getLoadedState = (state) => {
  return state[NameSpace.DATA].isLoaded;
};

const getOffers = createSelector(
    getAllOffers,
    getCurrentCity,
    (allOffers, city) => {
      const cityOffers = allOffers.filter((item) => item.city.name === city.name);
      return cityOffers.map((item) => transformOfferShape(item));
    }
);

const getAllOffersTransformed = createSelector(
    getAllOffers,
    (allOffers) => {
      return allOffers.map((item) => transformOfferShape(item));
    }
);

const getOffersNearby = (state) => {
  return state[NameSpace.DATA].offersNearby;
};

export {getAllOffers, getAllOffersTransformed, getCommentsList, getCurrentId, getLoadedState, getOffers, getOffersNearby};
