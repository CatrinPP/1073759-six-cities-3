import PropTypes from 'prop-types';

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

const placeTypes = [
  `Apartment`,
  `Bungalow`,
  `House`,
  `Room`,
  `Studio`,
  `Villa`
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
  type: PropTypes.oneOf(placeTypes).isRequired,
};

export {offerShape};
