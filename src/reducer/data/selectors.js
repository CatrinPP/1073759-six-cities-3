import NameSpace from '../name-space.js';

const getCommentsList = (state) => {
  return state[NameSpace.DATA].commentsList;
};

const getCurrentOffer = (state) => {
  return state[NameSpace.DATA].currentOffer;
};

const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

const getOffersNearby = (state) => {
  return state[NameSpace.DATA].offersNearby;
};

export {getCommentsList, getCurrentOffer, getOffers, getOffersNearby};
