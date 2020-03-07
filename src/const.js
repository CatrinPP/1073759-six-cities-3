import PropTypes from 'prop-types';

const MAP_ICON_SIZE = 30;

const ZOOM_VALUE = 12;

const PlaceType = {
  APARTMENT: `Apartment`,
  BUNGALOW: `Bungalow`,
  HOUSE: `House`,
  ROOM: `Room`,
  STUDIO: `Studio`,
  VILLA: `Villa`
};

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

export {offerShape, offersListShape, cityShape, MAP_ICON_SIZE, ZOOM_VALUE};
