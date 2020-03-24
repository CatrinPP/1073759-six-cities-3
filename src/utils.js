import {SortingType} from './const.js';

const extend = (a, b) => {
  return Object.assign({}, a, b);
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

const transformCommentShape = (comment) => {
  return {
    date: comment.date,
    id: comment.id,
    rating: comment.rating,
    text: comment.comment,
    user: {
      avatar: comment.user.avatar_url,
      name: comment.user.name,
    }
  };
};

const transformOfferShape = (offer) => {
  return {
    bedrooms: offer.bedrooms,
    coords: [offer.location.latitude, offer.location.longitude],
    description: offer.description,
    features: offer.goods,
    guests: offer.max_adults,
    host: {
      avatar: offer.host.avatar_url,
      id: offer.host.id,
      isStar: offer.host.is_pro,
      name: offer.host.name,
    },
    id: offer.id,
    images: offer.images,
    isPremium: offer.is_premium,
    previewImage: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  };
};

export {extend, getRatingInPercent, sortOffers, transformCommentShape, transformOfferShape};
