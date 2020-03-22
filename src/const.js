import PropTypes from 'prop-types';

const CITIES_LIST_COUNT = 6;
const MAX_COMMENTS_VALUE = 10;
const MAP_ICON_SIZE = 30;
const MAX_OFFERS_NEARBY = 3;
const MAP_SIZE_DETAILED_OFFER = `1144px`;
const ZOOM_VALUE = 12;

const PlaceType = {
  APARTMENT: `Apartment`,
  BUNGALOW: `Bungalow`,
  HOUSE: `House`,
  ROOM: `Room`,
  STUDIO: `Studio`,
  VILLA: `Villa`
};

const SortingType = {
  DEFAULT: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const sortTypes = [SortingType.DEFAULT, SortingType.PRICE_LOW_TO_HIGH, SortingType.PRICE_HIGH_TO_LOW, SortingType.TOP_RATED];

const Feature = {
  WI_FI: `Wifi`,
  HEATING: `Heating`,
  KITCHEN: `Kitchen`,
  CABLE_TV: `Cable TV`,
  FRIDGE: `Fridge`,
  WASHING_MACHINE: `Washing machine`,
  COFFEE_MACHINE: `Coffee machine`,
  DISHWASHER: `Dishwasher`,
  TOWELS: `Towels`,
  BABY_SEAT: `Baby seat`
};

const cityShape = {
  name: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number.isRequired),
};

const offerShape = {
  bedrooms: PropTypes.number,
  coords: PropTypes.arrayOf(PropTypes.number.isRequired),
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.oneOf([Feature.WI_FI, Feature.HEATING, Feature.KITCHEN, Feature.CABLE_TV, Feature.FRIDGE, Feature.WASHING_MACHINE, Feature.COFFEE_MACHINE, Feature.DISHWASHER, Feature.TOWELS, Feature.BABY_SEAT])),
  guests: PropTypes.number,
  host: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isStar: PropTypes.bool,
  }),
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([PlaceType.APARTMENT, PlaceType.BUNGALOW, PlaceType.HOUSE, PlaceType.ROOM, PlaceType.STUDIO, PlaceType.VILLA]).isRequired,
};

const offersListShape = {
  city: PropTypes.shape(cityShape).isRequired,
  coords: PropTypes.arrayOf(PropTypes.number.isRequired),
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)),
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

export {offerShape, offersListShape, cityShape, commentShape, CITIES_LIST_COUNT, MAP_ICON_SIZE, ZOOM_VALUE, MAP_SIZE_DETAILED_OFFER, MAX_OFFERS_NEARBY, MAX_COMMENTS_VALUE, SortingType, sortTypes};
