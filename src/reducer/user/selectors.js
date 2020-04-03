import NameSpace from '../name-space.js';
import {createSelector} from 'reselect';
import {cities} from '../../const.js';
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
      cities.map((city) => {
        const cityOffers = offers.filter((offer) => offer.city.name === city.name)
        .map((offer) => transformOfferShape(offer));

        if (cityOffers.length) {
          arr.push({city: city.name, offers: cityOffers});
        }
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
