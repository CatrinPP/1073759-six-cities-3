import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {transformOfferShape} from '../../utils.js';

const getAllOffers = (state) => {
  return state[NameSpace.DATA].allOffers;
};

const getCommentsList = (state) => {
  return state[NameSpace.DATA].commentsList;
};

const getCurrentOffer = (state) => {
  return state[NameSpace.DATA].currentOffer;
};

const getCurrentCity = (state) => {
  return state[NameSpace.APP].city;
};

const getOffers = createSelector(
    getAllOffers,
    getCurrentCity,
    (allOffers, city) => {
      const cityOffers = allOffers.filter((it) => it.city.name === city.name);
      return cityOffers.map((it) => transformOfferShape(it));
    }
);

const getOffersNearby = (state) => {
  return state[NameSpace.DATA].offersNearby;
};

export {getCommentsList, getCurrentOffer, getOffers, getOffersNearby};
