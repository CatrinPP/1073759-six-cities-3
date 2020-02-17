import PropTypes from 'prop-types';

const placeTypes = [
  `Apartment`,
  `Bungalow`,
  `House`,
  `Room`,
  `Studio`,
  `Villa`
];

const offerShape = {
  image: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(placeTypes).isRequired
};

export {offerShape};
