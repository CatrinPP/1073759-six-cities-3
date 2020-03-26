import PropTypes from 'prop-types';

const BASE_URL = `https://htmlacademy-react-3.appspot.com/six-cities`;
const MAX_COMMENTS_VALUE = 10;
const MAP_ICON_SIZE = 30;
const MAX_OFFERS_NEARBY = 3;
const MAP_SIZE_DETAILED_OFFER = `1144px`;
const TIMEOUT = 5000;
const ZOOM_VALUE = 13;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const Error = {
  SERVER_ERROR: 500,
  UNAUTHORIZED: 401
};

const PlaceType = {
  APARTMENT: `apartment`,
  HOTEL: `hotel`,
  HOUSE: `house`,
  ROOM: `room`,
};

const SortingType = {
  DEFAULT: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const sortTypes = [SortingType.DEFAULT, SortingType.PRICE_LOW_TO_HIGH, SortingType.PRICE_HIGH_TO_LOW, SortingType.TOP_RATED];

const Feature = {
  AIR_CONDITIONING: `Air conditioning`,
  BABY_SEAT: `Baby seat`,
  BREAKFAST: `Breakfast`,
  CABLE_TV: `Cable TV`,
  COFFEE_MACHINE: `Coffee machine`,
  DISHWASHER: `Dishwasher`,
  FRIDGE: `Fridge`,
  LAPTOP_FRIENDLY_WORKSPACE: `Laptop friendly workspace`,
  TOWELS: `Towels`,
  WASHER: `Washer`,
  WASHING_MACHINE: `Washing machine`,
};

const cityShape = {
  name: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number.isRequired),
};

const offerShape = {
  bedrooms: PropTypes.number,
  coords: PropTypes.arrayOf(PropTypes.number.isRequired),
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.oneOf([Feature.AIR_CONDITIONING, Feature.BABY_SEAT, Feature.BREAKFAST, Feature.CABLE_TV, Feature.COFFEE_MACHINE, Feature.DISHWASHER, Feature.FRIDGE, Feature.LAPTOP_FRIENDLY_WORKSPACE, Feature.TOWELS, Feature.WASHER, Feature.WASHING_MACHINE])),
  guests: PropTypes.number,
  host: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isStar: PropTypes.bool,
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([PlaceType.APARTMENT, PlaceType.HOTEL, PlaceType.HOUSE, PlaceType.ROOM]).isRequired,
};

const userShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const commentShape = {
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired
};

const cities = [
  {name: `Paris`, coords: [48.85661, 2.351499]},
  {name: `Cologne`, coords: [50.938361, 6.959974]},
  {name: `Brussels`, coords: [50.846557, 4.351697]},
  {name: `Amsterdam`, coords: [52.37454, 4.897976]},
  {name: `Hamburg`, coords: [53.550341, 10.000654]},
  {name: `Dusseldorf`, coords: [51.225402, 6.776314]},
];

export {
  AuthorizationStatus,
  BASE_URL,
  cities,
  cityShape,
  commentShape,
  Error,
  MAX_COMMENTS_VALUE,
  MAP_ICON_SIZE,
  MAX_OFFERS_NEARBY,
  MAP_SIZE_DETAILED_OFFER,
  offerShape,
  SortingType,
  sortTypes,
  TIMEOUT,
  ZOOM_VALUE,
};
