import {SortingType} from './const.js';
import allOffers from './mocks/offers.js';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getCitiesList = (offers) => {
  let array = [];
  offers.map((it) => {
    array.push(it.city);
  });
  return array;
};

const citiesList = getCitiesList(allOffers).slice(0, 6);

const getFiveStarRating = (ratingInPercent) => {
  return (ratingInPercent * 0.05);
};

const getRatingInPercent = (ratingFiveStar) => {
  return (ratingFiveStar * 100 / 5);
};

const sortOffers = (sortType, sortedOffers, offers) => {
  switch (sortType) {
    case SortingType.PRICE_LOW_TO_HIGH:
      return sortedOffers.sort((a, b) => {
        return a.price - b.price;
      });

    case SortingType.PRICE_HIGH_TO_LOW:
      return sortedOffers.sort((a, b) => {
        return b.price - a.price;
      });

    case SortingType.TOP_RATED:
      return sortedOffers.sort((a, b) => {
        return b.rating - a.rating;
      });

    default:
      return offers;
  }
};

export {extend, citiesList, getFiveStarRating, getRatingInPercent, sortOffers};
