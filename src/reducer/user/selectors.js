import NameSpace from '../name-space.js';
import {createSelector} from 'reselect';
import {transformOfferShape} from '../../utils.js';

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getFavorites = (state) => {
  return state[NameSpace.USER].favorites;
};

const getSortedFavorites = createSelector(
    getFavorites,
    (offers) => {
      const arr = [];
      const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));
      cities.map((it) => {
        arr.push({
          city: it,
          offers: offers.filter((offer) => offer.city.name === it).map((el) => transformOfferShape(el))
        });
      });
      return arr;
    }
);

const getIsSignInRequired = (state) => {
  return state[NameSpace.USER].isSignInRequired;
};

const getUserName = (state) => {
  return state[NameSpace.USER].userName;
};

export {getAuthorizationStatus, getSortedFavorites, getIsSignInRequired, getUserName};
