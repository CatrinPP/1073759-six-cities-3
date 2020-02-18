import PropTypes from 'prop-types';

const PlaceType = {
  APARTMENT: `Apartment`,
  BUNGALOW: `Bungalow`,
  HOUSE: `House`,
  ROOM: `Room`,
  STUDIO: `Studio`,
  VILLA: `Villa`
};

const features = [
  `Wifi`,
  `Heating`,
  `Kitchen`,
  `Cable TV`,
  `Fridge`,
  `Washing machine`,
  `Coffee machine`,
  `Dishwasher`,
  `Towels`,
  `Baby seat`
];

const offerShape = {
  bedrooms: PropTypes.number,
  description: PropTypes.string,
  features: PropTypes.oneOf(features),
  guests: PropTypes.number,
  host: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isStar: PropTypes.bool,
  }),
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([PlaceType.APARTMENT, PlaceType.BUNGALOW, PlaceType.HOUSE, PlaceType.ROOM, PlaceType.STUDIO, PlaceType.VILLA]).isRequired,
};

export {offerShape};
