const getFiveStarRating = (ratingInPercent) => {
  return (ratingInPercent * 0.05);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getFiveStarRating, extend};
