import NameSpace from '../name-space.js';

const getCity = (state) => {
  return state[NameSpace.APP].city;
};

const getOfferOnHover = (state) => {
  return state[NameSpace.APP].offerOnHover;
};

const getSortType = (state) => {
  return state[NameSpace.APP].sortType;
};

export {getCity, getOfferOnHover, getSortType};
