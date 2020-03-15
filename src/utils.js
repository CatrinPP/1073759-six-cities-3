const getFiveStarRating = (ratingInPercent) => {
  return (ratingInPercent * 0.05);
};

const getRatingInPercent = (ratingFiveStar) => {
  return (ratingFiveStar * 100 / 5);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getFiveStarRating, getRatingInPercent, extend};
